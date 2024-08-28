import valueTree from '@amsterdam/design-system-tokens/dist/index.json';
import { convertValueTreeToDesignTokenTree } from '@nl-design-system-unstable/theme-toolkit/dist/design-tokens';
import { addPath, treeToArray } from '@nl-design-system-unstable/theme-toolkit/dist/ExampleTokensCSS';

export const tokens = addPath(convertValueTreeToDesignTokenTree(valueTree));

export const tokensList = treeToArray(tokens);
