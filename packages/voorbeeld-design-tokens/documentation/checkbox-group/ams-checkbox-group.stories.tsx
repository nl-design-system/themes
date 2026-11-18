import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox, Column, FieldSet, Paragraph } from '@amsterdam/design-system-react';

const meta = {
  id: 'ams-checkbox-group',
  title: 'Components/Checkbox Group/Amsterdam',
  component: FieldSet,
  parameters: { actions: { disable: true } },
  args: {
    legend: 'Hoe wilt u dat wij contact met u opnemen?',
  },
  render: (args) => (
    <FieldSet {...args} aria-describedby="ams-checkbox-group-description" role="group">
      <Paragraph id="ams-checkbox-group-description" size="small">
        Wij nemen alleen contact met u op via de manieren die u kiest.
      </Paragraph>
      <Column gap="x-small">
        <Checkbox name="contact" value="telefoon" defaultChecked>
          Telefoon
        </Checkbox>
        <Checkbox name="contact" value="e-mail">
          E-mail
        </Checkbox>
        <Checkbox name="contact" value="brief">
          Brief
        </Checkbox>
      </Column>
    </FieldSet>
  ),
} satisfies Meta<typeof FieldSet>;

type Story = StoryObj<typeof meta>;

export default meta;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};

export const AmsterdamTheme: Story = {
  name: 'Amsterdam theme',
  parameters: { theme: 'ams-theme' },
};
