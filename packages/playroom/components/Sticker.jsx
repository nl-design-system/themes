import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const Sticker = ({ components = [], children, inline = false, noPrint = false }) => (
  <div
    className={clsx('nlds-sticker', {
      'nlds-sticker--proprietary': !components.length,
      'nlds-sticker--inline': inline,
      'nlds-sticker--no-print': noPrint,
    })}
  >
    <p className="nlds-sticker__names">
      {components.map((componentId) => (
        <span className="nlds-sticker__name" key={componentId}>
          nldesignsystem.nl/{componentId}
        </span>
      ))}
    </p>
    {children}
  </div>
);

Sticker.propTypes = {
  children: PropTypes.any,
  componentId: PropTypes.any,
  inline: PropTypes.any,
  noPrint: PropTypes.any,
};
