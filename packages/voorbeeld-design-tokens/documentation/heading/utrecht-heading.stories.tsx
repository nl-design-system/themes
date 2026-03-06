import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-heading',
  title: 'Components/Heading/Utrecht',
  component: Heading,
  parameters: { actions: { disable: true } },
  args: {
    children: "Pa's wijze lynx bezag vroom het fikse aquaduct",
    level: 1,
  },
  argTypes: {},
} satisfies Meta<typeof Heading>;

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
