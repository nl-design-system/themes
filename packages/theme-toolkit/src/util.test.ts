/* eslint-env jest */
import {
  createDesignToken,
  cssVariable,
  formatDeltaE,
  getColorGroupName,
  getColorName,
  getColors,
  isToken,
  styleDictionaryRef,
} from './util';

describe('format design token as string with `cssVariable()`', () => {
  it('should should create a valid CSS variable with one part`', () => {
    expect(
      cssVariable(
        createDesignToken({
          name: 'color',
        }),
      ),
    ).toBe('var(--color)');
  });

  it('should should create a valid CSS variable with many parts', () => {
    expect(
      cssVariable(
        createDesignToken({
          name: 'example.button.primary-action.hover.color',
        }),
      ),
    ).toBe('var(--example-button-primary-action-hover-color)');
  });
});

describe('format design token as string with `styleDictionaryRef()`', () => {
  it('should should create a valid CSS variable with one part`', () => {
    expect(
      styleDictionaryRef(
        createDesignToken({
          name: 'color',
        }),
      ),
    ).toBe('{color.value}');
  });

  it('should should create a valid CSS variable with many parts', () => {
    expect(
      styleDictionaryRef(
        createDesignToken({
          name: 'example.button.primary-action.hover.color',
        }),
      ),
    ).toBe('{example.button.primary-action.hover.color.value}');
  });
});

describe('design token duck typing with `isToken()`', () => {
  it('should recognize objects with a `value` property', () => {
    expect(isToken({ value: 'red' })).toBe(true);
  });

  it('should reject objects without a `value` property', () => {
    expect(isToken({ $extensions: {} })).toBe(false);
  });

  it('should not break on falsy arguments', () => {
    [null, false, undefined].forEach((value) => {
      expect(isToken(value)).toBe(false);
    });
  });
});

describe('color brand tokens', () => {
  it('obtain color name', () => {
    expect(getColorName(createDesignToken({ name: 'mybrand.color.green.500' }))).toBe('500');
  });
  it('obtain color group name', () => {
    expect(getColorGroupName(createDesignToken({ name: 'mybrand.color.green.500' }))).toBe('green');
  });
});

describe('group color scales', () => {
  const colorTokens = {
    example: {
      color: {
        black: { value: '#000000' },
        white: { value: '#FFFFFF' },
        gray: {
          '50': { value: '#FAFAFA' },
          '100': { value: '#F5F5F5' },
          '200': { value: '#EEEEEE' },
          '300': { value: '#E0E0E0' },
          '400': { value: '#BDBDBD' },
          '500': { value: '#9E9E9E' },
          '600': { value: '#757575' },
          '700': { value: '#616161' },
          '800': { value: '#424242' },
          '900': { value: '#212121' },
        },
      },
    },
  };

  it('can find groups of colors', () => {
    const result = getColors(colorTokens['example']['color']);
    expect(result.grouped).toEqual([Object.values(colorTokens['example']['color']['gray'])]);
  });

  it('can find standalone colors', () => {
    const result = getColors(colorTokens['example']['color']);
    expect(result.nonGrouped[0]).toBe(colorTokens['example']['color']['black']);
  });
});

describe('color difference formatting', () => {
  it('can describe 6 levels of difference', () => {
    const set = new Set();

    for (let i = 0, l = 100; i <= l; i += 0.5) {
      set.add(formatDeltaE(i).replace(/\s*\(Δ.+$/, ''));
    }

    expect(set.size).toBe(6);
  });
});
