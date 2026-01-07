import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion, Paragraph } from '@amsterdam/design-system-react';

const meta = {
  id: 'ams-accordion',
  title: 'Components/Accordion/Amsterdam',
  component: Accordion,
  parameters: { actions: { disable: true } },
  args: {},
  argTypes: {},
  render: () => (
    <Accordion headingLevel={1}>
      <Accordion.Section label="Verhuizing doorgeven per post">
        <Paragraph>
          We richten de rotonde bij de Bouhuijstunnel opnieuw in en maken het veiliger. We passen ook het fiets- en
          voetpad aan. De rotonde bij de Bouhuijstunnel verbindt de Korte Muiderweg, de Stationsweg en de
          Leeuwenveldseweg met elkaar.
        </Paragraph>
      </Accordion.Section>
      <Accordion.Section label="Dit grof afval halen we op">
        <Paragraph>
          De Zuidas Community Garden is 1 van de projecten van de Green Business Club Zuidas. Het doel van deze club is
          om ervoor te zorgen dat de Zuidas steeds duurzamer wordt. 70 bedrijven en organisaties werken daarvoor in
          verschillende projecten samen. De tuin aan de Domenico Scarlattilaan is elke dag open van 9.00 tot 17.00 uur.
        </Paragraph>
      </Accordion.Section>
      <Accordion.Section label="Lees de voorwaarden">
        <Paragraph>
          Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen,
          bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen
          in de bijstand beginnen met werken en binnen 6 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’
          meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo
          makkelijker om weer een nieuwe baan te zoeken.
        </Paragraph>
      </Accordion.Section>
    </Accordion>
  ),
} satisfies Meta<typeof Accordion>;

type Story = StoryObj<typeof meta>;

export default meta;

export const AmsterdamTheme: Story = {
  name: 'Amsterdam theme',
  parameters: { theme: 'ams-theme' },
};
