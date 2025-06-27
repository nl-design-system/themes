import { ComponentStories } from '@nl-design-system-unstable/theme-toolkit/src/ComponentStories';
import type { Meta, StoryObj } from '@storybook/react';
import config from '../src/config.json';
import tokens from '../dist/list.json';

const meta = {
  title: 'Mooi & Anders',
  component: ComponentStories,
  parameters: { controls: { include: 'showAll' }, chromatic: { disableSnapshot: false } },
  args: { config, showAll: false, tokens, displayDesignTokens: false },
} satisfies Meta<typeof ComponentStories>;

type Story = StoryObj<typeof meta>;

export default meta;
export const Components: Story = {
  args: {
    theme: `${config.prefix}-theme`,
    start: 0,
    end: 50,
  },
};

export const ComponentsContinued: Story = {
  args: {
    theme: `${config.prefix}-theme`,
    start: 51,
  },
};

export const ComponentsDarkMode: Story = {
  args: {
    theme: `${config.prefix}-theme ${config.prefix}-theme--color-scheme-dark`,
    start: 0,
    end: 50,
  },
};

export const ComponentsDarkModeContinued: Story = {
  args: {
    theme: `${config.prefix}-theme ${config.prefix}-theme--color-scheme-dark`,
    start: 51,
  },
};
