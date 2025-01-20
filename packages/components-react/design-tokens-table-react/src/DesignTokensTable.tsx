import {
  Code,
  ColorSample,
  Icon,
  Link,
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
import {
  DesignTokenValue,
  getTokenValue,
  StyleDictionaryDesignToken,
} from '@nl-design-system-unstable/tokens-lib/dist/design-tokens';
import { tokenRef } from '@nl-design-system-unstable/tokens-lib/dist/util';
import { getTokenType, getToken$Type } from '@nl-design-system-unstable/tokens-lib/dist/token-type';
import { TokenTypeIcon } from './TokenTypeIcon';
import { CursorSample } from './CursorSample';
import { FontFamilySample } from './FontFamilySample';
import { SubtleBadge } from './SubtleBadge';
import { FontFamilyDetails } from './FontFamilyDetails';
import { IconCheck, IconFileUnknown } from '@tabler/icons-react';
import { arrayToMap } from '@nl-design-system-unstable/tokens-lib/dist/ExampleTokensCSS';

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

  /**
   * @deprecated Switch from `tokensMap` to `tokensDefinitions`
   */
  tokensMap?: Map<string, StyleDictionaryDesignToken>;

  /**
   * Array of tokens definitions.
   */
  tokensDefinition?: StyleDictionaryDesignToken[] | Map<string, StyleDictionaryDesignToken>;
}

const getLastPathSegment = (token: StyleDictionaryDesignToken) =>
  Array.isArray(token.path) && token.path[token.path.length - 1];

const isColorValue = (arg: unknown): arg is string => typeof arg === 'string';

const stringSort = (a: string, b: string) => (a === b ? 0 : a > b ? 1 : -1);

const sortByTokenRef = (a: StyleDictionaryDesignToken, b: StyleDictionaryDesignToken) =>
  stringSort(tokenRef(a.path), tokenRef(b.path));

const slugify = (str: string) => str.replace(/[^\W]+/g, '-');
const isTokenRef = (str: string) => /^{.+}$/.test(str);
const getTokenRef = (str: string) => (isTokenRef(str) ? str.replace(/^{(.+)}$/, '$1') : null);

export const DesignTokensTable = ({ tokens, tokensMap, tokensDefinition }: DesignTokensTableProps) => {
  const vendorPrefixes = ['ams', 'denhaag', 'nl', 'utrecht'];

  const definitionMap: Map<string, StyleDictionaryDesignToken> =
    tokensMap ||
    (tokensDefinition instanceof Map
      ? (tokensDefinition as Map<string, StyleDictionaryDesignToken>)
      : Array.isArray(tokensDefinition)
      ? arrayToMap(tokensDefinition)
      : new Map<string, StyleDictionaryDesignToken>());
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
          <TableHeaderCell>reference</TableHeaderCell>
          <TableHeaderCell>detected type</TableHeaderCell>
          <TableHeaderCell>sample</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tokens.sort(sortByTokenRef).map((token, index) => {
          const { path } = token;
          const ref = tokenRef(path);
          const value = getTokenValue(token);
          const propertyName = getLastPathSegment(token);
          const tokenType = propertyName
            ? getTokenType(propertyName) ||
              (typeof (token as any)['$type'] === 'string' ? getToken$Type((token as any)['$type']) : undefined)
            : undefined;
          const isVendorToken = vendorPrefixes.includes(path[0]);
          const isVerified = definitionMap ? definitionMap.has(ref) : false;
          const isString = (arg: unknown): arg is string => typeof arg === 'string';
          const originalRef =
            token.original &&
            typeof (token.original as any)['$value'] === 'string' &&
            isTokenRef((token.original as any)['$value'])
              ? getTokenRef((token.original as any)['$value'])
              : null;

          return (
            <TableRow key={index} id={slugify(ref)}>
              <TableCell>
                {isVerified ? (
                  <Icon role="img" aria-label="status: verified token">
                    <IconCheck />
                  </Icon>
                ) : isVendorToken ? (
                  <Icon role="img" aria-label="status: unknown token">
                    <IconFileUnknown />
                  </Icon>
                ) : null}
                <Code>
                  <PreserveData>{ref}</PreserveData>
                </Code>
              </TableCell>
              <TableCell>
                {tokenType === 'font-family' &&
                (typeof value === 'string' || (Array.isArray(value) && value.every(isString))) ? (
                  <FontFamilyDetails value={value} />
                ) : (
                  <PreserveData
                    style={{
                      fontVariantNumeric: 'lining-nums tabular-nums',
                    }}
                  >
                    {serializeTokenValue(value)}
                  </PreserveData>
                )}
              </TableCell>
              <TableCell>
                {originalRef ? (
                  <Link href={`#${slugify(originalRef)}`}>
                    <SubtleBadge>
                      <Code>{originalRef}</Code>
                    </SubtleBadge>
                  </Link>
                ) : null}
              </TableCell>
              <TableCell>
                {tokenType ? (
                  <SubtleBadge>
                    <TokenTypeIcon type={tokenType} />
                    {` ${tokenType}`}
                  </SubtleBadge>
                ) : null}
              </TableCell>
              <TableCell>
                {tokenType === 'color' && isColorValue(value) ? (
                  <ColorSample style={{ '--utrecht-color-sample-background-color': 'currentColor' }} color={value} />
                ) : tokenType === 'cursor' && typeof value === 'string' ? (
                  <CursorSample cursor={value} />
                ) : tokenType === 'font-family' && typeof value === 'string' ? (
                  <FontFamilySample fontFamily={value} />
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
