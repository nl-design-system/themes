import type { Meta, StoryObj } from '@storybook/react-vite';
import { Grid, Paragraph } from '@amsterdam/design-system-react';

const meta = {
  id: 'ams-grid',
  title: 'Components/Grid/Amsterdam',
  component: Grid,
  parameters: { actions: { disable: true } },
  args: {
    children: [
      <Grid.Cell key="1" span={4}>
        <Paragraph>The Quick Brown Fox Jumps Over The Lazy Dog</Paragraph>
      </Grid.Cell>,
      <Grid.Cell key="2" span={4}>
        <Paragraph>The Quick Brown Fox Jumps Over The Lazy Dog</Paragraph>
      </Grid.Cell>,
      <Grid.Cell key="3" span={4}>
        <Paragraph>The Quick Brown Fox Jumps Over The Lazy Dog</Paragraph>
      </Grid.Cell>,
    ],
  },
  argTypes: {},
} satisfies Meta<typeof Grid>;

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
