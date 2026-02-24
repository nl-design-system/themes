import type { Meta, StoryObj } from '@storybook/react-vite';
import { File } from '@gemeente-denhaag/file';
import '@gemeente-denhaag/file/index.css';

const meta = {
  id: 'denhaag-file',
  title: 'Components/File/Den Haag',
  component: File,
  args: {
    name: 'Afbeelding.png',
    href: '#',
    size: '123 KB',
    lastUpdated: '19 februari 2026',
  },
  decorators: [
    (Story) => (
      <div style={{ maxInlineSize: '800px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof File>;

type Story = StoryObj<typeof meta>;

export default meta;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};

export const DenHaagTheme: Story = {
  name: 'Den Haag theme',
  parameters: { theme: 'denhaag-theme' },
};
