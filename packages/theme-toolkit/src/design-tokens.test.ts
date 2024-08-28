/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { convertValueTreeToDesignTokenTree, isHiddenDesignToken } from './design-tokens';
import { createDesignToken } from './util';

describe('isHiddenDesignToken', () => {
  it('should consider `nl.nldesignsystem.hidden` tokens as hidden', () => {
    expect(
      isHiddenDesignToken(
        createDesignToken({
          name: 'color',
          $extensions: {
            'nl.nldesignsystem.hidden': true,
          },
        }),
      ),
    ).toBe(true);
  });

  it('should not consider regular design tokens as hidden', () => {
    expect(
      isHiddenDesignToken(
        createDesignToken({
          name: 'color',
        }),
      ),
    ).toBe(false);
  });
});

describe('convertValueTreeToDesignTokenTree', () => {
  it('should convert a value tree correctly', () => {
    expect(
      convertValueTreeToDesignTokenTree({
        example: {
          button: {
            color: 'red',
          },
        },
      }),
    ).toEqual({
      example: {
        button: {
          color: {
            value: 'red',
          },
        },
      },
    });
  });
});
