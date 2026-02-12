import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormToggle } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-form-toggle',
  title: 'Components/Switch/Utrecht',
  component: FormToggle,
  args: { disabled: false, checked: false, invalid: false },
} satisfies Meta<typeof FormToggle>;

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
