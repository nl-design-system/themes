import { Meta, StoryObj } from '@storybook/react-vite';
import { Separator } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  title: 'Components/Separator/Utrecht',
  id: 'utrecht-separator',
  component: Separator,
} satisfies Meta<typeof Separator>;

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
