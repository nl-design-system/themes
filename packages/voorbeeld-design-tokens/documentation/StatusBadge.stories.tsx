import { Meta, StoryObj } from '@storybook/react';
import { StatusBadge } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'status-badge',
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
export const GemeenteVoorbeeld: Story = { parameters: { theme: 'voorbeeld-theme' } };
export const Utrecht: Story = { parameters: { theme: 'utrecht-theme' } };
