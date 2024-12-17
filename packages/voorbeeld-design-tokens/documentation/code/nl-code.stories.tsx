import type { Meta, StoryObj } from '@storybook/react';
import { Code } from '@nl-design-system-candidate/code-react/css';

const meta = {
  id: 'nl-code',
  title: 'Components/Code/NL Design System (candidate)',
  component: Code,
  args: { children: '<input type="url" value="https://example.fi/">' },
} satisfies Meta<typeof Code>;

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
