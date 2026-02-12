import type { Meta, StoryObj } from '@storybook/react-vite';
import { Superscript } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-superscript',
  title: 'Components/Superscript/Utrecht',
  component: Superscript,
  args: {
    children: 'Superscript',
  },
} satisfies Meta<typeof Superscript>;

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
