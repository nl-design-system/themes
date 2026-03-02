import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActionSingle } from '@gemeente-denhaag/action';
import '@gemeente-denhaag/action/index.css';

const meta = {
  id: 'denhaag-task-navigation',
  title: 'Components/Task Navigation/Den Haag',
  component: ActionSingle,
  parameters: { actions: { disable: true } },
  args: {
    children: 'Wij hebben documenten van u nodig',
    link: '#',
    details: '19 februari 2026',
  },
  decorators: [
    (Story) => (
      <div style={{ maxInlineSize: '600px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ActionSingle>;

type Story = StoryObj<typeof meta>;

export default meta;
export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};
export const DenHaagNaamTheme: Story = {
  name: 'Den Haag theme',
  parameters: { theme: 'denhaag-theme' },
};
