import { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-textarea',
  title: 'Components/Textarea/Utrecht',
  component: Textarea,
  args: { disabled: false, readOnly: false, required: false },
} satisfies Meta<typeof Textarea>;

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
