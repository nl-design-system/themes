import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActionSingle } from '@gemeente-denhaag/action';
import '@gemeente-denhaag/action/index.css';
import { StatusBadge } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'denhaag-task-navigation',
  title: 'Components/Task Navigation/Den Haag',
  component: ActionSingle,
  parameters: { actions: { disable: true } },
  args: {
    children: 'Wij hebben documenten van u nodig',
    link: '#',
    details: <StatusBadge status="warning">Actie nodig</StatusBadge>,
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
  name: 'Voorbeeld theme, met status badge',
  parameters: { theme: 'voorbeeld-theme' },
};
export const DenHaagNaamTheme: Story = {
  name: 'Den Haag theme, met status badge',
  parameters: { theme: 'denhaag-theme' },
};
