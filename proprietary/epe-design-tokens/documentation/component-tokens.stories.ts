import { ComponentStories } from '@nl-design-system-unstable/theme-toolkit/src/ComponentStories';
import type { Meta, StoryObj } from '@storybook/react';
import tokensDefinition from '@nl-design-system-community/design-tokens-definition/dist/list.json';
import config from '../src/config.json';
import tokens from '../dist/list.json';

const meta = {
  title: 'Epe',
  component: ComponentStories,
  parameters: { controls: { include: 'showAll' }, chromatic: { disableSnapshot: true } },
  args: {
    config,
    showAll: false,
    tokens,
    tokensDefinition,
    displayDesignTokens: true,
  },
} satisfies Meta<typeof ComponentStories>;

type Story = StoryObj<typeof meta>;

export default meta;

export const ComponentTokensLightMode: Story = {
  name: 'Component Tokens (color-scheme: light)',
  args: {
    theme: 'epe-theme epe-theme--color-scheme-light',
  },
};

export const ComponentTokensDarkMode: Story = {
  name: 'Component Tokens (color-scheme: dark)',
  args: {
    theme: 'epe-theme epe-theme--color-scheme-dark',
  },
};
