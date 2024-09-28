const stringSort = (a, b) => (a === b ? 0 : a > b ? 1 : -1);

const sortByName = (a, b) => stringSort(a.name, b.name);

const createConfig = ({ selector, source = ['src/**/*.tokens.json'] }) => ({
  hooks: {
    formats: {
      'json/list': function ({ dictionary }) {
        return JSON.stringify(dictionary.allTokens.sort(sortByName), null, '  ');
      },
    },
  },
  source,
  platforms: {
    js: {
      transformGroups: 'tokens-studio',
      transforms: ['attribute/cti', 'name/camel'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'index.js',
          format: 'javascript/es6',
        },
      ],
    },
    json: {
      transformGroups: 'tokens-studio',
      transforms: ['attribute/cti', 'name/camel'],
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
      transformGroups: 'tokens-studio',
      transforms: ['attribute/cti', 'name/kebab'],
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
      transformGroups: 'tokens-studio',
      transforms: ['attribute/cti', 'name/kebab'],
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
      transformGroups: 'tokens-studio',
      transforms: ['attribute/cti', 'name/kebab'],
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
