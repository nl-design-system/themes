import * as xxx from 'lodash';
import { DesignToken, DesignTokenTree, isDesignTokenDefinition } from './design-tokens';
import { addPath, treeToArray } from './ExampleTokensCSS';
import { createPath } from './util';

const lodash = xxx.default;

const getRedirect = (token: DesignToken): string | undefined =>
  !!token && !!token['$extensions'] && !!token['$extensions']['nl.nldesignsystem.redirect']
    ? token['$extensions']['nl.nldesignsystem.redirect']
    : undefined;

const hasRedirect = (token: DesignToken): boolean => !!getRedirect(token);

const isEmptyObject = (obj: object): boolean => !!obj && typeof obj === 'object' && Object.keys(obj).length === 0;

export const migrateTheme = (theme: DesignTokenTree, metadata: DesignTokenTree): DesignTokenTree => {
  const metadataTokens = treeToArray(addPath(metadata as any, isDesignTokenDefinition) as any, isDesignTokenDefinition);
  const redirectTokens = metadataTokens.filter((token) => hasRedirect(token));
  console.log(`Number of tokens: ${metadataTokens.length}`);
  console.log(`Number of tokens with a redirect: ${redirectTokens.length}`);
  let newTheme = lodash.cloneDeepWith(theme, (arg: any) => arg);

  redirectTokens.forEach((token) => {
    const oldPath = (token as any).path as string[];
    const oldToken = lodash.get(theme, oldPath);
    const newPath = createPath(getRedirect(token) || '');

    if (oldToken) {
      console.log(`Migrate token: ${createPath(newPath)}`);
      lodash.set(newTheme, newPath, oldToken);
    }

    if (oldPath) {
      lodash.unset(newTheme, oldPath);

      newTheme = oldPath.reduceRight((theme, _, index, arr) => {
        const partialPath = arr.slice(0, index);
        const branch = lodash.get(theme, partialPath);

        if (isEmptyObject(branch)) {
          lodash.unset(theme, partialPath);
        }
        return theme;
      }, newTheme);
    }
  });

  return newTheme;
};
