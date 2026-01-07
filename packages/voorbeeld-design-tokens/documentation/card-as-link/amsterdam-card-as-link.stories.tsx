import type { Meta, StoryObj } from '@storybook/react-vite';
import { Paragraph } from '@amsterdam/design-system-react';
import { Card as CardAsLink } from '@amsterdam/design-system-react';

const meta = {
  id: 'ams-card-as-link',
  title: 'Components/Card as Link/Amsterdam',
  component: CardAsLink,
  parameters: { actions: { disable: true } },
  args: {},
  render: () => (
    <CardAsLink
      style={{
        maxWidth: '24rem',
      }}
    >
      <CardAsLink.Heading level={2}>
        <CardAsLink.Link href="/">Parkeren + Reizen (P+R)</CardAsLink.Link>
      </CardAsLink.Heading>
      <Paragraph>U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad.</Paragraph>
    </CardAsLink>
  ),
} satisfies Meta<typeof CardAsLink>;

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
