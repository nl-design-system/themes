import type { Meta, StoryObj } from '@storybook/react-vite';
import { UnorderedList } from '@amsterdam/design-system-react';

const meta = {
  id: 'ams-unordered-list',
  title: 'Components/Unordered List/Amsterdam',
  component: UnorderedList,
  parameters: { actions: { disable: true } },
  args: {},
  argTypes: {},
  render: () => (
    <UnorderedList>
      <UnorderedList.Item>Fase 1: voorbereiden van de werkzaamheden: 25 september tot 27 september.</UnorderedList.Item>
      <UnorderedList.Item>
        Fase 2: start werkzaamheden zuidelijke en half westelijke deel van de rotonde: 27 september tot 19 oktober.
      </UnorderedList.Item>
      <UnorderedList.Item>
        Fase 3: voortgang werkzaamheden zuidelijke en half westelijke deel van de rotonde: 20 oktober tot 11 november.
      </UnorderedList.Item>
      <UnorderedList.Item>
        Fase 4: start werkzaamheden van het noordelijke deel van de rotonde: 13 november tot 6 december.
      </UnorderedList.Item>
      <UnorderedList.Item>
        Fase 5: afronden van de werkzaamheden en verwijderen van tijdelijke maatregelen: 7 december tot 15 december.
      </UnorderedList.Item>
    </UnorderedList>
  ),
} satisfies Meta<typeof UnorderedList>;

type Story = StoryObj<typeof meta>;

export default meta;

export const AmsterdamTheme: Story = {
  name: 'Amsterdam theme',
  parameters: { theme: 'ams-theme' },
};
