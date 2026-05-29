import type { Meta, StoryObj } from '@storybook/react-vite';
import { Root } from '@utrecht/root-react/css';

const meta = {
  id: 'utrecht-root',
  title: 'Components/Root/Utrecht',
  component: Root,
  args: {
    Component: 'div',
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
} satisfies Meta<typeof Root>;

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
