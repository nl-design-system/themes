import type { Meta, StoryObj } from '@storybook/react-vite';
import { Page, PageFooter, PageHeader } from '@amsterdam/design-system-react';

const meta = {
  id: 'ams-page',
  title: 'Components/Page Layout/Amsterdam',
  component: Page,
  parameters: { actions: { disable: true } },
  args: {
    children: (
      <>
        <PageHeader brandName="Header area" />
        <main>Content area</main>
        <PageFooter>Footer area</PageFooter>
      </>
    ),
  },
} satisfies Meta<typeof Page>;

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
