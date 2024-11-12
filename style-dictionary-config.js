const stringSort = (a, b) => (a === b ? 0 : a > b ? 1 : -1);

const sortByName = (a, b) => stringSort(a.name, b.name);

const createConfig = ({
  backwardsCompatible = false,
  selector,
  source = ['src/**/tokens.json', 'src/**/*.tokens.json'],
}) => {
  const prefix = selector.replace(/^\.(.+)-theme/, '$1');
  const themeName = `${prefix}-theme`;

  const legacyPlatforms = {
    legacyJson: {
      transformGroup: 'tokens-studio',
      transforms: ['name/camel', 'attribute/cti'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'index.json',
          format: 'json/list',
        },
      ],
    },
    legacyCss: {
      transformGroup: 'tokens-studio',
      transforms: ['name/kebab'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'design-tokens.css',
          format: 'css/variables',
          options: {
            selector: `.${themeName}`,
            outputReferences: true,
          },
        },
      ],
    },
    legacyLess: {
      transformGroup: 'tokens-studio',
      transforms: ['name/kebab'],
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
    legacyScss: {
      transformGroup: 'tokens-studio',
      transforms: ['name/kebab'],
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
    legacyJs: {
      transformGroup: 'tokens-studio',
      transforms: ['name/camel'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'index.js',
          format: 'javascript/es6',
        },
      ],
    },
  };

  return {
    hooks: {
      formats: {
        'json/list': function ({ dictionary }) {
          return JSON.stringify(dictionary.allTokens.sort(sortByName), null, '  ');
        },
      },
    },
    source,
    platforms: {
      ...(backwardsCompatible ? legacyPlatforms : {}),
      js: {
        transformGroup: 'tokens-studio',
        transforms: ['name/camel'],
        buildPath: 'dist/',
        files: [
          {
            destination: 'variables.cjs',
            format: 'javascript/module-flat',
          },
          {
            destination: 'variables.mjs',
            format: 'javascript/es6',
          },
        ],
      },
      tokenTree: {
        transformGroup: 'tokens-studio',
        transforms: ['name/camel'],
        buildPath: 'dist/',
        files: [
          {
            format: 'javascript/module',
            destination: 'tokens.cjs',
          },
        ],
      },
      json: {
        transformGroup: 'tokens-studio',
        transforms: ['name/camel'],
        buildPath: 'dist/',
        files: [
          {
            destination: 'tokens.json',
            format: 'json',
          },
          {
            destination: 'list.json',
            format: 'json/list',
          },
          {
            destination: 'variables.json',
            format: 'json/flat',
          },
        ],
      },
      css: {
        transformGroup: 'tokens-studio',
        transforms: ['name/kebab'],
        buildPath: 'dist/',
        files: [
          {
            destination: 'theme.css',
            format: 'css/variables',
            options: {
              selector: `.${themeName}`,
              outputReferences: true,
            },
          },
          {
            destination: 'variables.css',
            format: 'css/variables',
            options: {
              selector: `:root`,
              outputReferences: true,
            },
          },
        ],
      },
      scss: {
        transformGroup: 'tokens-studio',
        transforms: ['name/kebab'],
        buildPath: 'dist/',
        files: [
          {
            destination: '_variables.scss',
            format: 'scss/variables',
            options: {
              outputReferences: true,
              themeable: true,
            },
          },
        ],
      },
      'scss-theme-mixin': {
        transforms: ['name/kebab'],
        buildPath: 'dist/',
        files: [
          {
            destination: '_mixin.scss',
            format: 'css/variables',
            options: {
              selector: `@mixin ${themeName}`,
              outputReferences: true,
            },
          },
        ],
      },
      less: {
        transformGroup: 'tokens-studio',
        transforms: ['name/kebab'],
        buildPath: 'dist/',
        files: [
          {
            destination: 'variables.less',
            format: 'less/variables',
            options: {
              outputReferences: true,
            },
          },
        ],
      },
      typescript: {
        transforms: ['name/camel'],
        transformGroup: 'js',
        buildPath: 'dist/',
        files: [
          {
            format: 'typescript/es6-declarations',
            destination: 'variables.d.ts',
          },
          {
            format: 'typescript/module-declarations',
            destination: 'tokens.d.ts',
          },
        ],
      },
    },
  };
};

module.exports = { createConfig };
