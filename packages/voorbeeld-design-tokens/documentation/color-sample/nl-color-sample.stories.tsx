import type { Meta, StoryObj } from '@storybook/react-vite';
import { ColorSample } from '@nl-design-system-candidate/color-sample-react/css';

const meta = {
  id: 'nl-color-sample',
  title: 'Components/Color Sample/Candidate',
  component: ColorSample,
  parameters: { actions: { disable: true } },
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

export const StartTheme: Story = {
  name: 'Start theme',
  parameters: { theme: 'start-theme' },
};
