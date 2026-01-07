import type { Meta, StoryObj } from '@storybook/react-vite';
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
  id: 'utrecht-breadcrumb-nav',
  title: 'Components/Breadcrumb Navigation/Utrecht',
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
export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};
export const UtrechtTheme: Story = {
  name: 'Utrecht theme',
  parameters: { theme: 'utrecht-theme' },
};
