import { mkdir, writeFile } from 'node:fs/promises';
import { treeToArray, addPath } from '@nl-design-system-unstable/tokens-lib/dist/ExampleTokensCSS';
import { getCommunityTokens } from './collection';
import { isDesignTokenDefinition } from '@nl-design-system-unstable/tokens-lib/dist/design-tokens';

const init = async () => {
  const tokens = await getCommunityTokens();
  await mkdir('dist/', { recursive: true });
  writeFile('dist/tokens.json', JSON.stringify(tokens, null, 2));

  const list = treeToArray(addPath(tokens, isDesignTokenDefinition), isDesignTokenDefinition);
  writeFile('dist/list.json', JSON.stringify(list, null, 2));
};

init();
