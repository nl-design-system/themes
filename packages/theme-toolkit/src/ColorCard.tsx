/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import PropTypes from 'prop-types';
import { parseColor } from './color-util';
import { lab } from 'd3-color';
import { CopyCode } from './CopyCode';
// eslint-disable-next-line no-unused-vars
import React from 'react';

export interface ColorCardProps {
  color: string;
}

export const ColorCard = ({ color }: ColorCardProps) => {
  const parsed = parseColor(color);
  if (!parsed) {
    return <></>;
  }

  const d3color = lab(parsed.L, parsed.A, parsed.B);

  return (
    <div style={{ display: 'flex', gap: '1em' }}>
      <div
        style={{
          display: 'inline-block',
          width: '50px',
          height: '50px',
          backgroundColor: color,
          border: '1px solid silver',
        }}
      ></div>
      <ul style={{ margin: 0, listStyle: 'none', padding: '0' }}>
        <li>
          <CopyCode code={d3color.formatHex()}></CopyCode>
        </li>
        <li>
          <CopyCode
            code={d3color.formatHsl().replace(/(\d+\.\d+)/g, (str) => String(Math.round(parseFloat(str))))}
          ></CopyCode>
        </li>
        <li>
          <CopyCode code={d3color.formatRgb()}></CopyCode>
        </li>
      </ul>
    </div>
  );
};

ColorCard.propTypes = {
  color: PropTypes.string.isRequired,
};
