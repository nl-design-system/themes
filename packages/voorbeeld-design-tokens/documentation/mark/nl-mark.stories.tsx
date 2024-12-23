import type { Meta, StoryObj } from '@storybook/react';
import { Mark } from '@nl-design-system-candidate/mark-react/css';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';

const meta = {
  id: 'nl-mark',
  title: 'Components/Mark/NL Design System (candidate)',
  component: Mark,
  args: {
    children: 'Mark my words!',
  },
  decorators: [(Story) => <Paragraph>{Story()}</Paragraph>],
} satisfies Meta<typeof Mark>;

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
