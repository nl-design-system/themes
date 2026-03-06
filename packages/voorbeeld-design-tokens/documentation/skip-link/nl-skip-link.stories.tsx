import { Meta, StoryObj } from '@storybook/react-vite';
import { SkipLink } from '@nl-design-system-candidate/skip-link-react/css';

const meta = {
  title: 'Components/Skip Link/Candidate',
  id: 'nl-skip-link',
  component: SkipLink,
  parameters: { actions: { disable: true } },
  argTypes: {
    href: {
      name: 'href',
      type: { name: 'string', required: true },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
  },
  render: (args) => (
    <SkipLink className="nl-skip-link--focus nl-skip-link--visible" href="#main" {...args}>
      Skip to main content
    </SkipLink>
  ),
} satisfies Meta<typeof SkipLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: {
    theme: 'voorbeeld-theme',
  },
};
export const StartTheme: Story = {
  name: 'Start theme',
  parameters: {
    theme: 'start-theme',
  },
};
