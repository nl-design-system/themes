import { Meta, StoryObj } from '@storybook/react-vite';
import { Select, SelectOption, type SelectOptionProps } from '@utrecht/component-library-react/dist/css-module';

const options: SelectOptionProps[] = [
  { value: '', label: 'Select an option', disabled: true },
  { value: '1', label: 'Option #1' },
  { value: '2', label: 'Option #2' },
  { value: '3', label: 'Option #3' },
  { value: '4', label: 'Option #4' },
];

const meta = {
  title: 'Components/Select/Utrecht',
  id: 'utrecht-select',
  component: Select,
  argTypes: {
    disabled: {
      name: 'disabled',
      type: { name: 'boolean', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    invalid: {
      name: 'invalid',
      type: { name: 'boolean', required: false },
      table: {
        defaultValue: { summary: '' },
      },
    },
    required: {
      name: 'required',
      type: { name: 'boolean', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    noscript: {
      name: 'noscript',
      type: { name: 'boolean', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    value: {
      name: 'value',
      type: { name: 'string' },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
  },
  render: ({ ...args }) => (
    <Select {...args}>
      {Array.isArray(options) &&
        options.map(({ label, value, disabled }, index) => (
          <SelectOption key={index} value={value} disabled={disabled}>
            {label}
          </SelectOption>
        ))}
    </Select>
  ),
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: {
    theme: 'voorbeeld-theme',
  },
};
export const UtrechtTheme: Story = {
  name: 'Utrecht theme',
  parameters: {
    theme: 'utrecht-theme',
  },
};
