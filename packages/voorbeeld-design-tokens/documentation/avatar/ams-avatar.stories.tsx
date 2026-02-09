import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from '@amsterdam/design-system-react';

const meta = {
  id: 'ams-avatar',
  title: 'Components/Avatar/Amsterdam',
  component: Avatar,
  parameters: { actions: { disable: true } },
  args: {
    label: 'Avatar',
  },
} satisfies Meta<typeof Avatar>;

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
