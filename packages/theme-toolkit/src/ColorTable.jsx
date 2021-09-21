/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import PropTypes from 'prop-types';
import React from 'react';
import { ColorPalette, ColorItem } from '@storybook/addon-docs';
import { cssVariable, getColors, getColorName, getColorGroupName, styleDictionaryRef } from './util';

export const ColorRow = ({ name, token }) => (
  <ColorItem
    title={name}
    subtitle={
      <>
        <button onClick={() => navigator.clipboard.writeText(cssVariable(token))}>
          <code>{cssVariable(token)}</code>
        </button>
        <br />
        <button onClick={() => navigator.clipboard.writeText(styleDictionaryRef(token))}>
          <code>{styleDictionaryRef(token)}</code>
        </button>
      </>
    }
    colors={[token.value]}
  />
);

ColorRow.propTypes = {
  name: PropTypes.string.isRequired,
  token: PropTypes.object.isRequired,
};

export const ColorGroupRow = ({ name, tokens }) => (
  <ColorItem key={name} title={name} colors={tokens.map(({ value }) => value)} />
);

ColorGroupRow.propTypes = {
  name: PropTypes.string.isRequired,
  tokens: PropTypes.array.isRequired,
};

export const ColorTable = ({ tokens }) => {
  const { grouped, nonGrouped } = getColors(tokens);

  return (
    <ColorPalette>
      {grouped.map((tokens) => {
        const name = getColorGroupName(tokens[0]);
        return <ColorGroupRow key={name} name={name} tokens={tokens} />;
      })}
      {nonGrouped.map((token) => {
        const name = getColorName(token);
        return <ColorRow key={token.path.join('-')} name={name} token={token} />;
      })}
    </ColorPalette>
  );
};

ColorTable.propTypes = {
  tokens: PropTypes.object.isRequired,
};
