import type { Meta, StoryObj } from '@storybook/react-vite';
import { Image, Figure } from '@amsterdam/design-system-react';

const meta = {
  id: 'ams-figure',
  title: 'Components/Figure/Amsterdam',
  component: Figure.Caption,
  parameters: { actions: { disable: true } },
  args: {
    children: 'Utrecht stadskantoor',
  },
  render: ({ children, ...args }) => (
    <Figure>
      <Image alt="Utrecht stadskantoor" height={830} src="images/stadskantoor.jpg" width={1040} />
      <Figure.Caption {...args}>{children}</Figure.Caption>
    </Figure>
  ),
} satisfies Meta<typeof Figure.Caption>;

type Story = StoryObj<typeof meta>;

export default meta;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};

export const AmsterdamTheme: Story = {
  name: 'Amsterdam theme',
  parameters: { theme: 'ams-theme' },
};
