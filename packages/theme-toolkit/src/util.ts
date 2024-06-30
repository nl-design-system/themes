/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { DesignToken, DesignTokenMap, DesignTokenValue } from './design-tokens';

export const cssVariable = (token: DesignToken) => `var(--${token.path.join('-')})`;

export const styleDictionaryRef = (token: DesignToken) => `{${token.path.join('.')}.value}`;

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

export const getColors = (
  tokens: DesignTokenMap | DesignToken[],
): { grouped: DesignToken[][]; nonGrouped: DesignToken[] } => {
  const grouped = Object.values(tokens)
    .filter(isDesignTokenMap)
    .map((map) => Object.values(map));

  const nonGrouped = Object.values(tokens).filter(isToken);

  return {
    grouped,
    nonGrouped,
  };
};

export const flattenColorTokens = (tokens: DesignTokenMap) => {
  const { grouped, nonGrouped } = getColors(tokens);
  return [nonGrouped, ...grouped].reduce((a, b) => [...a, ...b], []);
};

export const getColorGroupName = (token: DesignToken) => token.path[token.path.length - 2];

export const getColorName = (token: DesignToken) => token.path[token.path.length - 1];

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
