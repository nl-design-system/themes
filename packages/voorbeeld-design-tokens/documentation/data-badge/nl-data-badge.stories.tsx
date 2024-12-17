import type { Meta, StoryObj } from '@storybook/react';
import { DataBadge } from '@nl-design-system-candidate/data-badge-react/css';

const meta = {
  id: 'nl-data-badge',
  title: 'Components/Data Badge/NL Design System (candidate)',
  component: DataBadge,
  args: { children: 'Nieuw!' },
} satisfies Meta<typeof DataBadge>;

type Story = StoryObj<typeof meta>;

export default meta;

export const NoTheme: Story = {
  name: 'No theme',
  parameters: { theme: 'no-theme' },
};

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
