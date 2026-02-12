import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-button',
  title: 'Components/Button/Utrecht',
  component: Button,
  argTypes: {
    disabled: { type: 'boolean' },
    busy: { type: 'boolean' },
    pressed: { type: 'boolean' },
    children: { name: 'children (button text)', type: 'string' },
    appearance: {
      type: 'string',
      control: {
        type: 'select',
        labels: {
          '': 'none',
          'primary-action-button': 'primary',
          'secondary-action-button': 'secondary',
          'subtle-button': 'subtle',
        },
      },
      options: ['', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
    },
    hint: {
      type: 'string',
      control: { type: 'select', labels: { '': 'none' } },
      options: ['', 'ready', 'warning', 'danger'],
    },
  },
  args: {
    appearance: 'secondary-action-button',
    children: 'Button',
    disabled: false,
    pressed: false,
    busy: false,
  },
} satisfies Meta<typeof Button>;

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
