import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function readJsonSafe(filePath, fallback = {}) {
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (e) {
        if (e.code === 'ENOENT') {
            return fallback;
        }
        throw e;
    }
}

// Recursieve functie om {token.path} te vervangen door de waarde uit tokens (ook voor dieper geneste tokens)
function resolveReferences(obj, tokens) {
    if (Array.isArray(obj)) {
        // Belangrijk: als het een array van strings is, vervang elke string
        return obj.map(item => resolveReferences(item, tokens));
    }
    if (typeof obj === 'object' && obj !== null) {
        // Controleer of het een object is, niet een array
        const resolved = {};
        for (const [key, value] of Object.entries(obj)) {
            resolved[key] = resolveReferences(value, tokens);
        }
        return resolved;
    }
    if (typeof obj === 'string') {
        // Gebruik een meer specifieke regex die alleen geldige token references matcht
        // Een token reference heeft de vorm: {token.path} waarbij token.path punten bevat en optioneel eindigt met .value of .$value
        return obj.replace(/\{([a-zA-Z][a-zA-Z0-9_-]*(?:\.[a-zA-Z0-9_-]+)+(?:\.(?:\$?value))?)\}/g, (match, pathStr) => {
            const pathParts = pathStr.split('.');
            let val = tokens;
            
            for (const part of pathParts) {
                if (val && typeof val === 'object' && part in val) {
                    val = val[part];
                } else {
                    console.log(`Token not found: ${pathStr} at part: ${part}`);
                    console.log('Available at this level:', val ? Object.keys(val) : 'null/undefined');
                    return match; // Onbekende verwijzing, laat staan
                }
            }
            
            // Als de gevonden waarde zelf géén string is (bijv. een object of array), converteer naar string
            return typeof val === 'string' ? val : JSON.stringify(val);
        });
    }
    return obj;
}

// Functie om alle element bestanden in te lezen uit styles/elements/
function loadElementStyles(baseDir) {
    const elementsDir = path.resolve(baseDir, 'src/wordpress/styles/elements');
    const elements = {};
    
    try {
        const files = fs.readdirSync(elementsDir);
        for (const file of files) {
            if (file.endsWith('.json')) {
                const elementName = path.basename(file, '.json');
                const filePath = path.join(elementsDir, file);
                const elementStyle = readJsonSafe(filePath, {});
                
                // Alleen toevoegen als het element daadwerkelijk inhoud heeft
                if (Object.keys(elementStyle).length > 0) {
                    elements[elementName] = elementStyle;
                }
            }
        }
    } catch (e) {
        // Als de directory niet bestaat, gewoon een leeg object teruggeven
        if (e.code !== 'ENOENT') {
            throw e;
        }
    }
    
    return elements;
}

// Functie om alle block bestanden in te lezen uit styles/blocks/
function loadBlockStyles(baseDir) {
    const blocksDir = path.resolve(baseDir, 'src/wordpress/styles/blocks');
    const blocks = {};
    
    try {
        const files = fs.readdirSync(blocksDir);
        for (const file of files) {
            if (file.endsWith('.json')) {
                const filePath = path.join(blocksDir, file);
                const blockStyles = readJsonSafe(filePath, {});
                
                // Voeg alle block definities uit het bestand toe
                Object.assign(blocks, blockStyles);
            }
        }
    } catch (e) {
        // Als de directory niet bestaat, gewoon een leeg object teruggeven
        if (e.code !== 'ENOENT') {
            throw e;
        }
    }
    
    return blocks;
}

// Functie om door color tokens te lopen en deze om te zetten naar WordPress color palette formaat
/**
 * Genereert een WordPress color palette vanuit design tokens
 * @param {Object} tokens - Het volledige tokens object
 * @param {string} prefix - De prefix van het thema (bijv. 'leiden')
 * @returns {Array} Array met color palette items in WordPress formaat
 */
