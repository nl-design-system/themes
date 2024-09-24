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

// Use basic theme for sane defaults
const Wrapper = ({ children }: PropsWithChildren<{}>) => <div className="utrecht-document">{children}</div>;

type CommonColorStoryProps = {};
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
  id: 'theme-builder-step0',
  title: 'Theme builder/Step 0 Default ',
  component: CommonColorStory,
  argTypes: {},
  args: {},
  parameters: {
    theme: 'basic-theme',
  },
} satisfies Meta<typeof CommonColorStory>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Step1: Story = {
  name: 'Thema 1: Rijkshuisstijl',
  render: CommonColorStory,
  parameters: {
    docs: {
      description: 'Pas de kleuren aan volgens de Rijkshuisstijl thema',
    },
  },
};

export const Step2: Story = {
  name: 'Thema 2: Voorbeeld',
  render: CommonColorStory,
  parameters: {
    docs: {
      description: `Pas de kleuren aan volgens de Voorbeeld thema`,
    },
  },
};

export const Step3: Story = {
  name: 'Thema 3: Hoeksche Waard',
  render: CommonColorStory,
  parameters: {
    docs: {
      description: `Pas de kleuren aan volgens de Hoeksche Waard thema`,
    },
  },
};
