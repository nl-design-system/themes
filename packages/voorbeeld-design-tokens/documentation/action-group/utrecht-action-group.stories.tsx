import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, ButtonGroup as ActionGroup } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-action-group',
  title: 'Components/Action Group/Utrecht',
  component: ActionGroup,
  parameters: { actions: { disable: true } },
  args: {
    children: [
      <Button key={1} appearance="primary-action-button">
        Opslaan en doorgaan
      </Button>,
      <Button key={2} appearance="secondary-action-button">
        Annuleren
      </Button>,
    ],
  },
} satisfies Meta<typeof ActionGroup>;

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
