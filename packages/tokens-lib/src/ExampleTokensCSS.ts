import isPlainObject from 'lodash-es/isPlainObject';
import {
  DesignToken,
  DesignTokenDefinitionTree,
  DesignTokenNode,
  DesignTokenTree,
  isDesignToken,
  isDesignTokenDefinition,
  isHiddenDesignToken,
  StyleDictionaryDesignToken,
  ValueTree,
} from './design-tokens';
import cloneDeepWith from 'lodash-es/cloneDeepWith';
import { tokenRef } from './util';
// eslint-disable-next-line no-unused-vars

type DesignTokenTraverseCallback = (_parents: any, _current: any) => void;

export type ValueTestFn = (_: any) => boolean;

export const traverseDeep = (
  root: DesignTokenTree | DesignTokenDefinitionTree,
  parents: string[],
  current: DesignTokenNode,
  valueTest: ValueTestFn,
  callback: DesignTokenTraverseCallback,
) => {
  if (valueTest(current)) {
    callback(parents, current);
  } else if (isPlainObject(current)) {
    Object.entries(current).forEach(([key, value]) => {
      traverseDeep(root, [...parents, key], value, valueTest, callback);
    });
  }
};

export const findDesignTokenDefinitions = <T extends DesignToken = DesignToken>(
  tokens: DesignTokenTree<T>,
  callback: DesignTokenTraverseCallback,
  testFn: ValueTestFn = isDesignTokenDefinition,
) => traverseDeep(tokens, [], tokens, testFn, callback);

export const addPath = <T extends DesignToken = StyleDictionaryDesignToken>(
  tree: ValueTree<T>,
  testFn: ValueTestFn = isDesignToken,
): ValueTree<T> => {
  const newTree = cloneDeepWith(tree, () => undefined);
  traverseDeep(newTree, [], newTree, testFn, (path, token) => {
    token.path = path;
  });
  return newTree;
};

export const treeToArray = <T extends DesignToken>(
  tree: DesignTokenTree<T>,
  testFn: ValueTestFn = isDesignToken,
): T[] => {
  const array: T[] = [];
  traverseDeep(tree, [], tree, testFn, (_, token) => {
    array.push(token);
  });
  return array;
};

export const treeToMap = <T extends DesignToken>(tokens: DesignTokenTree<T>, testFn: ValueTestFn = isDesignToken) =>
  new Map(treeToArray(tokens, testFn).map((token) => [tokenRef((token as any).path), token]));

export const tokensToCSS = <T extends DesignToken = StyleDictionaryDesignToken>(tokens: DesignTokenTree<T>): string => {
  const lines: string[] = [];
  findDesignTokenDefinitions(tokens, (path: StyleDictionaryDesignToken['path'], value: DesignToken) => {
    if (isHiddenDesignToken(value)) {
      return;
    }
    lines.push(
      `  /* --${path.join('-')}: ${
        value &&
        value['$extensions'] &&
        value['$extensions']['nl.nldesignsystem.css.property'] &&
        value['$extensions']['nl.nldesignsystem.css.property'].syntax
          ? value['$extensions']['nl.nldesignsystem.css.property'].syntax
          : '<value>'
      }; */`,
    );
  });
  return `.your-theme {\n  /* Uncomment each custom property you need */\n${lines.join('\n')}\n}`;
};
