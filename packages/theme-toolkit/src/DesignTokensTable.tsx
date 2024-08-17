import { ColorExample } from './ColorExample';
// eslint-disable-next-line no-unused-vars
import { DesignToken, DesignTokenValue, StyleDictionaryDesignToken } from './design-tokens';

export const path2css = (path: StyleDictionaryDesignToken['path']) => `var(--${path.join('-')})`;

const visualizeToken = (token: DesignToken) => {
  if (
    token['$extensions'] &&
    token['$extensions']['nl.nldesignsystem.css.property'] &&
    token['$extensions']['nl.nldesignsystem.css.property'].syntax === '<color>' &&
    typeof token.value === 'string'
  ) {
    return <ColorExample color={token.value}></ColorExample>;
  } else {
    return '';
  }
};

const serializeTokenValue = (value: DesignTokenValue) =>
  typeof value === 'string' ? value : typeof value === 'number' ? String(value) : JSON.stringify(value, null, 2);

interface DesignTokensTableProps {
  tokens: StyleDictionaryDesignToken[];
}

export const DesignTokensTable = ({ tokens }: DesignTokensTableProps) => (
  <table>
    <thead>
      <tr>
        <th>CSS Variable</th>
        <th>CSS Value</th>
      </tr>
    </thead>
    <tbody>
      {tokens.map((token) => {
        const { name, path, value } = token;
        return (
          <tr key={name}>
            <td>
              <code>{path2css(path)}</code>
            </td>
            <td>{serializeTokenValue(value)}</td>
            <td>{visualizeToken(token)}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);
