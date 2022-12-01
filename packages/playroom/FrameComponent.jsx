/* eslint-disable react/prop-types */
import React from 'react';
import '@utrecht/component-library-css/dist/index.css';
import clsx from 'clsx';

export default function FrameComponent({ theme, children }) {
  return <div className={clsx(theme.className, 'utrecht-document')}>{children}</div>;
}
