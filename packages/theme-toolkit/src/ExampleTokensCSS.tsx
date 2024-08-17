import isPlainObject from 'lodash.isplainobject';
import { CopyButton } from './CopyButton';
import {
  DesignToken,
  DesignTokenDefinitionTree,
  DesignTokenNode,
  DesignTokenTree,
  isDesignTokenDefinition,
  isHiddenDesignToken,
  StyleDictionaryDesignToken,
  StyleDictionaryTree,
} from './design-tokens';
// eslint-disable-next-line no-unused-vars

type DesignTokenTraverseCallback = (_parents: any, _current: any) => void;

export const traverseDeep = (
  root: DesignTokenTree | DesignTokenDefinitionTree,
  parents: string[],
  current: DesignTokenNode,
  valueTest: (_current: any) => boolean,
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
) => traverseDeep(tokens, [], tokens, isDesignTokenDefinition, callback);

export const tokensToCSS = (tokens: StyleDictionaryTree): string => {
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

export interface ExampleTokensCSSProps {
  definition: StyleDictionaryTree;
}

export const ExampleTokensCSS = ({ definition }: ExampleTokensCSSProps) => {
  const code = tokensToCSS(definition);

  return (
    <section>
      <h2>
        Template for <samp>your-theme.css</samp>
      </h2>
      <p>
        If you do not (yet) want to manage your design tokens in JSON files, but when you just want to get started
        quickly to reuse our CSS component with your own design, then you can use this CSS template as a starting point
        to see what parts of the component you can customize with design tokens.
      </p>
      <p>
        Combine the design tokens CSS with our{' '}
        <a href="https://npmjs.com/package/@utrecht/component-library-css">CSS component library pacakge on npm</a>, and
        you should be able to quickly and easily create a web page with our components and your own design.
      </p>
      <div>
        <CopyButton value={code} textContent="Copy CSS"></CopyButton>
      </div>
      <pre>{code}</pre>
    </section>
  );
};
