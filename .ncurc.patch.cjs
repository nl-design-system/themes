module.exports = {
  dep: ['dev', 'prod'],
  install: 'always',
  reject: [
    '@gemeente-denhaag/components-react',
    '@gemeente-denhaag/design-tokens-components',
    '@nl-design-system/component-index',
    '@utrecht/component-library-css',
    '@utrecht/components',
    '@utrecht/design-tokens',
    '@utrecht/web-component-library-stencil',
    '@whitespace/storybook-addon-html',
  ],
  root: true,
  target: 'patch',
  upgrade: true,
  workspaces: true,
};
