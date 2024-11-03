/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { useEffect, useState } from 'react';
import { ColorResults } from './ColorTable';
import { ColorCard } from './ColorCard';
import { flattenColorTokens } from '@nl-design-system-unstable/tokens-lib/src/util';
import { ColorTokenMatch, filterColorTokens, parseColor } from '@nl-design-system-unstable/tokens-lib/src/color-util';
// eslint-disable-next-line no-unused-vars
import {
  StyleDictionaryDesignToken,
  StyleDictionaryTree,
} from '@nl-design-system-unstable/tokens-lib/src/design-tokens';
import { Code } from '@utrecht/component-library-react/dist/css-module';

export interface ColorSearchProps {
  tokens: StyleDictionaryTree;
}

export const ColorSearch = ({ tokens }: ColorSearchProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ColorTokenMatch[]>([]);

  useEffect(() => {
    setResults(filterColorTokens(flattenColorTokens<StyleDictionaryDesignToken>(tokens), query, 25));
  }, [query]);

  return (
    <div className="color-search">
      <p className="color-search__form">
        <label htmlFor="color">Color:</label>
        <input
          id="color"
          aria-invalid={parseColor(query) === null}
          type="search"
          onInput={(evt) => setQuery((evt.target as HTMLInputElement).value)}
        />
      </p>
      {!query ? null : parseColor(query) === null ? (
        <p>
          Unknown color: <Code>{query}</Code>.
        </p>
      ) : (
        <ColorCard color={query} />
      )}
      {query ? results.length > 0 ? <ColorResults matches={results}></ColorResults> : <p>No results.</p> : ''}
    </div>
  );
};
