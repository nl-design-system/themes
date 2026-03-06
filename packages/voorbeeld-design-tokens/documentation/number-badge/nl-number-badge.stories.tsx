import { Meta, StoryObj } from '@storybook/react-vite';
import { NumberBadge } from '@nl-design-system-candidate/number-badge-react/css';

const meta = {
  id: 'nl-number-badge',
  title: 'Components/Number Badge/Candidate',
  component: NumberBadge,
  parameters: { actions: { disable: true } },
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
