import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';

const meta = {
  id: 'nl-paragraph',
  title: 'Components/Paragraph/NL Design System (candidate)',
  component: Paragraph,
  parameters: { actions: { disable: true } },
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  argTypes: {},
} satisfies Meta<typeof Paragraph>;

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
