import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, FormLabel } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  component: Checkbox,
  args: { disabled: false },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Checkbox {...args} id="checkbox" />
      <FormLabel htmlFor="checkbox">Label</FormLabel>
    </div>
  ),
} satisfies Meta<typeof Checkbox>;

type Story = StoryObj<typeof meta>;

export default meta;
export const GemeenteVoorbeeld: Story = { parameters: { theme: 'voorbeeld-theme' } };
export const Utrecht: Story = { parameters: { theme: 'utrecht-theme' } };
