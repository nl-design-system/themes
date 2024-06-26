/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React from 'react';

export const CopyCode = ({ code }) => {
  return (
    <code
      style={{ cursor: 'copy', display: 'inline-block' }}
      onClick={() => navigator.clipboard.writeText(code)}
      tabIndex="0"
      role="button"
    >
      {code}
    </code>
  );
};

CopyCode.propTypes = {
  code: PropTypes.string.isRequired,
};
