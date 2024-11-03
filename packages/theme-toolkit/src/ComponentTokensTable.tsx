import { DesignTokensTable } from '@nl-design-system-unstable/design-tokens-table-react/css';
import {
  isHiddenDesignToken,
  StyleDictionaryDesignToken,
} from '@nl-design-system-unstable/tokens-lib/src/design-tokens';
// eslint-disable-next-line no-unused-vars

export interface ComponentTokensTableProps {
  component: string;
  tokens: StyleDictionaryDesignToken[];
}

export const ComponentTokensTable = ({ component, tokens }: ComponentTokensTableProps) => {
  const regexp = /^(example|denhaag|utrecht)-/;

  const componentPath = regexp.test(component) ? component.split('-') : component.split('.');

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
