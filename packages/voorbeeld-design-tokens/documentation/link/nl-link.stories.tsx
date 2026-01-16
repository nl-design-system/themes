import { Meta } from '@storybook/react-vite';
import * as Stories from '@nl-design-system-candidate/link-docs/stories/link.stories';
import reactMeta from '@nl-design-system-candidate/link-docs/stories/link.react.meta';

const meta = {
  id: 'nl-link',
  title: 'Components/Link/Candidate',
  parameters: { actions: { disable: true } },
  ...reactMeta,
} satisfies Meta;

export default meta;

export const VoorbeeldTheme = {
  ...Stories.Link,
  name: 'Voorbeeld theme',
  parameters: {
    theme: 'voorbeeld-theme',
  },
};

export const StartTheme = {
  ...Stories.Link,
  name: 'Start theme',
  parameters: {
    theme: 'start-theme',
  },
};
