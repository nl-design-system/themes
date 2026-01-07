import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormField, Paragraph, Textbox } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-form-field',
  title: 'Components/Form Field/Utrecht',
  component: FormField,
  render: (args) => {
    const { description, invalid, label } = args;
    return (
      <FormField invalid={invalid} type="text">
        <Paragraph className="utrecht-form-field__label">{label}</Paragraph>
        <Paragraph className="utrecht-form-field__input">
          <Textbox />
        </Paragraph>
        {description}
      </FormField>
    );
  },
  args: {
    description: 'Maximaal 140 karakters',
    disabled: false,
    id: '3a43bbe9-635c-46c2-86cd-b0aa63855598',
    invalid: true,
    invalidDescription: 'Fout: het veld is nog leeg. Vul een bericht in.',
    label: 'Tweet',
    name: 'message',
    value: '',
    required: true,
  },
} satisfies Meta<typeof FormField>;

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
