import type { Meta, StoryObj } from '@storybook/react';
import { Button, Paragraph, Dialog as AlertDialog } from '@amsterdam/design-system-react';

const meta = {
  id: 'ams-alert-dialog',
  title: 'Components/Alert Dialog/Amsterdam',
  component: AlertDialog,
  parameters: { actions: { disable: true } },
  decorators: [
    (Story, { args }) => (
      <>
        <Button
          onClick={() => {
            AlertDialog.open(`#${args.id}`);
          }}
        >
          Open
        </Button>
        <Story />
      </>
    ),
  ],
  args: {
    id: 'ams-alert-dialog-default',
    children: <Paragraph>U ontvangt een bevestiging per e-mail.</Paragraph>,
    heading: 'De gegevens zijn opgeslagen',
    footer: (
      <Button
        onClick={(event) => {
          return AlertDialog.close(event);
        }}
      >
        Sluiten
      </Button>
    ),
  },
} satisfies Meta<typeof AlertDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};

export const AmsterdamTheme: Story = {
  name: 'Amsterdam theme',
  parameters: { theme: 'ams-theme' },
};
