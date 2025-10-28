import { Meta, StoryObj } from '@storybook/react';
import { NumberBadge } from '@nl-design-system-candidate/number-badge-react/css';

const meta = {
  id: 'nl-number-badge',
  title: 'Components/Number badge/Candidate',
  component: NumberBadge,
  args: {
    children: '9',
  },
} satisfies Meta<typeof NumberBadge>;

export default meta;

type Story = StoryObj<typeof meta>;
export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: {
    theme: 'voorbeeld-theme',
  },
};
export const StartTheme: Story = {
  name: 'Start theme',
  parameters: {
    theme: 'start-theme',
  },
};
