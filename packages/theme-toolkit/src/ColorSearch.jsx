/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { ColorTable } from './ColorTable';
import Color from 'color';
import { getDeltaE00 } from 'delta-e';
import { lab } from 'd3-color';
import { flattenColorTokens } from './util';

// Convert from `d3-color` object to the `delta-e` object
const labUppercase = ({ l, a, b }) => ({ L: l, A: a, B: b });

const parseColor = (color) => {
  let colorLAB;
  const query = String(color || '').trim();

  if (query !== '') {
    // Parse colors such as `red` or `hsl(0, 0%, 20%)`
    try {
      colorLAB = lab(query);
    } catch (e) {
      colorLAB = null;
    }

    // Do not use `{ l: NaN, a: NaN, b: NaN }`
    colorLAB = !!colorLAB && isFinite(colorLAB.l) ? colorLAB : null;

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

const filterColorTokens = (tokens, query, maxDeltaE) => {
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

export const ColorSearch = ({ tokens }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({});

  useEffect(() => {
    setResults(filterColorTokens(flattenColorTokens(tokens), query, 25));
  }, [query]);

  return (
    <div className="color-search">
      <p className="color-search__form">
        <label htmlFor="color">Color:</label>
        <input id="color" type="search" onInput={(evt) => setQuery(evt.target.value)} />
      </p>
      {query ? results.length > 0 ? <ColorTable tokens={results}></ColorTable> : <p>No results</p> : ''}
    </div>
  );
};

ColorSearch.propTypes = {
  tokens: PropTypes.object.isRequired,
};
