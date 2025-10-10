import { Meta, StoryObj } from '@storybook/react';
import { Image } from '@utrecht/component-library-react/dist/css-module';
import React from 'react';

interface ImageStoryProps {
  width: string;
  height: string;
  children: React.ReactNode;
}
const ImageStory = ({ width, height, children }: ImageStoryProps) => {
  return (
    <div
      style={{
        width,
        height,
      }}
    >
      {children}
    </div>
  );
};

const meta = {
  title: 'Components/Image/Utrecht',
  id: 'utrecht-img',
  component: Image,
  // decorators: ImageStory,
  args: {
    alt: 'Utrecht stadskantoor',
    height: 900,
    photo: true,
    src: '/images/stadskantoor.jpg',
    width: 1600,
  },
} satisfies Meta<typeof Image>;

const ImageRender = (args) => (
  <div
    style={{
      display: 'grid',
      gap: '12px',
    }}
  >
    <ImageStory width="1600px" height="900px">
      <Image {...args} />
    </ImageStory>
    <ImageStory width="400px" height="300px">
      <Image {...args} />
    </ImageStory>
    <ImageStory width="600px" height="600px">
      <Image {...args} />
    </ImageStory>
  </div>
);

export default meta;
type Story = StoryObj<typeof meta>;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: {
    theme: 'voorbeeld-theme',
  },
  render: ImageRender,
};
export const UtrechtTheme: Story = {
  name: 'Utrecht theme',
  parameters: {
    theme: 'utrecht-theme',
  },
  render: ImageRender,
};
