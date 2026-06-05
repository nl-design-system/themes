import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageBody } from '@utrecht/page-body-react';
import { PageLayout } from '@utrecht/page-layout-react/css';
import { PageHeader, PageFooter } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-page-layout',
  title: 'Components/Page Layout/Utrecht',
  component: PageLayout,
  args: {
    children: (
      <>
        <PageHeader>Header area</PageHeader>,
        <PageBody>
          <main>Content area</main>
        </PageBody>
        ,<PageFooter>Footer area</PageFooter>,
      </>
    ),
  },
} satisfies Meta<typeof PageLayout>;

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
