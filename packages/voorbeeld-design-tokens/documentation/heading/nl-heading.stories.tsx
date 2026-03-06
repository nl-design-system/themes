import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from '@nl-design-system-candidate/heading-react/css';

const meta = {
  id: 'nl-heading',
  title: 'Components/Heading/Candidate',
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
export const StartTheme: Story = {
  name: 'Start theme',
  parameters: { theme: 'start-theme' },
};
