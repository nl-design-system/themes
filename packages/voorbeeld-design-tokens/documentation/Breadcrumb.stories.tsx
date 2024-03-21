import type { Meta, StoryObj } from '@storybook/react';
import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
} from '@utrecht/component-library-react/dist/css-module';

const items = [
  { href: 'https://example.com', label: 'Een' },
  { href: 'https://example.com/a', label: 'Twee' },
  { href: 'https://example.com/a/b', label: 'Drie' },
];

const meta = {
  component: BreadcrumbNav,
  parameters: { actions: { disable: true } },
  args: { label: 'kruimelpad' },
  render: (args) => (
    <BreadcrumbNav {...args}>
      {items.map(({ href, label }) => (
        <BreadcrumbNavLink key={label} href={href}>
          {label}
        </BreadcrumbNavLink>
      ))}
      <BreadcrumbNavSeparator />
    </BreadcrumbNav>
  ),
} satisfies Meta<typeof BreadcrumbNav>;

type Story = StoryObj<typeof meta>;

export default meta;
export const GemeenteVoorbeeld: Story = {};
export const Utrecht: Story = { parameters: { theme: 'utrecht-theme' } };
