/* eslint-env jest */
import { describe, expect, it } from '@jest/globals';
import { filterColorTokens, parseColor } from './color-util';
import { createDesignToken } from './util';

describe('parsing color strings', () => {
  const colors = [
    {
      description: 'CSS color names',
      value: 'red',
      expected: {
        L: 54.29173376861782,
        A: 80.8124553179771,
        B: 69.88504032350531,
      },
    },
    {
      description: 'CSS color names in uppercase',
      value: 'RED',
      expected: {
        L: 54.29173376861782,
        A: 80.8124553179771,
        B: 69.88504032350531,
      },
    },
    {
      description: 'CSS color names in mixed case',
      value: 'Red',
      expected: {
        L: 54.29173376861782,
        A: 80.8124553179771,
        B: 69.88504032350531,
      },
    },
    {
      description: 'CSS color names with space characters around',
      value: ' red\n ',
      expected: {
        L: 54.29173376861782,
        A: 80.8124553179771,
        B: 69.88504032350531,
      },
    },
    {
      description: '3 character hex colors with lowercase characters',
      value: 'f00',
      expected: {
        L: 54.29173376861782,
        A: 80.8124553179771,
        B: 69.88504032350531,
      },
    },
    {
      description: '3 character hex colors with uppercase characters',
      value: 'F00',
      expected: {
        L: 54.29173376861782,
        A: 80.8124553179771,
        B: 69.88504032350531,
      },
    },
    {
      description: '6 character hex colors with lowercase characters',
      value: 'F00',
      expected: {
        L: 54.29173376861782,
        A: 80.8124553179771,
        B: 69.88504032350531,
      },
    },
    {
      description: '6 character hex colors with lowercase characters',
      value: 'FF0000',
      expected: {
        L: 54.29173376861782,
        A: 80.8124553179771,
        B: 69.88504032350531,
      },
    },
    {
      description: 'hsl color',
      value: 'hsl(0, 100%, 50%)',
      expected: {
        L: 54.29173376861782,
        A: 80.8124553179771,
        B: 69.88504032350531,
      },
    },
  ];

  const todo = [
    {
      description: 'hsl color',
      value: 'hsl(0deg 100% 50%)',
      expected: {
        L: 54.29173376861782,
        A: 80.8124553179771,
        B: 69.88504032350531,
      },
    },
    {
      description: 'hsl color',
      value: 'hsl(0 100% 50%)',
      expected: {
        L: 54.29173376861782,
        A: 80.8124553179771,
        B: 69.88504032350531,
      },
    },
  ];

  const invalid = [
    {
      description: '3 letters, but not hex',
      value: 'abx',
    },
    {
      description: '6 letters, but not hex',
      value: 'abcdex',
    },
  ];

  const invalidTodo = [
    {
      description: 'CSS color keywords',
      value: 'transparent',
    },
    {
      description: 'CSS color keywords',
      value: 'CanvasText',
    },
  ];

  colors.forEach(({ value, description, expected }) => {
    it(`can parse ${description}: ${value}`, () => {
      expect(parseColor(value)).toEqual(expected);
    });
  });

  todo.forEach(({ value, description, expected }) => {
    it.skip(`can parse ${description}: ${value}`, () => {
      expect(parseColor(value)).toEqual(expected);
    });
  });

  invalid.forEach(({ value, description }) => {
    it(`can should return null for invalid colors ${description}: ${value}`, () => {
      expect(parseColor(value)).toEqual(null);
    });
  });

  invalidTodo.forEach(({ value, description }) => {
    it.skip(`can should return null for invalid colors ${description}: ${value}`, () => {
      expect(parseColor(value)).toEqual(null);
    });
  });
});

describe.only('finding close color', () => {
  const white = createDesignToken({ name: 'css.named-color.white', value: 'white' });
  const lightgray = createDesignToken({ name: 'css.named-color.lightgray', value: 'lightgray' });
  const silver = createDesignToken({ name: 'css.named-color.silver', value: 'silver' });
  const gray = createDesignToken({ name: 'css.named-color.gray', value: 'gray' });
  const darkgray = createDesignToken({ name: 'css.named-color.darkgray', value: 'darkgray' });
  const black = createDesignToken({ name: 'css.named-color.black', value: 'black' });

  const colorTokens = [white, lightgray, silver, darkgray, gray, black];

  it('find colors within a specified delta: 15', () => {
    const matches = filterColorTokens(colorTokens, 'white', 15);
    expect(matches).toEqual([
      {
        token: white,
        deltaE: 0,
      },
      {
        token: lightgray,
        deltaE: 9.470984087508421,
      },
      {
        token: silver,
        deltaE: 14.120457780110648,
      },
    ]);
  });

  it('find colors within a specified delta: 10', () => {
    const matches = filterColorTokens(colorTokens, 'white', 10);
    expect(matches).toEqual([
      {
        token: white,
        deltaE: 0,
      },
      {
        token: lightgray,
        deltaE: 9.470984087508421,
      },
    ]);
  });

  it('find returns all colors when the delta is 100', () => {
    const matches = filterColorTokens(colorTokens, 'white', 100);
    expect(matches.map(({ token }) => token)).toEqual(colorTokens);
  });
});
