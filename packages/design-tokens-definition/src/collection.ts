import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import merge from 'lodash-es/merge';

const tokenPackages = ['@utrecht/component-library-design-tokens/dist/tokens.json'];

export const getCommunityTokens = async () => {
  const tokens = await Promise.all(
    tokenPackages.map(async (tokensPath) => {
      const url = import.meta.resolve(tokensPath);
      const path = fileURLToPath(url);

      return JSON.parse(await readFile(path, 'utf-8'));
    }),
  );

  return merge({}, ...tokens);
};