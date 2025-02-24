import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../../voorbeeld-design-tokens/documentation/*.mdx',
    '../../voorbeeld-design-tokens/documentation/**/*.stories.{ts,tsx}',
    '../../../proprietary/*/documentation/*.mdx',
    '../../../proprietary/*/documentation/*.stories.ts',
    '../src/**/*.stories.{ts,tsx}',
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
  staticDirs: ['../../voorbeeld-design-tokens/documentation/assets'],
};

export default config;
