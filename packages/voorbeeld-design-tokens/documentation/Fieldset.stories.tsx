import type { Meta, StoryObj } from '@storybook/react';
import { Fieldset, FieldsetLegend } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'fieldset',
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

export const GemeenteVoorbeeld: Story = { parameters: { theme: 'voorbeeld-theme' } };
export const Utrecht: Story = { parameters: { theme: 'utrecht-theme' } };
