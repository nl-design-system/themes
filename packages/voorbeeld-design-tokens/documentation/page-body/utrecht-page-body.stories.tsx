import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageBody } from '@utrecht/page-body-react/css';

const meta = {
  id: 'utrecht-page-body',
  title: 'Components/Page Body/Utrecht',
  component: PageBody,
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
} satisfies Meta<typeof PageBody>;

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
