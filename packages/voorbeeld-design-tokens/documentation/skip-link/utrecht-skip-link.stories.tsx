import { Meta, StoryObj } from '@storybook/react-vite';
import { SkipLink } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  title: 'Components/Skip Link/Utrecht',
  id: 'utrecht-skip-link',
  component: SkipLink,
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
    <SkipLink className="utrecht-skip-link--focus utrecht-skip-link--visible" href="#main" {...args}>
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
export const UtrechtTheme: Story = {
  name: 'Utrecht theme',
  parameters: {
    theme: 'utrecht-theme',
  },
};
