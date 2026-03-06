import type { Meta, StoryObj } from '@storybook/react-vite';
import { ColorSample } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-color-sample',
  title: 'Components/Color Sample/Utrecht',
  component: ColorSample,
  args: {
    color: '#007DAD',
  },
} satisfies Meta<typeof ColorSample>;

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
