/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

// eslint-disable-next-line no-unused-vars
import React, { type ReactNode } from 'react';

export interface CopyButtonProps {
  value: string;
  textContent: ReactNode;
}

export const CopyButton = ({ value, textContent = 'Copy' }: CopyButtonProps) => {
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
