// import { cssVariable } from '@nl-design-system-unstable/theme-toolkit/src/util';
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
  Paragraph,
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
  </Wrapper>
);

const meta = {
  id: 'theme-builder-start',
  title: 'Theme builder/Start hier',
  component: BorderRadiusStory,
  argTypes: {},
  args: {},
} satisfies Meta<typeof BorderRadiusStory>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Step1: Story = {
  name: 'Stap 1: Border radius',
  args: {
    cssVariables: {
      '--utrecht-button-border-radius': '0',
    },
  },
  parameters: {
    docs: {
      description: 'Stap 1: Pas de border radius aan',
    },
  },
};

export const Step2: Story = {
  name: 'Stap 2: Font family',
  render: FontFamilyStory,
  args: {
    cssVariables: {
      ...Step1.args.cssVariables,
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
  name: 'Stap 3: Common colors',
  render: FontFamilyStory,
  args: {
    cssVariables: {
      ...Step2.args.cssVariables,
      '--utrecht-link-color': 'green',
      '--utrecht-document-color': 'silver',
      '--utrecht-heading-1-color': 'silver',
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
