import React from 'react';
import '@utrecht/component-library-css/dist/index.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export default function FrameComponent({ theme, children }) {
  return <div className={clsx(theme.className, 'utrecht-document')}>{children}</div>;
}

FrameComponent.propTypes = {
  theme: { className: PropTypes.string },
  children: PropTypes.any,
};
