import { Canvas } from '@storybook/addon-docs';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const Preview = ({ children }) => (
  <div
    role="presentation"
    style={{
      backgroundColor: 'white',
      borderRadius: '4px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'rgba(0, 0, 0, 0.1)',
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px',
      marginBlockEnd: '40px',
      marginBlockStart: '25px',
      paddingBlockEnd: '30px',
      paddingBlockStart: '30px',
      paddingInlineEnd: '20px',
      paddingInlineStart: '20px',
      position: 'relative',
    }}
  >
    {children}
  </div>
);

Preview.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export const CustomStory = ({ children }) => {
  // HACK: Only the docs addon supports the custom rendering of the Canvas element
  const hasCanvas = location.search.includes('viewMode=docs');

  return hasCanvas ? (
    <Canvas mdxSource={ReactDOMServer.renderToStaticMarkup(children)}>{children}</Canvas>
  ) : (
    <Preview>{children}</Preview>
  );
};

CustomStory.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
