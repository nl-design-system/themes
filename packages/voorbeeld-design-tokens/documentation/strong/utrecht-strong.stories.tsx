import type { Meta, StoryObj } from '@storybook/react-vite';
import { Strong } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-strong',
  title: 'Components/Strong/Utrecht',
  component: Strong,
  args: {
    children: 'Vraag uw parkeervergunning uiterlijk 1 maart aan.',
  },
} satisfies Meta<typeof Strong>;

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
