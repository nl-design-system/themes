import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../../*-design-tokens/documentation/*.mdx',
    '../../*-design-tokens/documentation/**/*.stories.{ts,tsx}',
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
    '@storybook/addon-docs',
    // Drawer addons, in order
    '@storybook/addon-a11y',
    'storybook/actions',
    // Toolbar addons, in order
    'storybook/viewport',
    'storybook/highlight',
  ],
  staticDirs: ['../../voorbeeld-design-tokens/documentation/assets'],
  viteFinal: async (config) => {
    config.esbuild = {
      ...config.esbuild,
      jsx: 'automatic',
    };
    return config;
  },
};

export default config;
