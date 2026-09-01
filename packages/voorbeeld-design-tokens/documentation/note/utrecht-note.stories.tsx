import type { Meta, StoryObj } from '@storybook/react-vite';
import { Note } from '@utrecht/note-react/css';
import { Heading2, Paragraph } from '@utrecht/component-library-react/dist/css-module';

const meta = {
  id: 'utrecht-note',
  title: 'Components/Note/Utrecht',
  component: Note,
  parameters: { actions: { disable: true } },
  args: {
    aside: false,
    children: (
      <>
        <Heading2>Lorem ipsum</Heading2>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
      </>
    ),
    purpose: '',
  },
} satisfies Meta<typeof Note>;

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
