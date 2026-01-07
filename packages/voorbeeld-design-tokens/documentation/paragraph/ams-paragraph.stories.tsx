import type { Meta, StoryObj } from '@storybook/react-vite';
import { Paragraph } from '@amsterdam/design-system-react';

const meta = {
  id: 'ams-paragraph',
  title: 'Components/Paragraph/Amsterdam',
  component: Paragraph,
  parameters: { actions: { disable: true } },
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  argTypes: {},
} satisfies Meta<typeof Paragraph>;

type Story = StoryObj<typeof meta>;

export default meta;

export const AmsterdamTheme: Story = {
  name: 'Amsterdam theme',
  parameters: { theme: 'ams-theme' },
};
