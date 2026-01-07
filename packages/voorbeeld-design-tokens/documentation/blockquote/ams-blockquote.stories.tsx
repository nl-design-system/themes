import type { Meta, StoryObj } from '@storybook/react-vite';
import { Blockquote } from '@amsterdam/design-system-react';

const meta = {
  id: 'ams-blockquote',
  title: 'Components/Blockquote/Amsterdam',
  component: Blockquote,
  parameters: { actions: { disable: true } },
  args: {
    children:
      'Ik hou zo van een Amsterdamse kroeg en van het zwijgend met gedachten spelen. Alleen het sluitingsuur, voor mij en velen, komt steeds te laat en altijd weer te vroeg.',
  },
  argTypes: {},
} satisfies Meta<typeof Blockquote>;

type Story = StoryObj<typeof meta>;

export default meta;

export const AmsterdamTheme: Story = {
  name: 'Amsterdam theme',
  parameters: { theme: 'ams-theme' },
};
