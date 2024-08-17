/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import {
  DesignToken,
  DesignTokenMap,
  DesignTokenTree,
  DesignTokenValue,
  StyleDictionaryCTIAttributes,
  StyleDictionaryDesignToken,
} from './design-tokens';

export const createPath = (name: string): string[] => name.split('.');

/**
 * Class, type, item (CTI) is a system Style Dictionary used. We don't use it, but we need this
 * utility to create a full compatible object.
 * @see https://v4.styledictionary.com/reference/hooks/transforms/predefined/#attributecti
 */
export const createCTI = (path: string[]): StyleDictionaryCTIAttributes => {
  const [category = '', type, item, subitem, state] = path;
  return {
    category,
    type,
    item,
    subitem,
    state,
  };
};

export const createDesignToken = (
  token: Pick<StyleDictionaryDesignToken, 'name'> & Partial<DesignToken>,
): StyleDictionaryDesignToken => {
  const { name } = token;
  const path = createPath(name);
  return {
    path,
    filePath: '',
    isSource: false,
    original: {},
    attributes: createCTI(path),
    $extensions: {},
    value: '',
    ...token,
  };
};

export const cssVariable = (token: StyleDictionaryDesignToken) => `var(--${token.path.join('-')})`;

export const styleDictionaryRef = (token: StyleDictionaryDesignToken) => `{${token.path.join('.')}.value}`;

export const isToken = (arg: any): arg is DesignToken =>
  !!arg && typeof arg === 'object' && typeof arg.value === 'string' && !!arg.value;

export const listColors = (arg: DesignToken | DesignToken[]): DesignTokenValue[] => {
  let array = isToken(arg) ? [arg] : arg ? Object.values(arg) : [];
  return array.map((color) => color.value);
};

const isDesignTokenMap = (item: any): item is DesignTokenMap =>
  !isToken(item) && item && typeof item === 'object' && Object.values(item).filter(isToken).length >= 1;

// Figma Tokens assign `type` properties for tokens or groups
// Utility to filter out non-color type tokens.
export const isColorOrUnknown = (arg: DesignToken): boolean =>
  arg && typeof arg.type === 'string' ? arg.type === 'color' : true;

export const getColors = <T extends DesignToken = DesignToken>(
  tokens: DesignTokenTree<T> | T[],
): { grouped: T[][]; nonGrouped: T[] } => {
  const grouped: T[][] = isDesignTokenMap(tokens)
    ? Object.values(tokens)
        .filter(isDesignTokenMap)
        .map((map) => Object.values(map))
    : [];

  const nonGrouped: T[] = Object.values(tokens).filter((value) => isToken(value));

  return {
    grouped,
    nonGrouped,
  };
};

export const flattenColorTokens = <T extends DesignToken = DesignToken>(tokens: DesignTokenTree<T>): T[] => {
  const { grouped, nonGrouped } = getColors(tokens);
  return [nonGrouped, ...grouped].reduce((a, b) => [...a, ...b], []);
};

export const getColorGroupName = (token: StyleDictionaryDesignToken) => token.path[token.path.length - 2];

export const getColorName = (token: StyleDictionaryDesignToken) => token.path[token.path.length - 1];

export const formatDeltaE = (deltaE: number): string => {
  let description;
  if (deltaE === 0) {
    description = 'Exact match!';
  } else if (deltaE < 1) {
    description = 'Looks the same!';
  } else if (deltaE < 3) {
    description = 'Looks the same, unless you look very closely';
  } else if (deltaE < 10) {
    description = 'Similar';
  } else if (deltaE < 49) {
    description = 'Related';
  } else {
    description = 'Different';
  }
  return `${description} (ΔE = ${Math.round(deltaE)})`;
};
