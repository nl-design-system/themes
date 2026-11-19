import { Drawer, Heading, Paragraph } from '@rijkshuisstijl-community/components-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  id: 'rhc-drawer',
  title: 'Components/Drawer/Rijkshuisstijl Community',
  component: Drawer,
  parameters: { actions: { disable: true } },
  argTypes: {
    children: {
      description: 'HTML content of the drawer',
    },
    align: {
      description: 'Side of the screen the drawer opens from',
      control: { type: 'select' },
      options: ['inline-start', 'inline-end', 'block-start', 'block-end'],
    },
    modal: {
      description: 'Open the drawer as a modal dialog, with a backdrop that blocks the rest of the page',
      control: { type: 'boolean' },
    },
    open: {
      description: 'Whether the drawer is visible',
      control: { type: 'boolean' },
    },
  },
  args: {
    children: (
      <>
        <Heading level={2}>Hulp bij uw aanvraag</Heading>
        <Paragraph>Heeft u vragen over uw parkeervergunning? Bel 14 030 of stuur ons een bericht.</Paragraph>
      </>
    ),
    open: true,
    align: 'inline-start',
    modal: false,
  },
} satisfies Meta<typeof Drawer>;

type Story = StoryObj<typeof meta>;

export default meta;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};

export const RijkshuisstijlTheme: Story = {
  name: 'Rijkshuisstijl Community theme',
  parameters: { theme: 'rhc-theme' },
};
