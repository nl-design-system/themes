import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    {
      titlePrefix: 'Components',
      directory: '../../voorbeeld-design-tokens/documentation',
      files: '*.stories.tsx',
    },
    {
      titlePrefix: 'Gemeente Voorbeeld',
      directory: '../../voorbeeld-design-tokens/documentation',
      files: '{readme,color,design-tokens}.mdx',
    },
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
