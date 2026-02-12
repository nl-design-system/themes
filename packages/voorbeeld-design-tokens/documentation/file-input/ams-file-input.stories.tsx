import type { Meta, StoryObj } from '@storybook/react-vite';
import { FileInput } from '@amsterdam/design-system-react';

const meta = {
  id: 'ams-file-input',
  title: 'Components/File Input/Amsterdam',
  component: FileInput,
  parameters: { actions: { disable: true } },
  args: {},
} satisfies Meta<typeof FileInput>;

type Story = StoryObj<typeof meta>;

export default meta;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};

export const AmsterdamTheme: Story = {
  name: 'Amsterdam theme',
  parameters: { theme: 'ams-theme' },
};
