const minorConfig = require('./.ncurc.minor.cjs');

module.exports = {
  ...minorConfig,
  reject: [
    ...minorConfig.reject,
    // Percy needs a manual upgrade as it doesn't work without breaking
    '@percy/storybook',
    // Storybook needs React 16 to have support out of the box.
    // Alternatively we could manually keep track of all sub-package versions,
    // but the benefit of upgrading is currently not high enough.
    'react',
    'react-dom',
    '@types/react',
    '@types/react-dom',
    // Webpack 5 update can only happen after Storybook supports it, we'll need to do a manual upgrade then.
    // For now keep the loader versions compatible with Webpack 4.
    'css-loader',
    'sass-loader',
    'style-loader',
    'webpack',
    // Color package uses ES6 syntax from v4+ which is not compatible with our setup
    'color',
    'storybook',
    '@storybook/*',
    '@fontsource/*',
    // Prettier 3 is async
    'prettier',
  ],
  target: 'latest',
};
