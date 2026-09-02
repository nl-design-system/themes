import { ComponentStories } from '@nl-design-system-unstable/theme-toolkit/src/ComponentStories';
import type { Meta, StoryObj } from '@storybook/react-vite';
import config from '../src/config.json';
import allTokens from '../dist/list.json';

// Hide these stories from Storybook's auto-detected component previews
// (button: the candidate nl-button is used instead; code/code-block: not
// needed for this theme, neither the Utrecht nor the candidate variant).
// This only affects which stories Storybook shows; it does not remove the
// underlying tokens or affect the real components.
const HIDDEN_STORY_TOKEN_PREFIXES = [
  'utrecht.button.primary-action',
  'utrecht.button.secondary-action',
  'utrecht.button.subtle',
  'utrecht.code',
  'utrecht.code-block',
  'nl.code',
  'nl.code-block',
  'nl.skip-link', // TEMP: hidden temporarily, re-enable later
  'utrecht.color-sample', // TEMP: hidden temporarily, re-enable later
];
const tokens = allTokens.filter(
  (token) => !HIDDEN_STORY_TOKEN_PREFIXES.some((prefix) => token.path.join('.').startsWith(prefix)),
);

const meta = {
  title: 'Sittard-Geleen',
  component: ComponentStories,
  parameters: { controls: { include: 'showAll' }, chromatic: { disableSnapshot: false } },
  args: { config, showAll: false, tokens, displayDesignTokens: false },
} satisfies Meta<typeof ComponentStories>;

type Story = StoryObj<typeof meta>;

export default meta;

export const ComponentsPage1: Story = {
  name: 'Visual regression test (component 1 - 50)',
  args: {
    theme: `${config.prefix}-theme`,
    start: 0,
    end: 50,
  },
};

export const ComponentsPage2: Story = {
  name: 'Visual regression test (component 51 - 100)',
  args: {
    theme: `${config.prefix}-theme`,
    start: 51,
    end: 100,
  },
};

export const ComponentsPage3: Story = {
  name: 'Visual regression test (component 101 - ∞)',
  args: {
    theme: `${config.prefix}-theme`,
    start: 101,
  },
};
