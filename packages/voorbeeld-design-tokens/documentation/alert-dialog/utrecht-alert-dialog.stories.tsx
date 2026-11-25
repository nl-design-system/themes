import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlertDialog, Button, Heading2, Paragraph } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-alert-dialog',
  title: 'Components/Alert Dialog/Utrecht',
  component: AlertDialog,
  argTypes: {
    children: {
      description: 'HTML content of the alert dialog',
    },
    open: {
      description: 'Whether the alert dialog is visible',
      control: { type: 'boolean' },
    },
    type: {
      description: 'Type',
      control: { type: 'select' },
      options: ['', 'error', 'info', 'warning'],
    },
  },
  args: {
    children: (
      <>
        <Heading2>Uw sessie verloopt bijna</Heading2>
        <Paragraph>U bent 15 minuten niet actief geweest. Over 2 minuten wordt u automatisch uitgelogd.</Paragraph>
        <Button appearance="primary-action-button">Ingelogd blijven</Button>
      </>
    ),
    open: true,
  },
} satisfies Meta<typeof AlertDialog>;

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
