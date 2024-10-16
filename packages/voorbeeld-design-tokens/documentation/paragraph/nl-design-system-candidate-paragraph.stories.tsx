import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';

const meta = {
  id: 'nl-design-system-candidate-paragraph',
  title: 'Components/Paragraph/NL Design System candidate',
  component: Paragraph,
  parameters: { actions: { disable: true } },
  args: {
    children: "Pa's wijze lynx bezag vroom het fikse aquaduct.",
  },
  argTypes: {
    appearance: { control: 'select', options: [undefined, 'lead', 'small'] },
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
