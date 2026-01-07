import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading6 } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-heading-6',
  title: 'Components/Heading 6/Utrecht',
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
export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};
export const UtrechtTheme: Story = {
  name: 'Utrecht theme',
  parameters: { theme: 'utrecht-theme' },
};
