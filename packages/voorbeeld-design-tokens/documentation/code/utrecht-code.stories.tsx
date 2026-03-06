import type { Meta, StoryObj } from '@storybook/react-vite';
import { Code } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-code',
  title: 'Components/Code/Utrecht',
  component: Code,
  args: { children: '<input type="url" value="https://example.fi/">' },
} satisfies Meta<typeof Code>;

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
