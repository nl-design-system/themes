const StyleDictionary = require('style-dictionary');

const HEX_REGEXP = /^#?((.{6,8})|(.)(.)(.))$/;

const parseHexRGBA = (str) => {
  // Convert to RRGGBBAA format from
  // 000
  // 000000
  // 00000000
  // #000
  // #000000
  // #00000000
  const normalized = str.replace(HEX_REGEXP, '$2$3$3$4$4$5$5').replace(/^(.{6})$/, '$100');

  const hex = parseInt(normalized, 16);

  return {
    r: (hex >> 24) & 255,
    g: (hex >> 16) & 255,
    b: (hex >> 8) & 255,
    a: hex & 255,
  };
};

const isHexRGBA = (value) => /^#[0-9a-fA-F]{8}$/.test(value);

const _normalizeHexRGBA = (str) => {
  const { r, g, b, a } = parseHexRGBA(str);
  return `rgba(${r}, ${g}, ${b}, ${(a / 255).toPrecision(3)})`;
};

const normalizeHexRGBA = (str) => (isHexRGBA(str) ? _normalizeHexRGBA(str) : str);

StyleDictionary.registerTransform({
  type: 'value',
  transitive: true,
  name: 'css-color',
  matcher: (token) => {
    return token.type === 'color' && isHexRGBA(token.value);
  },
  transformer: (token) => {
    return normalizeHexRGBA(token.value);
  },
});

StyleDictionary.registerTransform({
  type: 'value',
  transitive: true,
  name: 'css-box-shadow',
  matcher: (token) => {
    return token.type === 'boxShadow';
  },
  transformer: (token) => {
    console.log(token);
    const { x, y, blur, spread, color, type } = token.value;
    return `${x}px ${y}px ${blur}px ${spread}px ${normalizeHexRGBA(color)}`;
  },
});

StyleDictionary.registerTransform({
  type: 'value',
  transitive: true,
  name: 'css-font',
  matcher: (token) => {
    if (token.type === 'typography' && token.value.fontFamily) {
      token.original['font-family'] = token.value.fontFamily;
      token.original['font-weight'] = token.value.fontWeight;
      token.original['line-height'] = token.value.lineHeight;
      token.original['letter-spacing'] = token.value.letterSpacing;
      token.original['text-transform'] = token.value.textCase;
    }
    return token.type === 'typography';
  },
  transformer: (token) => {
    const tokens = [];
    if (token.value.fontFamily) {
      token.original['font-family'] = token.value.fontFamily;
      tokens.push({
        path: [...token.path, 'font-family'],
        value: token.value.fontFamily,
      });
    }
    if (token.value.fontWeight) {
      tokens.push({
        path: [...token.path, 'font-weight'],
        value: token.value.fontWeight,
      });
    }
    if (token.value.lineHeight) {
      tokens.push({
        path: [...token.path, 'line-height'],
        value: token.value.lineHeight,
      });
    }
    if (token.value.letterSpacing) {
      tokens.push({
        path: [...token.path, 'letter-spacing'],
        value: token.value.letterSpacing,
      });
    }
    if (token.value.textCase) {
      tokens.push({
        path: [...token.path, 'text-transform'],
        value: token.value.textCase,
      });
    }
    // Convert to CSS `font` shorthand
    return `${token.value.fontWeight} ${token.value.fontSize}/${token.value.lineHeight}`;
  },
});

const stringSort = (a, b) => (a === b ? 0 : a > b ? 1 : -1);

const sortByName = (a, b) => stringSort(a.name, b.name);

const createConfig = ({ selector, source = ['src/**/*.tokens.json'] }) => ({
  format: {
    'json/list': function ({ dictionary }) {
      return JSON.stringify(dictionary.allTokens.sort(sortByName), null, '  ');
    },
  },
  source,
  platforms: {
    js: {
      transforms: ['attribute/cti', 'name/cti/camel', 'color/hsl-4'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'index.js',
          format: 'javascript/es6',
        },
      ],
    },
    json: {
      transforms: ['attribute/cti', 'name/cti/camel', 'color/hsl-4'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json',
        },
        {
          destination: 'index.json',
          format: 'json/list',
        },
      ],
    },
    css: {
      transforms: ['css-color', 'css-font', 'css-box-shadow', 'attribute/cti', 'name/cti/kebab', 'color/hsl-4'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'design-tokens.css',
          format: 'css/variables',
          options: {
            selector,
            outputReferences: true,
          },
        },
      ],
    },
    scss: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/hsl-4'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'index.scss',
          format: 'scss/variables',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    less: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/hsl-4'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'index.less',
          format: 'less/variables',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
});

module.exports = { createConfig };
