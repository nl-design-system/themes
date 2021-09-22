import Color from 'color';
import { getDeltaE00 } from 'delta-e';
import { lab } from 'd3-color';

// Convert from `d3-color` object to the `delta-e` object
const labUppercase = ({ l, a, b }) => ({ L: l, A: a, B: b });

export const parseColor = (color) => {
  let colorLAB;
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
        const [l, a, b] = Color(query).lab().color;
        colorLAB = { l, a, b };
      } catch (e) {
        colorLAB = null;
      }
    }
  }
  return colorLAB && labUppercase(colorLAB);
};

export const filterColorTokens = (tokens, query, maxDeltaE) => {
  const queryLAB = parseColor(query);

  return queryLAB
    ? tokens
        .map((token) => {
          const tokenLAB = parseColor(token.value);
          const deltaE = tokenLAB ? getDeltaE00(queryLAB, tokenLAB) : 100;

          return {
            ...token,
            deltaE,
          };
        })
        .filter(({ deltaE }) => deltaE <= maxDeltaE)
        .sort((tokenA, tokenB) => tokenA.deltaE - tokenB.deltaE)
        .splice(0, 10)
    : [];
};
