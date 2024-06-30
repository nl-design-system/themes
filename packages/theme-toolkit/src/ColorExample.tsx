import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React from 'react';

export interface ColorExampleProps {
  color: string;
}

export const ColorExample = ({ color }: ColorExampleProps) => (
  <div
    style={{
      backgroundColor: color,
      outline: '1px solid silver',
      display: 'inline-block',
      height: '2em',
      width: '2em',
    }}
  ></div>
);

ColorExample.propTypes = {
  color: PropTypes.string.isRequired,
};
