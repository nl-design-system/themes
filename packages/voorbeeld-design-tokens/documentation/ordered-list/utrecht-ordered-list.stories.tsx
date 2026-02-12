import type { Meta, StoryObj } from '@storybook/react-vite';
import { OrderedList, OrderedListItem } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-ordered-list',
  title: 'Components/Ordered List/Utrecht',
  component: OrderedList,
  parameters: { actions: { disable: true } },
  args: {
    children: ['Een', 'Twee', 'Drie', 'Vier'].map((text) => <OrderedListItem key={text}>{text}</OrderedListItem>),
  },
} satisfies Meta<typeof OrderedList>;

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
