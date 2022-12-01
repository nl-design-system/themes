/* eslint-env node */
const path = require('path');

const babelSettings = {
  extends: path.join(__dirname, './.babelrc'),
};

module.exports = {
  core: { builder: 'webpack5' },
  stories: [
    '../../../documentation/**/*stories.@(js|jsx|mdx|ts|tsx)',
    '../../../packages/*-theme/documentation/**/*stories.@(js|jsx|mdx|ts|tsx)',
    '../../../proprietary/*/documentation/**/*stories.@(js|jsx|mdx|ts|tsx)',
  ],
  features: {
    postcss: false,
  },
  addons: [
    '@storybook/addon-controls',
    '@etchteam/storybook-addon-status/register',
    '@storybook/addon-a11y/register',
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true },
    },
    '@storybook/addon-viewport/register',
    '@storybook/preset-scss',
    '@whitespace/storybook-addon-html',
    'storybook-addon-playroom',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.jsx$/,
      use: ['babel-loader?' + JSON.stringify(babelSettings)],
      include: [path.resolve(__dirname, '../../../node_modules'), path.resolve(__dirname, '../../../')],
    });
    return config;
  },
};
