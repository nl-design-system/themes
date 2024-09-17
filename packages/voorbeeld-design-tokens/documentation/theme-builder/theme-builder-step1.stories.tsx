// import { cssVariable } from '@nl-design-system-unstable/theme-toolkit/src/util';
import { commoncolorstep as voorbeeldcommoncolorstep } from './theme styling/voorbeeld-theme';
import { commoncolorstep as hoekschewaardcommoncolorstep } from './theme styling/hoekschewaard-theme';
import { commoncolorstep as rijkshuisstijlcommoncolorstep } from './theme styling/rijkshuisstijl-theme';

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

interface CommonColorStoryProps {
  cssVariables: { [index: string]: any };
}
const CommonColorStory = ({ ...restProps }: PropsWithChildren<CommonColorStoryProps>) => (
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
  id: 'theme-builder-step1',
  title: 'Theme builder/Step 1 Colors ',
  component: CommonColorStory,
  argTypes: {},
  args: {},
} satisfies Meta<typeof CommonColorStory>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Step1: Story = {
  name: 'Thema 1: Rijkshuisstijl',
  render: CommonColorStory,
  args: {
    cssVariables: {
      ...rijkshuisstijlcommoncolorstep,
    },
  },
  parameters: {
    docs: {
      description: 'Pas de kleuren aan volgens de Rijkshuisstijl thema',
    },
  },
};

export const Step2: Story = {
  name: 'Thema 2: Voorbeeld',
  render: CommonColorStory,
  args: {
    cssVariables: {
      ...voorbeeldcommoncolorstep,
    },
  },
  parameters: {
    docs: {
      description: `Pas de kleuren aan volgens de Voorbeeld thema`,
    },
  },
};

export const Step3: Story = {
  name: 'Thema 3: Hoeksche Waard',
  render: CommonColorStory,
  args: {
    cssVariables: {
      ...hoekschewaardcommoncolorstep,
    },
  },
  parameters: {
    docs: {
      description: `Pas de kleuren aan volgens de Hoeksche Waard thema`,
    },
  },
};
