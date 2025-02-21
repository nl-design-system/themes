import { readFile } from 'node:fs/promises';
import merge from 'lodash-es/merge';

const tokenPackages = ['@utrecht/component-library-design-tokens/src/tokens.json'];

export const getCommunityTokens = async () => {
  const tokens = await Promise.all(
    tokenPackages.map(async (tokensPath) => {
      try {
        return JSON.parse(await readFile(tokensPath, 'utf-8'));
      } catch (e) {
        return {};
      }
    }),
  );

  return merge({}, ...tokens);
};
