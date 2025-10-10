import type { Meta, StoryObj } from '@storybook/react';
import { DescriptionList } from '@gemeente-denhaag/descriptionlist';

const meta = {
  id: 'denhaag-descriptionlist--default',
  title: 'Components/Data Summary/Den Haag',
  component: DescriptionList,
  args: {
    items: [
      {
        detail: 'A large feline inhabiting Bodmin Moor.',
        title: 'Beast of Bodmin',
      },
      {
        detail: 'A sea serpent.',
        title: 'Morgawr',
      },
      {
        detail: 'A giant owl-like creature.',
        title: 'Owlman',
      },
    ],
  },
} satisfies Meta<typeof DescriptionList>;

type Story = StoryObj<typeof meta>;

export default meta;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};

export const DenHaagTheme: Story = {
  name: 'Den Haag theme',
  parameters: { theme: 'denhaag-theme' },
};
