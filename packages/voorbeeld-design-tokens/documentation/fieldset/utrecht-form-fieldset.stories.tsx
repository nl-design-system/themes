import type { Meta, StoryObj } from '@storybook/react-vite';
import { Fieldset, FieldsetLegend } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-form-fieldset',
  title: 'Components/Fieldset/Utrecht',
  component: Fieldset,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
  render: (args) => (
    <Fieldset {...args}>
      <FieldsetLegend>Fieldset legend</FieldsetLegend>
      <p>Fieldset body</p>
    </Fieldset>
  ),
} satisfies Meta<typeof Fieldset>;

export default meta;

type Story = StoryObj<typeof meta>;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};
export const UtrechtTheme: Story = {
  name: 'Utrecht theme',
  parameters: { theme: 'utrecht-theme' },
};
