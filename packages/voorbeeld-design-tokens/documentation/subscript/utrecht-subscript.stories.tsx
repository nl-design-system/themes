import type { Meta, StoryObj } from '@storybook/react-vite';
import { Subscript } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-subscript',
  title: 'Components/Subscript/Utrecht',
  component: Subscript,
  args: {
    children: 'Subscript',
  },
} satisfies Meta<typeof Subscript>;

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
