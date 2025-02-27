import { ComponentStories } from '@nl-design-system-unstable/theme-toolkit/src/ComponentStories';
import type { Meta, StoryObj } from '@storybook/react';
import config from '../src/config.json';
import tokens from '../dist/list.json';

const meta = {
  title: 'Purmerend',
  component: ComponentStories,
  parameters: { controls: { include: 'showAll' }, chromatic: { disableSnapshot: true } },
  args: { config, showAll: false, tokens, displayDesignTokens: false },
} satisfies Meta<typeof ComponentStories>;

type Story = StoryObj<typeof meta>;

export default meta;

export const ComponentsLightMode: Story = {
  name: 'Visual regression test (color-scheme: light)',
  args: {
    theme: 'purmerend-theme purmerend-theme--color-scheme-light',
  },
};

export const ComponentsDarkMode: Story = {
  name: 'Visual regression test (color-scheme: dark)',
  args: {
    theme: 'purmerend-theme purmerend-theme--color-scheme-dark',
  },
};
