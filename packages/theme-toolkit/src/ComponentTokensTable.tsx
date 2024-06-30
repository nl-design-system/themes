import PropTypes from 'prop-types';
import { DesignTokensTable } from './DesignTokensTable';
import { DesignToken, isHiddenDesignToken } from './design-tokens.js';
// eslint-disable-next-line no-unused-vars
import React from 'react';

export interface ComponentTokensTableProps {
  component: string;
  tokens: DesignToken[];
}

export const ComponentTokensTable = ({ component, tokens }: ComponentTokensTableProps) => {
  const componentPath = ['utrecht', component.replace(/^(example|denhaag|utrecht)-/, '')];

  const subset = tokens
    .filter((token) => componentPath.every((name, index) => token.path[index] === name))
    .filter((token) => !isHiddenDesignToken(token));

  if (subset.length === 0) {
    return (
      <p>
        This component has <strong>no documented design tokens</strong>.
      </p>
    );
  }

  return <DesignTokensTable tokens={subset}></DesignTokensTable>;
};

ComponentTokensTable.propTypes = {
  component: PropTypes.string.isRequired,
  tokens: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string,
      name: PropTypes.string,
      path: PropTypes.arrayOf(PropTypes.string),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
};
