import React from 'react';
import '@utrecht/component-library-css/dist/index.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { ThemedHeader } from './ThemedHeader';
import { UtrechtPage } from './components';

export default function FrameComponent({ theme, children }) {
  if (theme.className !== 'utrecht-theme') {
    require('@nl-rvo/component-library-css/dist/index.css');
  }

  return (
    <div className={clsx(theme.className, 'utrecht-document')}>
      <ThemedHeader theme={theme.className} />
      <UtrechtPage>{children}</UtrechtPage>
    </div>
  );
}

FrameComponent.propTypes = {
  theme: PropTypes.any,
  children: PropTypes.any,
};
