/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React from 'react';

export const CopyButton = ({ value, textContent = 'Copy' }) => {
  return (
    <button
      className="utrecht-button utrecht-button--secondary-action utrecht-button--html-button"
      style={{ cursor: 'copy' }}
      onClick={() => navigator.clipboard.writeText(value)}
      type="button"
    >
      {textContent}
    </button>
  );
};

CopyButton.propTypes = {
  value: PropTypes.string.isRequired,
  textContent: PropTypes.string,
};
