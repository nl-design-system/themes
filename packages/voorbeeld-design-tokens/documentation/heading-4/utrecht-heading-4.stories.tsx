import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading4 } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-heading-4',
  title: 'Components/Heading 4/Utrecht',
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
export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};
export const UtrechtTheme: Story = {
  name: 'Utrecht theme',
  parameters: { theme: 'utrecht-theme' },
};
