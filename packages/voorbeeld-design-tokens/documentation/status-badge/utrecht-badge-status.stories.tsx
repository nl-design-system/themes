import { Meta, StoryObj } from '@storybook/react-vite';
import { StatusBadge } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-badge-status',
  title: 'Components/Status Badge/Utrecht',
  component: StatusBadge,
  parameters: { actions: { disable: true } },
  args: {
    children: 'Status',
    status: 'safe',
  },
  argTypes: {
    children: { name: 'children (badge text)' },
    status: {
      control: { type: 'select' },
      options: ['danger', 'warning', 'safe', 'neutral', 'valid', 'invalid', 'error', 'success', 'active', 'inactive'],
    },
  },
} satisfies Meta<typeof StatusBadge>;
type Story = StoryObj<typeof meta>;

export default meta;
export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};
export const UtrechtTheme: Story = {
  name: 'Utrecht theme',
  parameters: { theme: 'utrecht-theme' },
};
