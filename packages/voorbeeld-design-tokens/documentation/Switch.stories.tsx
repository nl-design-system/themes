import type { Meta, StoryObj } from '@storybook/react';
import { FormToggle } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  component: FormToggle,
  args: { disabled: false, checked: false, invalid: false },
} satisfies Meta<typeof FormToggle>;

type Story = StoryObj<typeof meta>;

export default meta;
export const GemeenteVoorbeeld: Story = {};
export const Utrecht: Story = { parameters: { theme: 'utrecht-theme' } };
