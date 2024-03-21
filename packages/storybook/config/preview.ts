import '@nl-design-system-unstable/voorbeeld-design-tokens/dist/design-tokens.css';
import '@nl-design-system-unstable/voorbeeld-design-tokens/src/custom.scss';
import '@nl-design-system-unstable/voorbeeld-design-tokens/src/font';
import type { Preview } from '@storybook/react';
import '@utrecht/component-library-css';
import '@utrecht/design-tokens/dist/index.css';
import { ThemeDecorator } from './ThemeDecorator';

const preview: Preview = {
  parameters: {
    controls: { expanded: false },
    theme: 'voorbeeld-theme',
    // layout: 'centered',
    chromatic: {
      // snapshots are whitelisted at the story level
      disableSnapshot: true,
    },
  },
  decorators: [ThemeDecorator],
};

export default preview;
