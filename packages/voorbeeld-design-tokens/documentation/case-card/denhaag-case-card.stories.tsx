import type { Meta, StoryObj } from '@storybook/react-vite';
import { CaseCard } from '@gemeente-denhaag/card';
import '@gemeente-denhaag/card/index.css';

const meta = {
  id: 'denhaag-case-card',
  title: 'Components/Case Card/Den Haag',
  component: CaseCard,
  parameters: { actions: { disable: true } },
  args: {
    title: 'Aanvraag subsidie geluidsisolatie',
    subTitle: '',
    context: '17 oktober 2022',
    href: '#',
  },
  decorators: [
    (Story) => (
      <div style={{ maxInlineSize: '360px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CaseCard>;

type Story = StoryObj<typeof meta>;

export default meta;
export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};
export const DenHaagNaamTheme: Story = {
  name: 'Den Haag theme',
  parameters: { theme: 'denhaag-theme' },
};
