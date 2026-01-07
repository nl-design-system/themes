import { Meta, StoryObj } from '@storybook/react-vite';
import { Image } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-image',
  title: 'Components/Image/Utrecht',
  component: Image,
  parameters: { actions: { disable: true } },
  args: {
    alt: 'Utrecht stadskantoor',
    height: 830,
    photo: true,
    src: 'images/stadskantoor.jpg',
    width: 1040,
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
