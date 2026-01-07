import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioButton } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-radio-button',
  title: 'Components/Radio Button/Utrecht',
  component: RadioButton,
  args: { disabled: false, invalid: false, name: 'radio' },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <RadioButton {...args} id="radio-1" value="1" />
      <label htmlFor="radio-1">Label</label>
    </div>
  ),
} satisfies Meta<typeof RadioButton>;

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
