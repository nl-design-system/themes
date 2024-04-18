import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '@utrecht/component-library-react/dist/css-module';

const meta = {
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
export const GemeenteVoorbeeld: Story = { parameters: { theme: 'voorbeeld-theme' } };
export const Utrecht: Story = { parameters: { theme: 'utrecht-theme' } };
