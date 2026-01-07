import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from '@amsterdam/design-system-react';

const meta = {
  id: 'ams-heading',
  title: 'Components/Heading/Amsterdam',
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

export const AmsterdamTheme: Story = {
  name: 'Amsterdam theme',
  parameters: { theme: 'ams-theme' },
};
