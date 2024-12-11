import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '@nl-design-system-candidate/heading-react/css';

const meta = {
  id: 'nl-heading',
  title: 'Components/Heading/NL Design System (candidate)',
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

export const AmsterdamTheme: Story = {
  name: 'Amsterdam theme',
  parameters: { theme: 'ams-theme' },
};

export const RotterdamTheme: Story = {
  name: 'Rotterdam theme',
  parameters: { theme: 'rods-theme' },
};
