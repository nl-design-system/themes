import { ComponentStories } from '@nl-design-system-unstable/theme-toolkit/src/ComponentStories';
import type { Meta, StoryObj } from '@storybook/react-vite';
import config from '../src/config.json';

const meta = {
  title: 'Groningen',
  component: ComponentStories,
  parameters: { controls: { include: 'showAll' }, chromatic: { disableSnapshot: false } },
  args: { config, showAll: false, displayDesignTokens: false },
} satisfies Meta<typeof ComponentStories>;

type Story = StoryObj<typeof meta>;

export default meta;

// Chromatic has a limit of 25000 pixels per story, so we need to split them
// into multiple stories.

export const ComponentsPage1: Story = {
  name: 'Visual regression test (component 1 - 50)',
  args: {
    theme: `${config.prefix}-theme`,
    start: 0,
    end: 50,
  },
};

export const ComponentsPage2: Story = {
  name: 'Visual regression test (component 51 - 100)',
  args: {
    theme: `${config.prefix}-theme`,
    start: 51,
    end: 100,
  },
};

export const ComponentsPage3: Story = {
  name: 'Visual regression test (component 101 - ∞)',
  args: {
    theme: `${config.prefix}-theme`,
    start: 101,
  },
};
