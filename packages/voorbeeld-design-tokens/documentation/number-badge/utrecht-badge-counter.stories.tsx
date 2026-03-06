import { Meta, StoryObj } from '@storybook/react-vite';
import { BadgeCounter } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-badge-counter',
  title: 'Components/Number Badge/Utrecht',
  component: BadgeCounter,
  args: {
    children: '9',
  },
} satisfies Meta<typeof BadgeCounter>;

export default meta;

type Story = StoryObj<typeof meta>;
export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: {
    theme: 'voorbeeld-theme',
  },
};
export const UtrechtTheme: Story = {
  name: 'Utrecht theme',
  parameters: {
    theme: 'utrecht-theme',
  },
};
