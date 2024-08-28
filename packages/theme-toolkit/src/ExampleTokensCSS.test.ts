/* eslint-env jest */
import { describe, expect, it, jest } from '@jest/globals';
import { isDesignToken } from './design-tokens';
import { addPath, findDesignTokenDefinitions, tokensToCSS, traverseDeep } from './ExampleTokensCSS';
import { createDesignToken } from './util';

describe('traverseDeep', () => {
  const tokensTree = {
    example: {
      button: {
        color: createDesignToken({ name: 'color' }),
        'background-color': createDesignToken({ name: 'background-color' }),
        disabled: {
          color: createDesignToken({ name: 'color' }),
          'background-color': createDesignToken({ name: 'background-color' }),
        },
      },
    },
  };

  it('should should find all tokens', () => {
    const callbackFn = jest.fn();
    traverseDeep(tokensTree, [], tokensTree, isDesignToken, callbackFn);
    expect(callbackFn).toHaveBeenCalledTimes(4);
    expect(callbackFn).toHaveBeenNthCalledWith(
      1,
      ['example', 'button', 'color'],
      tokensTree['example']['button']['color'],
    );
    expect(callbackFn).toHaveBeenNthCalledWith(
      2,
      ['example', 'button', 'background-color'],
      tokensTree['example']['button']['background-color'],
    );
    expect(callbackFn).toHaveBeenNthCalledWith(
      3,
      ['example', 'button', 'disabled', 'color'],
      tokensTree['example']['button']['disabled']['color'],
    );
    expect(callbackFn).toHaveBeenNthCalledWith(
      4,
      ['example', 'button', 'disabled', 'background-color'],
      tokensTree['example']['button']['disabled']['background-color'],
    );
  });
});

describe('findTokenDefinitions', () => {
  const tokensTreeDefinition = {
    example: {
      button: {
        color: {
          value: 'white',
          $extensions: {
            'com.example.setting': false,
          },
        },
        'background-color': {
          value: 'black',
          $extensions: {
            'com.example.setting': false,
          },
        },
      },
    },
  };

  it('should should find all token definitions', () => {
    const callbackFn = jest.fn();
    findDesignTokenDefinitions(tokensTreeDefinition, callbackFn);
    expect(callbackFn).toHaveBeenCalledTimes(2);
    expect(callbackFn).toHaveBeenNthCalledWith(
      1,
      ['example', 'button', 'color'],
      tokensTreeDefinition['example']['button']['color'],
    );
    expect(callbackFn).toHaveBeenNthCalledWith(
      2,
      ['example', 'button', 'background-color'],
      tokensTreeDefinition['example']['button']['background-color'],
    );
  });
});

describe('design tokens to CSS', () => {
  const tokensTreeDefinition = {
    example: {
      button: {
        color: createDesignToken({
          name: 'example.button.color',
          $extensions: {
            'com.example.setting': false,
          },
        }),
        'background-color': createDesignToken({
          name: 'example.button.background-color',
          $extensions: {
            'com.example.setting': false,
            $extensions: {
              // Not actually hidden — it is `false`!
              'nl.nldesignsystem.hidden': false,
            },
          },
        }),
        'secret-color': createDesignToken({
          name: 'example.button.secret-color',
          $extensions: {
            'nl.nldesignsystem.hidden': true,
          },
        }),
      },
    },
  };

  it('should not error when no tokens are found', () => {
    const css = tokensToCSS(tokensTreeDefinition);

    expect(css).not.toBeFalsy();
  });

  it('should include the tokens as CSS variable', () => {
    const cssLines = tokensToCSS(tokensTreeDefinition);

    expect(cssLines).toContain('example');
    expect(cssLines).toContain('button');
    expect(cssLines).toContain('color');
    expect(cssLines).toContain('background-color');
  });

  it('should generate at least one line of CSS for every token', () => {
    const emptyCssLines = tokensToCSS({}).split('\n');
    const cssLines = tokensToCSS(tokensTreeDefinition);
    const tokenCount = 2;

    expect(cssLines.length).toBeGreaterThan(emptyCssLines.length + tokenCount);
  });

  it('should not include hidden CSS tokens', () => {
    const css = tokensToCSS(tokensTreeDefinition);

    expect(css).not.toContain('secret');
  });
});

describe('addPath', () => {
  it('should convert a value tree correctly', () => {
    expect(
      addPath({
        example: {
          button: {
            color: {
              value: 'red',
            },
          },
        },
      }),
    ).toEqual({
      example: {
        button: {
          color: {
            value: 'red',
            path: ['example', 'button', 'color'],
          },
        },
      },
    });
  });
});
