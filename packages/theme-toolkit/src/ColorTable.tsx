/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import PropTypes from 'prop-types';
import { ColorPalette, ColorItem } from '@storybook/blocks';
import { CopyCode } from './CopyCode';
import {
  cssVariable,
  formatDeltaE,
  getColors,
  getColorName,
  getColorGroupName,
  styleDictionaryRef,
  isColorOrUnknown,
} from './util';
import { ColorTokenMatch, parseColor } from './color-util';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import type { DesignToken, DesignTokenMap } from './design-tokens';

export const ColorRow = ({
  name,
  token,
  colorMatch,
}: {
  name: string;
  token: DesignToken;
  colorMatch?: ColorTokenMatch;
}) => (
  <ColorItem
    title={name}
    subtitle={
      (
        <>
          <CopyCode code={cssVariable(token)}></CopyCode>
          <br />
          <CopyCode code={styleDictionaryRef(token)}></CopyCode>
          {typeof colorMatch?.deltaE === 'number' ? <p>{formatDeltaE(colorMatch.deltaE)}</p> : ''}
        </>
      ) as unknown as string /* ColorItem['subtitle'] is typed as string, but it actually supports ReactNode */
    }
    colors={[String(token.value)]}
  />
);

ColorRow.propTypes = {
  name: PropTypes.string.isRequired,
  token: PropTypes.object.isRequired,
  colorMatch: PropTypes.object,
};

export interface ColorGroupRowProps {
  name: string;
  tokens: DesignToken[];
}

export const ColorGroupRow = ({ name, tokens }: ColorGroupRowProps) => (
  <ColorItem key={name} title={name} subtitle="" colors={tokens.map(({ value }) => String(value))} />
);

ColorGroupRow.propTypes = {
  name: PropTypes.string.isRequired,
  tokens: PropTypes.array.isRequired,
};

export interface ColorTableProps {
  tokens: DesignTokenMap;
}

export const ColorTable = ({ tokens }: ColorTableProps) => {
  const { grouped, nonGrouped } = getColors(tokens);

  return (
    <ColorPalette>
      {grouped
        // .filter((group) => isColorOrUnknown(group))
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

export interface ColorResultsProps {
  matches: ColorTokenMatch[];
}

export const ColorResults = ({ matches }: ColorResultsProps) => {
  return (
    <ColorPalette>
      {matches.map((match) => {
        const { token } = match;
        const name = getColorName(token);
        return <ColorRow key={token.path.join('-')} name={name} token={token} colorMatch={match} />;
      })}
    </ColorPalette>
  );
};
export interface ColorCardProps {
  color: string;
}

export const ColorCard = ({ color }: ColorCardProps) => {
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
