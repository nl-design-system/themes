import type { Meta, StoryObj } from '@storybook/react';
import { Heading5 } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-heading-5',
  title: 'Components/Heading 5/Utrecht',
  component: Heading5,
  parameters: { actions: { disable: true } },
  args: { children: "Pa's wijze lynx bezag vroom het fikse aquaduct", className: '' },
  argTypes: {
    className: {
      name: 'distanced',
      control: {
        type: 'inline-radio',
        labels: {
          'utrecht-heading-5--distanced': 'yes',
          '': 'no',
        },
      },
      options: ['utrecht-heading-5--distanced', ''],
    },
  },
} satisfies Meta<typeof Heading5>;

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
