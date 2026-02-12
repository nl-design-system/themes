import type { Meta, StoryObj } from '@storybook/react-vite';
import { SkipLink } from '@amsterdam/design-system-react';

const meta = {
  id: 'ams-skip-link',
  title: 'Components/Skip Link/Amsterdam',
  component: SkipLink,
  parameters: { actions: { disable: true } },
  args: {
    href: '#main',
    children: 'Naar de inhoud',
  },
  argTypes: {},
  render: (args) => (
    <SkipLink
      {...args}
      style={{
        clip: 'initial',
        clipPath: 'initial',
        height: 'initial',
        overflow: 'initial',
        position: 'initial',
        whiteSpace: 'initial',
        width: 'initial',
      }}
    />
  ),
} satisfies Meta<typeof SkipLink>;

type Story = StoryObj<typeof meta>;

export default meta;

export const AmsterdamTheme: Story = {
  name: 'Amsterdam theme',
  parameters: { theme: 'ams-theme' },
};
