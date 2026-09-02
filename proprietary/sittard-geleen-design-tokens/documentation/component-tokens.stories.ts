import { ComponentStories } from '@nl-design-system-unstable/theme-toolkit/src/ComponentStories';
import type { Meta, StoryObj } from '@storybook/react-vite';
import tokensDefinition from '@nl-design-system-community/design-tokens-definition/dist/list.json';
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
  parameters: { controls: { include: 'showAll' }, chromatic: { disableSnapshot: true } },
  args: {
    config,
    showAll: false,
    tokensDefinition,
    displayDesignTokens: true,
  },
} satisfies Meta<typeof ComponentStories>;

type Story = StoryObj<typeof meta>;

export default meta;

export const ComponentTokens: Story = {
  name: 'Component Tokens',
  args: {
    theme: `${config.prefix}-theme`,
    tokens: tokens,
  },
};