function generateColorPalette(tokens, prefix) {
    const palette = [];
    
    // Zoek naar color tokens in de token structuur
    if (!tokens[prefix] || !tokens[prefix].colors) {
        console.log(`No colors found for prefix: ${prefix}`);
        return palette;
    }
    
    const colors = tokens[prefix].colors;
    
    // Recursieve functie om door geneste color objecten te lopen
    function traverseColors(obj, path = []) {
        for (const [key, value] of Object.entries(obj)) {
            // Check of dit een color token is (heeft een $value en $type)
            if (value && typeof value === 'object' && value.$value && value.$type === 'color') {
                // Maak een naam voor de kleur
                const colorPath = [...path, key];
                const slug = colorPath.join('-');
                const name = colorPath.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
                
                palette.push({
                    color: value.$value,
                    name: name,
                    slug: slug
                });
            } else if (value && typeof value === 'object' && !value.$value) {
                // Dit is een geneste groep, ga verder
                traverseColors(value, [...path, key]);
            }
        }
    }
    
    traverseColors(colors);
    
    console.log(`Generated ${palette.length} colors for WordPress color palette`);
    
    return palette;
}

export default function themeJsonFormatter({ dictionary }) {
    const themeJson = {
        $schema: "https://schemas.wp.org/trunk/theme.json",
        version: 3,
        settings: {},
        styles: {},
        customTemplates: [],
        templateParts: []
    };

    // Gebruik dictionary.tokens in plaats van tokens.json bestand (dat mogelijk nog niet bestaat)
    const tokens = dictionary.tokens || {};
    
    // Lees de config om de prefix te krijgen
    const config = readJsonSafe(path.resolve(__dirname, 'src/config.json'), {});
    const prefix = config.prefix || 'leiden';
    
    // console.log('Available tokens from dictionary:', Object.keys(tokens));
    // console.log('Typography tokens:', tokens.typography ? Object.keys(tokens.typography) : 'No typography tokens');
    
    // Lees settings en los verwijzingen op
    const settings = readJsonSafe(path.resolve(__dirname, 'src/wordpress/settings.json'), {});
    let resolvedSettings = resolveReferences(settings.settings || {}, tokens);
    
    // Genereer dynamisch de color palette vanuit de tokens
    // Dit doorloopt alle color tokens en voegt ze automatisch toe aan de WordPress color palette
    const colorPalette = generateColorPalette(tokens, prefix);
    if (colorPalette.length > 0) {
        // Voeg de dynamisch gegenereerde kleuren toe aan de settings
        if (!resolvedSettings.color) {
            resolvedSettings.color = {};
        }
        
        // Combineer dynamisch gegenereerde kleuren met eventuele handmatige palette entries
        // Dynamisch gegenereerde kleuren komen eerst, handmatige entries kunnen deze overschrijven
        const manualPalette = resolvedSettings.color.palette || [];
        resolvedSettings.color.palette = [...colorPalette, ...manualPalette];
    }
    
    themeJson.settings = resolvedSettings;

    // Lees styles en los verwijzingen op
    const styles = readJsonSafe(path.resolve(__dirname, 'src/wordpress/styles.json'), {});
    let resolvedStyles = resolveReferences(styles.styles || {}, tokens);
    
    // Laad element styles uit losse bestanden
    const elements = loadElementStyles(__dirname);
    const resolvedElements = resolveReferences(elements, tokens);
    
    // Voeg element styles toe aan de bestaande styles.elements
    if (Object.keys(resolvedElements).length > 0) {
        resolvedStyles.elements = {
            ...resolvedStyles.elements,
            ...resolvedElements
        };
    }
    
    // Laad block styles uit losse bestanden
    const blocks = loadBlockStyles(__dirname);
    const resolvedBlocks = resolveReferences(blocks, tokens);
    
    // Voeg block styles toe aan de bestaande styles.blocks
    if (Object.keys(resolvedBlocks).length > 0) {
        resolvedStyles.blocks = {
            ...resolvedStyles.blocks,
            ...resolvedBlocks
        };
    }
    
    themeJson.styles = resolvedStyles;

    // templateParts (optioneel)
    const templateParts = readJsonSafe(path.resolve(__dirname, 'src/wordpress/templateParts.json'), {});
    themeJson.templateParts = resolveReferences(templateParts.templateParts || [], tokens);

    return JSON.stringify(themeJson, null, 2);
};