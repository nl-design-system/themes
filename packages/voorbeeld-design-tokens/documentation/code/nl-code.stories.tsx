import type { Meta, StoryObj } from '@storybook/react';
import { Code } from '@nl-design-system-candidate/code-react';
import '@nl-design-system-unstable/example-theme/dist/index.css';
import 'basis-design-tokens/dist/theme.css';

const meta = {
  id: 'nl-code',
  title: 'Components/Code/Candidate',
  component: Code,
  args: { children: '<input type="url" value="https://example.fi/">' },
} satisfies Meta<typeof Code>;

type Story = StoryObj<typeof meta>;

export default meta;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};

export const BasisTheme: Story = {
  name: 'Basis theme',
  parameters: { theme: 'basis-theme' },
};
