import type { Meta, StoryObj } from '@storybook/react-vite';
import { CodeBlock } from '@nl-design-system-candidate/code-block-react/css';

const meta = {
  id: 'nl-code-block',
  title: 'Components/Code Block/Candidate',
  component: CodeBlock,
  parameters: { actions: { disable: true } },
  args: {
    children: `
      <!DOCTYPE html>
      <html lang="nl" dir="ltr">
        <head>
          <title>NL Design System</title>
          <meta charset="utf-8"/>
        </head>
        <body>
          <h1>NL Design System</h1>
        </body>
      </html>
    `,
  },
} satisfies Meta<typeof CodeBlock>;

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
