/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { StyleDictionaryStyle } from './StyleDictionaryStyle';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('StyleDictionaryStyle', () => {
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
