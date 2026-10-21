import type { Meta, StoryObj } from '@storybook/react-vite';
import { Calendar } from '@amsterdam/design-system-react';

const meta = {
  id: 'ams-calendar',
  title: 'Components/Calendar/Amsterdam',
  component: Calendar,
  parameters: { actions: { disable: true } },
  args: {
    defaultMonth: new Date(2026, 0, 1),
    linkTemplate: () => '#',
  },
  argTypes: {},
} satisfies Meta<typeof Calendar>;

type Story = StoryObj<typeof meta>;

export default meta;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};

export const AmsterdamTheme: Story = {
  name: 'Amsterdam theme',
  parameters: { theme: 'ams-theme' },
};
