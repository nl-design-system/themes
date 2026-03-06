import type { Meta, StoryObj } from '@storybook/react-vite';
import { LuxLoginLink as LoginLink } from '@lux-design-system/web-components-react';

const meta = {
  id: 'lux-login-link',
  title: 'Components/Login Link/Lux',
  component: LoginLink,
  parameters: { actions: { disable: true } },
  args: {
    agent: 'digid',
  },
} satisfies Meta<typeof LoginLink>;

type Story = StoryObj<typeof meta>;

export default meta;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};

export const LuxTheme: Story = {
  name: 'Lux theme',
  parameters: { theme: 'lux-theme--logius-light' },
};
