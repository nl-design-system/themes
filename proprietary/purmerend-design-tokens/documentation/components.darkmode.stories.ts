import { ComponentStories } from '@nl-design-system-unstable/theme-toolkit/src/ComponentStories';
import type { Meta, StoryObj } from '@storybook/react';
import config from '../src/config.json';
import tokens from '../dist/color-scheme-dark/list.json';

const meta = {
  title: 'Purmerend Darkmode',
  component: ComponentStories,
  parameters: { controls: { include: 'showAll' }, chromatic: { disableSnapshot: false } },
  args: { config, showAll: false, tokens },
} satisfies Meta<typeof ComponentStories>;

type Story = StoryObj<typeof meta>;

export default meta;
export const Components: Story = {
  args: {
    theme: 'purmerend-theme purmerend-theme--color-scheme-dark',
  },
};
