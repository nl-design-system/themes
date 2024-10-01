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
  Select,
  SelectOption,
  Link,
  Paragraph,
  Checkbox,
  RadioButton,
  Textarea,
  Textbox,
  AccordionProvider,
  LinkListLink,
} from '@utrecht/component-library-react/dist/css-module';
// import { UtrechtIconChevronRight } from '@utrecht/web-component-library-react';
// import { Sidenav, SidenavItem, SidenavLink, SidenavList } from '@gemeente-denhaag/sidenav';

import { PropsWithChildren } from 'react';

// Use basic theme for sane defaults
const Wrapper = ({ children }: PropsWithChildren<{}>) => <div className="utrecht-document">{children}</div>;

type TypographyStoryProps = {};
const TypographyStory = ({ ...restProps }: PropsWithChildren<TypographyStoryProps>) => (
  <Wrapper {...restProps}>
    <Heading1>The quick brown fox jumps over the lazy fox</Heading1>
    <Heading2>The quick brown fox jumps over the lazy fox</Heading2>
    <Heading3>The quick brown fox jumps over the lazy fox</Heading3>
    <Heading4>The quick brown fox jumps over the lazy fox</Heading4>
    <Heading5>The quick brown fox jumps over the lazy fox</Heading5>
    <Heading6>The quick brown fox jumps over the lazy fox</Heading6>
    <Paragraph>The quick brown fox jumps over the lazy fox</Paragraph>
    <Link href="https://www.example.com">Read more</Link>
  </Wrapper>
);

type RichTextProps = {};
const RichText = ({ ...restProps }: PropsWithChildren<RichTextProps>) => (
  <Wrapper {...restProps}>
    <Heading1>The quick brown fox jumps over the lazy fox</Heading1>
    <Heading2>The quick brown fox jumps over the lazy fox</Heading2>
    <Heading3>The quick brown fox jumps over the lazy fox</Heading3>
    <Heading4>The quick brown fox jumps over the lazy fox</Heading4>
    <Heading5>The quick brown fox jumps over the lazy fox</Heading5>
    <Heading6>The quick brown fox jumps over the lazy fox</Heading6>
    <Paragraph>The quick brown fox jumps over the lazy fox</Paragraph>
    <Link href="https://www.example.com">Read more</Link>
  </Wrapper>
);

type FormStoryProps = {};
const FormStory = ({ ...restProps }: PropsWithChildren<FormStoryProps>) => (
  <Wrapper {...restProps}>
    <AccordionProvider
      sections={[
        {
          label: 'Lable',
          body: 'Body',
        },
      ]}
    ></AccordionProvider>

    <ButtonGroup>
      <Button appearance="primary-action">Default</Button>
      <Button appearance="primary-action">Default</Button>
      <Button appearance="primary-action">Default</Button>
    </ButtonGroup>

    <ButtonGroup>
      <Checkbox />
      <Checkbox />
    </ButtonGroup>

    <ButtonGroup>
      <RadioButton />
      <RadioButton />
    </ButtonGroup>

    <Link href="">Lable normal link</Link>

    <LinkListLink href="#">Lable link list</LinkListLink>

    <Select aria-label="Hoofdcategorie" className="select" defaultValue="" id="mainCategory">
      <SelectOption disabled value="">
        Lable
      </SelectOption>
      <SelectOption value="1">Option #1</SelectOption>
      <SelectOption value="2">Option #2</SelectOption>
      <SelectOption value="3">Option #3</SelectOption>
      <SelectOption value="4">Option #4</SelectOption>
    </Select>

    <Textbox placeholder="Textbox"></Textbox>
    <Textarea placeholder="Textarea"></Textarea>

    {/* <Sidenav>
      <SidenavList>
        <SidenavItem>
          <SidenavLink current href="/#">
            Lable
          </SidenavLink>
        </SidenavItem>
      </SidenavList>
    </Sidenav> */}
  </Wrapper>
);

const meta = {
  id: 'theme-builder-step0',
  title: 'Theme builder/Step 0 Default ',
  component: FormStory,
  argTypes: {},
  args: {},
  parameters: {
    theme: 'basic-theme',
  },
} satisfies Meta<typeof FormStory>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Step1: Story = {
  name: 'Thema 1: Rijkshuisstijl',
  render: FormStory,
  parameters: {
    docs: {
      description: 'Pas de kleuren aan volgens de Rijkshuisstijl thema',
    },
  },
};

export const Step2: Story = {
  name: 'Thema 2: Voorbeeld',
  render: FormStory,
  parameters: {
    docs: {
      description: `Pas de kleuren aan volgens de Voorbeeld thema`,
    },
  },
};

export const Step3: Story = {
  name: 'Thema 3: Hoeksche Waard',
  render: FormStory,
  parameters: {
    docs: {
      description: `Pas de kleuren aan volgens de Hoeksche Waard thema`,
    },
  },
};
