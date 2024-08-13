/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import {
  designTokenMapToList,
  filterTokenEndsWith,
  filterTokenStartsWith,
  findToken,
  getColorContrast,
  getColorPairs,
} from './check-colors';
import { createDesignToken } from '../util';

describe('design token tree traversal', () => {
  it('can convert a tree to an array', () => {
    const designTokenMap = {
      example: {
        button: {
          color: createDesignToken({
            name: 'example.button.color',
          }),
          'background-color': createDesignToken({
            name: 'example.button.background-color',
          }),
        },
      },
    };
    const list = designTokenMapToList(designTokenMap);

    expect(list).toEqual([
      designTokenMap['example']['button']['color'],
      designTokenMap['example']['button']['background-color'],
    ]);
  });
});

describe('finding a design token by name', () => {
  it('can find a token in a list', () => {
    const targetToken = createDesignToken({
      name: 'example.button.background-color',
    });
    const otherToken = createDesignToken({
      name: 'example.button.color',
    });
    const list = [otherToken, targetToken];
    const result = findToken(list, ['example', 'button', 'background-color']);

    expect(result).toEqual(targetToken);
  });
});

describe('matching design token prefix', () => {
  it('xxx', () => {
    const matchingToken = createDesignToken({ name: 'example.button.color' });
    const partialMatchingToken = createDesignToken({ name: 'example.button.background-color' });
    const nonMatchingToken = createDesignToken({ name: 'com.example.button.color' });

    const filterFn = filterTokenStartsWith('example');
    expect(filterFn(matchingToken)).toBe(true);
    expect(filterFn(partialMatchingToken)).toBe(true);
    expect(filterFn(nonMatchingToken)).toBe(false);

    const filterFn2 = filterTokenStartsWith('example.button');
    expect(filterFn2(matchingToken)).toBe(true);
    expect(filterFn2(partialMatchingToken)).toBe(true);
    expect(filterFn2(nonMatchingToken)).toBe(false);

    const filterFn3 = filterTokenStartsWith('example.button.color');
    expect(filterFn3(matchingToken)).toBe(true);
    expect(filterFn3(partialMatchingToken)).toBe(false);
    expect(filterFn3(nonMatchingToken)).toBe(false);
  });
});

describe('matching design token suffix', () => {
  it('xxx', () => {
    const matchingToken = createDesignToken({ name: 'example.button.color' });
    const partialMatchingToken = createDesignToken({ name: 'example.link.color' });
    const nonMatchingToken = createDesignToken({ name: 'example.button.background-color' });

    const filterFn = filterTokenEndsWith('color');
    expect(filterFn(matchingToken)).toBe(true);
    expect(filterFn(partialMatchingToken)).toBe(true);
    expect(filterFn(nonMatchingToken)).toBe(false);

    const filterFn2 = filterTokenEndsWith('button.color');
    expect(filterFn2(matchingToken)).toBe(true);
    expect(filterFn2(partialMatchingToken)).toBe(false);
    expect(filterFn2(nonMatchingToken)).toBe(false);

    const filterFn3 = filterTokenEndsWith('example.button.color');
    expect(filterFn3(matchingToken)).toBe(true);
    expect(filterFn3(partialMatchingToken)).toBe(false);
    expect(filterFn3(nonMatchingToken)).toBe(false);
  });
});

describe('get color pairs', () => {
  it('xxx', () => {
    const foregroundToken = createDesignToken({ name: 'example.button.color' });
    const backgroundToken = createDesignToken({ name: 'example.button.background-color' });
    const otherToken = createDesignToken({ name: 'example.link.color' });

    const tokens = [foregroundToken, otherToken, backgroundToken];

    expect(getColorPairs(tokens, [foregroundToken])).toEqual([
      {
        foreground: 'example.button.color',
        foregroundColor: '',
        background: 'example.button.background-color',
        backgroundColor: '',
        'font-size': undefined,
        type: 'functional',
      },
    ]);
  });
});

describe('calculate color contrast', () => {
  it('xxx', () => {
    const result = getColorContrast({
      foreground: 'example.button.color',
      foregroundColor: 'white',
      background: 'example.button.background-color',
      backgroundColor: 'black',
      'font-size': undefined,
      type: 'functional',
    });

    expect(result.contrast).toBe(21);
  });
});
