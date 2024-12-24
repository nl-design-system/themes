const stringSort = (a, b) => (a === b ? 0 : a > b ? 1 : -1);

const sortByName = (a, b) => stringSort(a.name, b.name);

const createConfig = ({
  backwardsCompatible = false,
  selector,
  source = ['src/**/tokens.json', 'src/**/*.tokens.json'],
  buildPath = 'dist/',
  className = '',
  useTokensStudioTransformGroup = true,
}) => {
  const prefix = selector ? selector.replace(/^\.(.+)-theme/, '$1') : '';
  let themeName = className || (prefix ? `${prefix}-theme` : 'theme');
  const transformGroup = useTokensStudioTransformGroup && !backwardsCompatible ? 'tokens-studio' : '';

  const legacyPlatforms = {
    legacyJson: {
      transformGroup: transformGroup,
      transforms: ['name/camel', 'attribute/cti'],
      buildPath,
      files: [
        {
          destination: 'index.json',
          format: 'json/list',
        },
      ],
    },
    legacyCss: {
      transformGroup: transformGroup,
      transforms: ['name/kebab'],
      buildPath,
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
      transformGroup: transformGroup,
      transforms: ['name/kebab'],
      buildPath,
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
      transformGroup: transformGroup,
      transforms: ['name/kebab'],
      buildPath,
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
      transformGroup: transformGroup,
      transforms: ['name/camel'],
      buildPath,
      files: [
        {
          destination: 'index.js',
          format: 'javascript/es6',
        },
      ],
    },
  };

  return {
    log: {
      verbosity: 'verbose',
    },
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
        transformGroup: transformGroup,
        transforms: ['name/camel'],
        buildPath,
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
        transformGroup: transformGroup,
        transforms: ['name/camel'],
        buildPath,
        files: [
          {
            format: 'javascript/module',
            destination: 'tokens.cjs',
          },
        ],
      },
      json: {
        transformGroup: transformGroup,
        transforms: ['name/camel'],
        buildPath,
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
        transformGroup: transformGroup,
        transforms: ['name/kebab'],
        buildPath,
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
        transformGroup: transformGroup,
        transforms: ['name/kebab'],
        buildPath,
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
        buildPath,
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
        transformGroup: transformGroup,
        transforms: ['name/kebab'],
        buildPath,
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
        buildPath,
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
