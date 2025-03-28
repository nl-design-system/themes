import { ComponentStories } from '@nl-design-system-unstable/theme-toolkit/src/ComponentStories';
import type { Meta, StoryObj } from '@storybook/react';
import config from '../src/config.json';
import tokens from '../dist/list.json';

const meta = {
  title: 'Purmerend',
  component: ComponentStories,
  parameters: { controls: { include: 'showAll' }, chromatic: { disableSnapshot: false } },
  args: { config, showAll: false, tokens, displayDesignTokens: false },
} satisfies Meta<typeof ComponentStories>;

type Story = StoryObj<typeof meta>;

export default meta;

export const ComponentsLightMode: Story = {
  name: 'Visual regression test (color-scheme: light, component 1 - 50)',
  args: {
    theme: 'purmerend-theme purmerend-theme--color-scheme-light',
    start: 0,
    end: 50,
  },
};

export const ComponentsLightModeContinued: Story = {
  name: 'Visual regression test (color-scheme: light, component 51 - ∞)',
  args: {
    theme: 'purmerend-theme purmerend-theme--color-scheme-light',
    start: 51,
  },
};

export const ComponentsDarkMode: Story = {
  name: 'Visual regression test (color-scheme: dark, component 1 - 50)',
  args: {
    theme: 'purmerend-theme purmerend-theme--color-scheme-dark',
    start: 0,
    end: 50,
  },
};

export const ComponentsDarkModeContinued: Story = {
  name: 'Visual regression test (color-scheme: dark, component 51 - ∞)',
  args: {
    theme: 'purmerend-theme purmerend-theme--color-scheme-dark',
    start: 51,
  },
};
