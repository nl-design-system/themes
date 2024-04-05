/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import PropTypes from 'prop-types';
import { ColorPalette, ColorItem } from '@storybook/blocks';
import { CopyCode } from './CopyCode';
import { cssVariable, formatDeltaE, getColors, getColorName, getColorGroupName, styleDictionaryRef } from './util';
import { parseColor } from './color-util';
// eslint-disable-next-line no-unused-vars
import React from 'react';

// Figma Tokens assign `type` properties for tokens or groups
// Utility to filter out non-color type tokens.
const isColorOrUnknown = (arg) => (arg && typeof arg.type === 'string' ? arg.type === 'color' : true);

export const ColorRow = ({ name, token }) => (
  <ColorItem
    title={name}
    subtitle={
      <>
        <CopyCode code={cssVariable(token)}></CopyCode>
        <br />
        <CopyCode code={styleDictionaryRef(token)}></CopyCode>
        {typeof token.deltaE === 'number' ? <p>{formatDeltaE(token.deltaE)}</p> : ''}
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
      {grouped
        .filter((group) => isColorOrUnknown(group))
        .map((tokens) => {
          const name = getColorGroupName(tokens[0]);
          const colorTokens = tokens.filter(isColorOrUnknown);
          return colorTokens.length >= 1 ? <ColorGroupRow key={name} name={name} tokens={colorTokens} /> : null;
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

export const ColorCard = ({ color }) => {
  const parsed = parseColor(color);

  return parsed ? (
    <div>
      <div
        style={{
          display: 'inline-block',
          width: '50px',
          height: '50px',
          backgroundColor: color,
        }}
      ></div>
    </div>
  ) : (
    <></>
  );
};

ColorCard.propTypes = {
  color: PropTypes.string.isRequired,
};
