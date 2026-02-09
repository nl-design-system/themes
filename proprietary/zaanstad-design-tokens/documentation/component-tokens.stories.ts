import { ComponentStories } from '@nl-design-system-unstable/theme-toolkit/src/ComponentStories';
import type { Meta, StoryObj } from '@storybook/react-vite';
import tokensDefinition from '@nl-design-system-community/design-tokens-definition/dist/list.json';
import config from '../src/config.json';
import lightTokens from '../dist/list.json';
import darkTokens from '../dist/color-scheme-dark/list.json';

const meta = {
  title: 'Zaanstad',
  component: ComponentStories,
  parameters: { controls: { include: 'showAll' }, chromatic: { disableSnapshot: true } },
  args: {
    config,
    showAll: false,
    tokensDefinition,
    displayDesignTokens: true,
  },
} satisfies Meta<typeof ComponentStories>;

type Story = StoryObj<typeof meta>;

export default meta;

export const ComponentTokensLightMode: Story = {
  name: 'Component Tokens (color-scheme: light)',
  args: {
    theme: `${config.prefix}-theme`,
    tokens: lightTokens,
  },
};

export const ComponentTokensDarkMode: Story = {
  name: 'Component Tokens (color-scheme: dark)',
  args: {
    theme: `${config.prefix}-theme ${config.prefix}-theme--color-scheme-dark`,
    tokens: darkTokens,
  },
};
