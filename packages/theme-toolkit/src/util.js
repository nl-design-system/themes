/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

export const cssVariable = (token) => `var(--${token.path.join('-')})`;

export const styleDictionaryRef = (token) => `{${token.path.join('.')}.value}`;

export const isToken = (arg) => !!arg && typeof arg === 'object' && typeof arg.value === 'string' && !!arg.value;

export const listColors = (arg) => {
  let array = isToken(arg) ? [arg] : arg ? Object.values(arg) : [];
  return array.map((color) => color.value);
};

export const getColors = (tokens) => {
  const grouped = Object.values(tokens)
    .filter(
      (item) =>
        !isToken(item) &&
        item &&
        typeof item === 'object' &&
        Object.values(item).filter(isToken).length >= 1 &&
        Object.values(item).filter(isToken),
    )
    .map(Object.values);

  const nonGrouped = Object.values(tokens).filter(isToken);

  return {
    grouped,
    nonGrouped,
  };
};

export const flattenColorTokens = (tokens) => {
  const { grouped, nonGrouped } = getColors(tokens);
  return [nonGrouped, ...grouped].reduce((a, b) => [...a, ...b], []);
};

export const getColorGroupName = (token) => token.path[token.path.length - 2];

export const getColorName = (token) => token.path[token.path.length - 1];
