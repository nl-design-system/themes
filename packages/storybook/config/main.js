/* eslint-env node */
module.exports = {
  stories: [
    '../../../documentation/**/*stories.@(js|jsx|mdx|ts|tsx)',
    '../../../proprietary/*/documentation/**/*stories.@(js|jsx|mdx|ts|tsx)',
  ],
  features: {
    postcss: false,
  },
  addons: [
    '@etchteam/storybook-addon-status/register',
    '@storybook/addon-a11y/register',
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true },
    },
    '@storybook/addon-viewport/register',
    '@storybook/preset-scss',
    '@whitespace/storybook-addon-html',
  ],
};
