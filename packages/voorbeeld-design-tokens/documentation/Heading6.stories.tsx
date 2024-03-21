import type { Meta, StoryObj } from '@storybook/react';
import { Heading6 } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  component: Heading6,
  parameters: { actions: { disable: true } },
  args: { children: "Pa's wijze lynx bezag vroom het fikse aquaduct", className: '' },
  argTypes: {
    className: {
      name: 'distanced',
      control: {
        type: 'inline-radio',
        labels: {
          'utrecht-heading-6--distanced': 'yes',
          '': 'no',
        },
      },
      options: ['utrecht-heading-6--distanced', ''],
    },
  },
} satisfies Meta<typeof Heading6>;

type Story = StoryObj<typeof meta>;

export default meta;
export const GemeenteVoorbeeld: Story = {};
export const Utrecht: Story = { parameters: { theme: 'utrecht-theme' } };
