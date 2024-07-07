/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

// eslint-disable-next-line no-unused-vars
import React from 'react';

export interface CopyCodeProps {
  code: string;
}

export const CopyCode = ({ code }: CopyCodeProps) => {
  return (
    <code
      style={{ cursor: 'copy', display: 'inline-block' }}
      onClick={() => navigator.clipboard.writeText(code)}
      tabIndex={0}
      role="button"
    >
      {code}
    </code>
  );
};
