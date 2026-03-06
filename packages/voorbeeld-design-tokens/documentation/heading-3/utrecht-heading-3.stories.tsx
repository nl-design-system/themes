import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading3 } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-heading-3',
  title: 'Components/Heading 3/Utrecht',
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
export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};
export const UtrechtTheme: Story = {
  name: 'Utrecht theme',
  parameters: { theme: 'utrecht-theme' },
};
