import type { Meta, StoryObj } from '@storybook/react';
import { Heading3 } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'heading-3',
  component: Heading3,
  parameters: { actions: { disable: true } },
  args: { children: "Pa's wijze lynx bezag vroom het fikse aquaduct", className: '' },
  argTypes: {
    className: {
      name: 'distanced',
      control: {
        type: 'inline-radio',
        labels: {
          'utrecht-heading-3--distanced': 'yes',
          '': 'no',
        },
      },
      options: ['utrecht-heading-3--distanced', ''],
    },
  },
} satisfies Meta<typeof Heading3>;

type Story = StoryObj<typeof meta>;

export default meta;
export const GemeenteVoorbeeld: Story = { parameters: { theme: 'voorbeeld-theme' } };
export const Utrecht: Story = { parameters: { theme: 'utrecht-theme' } };
