import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { ThemedHeader } from './ThemedHeader';
import { UtrechtPage, UtrechtPageContent } from './components';

import '@utrecht/component-library-css/dist/index.css';
import '@gemeente-denhaag/components-css/dist/index.css';
import './index.css';

export default function FrameComponent({ theme, children }) {
  if (theme.className.includes('amsterdam') || theme.className.includes('rvo')) {
    require('@nl-rvo/component-library-css');
  }

  return (
    <div className={clsx(theme.className, 'utrecht-document', 'utrecht-document--surface')}>
      <ThemedHeader theme={theme.className} />
      <UtrechtPage>
        <div className="denhaag-responsive-content">
          <UtrechtPageContent>{children}</UtrechtPageContent>
        </div>
      </UtrechtPage>
    </div>
  );
}

FrameComponent.propTypes = {
  theme: PropTypes.any,
  children: PropTypes.any,
};
