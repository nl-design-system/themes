/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { migrateTheme, FigmaTokensFile, migrateTokensFile } from './migrate-theme';
import { DesignTokenTree } from './design-tokens';

describe('Migrate theme', () => {
  describe('flat JSON file', () => {
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
            // Unfortunately the TypeScript type requires a `value` property.
            // When there is a way around this, this unnecessary property should be deleted.
            value: '',
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

  describe('tokens studio JSON file', () => {
    const themeVersion1: FigmaTokensFile = {
      'components/button': {
        utrecht: {
          button: {
            color: { value: 'rebeccapurple' },
          },
        },
      },
      $themes: [],
      $metadata: {
        tokenSetOrder: ['components/button'],
      },
    };

    const themeMetadata: DesignTokenTree = {
      utrecht: {
        button: {
          color: {
            // Unfortunately the TypeScript type requires a `value` property.
            // When there is a way around this, this unnecessary property should be deleted.
            value: '',
            $extensions: {
              'nl.nldesignsystem.redirect': 'nl.button.color',
            },
          },
        },
      },
    };

    const themeVersion2: FigmaTokensFile = {
      'components/button': {
        nl: {
          button: {
            color: { value: 'rebeccapurple' },
          },
        },
      },
      $themes: [],
      $metadata: {
        tokenSetOrder: ['components/button'],
      },
    };

    it('can migrate a theme with `redirect` metadata', () => {
      const migratedTheme = migrateTokensFile(themeVersion1, themeMetadata);

      expect(migratedTheme).toEqual(themeVersion2);
    });
  });
});
