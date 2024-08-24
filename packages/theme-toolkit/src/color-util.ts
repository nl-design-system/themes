import Color from 'color';
import { LabColor, lab } from 'd3-color';

import { deltaECIE00Lab, type LAB as DynamyzeLAB } from '@dynamize/color-utilities';
import { StyleDictionaryDesignToken } from './design-tokens';

export interface LAB {
  L: number;
  A: number;
  B: number;
}

const lab2dynamize = ({ L, A, B }: LAB): DynamyzeLAB => ({
  luminance: L,
  a: A,
  b: B,
});

const getDeltaE00 = (lab1: LAB, lab2: LAB): number => deltaECIE00Lab(lab2dynamize(lab1), lab2dynamize(lab2));

interface SimpleLabColor {
  l: number;
  a: number;
  b: number;
}

// Convert from `d3-color` object to the `delta-e` object
const labUppercase = ({ l, a, b }: SimpleLabColor | LabColor): LAB => ({ L: l, A: a, B: b });

export const parseColor = (color: string): LAB | null => {
  let colorLAB: SimpleLabColor | null = null;
  let query = String(color || '')
    .trim()
    .toLowerCase();

  if (query !== '') {
    // Parse colors such as `red` or `hsl(0, 0%, 20%)`
    try {
      colorLAB = lab(query);
    } catch (e) {
      colorLAB = null;
    }

    // Do not use `{ l: NaN, a: NaN, b: NaN }`
    colorLAB = !!colorLAB && isFinite(colorLAB.l) ? colorLAB : null;

    // Parse colors such as `fff` and `ffffff`
    const HEX = /^\s*([0-9a-f]{3,6})\s*$/i;
    if (!colorLAB && HEX.test(query)) {
      query = query.replace(HEX, '#$1');
      try {
        colorLAB = lab(query);
        colorLAB = !!colorLAB && isFinite(colorLAB.l) ? colorLAB : null;
      } catch (e) {
        colorLAB = null;
      }
    }

    if (!colorLAB) {
      // Parse colors such as `hsl(0deg 0% 20%)`
      try {
        const [l, a, b] = (Color(query).lab() as any).color as [number, number, number];
        colorLAB = { l, a, b };
      } catch (e) {
        colorLAB = null;
      }
    }
  }
  return colorLAB && labUppercase(colorLAB);
};

export interface ColorTokenMatch<T extends StyleDictionaryDesignToken = StyleDictionaryDesignToken> {
  token: T;
  deltaE: number;
}

export const filterColorTokens = <T extends StyleDictionaryDesignToken = StyleDictionaryDesignToken>(
  tokens: T[],
  query: string,
  maxDeltaE: number,
): ColorTokenMatch<T>[] => {
  const queryLAB = parseColor(query);

  return queryLAB
    ? tokens
        .map((token) => {
          const tokenLAB = typeof token.value === 'string' ? parseColor(token.value) : null;
          const deltaE = tokenLAB ? getDeltaE00(queryLAB, tokenLAB) : 100;

          return {
            token,
            deltaE,
          };
        })
        .filter(({ deltaE }) => deltaE <= maxDeltaE)
        .sort((tokenA, tokenB) => tokenA.deltaE - tokenB.deltaE)
        .splice(0, 10)
    : [];
};
