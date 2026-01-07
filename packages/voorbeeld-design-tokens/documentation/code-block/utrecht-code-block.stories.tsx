import type { Meta, StoryObj } from '@storybook/react-vite';
import { CodeBlock } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-code-block',
  title: 'Components/Code Block/Utrecht',
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

export const UtrechtTheme: Story = {
  name: 'Utrecht theme',
  parameters: { theme: 'utrecht-theme' },
};
