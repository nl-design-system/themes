import type { Meta, StoryObj } from '@storybook/react-vite';
import { Grid, Paragraph } from '@amsterdam/design-system-react';

const meta = {
  id: 'ams-grid',
  title: 'Components/Grid/Amsterdam',
  component: Grid,
  parameters: { actions: { disable: true } },
  args: {
    children: [
      <Grid.Cell key="1" span={4}>
        <Paragraph>Breng uw gescheiden afval naar een afvalcontainer, een winkelier die deze producten verkoopt of een inleverpunt in de buurt. Of u brengt alles in 1 keer naar een Recyclepunt.</Paragraph>
      </Grid.Cell>,
      <Grid.Cell key="2" span={4}>
        <Paragraph>U kunt uw glas, papier, karton, textiel en restafval kwijt in de containers bij u in de buurt. In sommige buurten staan ook containers voor groente-, fruit- en etensresten (gfe/t) en brood.</Paragraph>
      </Grid.Cell>,
      <Grid.Cell key="3" span={4}>
        <Paragraph>Plastic verpakkingen en metaal mogen bij het restafval. De verwerker haalt dit er zelf uit.</Paragraph>
      </Grid.Cell>,
    ],
  },
  argTypes: {},
} satisfies Meta<typeof Grid>;

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
