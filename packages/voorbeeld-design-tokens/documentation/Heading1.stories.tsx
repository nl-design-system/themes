import type { Meta, StoryObj } from '@storybook/react';
import { Heading1 } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  component: Heading1,
  parameters: { actions: { disable: true } },
  args: { children: "Pa's wijze lynx bezag vroom het fikse aquaduct", className: '' },
  argTypes: {
    className: {
      name: 'distanced',
      control: {
        type: 'inline-radio',
        labels: {
          'utrecht-heading-1--distanced': 'yes',
          '': 'no',
        },
      },
      options: ['utrecht-heading-1--distanced', ''],
    },
  },
} satisfies Meta<typeof Heading1>;

type Story = StoryObj<typeof meta>;

export default meta;
export const GemeenteVoorbeeld: Story = {};
export const Utrecht: Story = { parameters: { theme: 'utrecht-theme' } };
