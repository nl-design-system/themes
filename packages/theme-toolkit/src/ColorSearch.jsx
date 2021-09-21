/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { ColorTable } from './ColorTable';
import { ColorCard } from './ColorCard';
import { flattenColorTokens } from './util';
import { filterColorTokens, parseColor } from './color-util';

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
        <input
          id="color"
          aria-invalid={parseColor(query) === null}
          type="search"
          onInput={(evt) => setQuery(evt.target.value)}
        />
      </p>
      {parseColor(query) === null ? <p>Unknown color.</p> : <ColorCard color={query} />}
      {query ? results.length > 0 ? <ColorTable tokens={results}></ColorTable> : <p>No results.</p> : ''}
    </div>
  );
};

ColorSearch.propTypes = {
  tokens: PropTypes.object.isRequired,
};
