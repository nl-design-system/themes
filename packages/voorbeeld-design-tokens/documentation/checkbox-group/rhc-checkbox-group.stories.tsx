import { FormFieldCheckboxGroup, FormFieldCheckboxOption } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  id: 'rhc-checkbox-group',
  title: 'Components/Checkbox Group/Rijkshuisstijl Community',
  component: FormFieldCheckboxGroup,
  parameters: { actions: { disable: true } },
  args: {
    label: 'Hoe wilt u dat wij contact met u opnemen?',
    description: 'Wij nemen alleen contact met u op via de manieren die u kiest.',
  },
  render: (args) => (
    <FormFieldCheckboxGroup {...args}>
      <FormFieldCheckboxOption name="contact" value="telefoon" label="Telefoon" defaultChecked />
      <FormFieldCheckboxOption name="contact" value="e-mail" label="E-mail" />
      <FormFieldCheckboxOption name="contact" value="brief" label="Brief" />
    </FormFieldCheckboxGroup>
  ),
} satisfies Meta<typeof FormFieldCheckboxGroup>;

type Story = StoryObj<typeof meta>;

export default meta;

// Een story met het voorbeeld thema
export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};

// Een story met het thema van de organisatie die de component bijdraagt
export const RijkshuisstijlTheme: Story = {
  name: 'Rijkshuisstijl Community theme',
  parameters: { theme: 'rhc-theme' },
};
