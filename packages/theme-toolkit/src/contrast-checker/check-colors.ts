import { readFile } from 'node:fs/promises';
import { DesignToken, DesignTokenMap, isDesignTokenDefinition } from '../design-tokens.js';
import isPlainObject from 'lodash.isplainobject';
import Color from 'color';

const init = async () => {
  // TODO dit is voor nu alleen nog maar utrecht
  // TODO: consider switching to @utrecht/button-css/src/tokens.json and then convert the tree (DesignTokenMap) to an array (DesignToken[])
  const json = await readFile('./node_modules/@utrecht/design-tokens/dist/index.json', 'utf-8');
  const buttonTokensJson = await readFile('./node_modules/@utrecht/button-css/src/tokens.json', 'utf-8');

  const tokensSchema = designTokenMapToList(JSON.parse(buttonTokensJson));

  let tokens: DesignToken[] = JSON.parse(json);

  tokens = tokens.filter(
    ({ path }) => !path.includes('danger') && !path.includes('warning') && !path.includes('ready'),
  );

  const isEqualArray = <T>(a: T[], b: T[]) => a.length === b.length && a.every((value, index) => b[index] === value);

  const findToken = (tokens: DesignToken[], searchPath: string[]) => {
    return tokens.find((token) => isEqualArray(token.path, searchPath));
  };

  const findTokenOrFallback = (tokens: DesignToken[], searchPath: string[]): DesignToken | undefined => {
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
        (match: DesignToken | undefined, tokenRef) => {
          return match || findToken(tokens, tokenRef.split('.'));
        },
        undefined,
      );
    }
    return tokenDefinition;
  };
  // console.log(findTokenOrFallback(tokensSchema, 'utrecht.button.color'.split('.')));

  const filterTokenStartsWith = (prefix: string) => {
    const pathPrefix = prefix.split('.');
    return ({ path }: DesignToken) => pathPrefix.every((name, index) => path[index] === name);
  };

  const result = tokens.filter(filterTokenStartsWith('utrecht.button'));
  const colorResults = result.filter(filterColors('color'));

  let colorPairs = colorResults.map((token: DesignToken) => {
    const backgroundToken = findTokenOrFallback(tokens, [
      ...token.path.slice(0, token.path.length - 1),
      'background-color',
    ]);

    // TODO: For `utrecht.button.foo.bar.quux.color` check:
    // - `utrecht.button.foo.bar.quux.font-size`
    // - `utrecht.button.foo.bar.font-size`
    // - `utrecht.button.foo.font-size`
    // - `utrecht.button.font-size`
    const fontSizeToken = findTokenOrFallback(tokens, [...token.path.slice(0, 2), 'font-size']);

    return {
      foreground: token.path.join('.'),
      foregroundColor: token.value,
      background: backgroundToken?.path.join('.'),
      backgroundColor: backgroundToken?.value,
      'font-size': fontSizeToken?.value,
      type: 'functional', // todo: recognize non-functional
    };
  });

  colorPairs = colorPairs.map((pair) => ({
    contrast: Color(pair.foregroundColor).contrast(Color(pair.backgroundColor)),
    ...pair,
  }));

  console.log(JSON.stringify(colorPairs, null, 2));
};

const filterColors = (filter: string) => {
  return (token: DesignToken) => token.path[token.path.length - 1] === filter;
};

export const designTokenMapToList = (
  map: DesignTokenMap,
  list: DesignToken[] = [],
  basePath: string[] = [],
): DesignToken[] => {
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

init();
