import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumb } from '@amsterdam/design-system-react';

const meta = {
  id: 'ams-breadcrumb',
  title: 'Components/Breadcrumb Navigation/Amsterdam',
  component: Breadcrumb,
  parameters: { actions: { disable: true } },
  args: {},
  argTypes: {},
  render: () => (
    <Breadcrumb>
      <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
      <Breadcrumb.Link href="#">Afval</Breadcrumb.Link>
      <Breadcrumb.Link href="#">Bedrijfsafval</Breadcrumb.Link>
      <Breadcrumb.Link href="#">Recyclepunten voor bedrijven</Breadcrumb.Link>
    </Breadcrumb>
  ),
} satisfies Meta<typeof Breadcrumb>;

type Story = StoryObj<typeof meta>;

export default meta;

export const AmsterdamTheme: Story = {
  name: 'Amsterdam theme',
  parameters: { theme: 'ams-theme' },
};
