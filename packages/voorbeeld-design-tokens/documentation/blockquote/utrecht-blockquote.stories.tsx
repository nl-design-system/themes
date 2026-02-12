import type { Meta, StoryObj } from '@storybook/react-vite';
import { Blockquote, Paragraph } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-blockquote',
  title: 'Components/Blockquote/Utrecht',
  component: Blockquote,
  parameters: { actions: { disable: true } },
  args: {
    children: (
      <Paragraph className="utrecht-blockquote__content">The Quick Brown Fox Jumps Over The Lazy Dog</Paragraph>
    ),
  },
} satisfies Meta<typeof Blockquote>;

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
