import type { Meta, StoryObj } from '@storybook/react-vite';
import { DescriptionList } from '@gemeente-denhaag/descriptionlist';
import '@gemeente-denhaag/descriptionlist/index.css';

const meta = {
  id: 'denhaag-data-summary',
  title: 'Components/Data Summary/Den Haag',
  component: DescriptionList,
  args: {
    items: [
      { title: 'Naam', detail: 'Jeroen van Drouwen' },
      { title: 'Geboortedatum', detail: '12 januari 1985' },
      { title: 'Adres', detail: 'Spui 70, 2511 BT Den Haag' },
    ],
  },
} satisfies Meta<typeof DescriptionList>;

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
