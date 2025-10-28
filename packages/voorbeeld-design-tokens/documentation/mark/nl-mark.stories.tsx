import type { Meta, StoryObj } from '@storybook/react';
import { Mark } from '@nl-design-system-candidate/mark-react/css';

const meta = {
  id: 'nl-mark',
  title: 'Components/Mark/Candidate',
  component: Mark,
  args: {
    children: 'Mark my words!',
  },
} satisfies Meta<typeof Mark>;

type Story = StoryObj<typeof meta>;

export default meta;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};

export const StartTheme: Story = {
  name: 'Start theme',
  parameters: { theme: 'start-theme' },
};
