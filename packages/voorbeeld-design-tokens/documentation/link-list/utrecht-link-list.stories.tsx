import type { Meta, StoryObj } from '@storybook/react';
import { LinkList } from '@utrecht/component-library-react/dist';
import { UtrechtIconChevronRight } from '@utrecht/web-component-library-react';

const meta = {
  id: 'utrecht-link-list',
  title: 'Components/Link List/Utrecht',
  component: LinkList,
  parameters: { actions: { disable: true } },
  args: {
    icon: () => <UtrechtIconChevronRight />,
    links: [
      { href: '#', children: 'Link 1 with so much content wow look how long!' },
      { href: '#', children: 'Link 2' },
      { href: '#', children: 'Link 3' },
    ],
  },
} satisfies Meta<typeof LinkList>;

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
