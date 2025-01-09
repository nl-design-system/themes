import { readFile } from 'node:fs/promises';
import merge from 'lodash-es/merge';

const tokenPackages = ['@utrecht/component-library-design-tokens/dist/tokens.json'];

export const getCommunityTokens = async () => {
  const tokens = await Promise.all(
    tokenPackages.map(async (tokensPath) => {
      const path = new URL(import.meta.resolve(tokensPath)).pathname;
      return JSON.parse(await readFile(path, 'utf-8'));
    }),
  );
  return merge({}, ...tokens);
};
