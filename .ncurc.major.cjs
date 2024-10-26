const minorConfig = require('./.ncurc.minor.cjs');

module.exports = {
  ...minorConfig,
  reject: [
    ...minorConfig.reject,
    // @types/node is kept in line with the node version in .nvmrc and package.json#engines.node
    '@types/node',
    'color',
    '@fontsource/*',
    // Prettier 3 is async
    'prettier',
    'eslint',
    'eslint-plugin-json',
    'style-dictionary',
  ],
  target: 'latest',
};
