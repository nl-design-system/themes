import type { Meta, StoryObj } from '@storybook/react';
import { Textbox } from '@utrecht/component-library-react/dist/css-module';

const meta = {
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
export const GemeenteVoorbeeld: Story = {};
export const Utrecht: Story = { parameters: { theme: 'utrecht-theme' } };
