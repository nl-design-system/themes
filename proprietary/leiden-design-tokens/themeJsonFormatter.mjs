import fs from 'fs';
import path from 'path';

const themeRootCandidates = [
  process.cwd(),
  path.resolve(process.cwd(), 'proprietary/leiden-design-tokens'),
  path.resolve(process.cwd(), 'themes/proprietary/leiden-design-tokens'),
];

const themeRoot =
  themeRootCandidates.find((candidate) => fs.existsSync(path.join(candidate, 'src', 'config.json'))) ||
  path.resolve(process.cwd(), 'proprietary/leiden-design-tokens');

function getObjectAtPath(source, pathParts) {
  let current = source;

  for (const part of pathParts) {
    if (!current || typeof current !== 'object' || !(part in current)) {
      return undefined;
    }
    current = current[part];
  }

  return current;
}

function findFontSizeTokens(tokens) {
  const candidates = [
    ['common', 'basis', 'text', 'font-size'],
    ['basis', 'text', 'font-size'],
  ];

  for (const candidatePath of candidates) {
    const candidate = getObjectAtPath(tokens, candidatePath);
    if (candidate && typeof candidate === 'object' && Object.keys(candidate).length > 0) {
      return candidate;
    }
  }

  return undefined;
}

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

/**
 * Laad alle JSON bestanden uit een directory en merge ze in één object
 * @param {string} dirPath - Path naar de directory
 * @param {Object} fallback - Fallback waarde als directory niet bestaat
 * @returns {Object} Gemerged object met alle JSON bestanden
 */
function loadJsonDirectory(dirPath, fallback = {}) {
  try {
    const files = fs.readdirSync(dirPath);
    const jsonFiles = files.filter((file) => file.endsWith('.json')).sort();

    if (jsonFiles.length === 0) {
      return fallback;
    }

    const merged = jsonFiles.reduce((acc, file) => {
      const filePath = path.join(dirPath, file);
      const content = readJsonSafe(filePath, {});

      // Deep merge voor nested properties
      return deepMerge(acc, content);
    }, {});

    console.log(`✓ Loaded ${jsonFiles.length} JSON file(s) from ${path.basename(dirPath)}/`);
    console.log(`  Files: ${jsonFiles.join(', ')}`);
    return merged;
  } catch (e) {
    if (e.code !== 'ENOENT') {
      throw e;
    }
    return fallback;
  }
}

/**
 * Deep merge van twee objecten
 * @param {Object} target - Target object
 * @param {Object} source - Source object
 * @returns {Object} Gemerged object
 */
function deepMerge(target, source) {
  const result = { ...target };

  for (const key in source) {
    if (
      source[key] instanceof Object &&
      !Array.isArray(source[key]) &&
      key in target &&
      target[key] instanceof Object &&
      !Array.isArray(target[key])
    ) {
      result[key] = deepMerge(target[key], source[key]);
    } else {
      result[key] = source[key];
    }
  }

  return result;
}

// Recursieve functie om {token.path} te vervangen door de waarde uit tokens (ook voor dieper geneste tokens)
function resolveReferences(obj, tokens) {
  if (Array.isArray(obj)) {
    // Belangrijk: als het een array van strings is, vervang elke string
    return obj.map((item) => resolveReferences(item, tokens));
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
      // Als de gevonden waarde een object is met $value, extract die
      if (typeof val === 'object' && val !== null && '$value' in val) {
        return String(val.$value);
      }
      // Als de gevonden waarde zelf géén string is (bijv. een object of array), converteer naar string
      return typeof val === 'string' ? val : JSON.stringify(val);
    });
  }
  return obj;
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
        const name = colorPath.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');

        palette.push({
          color: value.$value,
          name: name,
          slug: slug,
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
  const tokens = dictionary.tokens || {};
  const config = readJsonSafe(path.resolve(themeRoot, 'src/config.json'), {});
  const prefix = config.prefix || 'leiden';
  const wpDir = path.resolve(themeRoot, 'src/wordpress');

  console.log('\n=== Building WordPress theme.json ===');
  console.log('Token structure keys:', Object.keys(tokens).slice(0, 10));
  console.log('Using prefix:', prefix);
  console.log('WordPress source directory:', wpDir);
  console.log('---');

  // 1. Laad base configuratie (schema, version, templates)
  const base = readJsonSafe(path.join(wpDir, 'base.json'), {
    $schema: 'https://schemas.wp.org/trunk/theme.json',
    version: 3,
  });
  console.log('✓ Loaded base configuration');

  // 2. Laad en merge alle settings
  const settingsDir = path.join(wpDir, 'settings');
  let settings = loadJsonDirectory(settingsDir);
  settings = resolveReferences(settings, tokens);
  console.log('✓ Loaded and resolved settings');

  // 3. Genereer dynamisch color palette vanuit tokens
  const colorPalette = generateColorPalette(tokens, prefix);
  if (colorPalette.length > 0) {
    settings.color = settings.color || {};
    // Dynamische kleuren eerst, dan eventuele handmatige entries
    settings.color.palette = [...colorPalette, ...(settings.color.palette || [])];
    console.log(`✓ Added ${colorPalette.length} colors to palette`);
  }

  // Genereer ook alle font-sizes uit de basis tokens (optioneel, afhankelijk van of je die in je theme.json wilt hebben)
  const fontSizeTokens = findFontSizeTokens(tokens);
  if (!fontSizeTokens) {
    console.log('No font sizes found in tokens, skipping typography.fontSizes generation');
  } else {
    const fontSizes = Object.entries(fontSizeTokens).map(([key, value]) => ({
      name: key.charAt(0).toUpperCase() + key.slice(1),
      slug: key,
      size: value.$value,
    }));
    settings.typography = settings.typography || {};
    settings.typography.fontSizes = fontSizes;
    console.log(`✓ Added ${fontSizes.length} font sizes to typography settings`);
  }

  // TODO: Genereer fontFamilies op basis van prefix tokens als die er zijn, vergelijkbaar met color palette

  // 4. Laad root styles
  const stylesDir = path.join(wpDir, 'styles');
  const rootStyles = loadJsonDirectory(stylesDir);
  console.log('✓ Loaded root styles', stylesDir);

  // 5. Laad element styles
  const elementsDir = path.join(stylesDir, 'elements');
  const elements = loadJsonDirectory(elementsDir);
  console.log('✓ Loaded element styles');

  // 6. Laad block styles
  const blocksDir = path.join(stylesDir, 'blocks');
  const blocks = loadJsonDirectory(blocksDir);
  console.log('✓ Loaded block styles');

  // 7. Merge en resolve alle styles
  const styles = resolveReferences(
    {
      ...rootStyles,
      elements,
      blocks,
    },
    tokens,
  );
  console.log('✓ Resolved all style references');

  console.log('=== Build complete ===\n');

  // Retourneer het complete theme.json object
  return JSON.stringify(
    {
      ...base,
      settings,
      styles,
    },
    null,
    2,
  );
}
