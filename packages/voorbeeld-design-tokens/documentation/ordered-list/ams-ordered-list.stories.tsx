import type { Meta, StoryObj } from '@storybook/react-vite';
import { OrderedList } from '@amsterdam/design-system-react';

const meta = {
  id: 'ams-ordered-list',
  title: 'Components/Ordered List/Amsterdam',
  component: OrderedList,
  parameters: { actions: { disable: true } },
  args: {},
  argTypes: {},
  render: () => (
    <OrderedList>
      <OrderedList.Item>Fase 1: voorbereiden van de werkzaamheden: 25 september tot 27 september.</OrderedList.Item>
      <OrderedList.Item>
        Fase 2: start werkzaamheden zuidelijke en half westelijke deel van de rotonde: 27 september tot 19 oktober.
      </OrderedList.Item>
      <OrderedList.Item>
        Fase 3: voortgang werkzaamheden zuidelijke en half westelijke deel van de rotonde: 20 oktober tot 11 november.
      </OrderedList.Item>
      <OrderedList.Item>
        Fase 4: start werkzaamheden van het noordelijke deel van de rotonde: 13 november tot 6 december.
      </OrderedList.Item>
      <OrderedList.Item>
        Fase 5: afronden van de werkzaamheden en verwijderen van tijdelijke maatregelen: 7 december tot 15 december.
      </OrderedList.Item>
    </OrderedList>
  ),
} satisfies Meta<typeof OrderedList>;

type Story = StoryObj<typeof meta>;

export default meta;

export const AmsterdamTheme: Story = {
  name: 'Amsterdam theme',
  parameters: { theme: 'ams-theme' },
};
