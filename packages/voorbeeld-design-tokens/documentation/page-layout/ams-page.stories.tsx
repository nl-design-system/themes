import type { Meta, StoryObj } from '@storybook/react-vite';
import { Grid, Heading, Page, PageFooter, PageHeader, Paragraph } from '@amsterdam/design-system-react';

const meta = {
  id: 'ams-page',
  title: 'Components/Page Layout/Amsterdam',
  component: Page,
  parameters: { actions: { disable: true } },
  args: {
    children: (
      <>
        <PageHeader brandName="Gemeente Voorbeeld" />
        <main>
          <Grid paddingVertical="large">
            <Grid.Cell span="all">
              <Heading className="ams-mb-m" level={1}>
                Parkeervergunning aanvragen
              </Heading>
              <Paragraph>
                Woont u in een buurt waar u betaald moet parkeren? Dan kunt u een parkeervergunning voor bewoners
                aanvragen. Binnen 8 weken hoort u of u de vergunning krijgt.
              </Paragraph>
            </Grid.Cell>
          </Grid>
        </main>
        <PageFooter>
          <PageFooter.Menu>
            <PageFooter.MenuLink href="#">Contact</PageFooter.MenuLink>
            <PageFooter.MenuLink href="#">Privacyverklaring</PageFooter.MenuLink>
            <PageFooter.MenuLink href="#">Toegankelijkheid</PageFooter.MenuLink>
          </PageFooter.Menu>
        </PageFooter>
      </>
    ),
  },
} satisfies Meta<typeof Page>;

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
