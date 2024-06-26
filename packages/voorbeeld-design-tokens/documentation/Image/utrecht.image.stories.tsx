import { Meta, StoryObj } from '@storybook/react';
import { Image } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  title: 'Components/Image/Utrecht',
  id: 'utrecht-img',
  component: Image,
  args: {
    alt: 'Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor',
    height: 1536,
    photo: true,
    src: '/images/photo-nijntje-vuelta.jpg',
    width: 2048,
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: {
    theme: 'voorbeeld-theme',
  },
};
export const UtrechtTheme: Story = {
  name: 'Utrecht theme',
  parameters: {
    theme: 'utrecht-theme',
  },
};
