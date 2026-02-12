import { Meta, StoryObj } from '@storybook/react-vite';
import { steps } from './steps';
import basisTheme from '@nl-design-system-unstable/basis-design-tokens/dist/tokens.json';
import voorbeeldTheme from '@nl-design-system-unstable/voorbeeld-design-tokens/dist/tokens.json';
import groningenTheme from '@nl-design-system-unstable/groningen-design-tokens/dist/tokens.json';
import utrechtTheme from '@utrecht/design-tokens/dist/tokens.cjs';
import denhaagTheme from '@gemeente-denhaag/design-tokens-components/dist/index.json';
import rotterdamTheme from '@gemeente-rotterdam/design-tokens/dist/tokens.cjs';
import { ThemeBuilder } from './ThemeBuilder';
import { examples } from './examples';

const meta = {
  title: 'Theme Builder/Voorbeeld Thema',
  id: 'theme-builder',
  component: ThemeBuilder,
  args: {
    step: 0,
    steps,
    basis: basisTheme,
    theme: voorbeeldTheme,
  },
  argTypes: {
    example: {
      control: 'select',
      options: Object.keys(examples),
    },
    theme: {
      control: 'select',
      options: ['voorbeeld', 'groningen', 'denhaag', 'rotterdam', 'utrecht'],
      mapping: {
        voorbeeld: voorbeeldTheme,
        groningen: groningenTheme,
        rotterdam: rotterdamTheme,
        utrecht: utrechtTheme,
        denhaag: denhaagTheme,
      },
    },
  },
} satisfies Meta<typeof ThemeBuilder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Step0: Story = {
  args: {
    step: 0,
  },
};

export const Step1: Story = {
  args: {
    step: 1,
  },
};

export const Step2: Story = {
  args: {
    step: 2,
  },
};

export const Step3: Story = {
  args: {
    step: 3,
  },
};

export const Step4: Story = {
  args: {
    step: 4,
  },
};

export const Step5: Story = {
  args: {
    step: 5,
  },
};

export const Step6: Story = {
  args: {
    step: 6,
  },
};

export const Step7: Story = {
  args: {
    step: 7,
  },
};

export const Step8: Story = {
  args: {
    step: 8,
  },
};

export const Step9: Story = {
  args: {
    step: 9,
  },
};

export const Step10: Story = {
  args: {
    step: 10,
  },
};

export const Step11: Story = {
  args: {
    step: 11,
  },
};

export const Step12: Story = {
  args: {
    step: 12,
  },
};

export const Step13: Story = {
  args: {
    step: 13,
  },
};

export const Step14: Story = {
  args: {
    step: 14,
  },
};

export const Step15: Story = {
  args: {
    step: 15,
  },
};

export const Step16: Story = {
  args: {
    step: 16,
  },
};

export const Step17: Story = {
  args: {
    step: 17,
  },
};

export const Step18: Story = {
  args: {
    step: 18,
  },
};

export const Step19: Story = {
  args: {
    step: 19,
  },
};

export const Step20: Story = {
  args: {
    step: 20,
  },
};

export const Step21: Story = {
  args: {
    step: 21,
  },
};

export const Step22: Story = {
  args: {
    step: 22,
  },
};

export const Step23: Story = {
  args: {
    step: 23,
  },
};

export const Step24: Story = {
  args: {
    step: 24,
  },
};

export const Step25: Story = {
  args: {
    step: 25,
  },
};
