import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageFooter, Grid, Heading, LinkList, Paragraph } from '@amsterdam/design-system-react';
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

const meta = {
  id: 'ams-page-footer',
  title: 'Components/Page Footer/Amsterdam',
  component: PageFooter,
  parameters: { actions: { disable: true } },
  args: {
    children: [
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
      </PageFooter.Spotlight>,
      <Heading className="ams-visually-hidden" key={2} level={2}>
        Over deze website
      </Heading>,
      <PageFooter.Menu key={3}>
        <PageFooter.MenuLink href="#">Over deze site</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Privacy</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Cookies</PageFooter.MenuLink>
      </PageFooter.Menu>,
    ],
  },
} satisfies Meta<typeof PageFooter>;

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
