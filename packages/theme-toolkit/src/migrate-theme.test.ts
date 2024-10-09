/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { migrateTheme } from './migrate-theme';
import { DesignTokenTree } from './design-tokens';

describe('Migrate theme', () => {
  const themeVersion1: DesignTokenTree = {
    utrecht: {
      button: {
        color: { value: 'rebeccapurple' },
      },
    },
  };

  const themeMetadata: DesignTokenTree = {
    utrecht: {
      button: {
        color: {
          value: 'I WISH WE COULD DELETE THIS PROPERTY',
          $extensions: {
            'nl.nldesignsystem.redirect': 'nl.button.color',
          },
        },
      },
    },
  };

  const themeVersion2 = {
    nl: {
      button: {
        color: { value: 'rebeccapurple' },
      },
    },
  };

  it('can migrate a theme with `redirect` metadata', () => {
    const migratedTheme = migrateTheme(themeVersion1, themeMetadata);

    expect(migratedTheme).toEqual(themeVersion2);
  });
});
