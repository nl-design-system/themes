import type { Meta, StoryObj } from '@storybook/react';
import { Heading4 } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'heading-4',
  component: Heading4,
  parameters: { actions: { disable: true } },
  args: { children: "Pa's wijze lynx bezag vroom het fikse aquaduct", className: '' },
  argTypes: {
    className: {
      name: 'distanced',
      control: {
        type: 'inline-radio',
        labels: {
          'utrecht-heading-4--distanced': 'yes',
          '': 'no',
        },
      },
      options: ['utrecht-heading-4--distanced', ''],
    },
  },
} satisfies Meta<typeof Heading4>;

type Story = StoryObj<typeof meta>;

export default meta;
export const GemeenteVoorbeeld: Story = { parameters: { theme: 'voorbeeld-theme' } };
export const Utrecht: Story = { parameters: { theme: 'utrecht-theme' } };