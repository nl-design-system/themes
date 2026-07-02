import minorConfig from './.ncurc.minor.mjs';

export default {
  ...minorConfig,
  reject: [
    ...minorConfig.reject,
    // @types/node is kept in line with the node version in .nvmrc and package.json#engines.node
    '@types/node',
    'color',
    '@fontsource/*',
    'eslint',
    'eslint-plugin-json',
    'style-dictionary',
  ],
  target: 'latest',
};
