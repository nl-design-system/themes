import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@amsterdam/design-system-react';

const meta = {
  id: 'ams-button',
  title: 'Components/Button/Amsterdam',
  component: Button,
  parameters: { actions: { disable: true } },
  args: {
    children: 'Button label',
  },
  argTypes: {},
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export default meta;

export const AmsterdamTheme: Story = {
  name: 'Amsterdam theme',
  parameters: { theme: 'ams-theme' },
};
