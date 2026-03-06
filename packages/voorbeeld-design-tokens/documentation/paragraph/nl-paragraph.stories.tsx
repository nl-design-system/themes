import type { Meta, StoryObj } from '@storybook/react-vite';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';

const meta = {
  id: 'nl-paragraph',
  title: 'Components/Paragraph/Candidate',
  component: Paragraph,
  parameters: { actions: { disable: true } },
  args: {
    children: "Pa's wijze lynx bezag vroom het fikse aquaduct.",
    lead: false,
    small: false,
  },
  argTypes: {
    lead: { type: 'boolean' },
    small: { type: 'boolean' },
  },
} satisfies Meta<typeof Paragraph>;

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
