import type { Meta, StoryObj } from '@storybook/react-vite';
import { DotBadge } from '@rijkshuisstijl-community/components-react';

const meta = {
  id: 'rhc-dot-badge',
  title: 'Components/Dot Badge/Rijkshuisstijl community',
  component: DotBadge,
  parameters: { actions: { disable: true } },
  args: {
    label: 'Nieuw Bericht',
  },
} satisfies Meta<typeof DotBadge>;

type Story = StoryObj<typeof meta>;

export default meta;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};
export const RijkshuisstijlTheme: Story = {
  name: 'Rijkshuisstijl theme',
  parameters: { theme: 'rhc-theme' },
};
