import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-icon',
  title: 'Components/Icon/Utrecht',
  component: Icon,
  parameters: { actions: { disable: true } },
  args: {
    children: '→',
  },
} satisfies Meta<typeof Icon>;

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
