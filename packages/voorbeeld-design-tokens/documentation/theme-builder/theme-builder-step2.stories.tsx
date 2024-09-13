// import { cssVariable } from '@nl-design-system-unstable/theme-toolkit/src/util';
import { fontFamilystep as voorbeeldfontfamilystep } from './hoekschewaard-theme';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Button,
  ButtonGroup,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Link,
  Paragraph,
  NavBar,
} from '@utrecht/component-library-react/dist/css-module';
import { PropsWithChildren } from 'react';

interface WrapperProps {
  cssVariables: { [index: string]: any };
}
const Wrapper = ({ children, cssVariables }: PropsWithChildren<WrapperProps>) => (
  <div className="voorbeeld-theme">
    <div style={cssVariables}>{children}</div>
  </div>
);

interface BorderRadiusStoryProps {
  cssVariables: { [index: string]: any };
}
const BorderRadiusStory = ({ ...restProps }: PropsWithChildren<BorderRadiusStoryProps>) => (
  <Wrapper {...restProps}>
    <Button appearance="primary-action">Default</Button>
  </Wrapper>
);

interface FontFamilyStoryProps {
  cssVariables: { [index: string]: any };
}
const FontFamilyStory = ({ ...restProps }: PropsWithChildren<FontFamilyStoryProps>) => (
  <Wrapper {...restProps}>
    <Heading1>The quick brown fox jumps over the lazy fox</Heading1>
    <Heading2>The quick brown fox jumps over the lazy fox</Heading2>
    <Heading3>The quick brown fox jumps over the lazy fox</Heading3>
    <Heading4>The quick brown fox jumps over the lazy fox</Heading4>
    <Heading5>The quick brown fox jumps over the lazy fox</Heading5>
    <Heading6>The quick brown fox jumps over the lazy fox</Heading6>
    <Paragraph>The quick brown fox jumps over the lazy fox</Paragraph>
    <ButtonGroup>
      <Button appearance="primary-action">Default</Button>
      <Button appearance="primary-action">Default</Button>
    </ButtonGroup>
    <Link href="https://www.example.com">Read more</Link>
    <NavBar>Default</NavBar>
  </Wrapper>
);

const meta = {
  id: 'theme-builder-step2',
  title: 'Theme builder/Step #2 Common Colors',
  component: BorderRadiusStory,
  argTypes: {},
  args: {},
} satisfies Meta<typeof BorderRadiusStory>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Step1: Story = {
  name: 'Thema 1: Rijkshuisstijl',
  args: {
    cssVariables: {
      '--utrecht-button-border-radius': '0',
      // '--utrecht-button-border-radius)': '0',

      // '--utrecht-button-background-color': 'lightgrey',
      // '--utrecht-button-color': 'black',
      // '--utrecht-button-hover-background-color': 'grey',
      // '--utrecht-button-hover-color': 'black',
      // '--utrecht-button-focus-color': 'white',
      // '--utrecht-button-focus-background-color': 'black',
      // '--utrecht-button-active-background-color': 'white',
      // '--utrecht-button-active-color': 'black',
    },
  },
  parameters: {
    docs: {
      description: 'Stap 1: Pas de border radius aan',
    },
  },
};

export const Step2: Story = {
  name: 'Thema 2: Voorbeeld',
  render: FontFamilyStory,
  args: {
    cssVariables: {
      ...voorbeeldfontfamilystep,
      '--utrecht-document-font-family': '"Comic Sans MS"',
    },
  },
  parameters: {
    docs: {
      description: `Stap 2: Pas de font family aan in de \`utrecht.document.font-family\` token.

Interne documentatie: alleen de common token voor document.font-family is niet genoeg, ook alle heading tokens en paragraph tokens moeten aangepast worden. Kunnen we dit automatiseren?`,
    },
  },
};

export const Step3: Story = {
  name: 'Thema 3: Hoeksche Waard',
  render: FontFamilyStory,
  args: {
    cssVariables: {
      ...Step2.args.cssVariables,
      '--utrecht-link-color': 'grey',
      '--utrecht-document-color': 'grey',
      '--utrecht-heading-1-color': 'grey',
      '--utrecht-heading-2-color': 'grey',
      '--utrecht-heading-3-color': 'grey',
      '--utrecht-heading-4-color': 'grey',
      '--utrecht-heading-5-color': 'grey',
      '--utrecht-heading-6-color': 'grey',
      '--utrecht-paragraph-color': 'grey',

      '--utrecht-button-background-color': 'lightgrey',
      '--utrecht-button-color': 'black',
      '--utrecht-button-hover-background-color': 'grey',
      '--utrecht-button-hover-color': 'black',
      '--utrecht-button-focus-color': 'white',
      '--utrecht-button-focus-background-color': 'black',
      '--utrecht-button-active-background-color': 'white',
      '--utrecht-button-active-color': 'black',

      '--_utrecht-link-state-color': 'grblackey',
      '--_utrecht-link-state-text-decoration-color': 'black',
    },
  },
  parameters: {
    docs: {
      description: `Stap 3: Pas de kleuren aan voor de X belangrijkste common tokens:

- link kleur (links doh)
- actie kleur (buttons)
- accentkleur van form controls
- decoratie-achtergrondkleur (nav bar, cards)
- decoratie-voorgrondkleur (logo, iconen)

Interne documentatie: alleen de common token voor document.font-family is niet genoeg, ook alle heading tokens en paragraph tokens moeten aangepast worden. Kunnen we dit automatiseren?`,
    },
  },
};

// Stap 4: signaalkleuren (warning button, alert, spotlight section)
