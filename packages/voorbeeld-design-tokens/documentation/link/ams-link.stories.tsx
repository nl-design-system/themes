import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from '@amsterdam/design-system-react';

const meta = {
  id: 'ams-link',
  title: 'Components/Link/Amsterdam',
  component: Link,
  parameters: { actions: { disable: true } },
  args: {
    href: 'https://example.com/',
    children: 'Example link',
  },
  argTypes: {},
} satisfies Meta<typeof Link>;

type Story = StoryObj<typeof meta>;

export default meta;

export const AmsterdamTheme: Story = {
  name: 'Amsterdam theme',
  parameters: { theme: 'ams-theme' },
};
