import PropTypes from 'prop-types';
import { ComponentTokensTable } from './ComponentTokensTable';
import { ExampleTokensCSS } from './ExampleTokensCSS';
import { ExampleTokensJSON } from './ExampleTokensJSON';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { DesignToken, DesignTokenTree } from './design-tokens';

export interface ComponentTokensSectionProps {
  component: string;
  tokens: DesignToken[];
  definition: DesignTokenTree;
}

export const ComponentTokensSection = ({ component, tokens, definition }: ComponentTokensSectionProps) => (
  <>
    {definition ? <ExampleTokensJSON definition={definition}></ExampleTokensJSON> : ''}
    {definition ? <ExampleTokensCSS definition={definition}></ExampleTokensCSS> : ''}
    <ComponentTokensTable component={component} tokens={tokens}></ComponentTokensTable>
  </>
);

ComponentTokensSection.propTypes = {
  component: PropTypes.string.isRequired,
  definition: PropTypes.object,
  tokens: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string,
      name: PropTypes.string,
      path: PropTypes.arrayOf(PropTypes.string),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ).isRequired,
};
