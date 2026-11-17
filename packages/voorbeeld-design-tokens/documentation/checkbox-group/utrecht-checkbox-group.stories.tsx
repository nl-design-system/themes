import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckboxGroup } from '@utrecht/checkbox-group-react/css';
import { FormFieldCheckbox } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-checkbox-group',
  title: 'Components/Checkbox Group/Utrecht',
  component: CheckboxGroup,
  parameters: { actions: { disable: true } },
  args: {
    label: 'Hoe wilt u dat wij contact met u opnemen?',
    description: 'Wij nemen alleen contact met u op via de manieren die u kiest.',
  },
  render: (args) => (
    <CheckboxGroup {...args}>
      <FormFieldCheckbox name="contact" value="telefoon" label="Telefoon" defaultChecked />
      <FormFieldCheckbox name="contact" value="e-mail" label="E-mail" />
      <FormFieldCheckbox name="contact" value="brief" label="Brief" />
    </CheckboxGroup>
  ),
} satisfies Meta<typeof CheckboxGroup>;

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
