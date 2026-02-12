import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Paragraph, Dialog as ModalDialog } from '@amsterdam/design-system-react';

const meta = {
  id: 'ams-modal-dialog',
  title: 'Components/Modal Dialog/Amsterdam',
  component: ModalDialog,
  parameters: { actions: { disable: true } },
  decorators: [
    (Story, { args }) => (
      <>
        <Button
          onClick={() => {
            ModalDialog.open(`#${args.id}`);
          }}
        >
          Open
        </Button>
        <Story />
      </>
    ),
  ],
  args: {
    id: 'ams-modal-dialog-default',
    children: <Paragraph>U ontvangt een bevestiging per e-mail.</Paragraph>,
    heading: 'De gegevens zijn opgeslagen',
    footer: (
      <Button
        onClick={(event) => {
          return ModalDialog.close(event);
        }}
      >
        Sluiten
      </Button>
    ),
  },
} satisfies Meta<typeof ModalDialog>;

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
