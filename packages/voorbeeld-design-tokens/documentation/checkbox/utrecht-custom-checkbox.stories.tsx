import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox, FormLabel } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-custom-checkbox',
  title: 'Components/Checkbox/Utrecht',
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
export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};
export const UtrechtTheme: Story = {
  name: 'Utrecht theme',
  parameters: { theme: 'utrecht-theme' },
};
