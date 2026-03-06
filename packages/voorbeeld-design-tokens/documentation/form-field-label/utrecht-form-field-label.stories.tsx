import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormLabel as FormFieldLabel } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-form-field-label',
  title: 'Components/Form Field Label/Utrecht',
  component: FormFieldLabel,
  parameters: { actions: { disable: true } },
  args: {
    for: 'idref',
    children: 'Label',
  },
} satisfies Meta<typeof FormFieldLabel>;

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
