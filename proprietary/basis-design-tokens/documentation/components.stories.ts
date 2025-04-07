import { ComponentStories } from '@nl-design-system-unstable/theme-toolkit/src/ComponentStories';
import type { Meta, StoryObj } from '@storybook/react';
import config from '../src/config.json';
import tokens from '../dist/list.json';

const meta = {
  title: 'Basis Thema',
  component: ComponentStories,
  parameters: { controls: { include: 'showAll' }, chromatic: { disableSnapshot: false } },
  args: { config, showAll: false, tokens, displayDesignTokens: false },
} satisfies Meta<typeof ComponentStories>;

type Story = StoryObj<typeof meta>;

export default meta;
export const Components: Story = {
  parameters: { theme: `${config.prefix}-theme` },
  args: {
    start: 0,
    end: 50,
  },
};

export const ComponentsContinued: Story = {
  parameters: { theme: `${config.prefix}-theme` },
  args: {
    start: 51,
  },
};
