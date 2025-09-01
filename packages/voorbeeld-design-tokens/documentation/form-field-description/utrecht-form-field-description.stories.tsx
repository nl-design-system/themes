import type { Meta, StoryObj } from '@storybook/react';
import { FormFieldDescription } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-form-field-description',
  title: 'Components/Form Field Description/Utrecht',
  component: FormFieldDescription,
  parameters: { actions: { disable: true } },
  args: {
    id: null,
    children: '',
    status: '',
    distanced: false,
  },
} satisfies Meta<typeof FormFieldDescription>;

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
