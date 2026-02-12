import type { Meta, StoryObj } from '@storybook/react-vite';
import { PasswordInput } from '@amsterdam/design-system-react';

const meta = {
  id: 'ams-password-input',
  title: 'Components/Password Input/Amsterdam',
  component: PasswordInput,
  parameters: { actions: { disable: true } },
  args: {},
} satisfies Meta<typeof PasswordInput>;

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
