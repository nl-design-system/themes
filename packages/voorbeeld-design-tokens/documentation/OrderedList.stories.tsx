import type { Meta, StoryObj } from '@storybook/react';
import { OrderedList, OrderedListItem } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'ordered-list',
  component: OrderedList,
  parameters: { actions: { disable: true } },
  args: {
    children: ['Een', 'Twee', 'Drie', 'Vier'].map((text) => <OrderedListItem key={text}>{text}</OrderedListItem>),
  },
} satisfies Meta<typeof OrderedList>;

type Story = StoryObj<typeof meta>;

export default meta;
export const GemeenteVoorbeeld: Story = { parameters: { theme: 'voorbeeld-theme' } };
export const Utrecht: Story = { parameters: { theme: 'utrecht-theme' } };