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
    
    // console.log('Available tokens from dictionary:', Object.keys(tokens));
    // console.log('Typography tokens:', tokens.typography ? Object.keys(tokens.typography) : 'No typography tokens');
    
    // Lees settings en los verwijzingen op
    const settings = readJsonSafe(path.resolve(__dirname, 'src/wordpress/settings.json'), {});
    themeJson.settings = resolveReferences(settings.settings || {}, tokens);

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