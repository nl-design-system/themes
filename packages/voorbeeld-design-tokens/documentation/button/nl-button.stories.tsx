import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@nl-design-system-candidate/button-react/css';
import * as Stories from '@nl-design-system-candidate/button-docs/stories/button.stories';
import reactMeta from '@nl-design-system-candidate/button-docs/stories/button.react.meta';

const meta = {
  id: 'nl-button',
  title: 'Components/Button/Candidate',
  ...reactMeta,
  parameters: {
    ...((reactMeta as Meta).parameters ?? {}),
    actions: {
      ...((reactMeta as Meta).parameters?.actions ?? {}),
      disable: true,
    },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export default meta;

export const VoorbeeldTheme: Story = {
  ...Stories.Button,
  name: 'Voorbeeld theme',
  parameters: {
    theme: 'voorbeeld-theme',
  },
};

export const StartTheme: Story = {
  ...Stories.Button,
  name: 'Start theme',
  parameters: {
    theme: 'start-theme',
  },
};
