import type { Meta, StoryObj } from '@storybook/react-vite';
import { Paragraph } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-paragraph',
  title: 'Components/Paragraph/Utrecht',
  component: Paragraph,
  parameters: { actions: { disable: true } },
  args: {
    children: "Pa's wijze lynx bezag vroom het fikse aquaduct.",
    lead: false,
    small: false,
  },
  argTypes: {
    lead: { type: 'boolean' },
    small: { type: 'boolean' },
  },
} satisfies Meta<typeof Paragraph>;

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
