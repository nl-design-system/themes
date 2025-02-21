/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import { parseFontFamily } from './font-family';

describe('parsing CSS `<font-family>` tokens', () => {
  it('should parse font-family values', () => {
    expect(parseFontFamily('"Fira Sans", monospace')).toEqual(['Fira Sans', 'monospace']);
  });
});
