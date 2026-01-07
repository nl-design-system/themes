import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageHeader, Grid, LinkList, Heading } from '@amsterdam/design-system-react';

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

const meta = {
  id: 'ams-page-header',
  title: 'Components/Page Header/Amsterdam',
  component: PageHeader,
  parameters: { actions: { disable: true } },
  args: {
    brandName: 'Data Amsterdam',
    children: (
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
            {defaultStoryLinks[0].map(({ href, label }) => (
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
            {defaultStoryLinks[1].map(({ href, label }) => (
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
            {defaultStoryLinks[2].map(({ href, label }) => (
              <LinkList.Link href={href} key={label}>
                {label}
              </LinkList.Link>
            ))}
          </LinkList>
        </Grid.Cell>
      </Grid>
    ),
    menuItems: [
      <PageHeader.MenuLink href="#" key={1} lang="en">
        English
      </PageHeader.MenuLink>,
      <PageHeader.MenuLink fixed href="#" key={2}>
        Zoeken
      </PageHeader.MenuLink>,
    ],
  },
} satisfies Meta<typeof PageHeader>;

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
