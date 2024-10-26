/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import './CursorSample.css';

export interface CursorSampleProps {
  cursor: string;
}

export const CursorSample = ({ cursor }: CursorSampleProps) => {
  return (
    <span
      className="cursor-sample"
      style={{
        cursor,
      }}
    ></span>
  );
};
