import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from '@amsterdam/design-system-react';

const meta = {
  id: 'ams-pagination',
  title: 'Components/Page Number Navigation/Amsterdam',
  component: Pagination,
  parameters: { actions: { disable: true } },
  args: {
    accessibleName: 'Paginering zoekresultaten',
    linkTemplate: (page: number) => `?pagina=${page}`,
    page: 3,
    totalPages: 12,
  },
  argTypes: {},
} satisfies Meta<typeof Pagination>;

type Story = StoryObj<typeof meta>;

export default meta;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};

export const AmsterdamTheme: Story = {
  name: 'Amsterdam theme',
  parameters: { theme: 'ams-theme' },
};
