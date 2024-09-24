// import { cssVariable } from '@nl-design-system-unstable/theme-toolkit/src/util';
import { fontFamilystep as voorbeeldfontfamilystep } from './theme-styling/voorbeeld-theme';
import { fontFamilystep as hoekschewaardfontfamilystep } from './theme-styling/hoekschewaard-theme';
import { fontFamilystep as rijkshuisstijlfontfamilystep } from './theme-styling/rijkshuisstijl-theme';
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
  <div className="utrecht-documents" style={cssVariables}>
    {children}
  </div>
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
  title: 'Theme builder/Step 2 Typography',
  component: FontFamilyStory,
  argTypes: {},
  args: {},
  parameters: {
    theme: 'basic-theme',
  },
} satisfies Meta<typeof FontFamilyStory>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Step1: Story = {
  name: 'Thema 1: Rijkshuisstijl',
  render: FontFamilyStory,
  args: {
    cssVariables: {
      ...rijkshuisstijlfontfamilystep,
    },
  },
  parameters: {
    docs: {
      description: `Pas de font family aan`,
    },
  },
};

export const Step2: Story = {
  name: 'Thema 2: Voorbeeld',
  render: FontFamilyStory,
  args: {
    cssVariables: {
      ...voorbeeldfontfamilystep,
    },
  },
  parameters: {
    docs: {
      description: `Pas de font family aan`,
    },
  },
};

export const Step3: Story = {
  name: 'Thema 3: Hoekschewaard',
  render: FontFamilyStory,
  args: {
    cssVariables: {
      ...hoekschewaardfontfamilystep,
    },
  },
  parameters: {
    docs: {
      description: `Pas de font family aan`,
    },
  },
};
