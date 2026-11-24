import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from '@gemeente-denhaag/pagination';
import '@gemeente-denhaag/pagination/index.css';

const meta = {
  id: 'denhaag-pagination',
  title: 'Components/Page Number Navigation/Den Haag',
  component: Pagination,
  parameters: { actions: { disable: true } },
  args: {
    index: 2,
    indexLimit: 11,
  },
} satisfies Meta<typeof Pagination>;

type Story = StoryObj<typeof meta>;

export default meta;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};

export const DenHaagTheme: Story = {
  name: 'Den Haag theme',
  parameters: { theme: 'denhaag-theme' },
};
