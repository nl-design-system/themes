import { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'textarea',
  component: Textarea,
  args: { disabled: false, readOnly: false, required: false },
} satisfies Meta<typeof Textarea>;

type Story = StoryObj<typeof meta>;

export default meta;
export const GemeenteVoorbeeld: Story = { parameters: { theme: 'voorbeeld-theme' } };
export const Utrecht: Story = { parameters: { theme: 'utrecht-theme' } };
