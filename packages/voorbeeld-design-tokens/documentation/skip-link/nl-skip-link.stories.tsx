import { Meta, StoryObj } from '@storybook/react';
import { SkipLink } from '@nl-design-system-candidate/skip-link-react/css';
import '@nl-design-system-candidate/skip-link-css/test.css';

const meta = {
  title: 'Components/Skip link/NL Design System (candidate)',
  id: 'nl-skip-link',
  component: SkipLink,
  argTypes: {
    href: {
      name: 'href',
      type: { name: 'string', required: true },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
  },
  render: (args) => (
    <SkipLink className="nl-skip-link--focus-visible" href="#main" {...args}>
      Skip to main content
    </SkipLink>
  ),
} satisfies Meta<typeof SkipLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};

export const UtrechtTheme: Story = {
  name: 'Utrecht theme',
  parameters: { theme: 'utrecht-theme' },
};

export const AmsterdamTheme: Story = {
  name: 'Amsterdam theme',
  parameters: { theme: 'ams-theme' },
};

export const RotterdamTheme: Story = {
  name: 'Rotterdam theme',
  parameters: { theme: 'rods-theme' },
};
