import type { Meta, StoryObj } from '@storybook/react-vite';
import type { HTMLAttributes, PropsWithChildren } from 'react';

const PageBody = ({ children, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => (
  <div className="ams-body" {...restProps}>
    {children}
  </div>
);

const meta = {
  id: 'ams-page-body',
  title: 'Components/Page Body/Amsterdam',
  component: PageBody,
  parameters: { actions: { disable: true } },
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
} satisfies Meta<typeof PageBody>;

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
