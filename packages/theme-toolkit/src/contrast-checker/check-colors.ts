import { isDesignTokenDefinition, StyleDictionaryDesignToken, StyleDictionaryTree } from '../design-tokens';
import isPlainObject from 'lodash.isplainobject';
import Color from 'color';
import { createPath } from '../util';
import type { ColorPair } from './ColorPair';

export const isEqualArray = <T>(a: T[], b: T[]) =>
  a.length === b.length && a.every((value, index) => b[index] === value);

export const findToken = (tokens: StyleDictionaryDesignToken[], searchPath: string[]) => {
  return tokens.find((token) => isEqualArray(token.path, searchPath));
};

export const findTokenOrFallback = (
  tokensSchema: StyleDictionaryDesignToken[],
  tokens: StyleDictionaryDesignToken[],
  searchPath: string[],
): StyleDictionaryDesignToken | undefined => {
  // find token with same path return its value OR its fallback if no value is present
  const token = findToken(tokens, searchPath);

  if (token) return token;

  const tokenDefinition = findToken(tokensSchema, searchPath);
  // console.log(tokenDefinition)
  //temp
  if (
    tokenDefinition &&
    tokenDefinition['$extensions'] &&
    Array.isArray(tokenDefinition['$extensions']['nl.nldesignsystem.fallback'])
  ) {
    console.log(
      `fallback for ${searchPath.join('.')} = `,
      tokenDefinition['$extensions']['nl.nldesignsystem.fallback'],
    );
    return tokenDefinition['$extensions']['nl.nldesignsystem.fallback'].reduce(
      (match: StyleDictionaryDesignToken | undefined, tokenRef) => {
        return match || findToken(tokens, tokenRef.split('.'));
      },
      undefined,
    );
  }
  return tokenDefinition;
};

export const filterTokenStartsWith = (prefix: string) => {
  const pathPrefix = createPath(prefix);

  return ({ path }: StyleDictionaryDesignToken) => pathPrefix.every((name, index) => path[index] === name);
};

export const filterTokenEndsWith = (suffix: string) => {
  const pathSuffix = createPath(suffix);

  return ({ path }: StyleDictionaryDesignToken) =>
    pathSuffix.every((name, index, array) => path[path.length - (array.length - index)] === name);
};

export const getColorPairs = (
  tokensSchema: StyleDictionaryDesignToken[],
  tokens: StyleDictionaryDesignToken[],
): ColorPair[] => {
  const colorResults = tokens.filter(filterTokenEndsWith('color'));

  let colorPairs = colorResults.map((token: StyleDictionaryDesignToken) => {
    // Find a token with the partially the name name, but ending with `background-color` instead of `color`
    const backgroundToken = findTokenOrFallback(tokensSchema, tokens, [
      ...token.path.slice(0, token.path.length - 1),
      'background-color',
    ]);

    // TODO: For `utrecht.button.foo.bar.quux.color` check:
    // - `utrecht.button.foo.bar.quux.font-size`
    // - `utrecht.button.foo.bar.font-size`
    // - `utrecht.button.foo.font-size`
    // - `utrecht.button.font-size`

    // Find a token with the partially the name name, but ending with `font-size` instead of `color`
    const fontSizeToken = findTokenOrFallback(tokensSchema, tokens, [...token.path.slice(0, 2), 'font-size']);

    return {
      foreground: token.path.join('.'),
      foregroundColor: token.value || '',
      background: backgroundToken?.path.join('.') || '',
      backgroundColor: backgroundToken?.value || '',
      'font-size': fontSizeToken?.value,
      type: 'functional', // todo: recognize non-functional
    };
  });

  return colorPairs;
};

export const getColorContrast = (pair: ColorPair): ColorPair & { contrast: number } => ({
  contrast: Color(pair.foregroundColor).contrast(Color(pair.backgroundColor)),
  ...pair,
});

export const calculateContrastRequirement = (
  _foregroundColor: Color,
  _backgroundColor: Color,
  fontSize: number,
  wcagLevel: 'AA' | 'AAA',
  nonText: boolean,
): number => {
  if (nonText) return 3.1;

  if (wcagLevel === 'AA') {
    if (fontSize < 24) {
      return 4.5;
    } else {
      return 3.1;
    }
  } else if (wcagLevel === 'AAA') {
    if (fontSize < 24) {
      return 7.1;
    } else {
      return 4.5;
    }
  } else {
    return 0.0;
  }
};

export const designTokenMapToList = (
  map: StyleDictionaryTree,
  list: StyleDictionaryDesignToken[] = [],
  basePath: string[] = [],
): StyleDictionaryDesignToken[] => {
  if (isPlainObject(map)) {
    Object.entries(map).forEach(([name, item]) => {
      const path = [...basePath, name];
      if (isDesignTokenDefinition(item)) {
        list.push({
          ...item,
          path,
        });
      } else if (isPlainObject(item)) {
        designTokenMapToList(item, list, path);
      }
    });
  }
  return list;
};
