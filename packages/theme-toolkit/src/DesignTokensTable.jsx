import PropTypes from 'prop-types';
export const path2css = (path) => `var(--${path.join('-')})`;
import { ColorExample } from './ColorExample';

const visualizeToken = (token) => {
  if (token.css && token.css.syntax === '<color>') {
    return <ColorExample color={token.value}></ColorExample>;
  } else {
    return '';
  }
};

const serializeTokenValue = (value) =>
  typeof value === 'string' ? value : typeof value === 'number' ? String(value) : JSON.stringify(value, null, 2);

export const DesignTokensTable = ({ tokens }) => (
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

const FigmaTokensCompositeFont = PropTypes.shape({
  fontFamily: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  letterSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paragraphSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textCase: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textDecoration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
});

const FigmaTokensCompositeDropShadow = PropTypes.shape({
  x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  blur: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  spread: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
});

DesignTokensTable.propTypes = {
  tokens: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string,
      name: PropTypes.string,
      path: PropTypes.arrayOf(PropTypes.string),
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        FigmaTokensCompositeFont,
        FigmaTokensCompositeDropShadow,
      ]),
    }),
  ),
};
