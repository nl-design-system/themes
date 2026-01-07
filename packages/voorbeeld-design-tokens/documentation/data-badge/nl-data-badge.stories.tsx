import type { Meta, StoryObj } from '@storybook/react-vite';
import { DataBadge } from '@nl-design-system-candidate/data-badge-react/css';

const meta = {
  id: 'nl-data-badge',
  title: 'Components/Data Badge/Candidate',
  component: DataBadge,
  parameters: { actions: { disable: true } },
  args: { children: 'Nieuw!' },
} satisfies Meta<typeof DataBadge>;

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
