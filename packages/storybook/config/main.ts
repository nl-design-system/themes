import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../../voorbeeld-design-tokens/documentation/{readme,color,design-tokens,typography}.mdx',
    '../../voorbeeld-design-tokens/documentation/**/*.stories.{ts,tsx}',
    '../../../proprietary/*/documentation/{readme,color,design-tokens,typography}.mdx',
    '../../../proprietary/*/documentation/*.stories.ts',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
    enableCrashReports: false,
  },
  addons: [
    // Drawer addons, in order
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    // Toolbar addons, in order
    '@storybook/addon-backgrounds',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
    '@storybook/addon-viewport',
    '@storybook/addon-highlight',
    '@storybook/addon-toolbars',
    '@storybook/addon-docs',
  ],
  docs: {
    autodocs: 'tag',
  },
};

export default config;
