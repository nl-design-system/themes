import { PageNumberNavigation } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  id: 'rhc-page-number-navigation',
  title: 'Components/Page Number Navigation/Rijkshuisstijl Community',
  component: PageNumberNavigation,
  parameters: { actions: { disable: true } },
  args: {
    accessibleName: 'Paginering zoekresultaten',
    linkTemplate: (page: number) => `?pagina=${page}`,
    page: 3,
    totalPages: 12,
  },
} satisfies Meta<typeof PageNumberNavigation>;

type Story = StoryObj<typeof meta>;

export default meta;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};

export const RijkshuisstijlTheme: Story = {
  name: 'Rijkshuisstijl Community theme',
  parameters: { theme: 'rhc-theme' },
};
