import { readFile } from 'node:fs/promises';
import merge from 'lodash.merge';

const tokenPackages = ['@utrecht/component-library-design-tokens/dist/index.json'];

export const getCommunityTokens = async () => {
  const tokens = await Promise.all(
    tokenPackages.map(async (packageName) => {
      const tokensPath = import.meta.resolve(packageName);

      try {
        return JSON.parse(await readFile(tokensPath, 'utf-8'));
      } catch (e) {
        return {};
      }
    }),
  );

  return merge({}, ...tokens);
};
