import {
  ColorSample,
  DataBadge,
  PreserveData,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@utrecht/component-library-react/dist/css-module';
// eslint-disable-next-line no-unused-vars
import { DesignTokenValue, getTokenValue, StyleDictionaryDesignToken } from './design-tokens';
import { tokenRef } from './util';
import { getTokenType } from './token-type';
import { TokenTypeIcon } from './TokenTypeIcon';
import './DesignTokensTable.css';

export const path2css = (path: StyleDictionaryDesignToken['path']) => `var(--${path.join('-')})`;

const serializeTokenValue = (value?: DesignTokenValue) =>
  typeof value === 'undefined' || value === null
    ? ''
    : typeof value === 'string'
    ? value
    : typeof value === 'number'
    ? String(value)
    : 'JSON';

interface DesignTokensTableProps {
  tokens: StyleDictionaryDesignToken[];
}

const getLastPathSegment = (token: StyleDictionaryDesignToken) =>
  Array.isArray(token.path) && token.path[token.path.length - 1];

const isColorValue = (arg: unknown): arg is string => typeof arg === 'string';

const stringSort = (a: string, b: string) => (a === b ? 0 : a > b ? 1 : -1);

const sortByTokenRef = (a: StyleDictionaryDesignToken, b: StyleDictionaryDesignToken) =>
  stringSort(tokenRef(a.path), tokenRef(b.path));

export const DesignTokensTable = ({ tokens }: DesignTokensTableProps) => {
  return (
    <Table
      className="sb-unstyled voorbeeld-theme"
      style={{
        '--utrecht-icon-inset-block-start': '0.25em',
      }}
    >
      <TableCaption>Design Tokens</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>name</TableHeaderCell>
          <TableHeaderCell>value</TableHeaderCell>
          <TableHeaderCell>detected type</TableHeaderCell>
          <TableHeaderCell>voorbeeld</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tokens.sort(sortByTokenRef).map((token, index) => {
          const { path } = token;
          const ref = tokenRef(path);
          const value = getTokenValue(token);
          const propertyName = getLastPathSegment(token);
          const tokenType = propertyName && getTokenType(propertyName);

          if (propertyName === 'color' && !isColorValue(value)) {
            console.log(value);
          }
          return (
            <TableRow key={index}>
              <TableCell>
                <PreserveData>{ref}</PreserveData>
              </TableCell>
              <TableCell>
                <PreserveData
                  style={{
                    fontVariantNumeric: 'lining-nums tabular-nums',
                  }}
                >
                  {serializeTokenValue(value)}
                </PreserveData>
              </TableCell>
              <TableCell>
                {tokenType ? (
                  <DataBadge className="subtle">
                    <TokenTypeIcon type={tokenType} />
                    {` ${tokenType}`}
                  </DataBadge>
                ) : null}
              </TableCell>
              <TableCell>
                {tokenType === 'color' && isColorValue(value) ? (
                  <ColorSample style={{ '--utrecht-color-sample-background-color': 'currentColor' }} color={value} />
                ) : (
                  ''
                )}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
