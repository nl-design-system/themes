import { Meta, StoryObj } from '@storybook/react-vite';
import { Heading1, HeadingGroup, Paragraph } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-heading-group',
  title: 'Components/Heading Group/Utrecht',
  component: HeadingGroup,
  args: {
    children: (
      <>
        <Heading1>The Quick Brown Fox Jumps Over The Lazy Dog</Heading1>
        <Paragraph>The Quick Brown Fox Jumps Over The Lazy Dog</Paragraph>
      </>
    ),
  },
} satisfies Meta<typeof HeadingGroup>;

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
