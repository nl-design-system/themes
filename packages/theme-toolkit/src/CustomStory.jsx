import { Canvas } from '@storybook/addon-docs';
import PropTypes from 'prop-types';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { format as prettierFormat } from 'prettier/standalone';
import prettierHtml from 'prettier/parser-html';

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

export const CustomStory = ({ children, theme, inline }) => {
  // HACK: Only the docs addon supports the custom rendering of the Canvas element
  const hasCanvas = location.search.includes('viewMode=docs');

  const prettierConfig = {
    htmlWhitespaceSensitivity: 'ignore',
    parser: 'html',
    plugins: [prettierHtml],
  };

  const source = prettierFormat(
    renderToStaticMarkup(
      <html className={theme}>{inline ? <body className="utrecht-document">{children}</body> : <>{children}</>}</html>,
    ),
    prettierConfig,
  );

  const component = <div className={`${theme} utrecht-document`}>{children}</div>;

  return hasCanvas ? (
    <Canvas mdxSource={source}>
      <div className="utrecht-document">{component}</div>
    </Canvas>
  ) : (
    <Preview>{component}</Preview>
  );
};

CustomStory.propTypes = {
  inline: PropTypes.bool,
  theme: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
