import { Meta, StoryObj } from '@storybook/react';
import { NumberBadge } from '@nl-design-system-candidate/number-badge-react/css';

const meta = {
  id: 'nl-number-badge',
  title: 'Components/Number badge/NL Design System (candidate)',
  component: NumberBadge,
  args: {
    children: '9',
  },
} satisfies Meta<typeof NumberBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};

export const UtrechtTheme: Story = {
  name: 'Utrecht theme',
  parameters: { theme: 'utrecht-theme' },
};

export const RotterdamTheme: Story = {
  name: 'Rotterdam theme',
  parameters: { theme: 'rods-theme' },
};
