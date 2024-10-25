/* eslint-env jest */

import { afterAll, beforeAll, describe, expect, it } from '@jest/globals';
import { StyleDictionaryStyle } from './StyleDictionaryStyle';
import { render } from '@testing-library/react';
import cloneDeepWith from 'lodash.clonedeepwith';
import '@testing-library/jest-dom';
import 'web-streams-polyfill/polyfill';

describe('StyleDictionaryStyle', () => {
  const structuredCloneShim = (arg: any) => cloneDeepWith(arg, (arg: any) => arg);
  beforeAll(() => {
    // https://github.com/jsdom/jsdom/issues/3363
    if (!window.structuredClone) {
      window.structuredClone = structuredCloneShim;
    }
  });
  afterAll(() => {
    if (window.structuredClone === structuredCloneShim) {
      window.structuredClone = undefined as never;
    }
  });
  const simpleTree = {
    example: {
      button: {
        color: {
          value: 'red',
        },
      },
    },
  };

  it('renders a HTML style element', () => {
    const { container } = render(<StyleDictionaryStyle tokens={simpleTree}></StyleDictionaryStyle>);

    const style = container.querySelector('style');

    expect(style).toBeInTheDocument();
  });

  it('renders a class name selector', () => {
    const { container } = render(
      <StyleDictionaryStyle tokens={simpleTree} selector=".my-theme"></StyleDictionaryStyle>,
    );

    const style = container.querySelector('style');

    expect(style).toContain('.my-theme');
  });
});
