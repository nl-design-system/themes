import type { Meta, StoryObj } from '@storybook/react-vite';
import { DataBadge } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-data-badge',
  title: 'Components/Data Badge/Utrecht',
  component: DataBadge,
  args: { children: 'Nieuw!' },
} satisfies Meta<typeof DataBadge>;

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
