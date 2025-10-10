import { ComponentStory, STORY_GROUPS } from './component-stories-util';
import {
  Accordion,
  Blockquote,
  Breadcrumb,
  Button,
  Dialog as ModalDialog,
  Card as CardAsLink,
  Heading,
  Link,
  OrderedList,
  Paragraph,
  SkipLink,
  UnorderedList,
  PageHeader,
  Grid,
  LinkList,
  PageFooter,
} from '@amsterdam/design-system-react';

import {
  CameraIcon,
  ClockIcon,
  FacebookIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  XIcon,
} from '@amsterdam/design-system-react-icons';

const socialPlatforms = [
  { icon: XIcon, name: 'X' },
  { icon: FacebookIcon, name: 'Facebook' },
  { icon: LinkedinIcon, name: 'Linkedin' },
  { icon: CameraIcon, name: 'Instagram' },
];

export const AMS_COMPONENT_STORIES: ComponentStory[] = [
  {
    storyId: 'react-ams-button--default',
    component: 'ams-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Amsterdam Button',
    render: () => <Button>Button label</Button>,
  },
  {
    storyId: 'react-ams-heading--level-1',
    component: 'ams-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Amsterdam Heading',
    render: () => <Heading level={1}>The Quick Brown Fox Jumps Over The Lazy Dog</Heading>,
  },
  {
    storyId: 'react-ams-heading--level-2',
    component: 'ams-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Amsterdam Heading',
    render: () => <Heading level={2}>The Quick Brown Fox Jumps Over The Lazy Dog</Heading>,
  },
  {
    storyId: 'react-ams-heading--level-3',
    component: 'ams-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Amsterdam Heading',
    render: () => <Heading level={3}>The Quick Brown Fox Jumps Over The Lazy Dog</Heading>,
  },
  {
    storyId: 'react-ams-heading--level-4',
    component: 'ams-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Amsterdam Heading',
    render: () => <Heading level={4}>The Quick Brown Fox Jumps Over The Lazy Dog</Heading>,
  },
  /* level 5 and 6 are not supported in TypeScript */
  /*
  {
    storyId: 'react-ams-heading--level-5',
    component: 'ams-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Amsterdam Heading',
    render: () => <Heading level={5 as any}>The Quick Brown Fox Jumps Over The Lazy Dog</Heading>,
  },
  {
    storyId: 'react-ams-heading--level-6',
    component: 'ams-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Amsterdam Heading',
    render: () => <Heading level={6 as any}>The Quick Brown Fox Jumps Over The Lazy Dog</Heading>,
  },
  */
  {
    storyId: 'react-ams-paragraph',
    component: 'ams-paragraph',
    group: STORY_GROUPS['PARAGRAPH'],
    name: 'Amsterdam Paragraph',
    render: () => <Paragraph>The Quick Brown Fox Jumps Over The Lazy Dog</Paragraph>,
  },
  {
    storyId: 'react-ams-ordered-list',
    component: 'ams-ordered-list',
    group: STORY_GROUPS['LISTS'],
    name: 'Amsterdam Ordered List',
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
  },
  {
    storyId: 'react-ams-unordered-list',
    component: 'ams-unordered-list',
    group: STORY_GROUPS['LISTS'],
    name: 'Amsterdam Unordered List',
    render: () => (
      <UnorderedList>
        <UnorderedList.Item>
          Fase 1: voorbereiden van de werkzaamheden: 25 september tot 27 september.
        </UnorderedList.Item>
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
  },
  {
    storyId: 'react-ams-link',
    component: 'ams-link',
    group: STORY_GROUPS['LINK'],
    name: 'Amsterdam Link',
    render: () => <Link href="https://example.com/">Example link</Link>,
  },
  {
    storyId: 'react-ams-blockquote',
    component: 'ams-blockquote',
    // group: ...,
    name: 'Amsterdam Blockquote',
    render: () => (
      <Blockquote>
        Ik hou zo van een Amsterdamse kroeg en van het zwijgend met gedachten spelen. Alleen het sluitingsuur, voor mij
        en velen, komt steeds te laat en altijd weer te vroeg.
      </Blockquote>
    ),
  },
  {
    storyId: 'react-ams-accordion',
    component: 'ams-accordion',
    // group: ...,
    name: 'Amsterdam Accordion',
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
            De Zuidas Community Garden is 1 van de projecten van de Green Business Club Zuidas. Het doel van deze club
            is om ervoor te zorgen dat de Zuidas steeds duurzamer wordt. 70 bedrijven en organisaties werken daarvoor in
            verschillende projecten samen. De tuin aan de Domenico Scarlattilaan is elke dag open van 9.00 tot 17.00
            uur.
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
  },
  {
    storyId: 'react-ams-skip-link',
    component: 'ams-skip-link',
    // group: ...,
    name: 'Amsterdam Skip link',
    render: () => (
      <SkipLink
        href="#"
        style={{
          clip: 'initial',
          clipPath: 'initial',
          height: 'initial',
          overflow: 'initial',
          position: 'initial',
          whiteSpace: 'initial',
          width: 'initial',
        }}
      >
        Direct naar inhoud
      </SkipLink>
    ),
  },
  {
    storyId: 'react-ams-breadcrumb',
    component: 'ams-breadcrumb',
    // group: ...,
    name: 'Amsterdam Breadcrumb',
    render: () => (
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Afval</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Bedrijfsafval</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Recyclepunten voor bedrijven</Breadcrumb.Link>
      </Breadcrumb>
    ),
  },
  {
    storyId: 'react-ams-card-as-link--default',
    component: 'ams-card-as-link',
    group: STORY_GROUPS['CARD_AS_LINK'],
    name: 'Amsterdam Card as Link',
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
  },
  {
    storyId: 'react-ams-page-header--default',
    component: 'ams-page-header',
    group: STORY_GROUPS['PAGE_HEADER'],
    name: 'Amsterdam Page Header',
    render: () => {
      const defaultStoryLinks = [
        [
          { href: '#', label: 'Kaart' },
          { href: '#', label: 'Panoramabeelden' },
          { href: '#', label: 'Tabellen' },
          { href: '#', label: 'Catalogus (Beta)' },
          { href: '#', label: 'Kaarten' },
          { href: '#', label: 'Datacatalogus' },
        ],
        [
          { href: '#', label: 'Over de organisatie' },
          { href: '#', label: 'Over het dataplatform' },
        ],
        [
          { href: '#', label: 'Help' },
          { href: '#', label: 'Contact' },
        ],
      ];
      return (
        <PageHeader
          brandName="Data Amsterdam"
          menuItems={[
            <PageHeader.MenuLink href="#" key={1} lang="en">
              English
            </PageHeader.MenuLink>,
            <PageHeader.MenuLink fixed href="#" key={2}>
              Zoeken
            </PageHeader.MenuLink>,
          ]}
        >
          <Grid paddingVertical="large">
            <PageHeader.GridCellNarrowWindowOnly span="all">
              <LinkList>
                <LinkList.Link href="#" lang="en">
                  English
                </LinkList.Link>
              </LinkList>
            </PageHeader.GridCellNarrowWindowOnly>
            <Grid.Cell span={4}>
              <Heading className="ams-mb-s" level={3}>
                Onderdelen
              </Heading>
              <LinkList>
                {defaultStoryLinks[0]?.map(({ href, label }) => (
                  <LinkList.Link href={href} key={label}>
                    {label}
                  </LinkList.Link>
                ))}
              </LinkList>
            </Grid.Cell>
            <Grid.Cell span={4}>
              <Heading className="ams-mb-s" level={3}>
                Over ons
              </Heading>
              <LinkList>
                {defaultStoryLinks[1]?.map(({ href, label }) => (
                  <LinkList.Link href={href} key={label}>
                    {label}
                  </LinkList.Link>
                ))}
              </LinkList>
            </Grid.Cell>
            <Grid.Cell span={4}>
              <Heading className="ams-mb-s" level={3}>
                Help
              </Heading>
              <LinkList>
                {defaultStoryLinks[2]?.map(({ href, label }) => (
                  <LinkList.Link href={href} key={label}>
                    {label}
                  </LinkList.Link>
                ))}
              </LinkList>
            </Grid.Cell>
          </Grid>
        </PageHeader>
      );
    },
  },
  {
    storyId: 'react-ams-page-footer--default',
    component: 'ams-page-footer',
    group: STORY_GROUPS['PAGE_FOOTER'],
    name: 'Amsterdam Page Footer',
    render: () => (
      <PageFooter>
        <>
          <PageFooter.Spotlight key={1}>
            <Grid paddingVertical="x-large">
              <Grid.Cell span={4}>
                <Heading className="ams-mb-s" color="inverse" level={2} size="level-4">
                  Meer weten
                </Heading>
                <LinkList>
                  {['Veel gestelde vragen', 'Over ons', 'Werken bij', 'Kalender', 'Uit in Amsterdam', 'Bronnen'].map(
                    (label, index) => (
                      <LinkList.Link color="inverse" href="#" key={index} size="small">
                        {label}
                      </LinkList.Link>
                    ),
                  )}
                </LinkList>
              </Grid.Cell>
              <Grid.Cell span={4} start={{ narrow: 1, medium: 5, wide: 5 }}>
                <Heading className="ams-mb-s" color="inverse" level={2} size="level-4">
                  Contact
                </Heading>
                <Paragraph className="ams-mb-m" color="inverse" size="small">
                  Hebt u een vraag en kunt u het antwoord niet vinden op deze website? Neem dan contact met ons op.
                </Paragraph>
                <LinkList>
                  <LinkList.Link color="inverse" href="mailto:redactie@amsterdam.nl" icon={MailIcon} size="small">
                    E-mail
                  </LinkList.Link>
                  <LinkList.Link color="inverse" href="tel:+3114020" icon={PhoneIcon} size="small">
                    14 020
                  </LinkList.Link>
                  <LinkList.Link color="inverse" href="#" icon={ClockIcon} size="small">
                    Contactgegevens en openingstijden
                  </LinkList.Link>
                </LinkList>
              </Grid.Cell>
              <Grid.Cell span={4} start={{ narrow: 1, medium: 1, wide: 9 }}>
                <div className="ams-mb-xl">
                  <Heading className="ams-mb-s" color="inverse" level={2} size="level-4">
                    Nieuwsbrief
                  </Heading>
                  <LinkList>
                    <LinkList.Link color="inverse" href="#" size="small">
                      Inschrijven
                    </LinkList.Link>
                  </LinkList>
                </div>
                <div>
                  <Heading className="ams-mb-s" color="inverse" level={2} size="level-4">
                    Volg ons
                  </Heading>
                  <LinkList>
                    {socialPlatforms.map(({ icon, name }) => (
                      <LinkList.Link color="inverse" href="#" icon={icon} key={name} size="small">
                        {name}
                      </LinkList.Link>
                    ))}
                  </LinkList>
                </div>
              </Grid.Cell>
            </Grid>
          </PageFooter.Spotlight>
          <Heading className="ams-visually-hidden" key={2} level={2}>
            Over deze website
          </Heading>
          <PageFooter.Menu key={3}>
            <PageFooter.MenuLink href="#">Over deze site</PageFooter.MenuLink>
            <PageFooter.MenuLink href="#">Privacy</PageFooter.MenuLink>
            <PageFooter.MenuLink href="#">Cookies</PageFooter.MenuLink>
          </PageFooter.Menu>
        </>
      </PageFooter>
    ),
  },
  {
    storyId: 'react-ams-modal-dialog--default',
    component: 'ams-modal-dialog',
    group: STORY_GROUPS['MODAL_DIALOG'],
    name: 'Amsterdam Modal Dialog',
    render: () => (
      <ModalDialog
        open={true}
        id="react-ams-modal-dialog--default"
        heading="De gegevens zijn opgeslagen"
        footer={<Button>Sluiten</Button>}
      >
        <Paragraph>U ontvangt een bevestiging per e-mail.</Paragraph>
      </ModalDialog>
    ),
  },
];
