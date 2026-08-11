import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon, Logo } from '@rijkshuisstijl-community/components-react';

const meta = {
  id: 'rhc-logo',
  title: 'Components/Logo/Rijkshuisstijl Community',
  component: Logo,
  parameters: { actions: { disable: true } },
  args: {
    organisation: 'Rijkshuisstijl-community',
  },
  render: (args) => {
    return (
      <Logo {...args}>
        <Icon icon="nederland-map" />
      </Logo>
    );
  },
} satisfies Meta<typeof Logo>;

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
