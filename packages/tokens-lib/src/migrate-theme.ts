import get from 'lodash-es/get';
import set from 'lodash-es/set';
import unset from 'lodash-es/unset';
import cloneDeepWith from 'lodash-es/cloneDeepWith';
import { DesignToken, DesignTokenTree, isDesignTokenDefinition, StyleDictionaryDesignToken } from './design-tokens';
import { addPath, treeToArray } from './ExampleTokensCSS';
import { createPath, kebabName } from './util';

const LOG = false;

export interface FigmaTokensExtensions {
  $themes: unknown[];
  $metadata: {
    tokenSetOrder: string[];
  };
}

export interface FigmaTokensFile extends FigmaTokensExtensions {
  [index: string]: DesignTokenTree | unknown;
}

export interface MigratableToken {
  metadataToken: StyleDictionaryDesignToken;
  oldToken: StyleDictionaryDesignToken;
  originalToken: StyleDictionaryDesignToken;
  oldPath: string[];
  newPath: string[];
}

export const getRedirect = (token: DesignToken): string | undefined =>
  !!token && !!token['$extensions'] && !!token['$extensions']['nl.nldesignsystem.redirect']
    ? token['$extensions']['nl.nldesignsystem.redirect']
    : undefined;

const hasRedirect = (token: DesignToken): boolean => !!getRedirect(token);

const isEmptyObject = (obj: object): boolean => !!obj && typeof obj === 'object' && Object.keys(obj).length === 0;

export const isFigmaTokens = (obj: any): obj is FigmaTokensFile =>
  !!obj &&
  typeof obj === 'object' &&
  !!obj['$metadata'] &&
  typeof obj['$metadata'] === 'object' &&
  Array.isArray(obj['$metadata']['tokenSetOrder']);

export const migrateTokensFile = (file: FigmaTokensFile, metadata: DesignTokenTree): FigmaTokensFile => {
  const newFile = cloneDeepWith(file, (arg: any) => arg);

  const isPartialDesignTokenTree = (arg: [string, unknown]): arg is [string, DesignTokenTree] =>
    arg[0].charAt(0) !== '$' && !!arg[1] && typeof arg[1] === 'object';

  Object.entries(file)
    .filter(isPartialDesignTokenTree)
    .forEach(([key, tree]) => {
      newFile[key] = migrateTheme(tree, metadata);
    });

  return newFile;
};

export const prepareMigration = (
  theme: DesignTokenTree,
  metadata: DesignTokenTree,
): {
  metadataTokens: StyleDictionaryDesignToken[];
  redirectTokens: StyleDictionaryDesignToken[];
  migratableTokens: MigratableToken[];
} => {
  const tree = addPath(theme);
  const metadataTokens = treeToArray(
    addPath(metadata as any, isDesignTokenDefinition) as DesignTokenTree<StyleDictionaryDesignToken>,
    isDesignTokenDefinition,
  );
  const redirectTokens = metadataTokens.filter((token) => hasRedirect(token));

  const migratableTokens = redirectTokens
    .map((token) => {
      const oldPath = (token as any).path as string[];
      return {
        metadataToken: token,
        oldToken: get(tree, oldPath),
        originalToken: get(theme, oldPath),
        oldPath,
        newPath: createPath(getRedirect(token) || ''),
      };
    })
    .filter(({ oldToken }) => !!oldToken);

  return {
    metadataTokens,
    redirectTokens,
    migratableTokens,
  };
};

export const migrateTheme = (
  theme: DesignTokenTree<DesignToken>,
  metadata: DesignTokenTree<DesignToken>,
): DesignTokenTree => {
  const { metadataTokens, redirectTokens, migratableTokens } = prepareMigration(theme, metadata);

  if (LOG) {
    console.log(`Number of tokens: ${metadataTokens.length}`);
    console.log(`Number of tokens with a redirect: ${redirectTokens.length}`);
    console.log(
      redirectTokens
        .map((token) => (Array.isArray(token.path) ? ` - ${kebabName(token.path)}\n` : token.name))
        .join(''),
    );
  }

  let newTheme = cloneDeepWith(theme, (arg: any) => arg);

  newTheme = migratableTokens.reduce((newTheme, { oldToken, originalToken, oldPath, newPath }) => {
    if (oldToken) {
      if (LOG) {
        console.log(`Migrate token: ${kebabName(newPath)}`);
      }
      set(newTheme, newPath, originalToken);
    }

    if (oldPath) {
      unset(newTheme, oldPath);

      return oldPath.reduceRight((theme, _, index, arr) => {
        const partialPath = arr.slice(0, index);
        const branch = get(theme, partialPath);

        if (isEmptyObject(branch)) {
          unset(theme, partialPath);
        }
        return theme;
      }, newTheme);
    }
    return newTheme;
  }, newTheme);

  return newTheme;
};
