import type { Meta, StoryObj } from '@storybook/react';
import { FormToggle } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'switch',
  component: FormToggle,
  args: { disabled: false, checked: false, invalid: false },
} satisfies Meta<typeof FormToggle>;

type Story = StoryObj<typeof meta>;

export default meta;
export const GemeenteVoorbeeld: Story = { parameters: { theme: 'voorbeeld-theme' } };
export const Utrecht: Story = { parameters: { theme: 'utrecht-theme' } };
