import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormFieldDescription } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-form-field-description',
  title: 'Components/Form Field Description/Utrecht',
  component: FormFieldDescription,
  parameters: { actions: { disable: true } },
  args: {
    id: null,
    children: 'Dit is een verplicht veld en mag niet leeg blijven.',
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
