import type { Meta, StoryObj } from '@storybook/react';
import { ColorSample } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utecht-color-sample',
  title: 'Components/ColorSample/Utrecht',
  component: ColorSample,

  args: {
    children: <ColorSample />,
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
