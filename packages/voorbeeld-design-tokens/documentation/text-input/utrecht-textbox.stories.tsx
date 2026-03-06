import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textbox } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-textbox',
  title: 'Components/Text Input/Utrecht',
  component: Textbox,
  args: { disabled: false, readOnly: false, required: false },
  argTypes: {
    type: {
      control: 'select',
      options: [
        'date',
        'datetime-local',
        'email',
        'month',
        'number',
        'password',
        'search',
        'tel',
        'text',
        'time',
        'url',
        'week',
      ],
    },
  },
} satisfies Meta<typeof Textbox>;

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
