import type { Meta, StoryObj } from '@storybook/react';
import { DataBadge } from '@nl-design-system-candidate/data-badge-react/css';

const meta = {
  id: 'nl-data-badge',
  title: 'Components/Data Badge/Candidate',
  component: DataBadge,
  args: { children: 'Nieuw!' },
} satisfies Meta<typeof DataBadge>;

type Story = StoryObj<typeof meta>;

export default meta;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};

export const BasisTheme: Story = {
  name: 'Basis theme',
  parameters: { theme: 'basis-theme' },
};
