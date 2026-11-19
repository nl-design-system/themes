import type { Meta, StoryObj } from '@storybook/react-vite';
import { Drawer, Heading2, Paragraph } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-drawer',
  title: 'Components/Drawer/Utrecht',
  component: Drawer,
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
        <Heading2>Hulp bij uw aanvraag</Heading2>
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

export const UtrechtTheme: Story = {
  name: 'Utrecht theme',
  parameters: { theme: 'utrecht-theme' },
};
