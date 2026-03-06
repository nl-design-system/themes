import type { Meta, StoryObj } from '@storybook/react-vite';
import { Mark } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-mark',
  title: 'Components/Mark/Utrecht',
  component: Mark,
  args: {
    children: 'Mark my words!',
  },
} satisfies Meta<typeof Mark>;

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
