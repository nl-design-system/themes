import type { Meta, StoryObj } from '@storybook/react';
import { CodeBlock } from '@nl-design-system-candidate/code-block-react';
import '@nl-design-system-unstable/example-theme/dist/index.css';
import 'basis-design-tokens/dist/theme.css';

const meta = {
  id: 'nl-code-block',
  title: 'Components/Code Block/Candidate',
  component: CodeBlock,
  args: {
    children: `<!DOCTYPE html>
<html lang="nl" dir="ltr">
  <head>
    <title>NL Design System</title>
    <meta charset="utf-8"/>
  </head>
  <body>
    <h1>NL Design System</h1>
  </body>
</html>`,
  },
} satisfies Meta<typeof CodeBlock>;

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
