import type { Meta, StoryObj } from '@storybook/react';
import { Code } from '@nl-design-system-candidate/code-react';
import '@nl-design-system-candidate/code-react/css';

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

export const StartTheme: Story = {
  name: 'Start theme',
  parameters: { theme: 'start-theme' },
};
