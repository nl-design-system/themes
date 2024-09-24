// import { cssVariable } from '@nl-design-system-unstable/theme-toolkit/src/util';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@utrecht/component-library-react/dist/css-module';
import { borderradiusstep as voorbeeldborderradiusstep } from './theme-styling/voorbeeld-theme';
import { borderradiusstep as hoekschewaardborderradiusstep } from './theme-styling/hoekschewaard-theme';
import { borderradiusstep as rijkshuisstijlborderradiusstep } from './theme-styling/rijkshuisstijl-theme';
import { PropsWithChildren } from 'react';

interface WrapperProps {
  cssVariables: { [index: string]: any };
}
const Wrapper = ({ children, cssVariables }: PropsWithChildren<WrapperProps>) => (
  <div className="utrecht-document" style={cssVariables}>
    {children}
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

const meta = {
  id: 'theme-builder-step3',
  title: 'Theme builder/Step 3 Rounding',
  component: BorderRadiusStory,
  argTypes: {},
  args: {},
  parameters: {
    theme: 'basic-theme',
  },
} satisfies Meta<typeof BorderRadiusStory>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Step1: Story = {
  name: 'Thema 1: Rijkshuisstijl',
  args: {
    cssVariables: {
      ...rijkshuisstijlborderradiusstep,
    },
  },
  parameters: {
    docs: {
      description: `Pas de border radius aan volgens de Rijkshuisstijl thema`,
    },
  },
};

export const Step2: Story = {
  name: 'Thema 2: Voorbeeld',
  args: {
    cssVariables: {
      ...voorbeeldborderradiusstep,
    },
  },
  parameters: {
    docs: {
      description: 'Pas de border radius aan volgens de Voorbeeld thema',
    },
  },
};

export const Step3: Story = {
  name: 'Thema 3: Hoeksche Waard',
  args: {
    cssVariables: {
      ...hoekschewaardborderradiusstep,
    },
  },
  parameters: {
    docs: {
      description: 'Pas de border radius aan volgens de Hoeksche Waard thema',
    },
  },
};
