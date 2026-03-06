import type { Meta, StoryObj } from '@storybook/react-vite';
import { DateInput } from '@amsterdam/design-system-react';

const meta = {
  id: 'ams-date-input',
  title: 'Components/Date Input/Amsterdam',
  component: DateInput,
  parameters: { actions: { disable: true } },
  args: {},
  argTypes: {},
} satisfies Meta<typeof DateInput>;

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
