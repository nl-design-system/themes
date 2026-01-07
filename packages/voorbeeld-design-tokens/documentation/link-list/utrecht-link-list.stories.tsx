import type { Meta, StoryObj } from '@storybook/react-vite';
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
      { href: '#', children: 'Bekijk alle beschikbare documenten en aanvullende informatie over dit onderwerp' },
      { href: '#', children: 'Contact' },
      { href: '#', children: 'Veelgestelde vragen' },
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
