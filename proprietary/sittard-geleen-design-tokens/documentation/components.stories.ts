import { ComponentStories } from '@nl-design-system-unstable/theme-toolkit/src/ComponentStories';
import type { Meta, StoryObj } from '@storybook/react-vite';
import config from '../src/config.json';

const meta: Meta<typeof ComponentStories> = {
  title: 'Sittard-Geleen',
  component: ComponentStories,
  parameters: { controls: { include: 'showAll' }, chromatic: { disableSnapshot: false } },
  args: { config, showAll: false },
};

type Story = StoryObj<typeof meta>;

export default meta;
export const Components: Story = { parameters: { theme: `${config.prefix}-theme` } };
