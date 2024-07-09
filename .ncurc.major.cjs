const minorConfig = require('./.ncurc.minor.cjs');

module.exports = {
  ...minorConfig,
  reject: [
    ...minorConfig.reject,
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
