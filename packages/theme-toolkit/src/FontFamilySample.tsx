/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import './FontFamilySample.css';

export interface FontFamilySampleProps {
  fontFamily: string;
}

export const FontFamilySample = ({ fontFamily }: FontFamilySampleProps) => {
  return (
    <span
      role="image"
      aria-label={fontFamily}
      className="font-family-sample"
      style={{
        fontFamily,
      }}
    >
      Aa
    </span>
  );
};
