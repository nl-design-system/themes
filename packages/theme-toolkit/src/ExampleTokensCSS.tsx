import isPlainObject from 'lodash.isplainobject';
import { CopyButton } from './CopyButton';
import {
  DesignToken,
  DesignTokenNode,
  DesignTokenTree,
  isDesignTokenDefinition,
  isHiddenDesignToken,
} from './design-tokens.js';
// eslint-disable-next-line no-unused-vars

type DesignTokenTraverseCallback = (_parents: any, _current: any) => void;

const traverseDeep = (
  root: DesignTokenTree,
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

const findDesignTokens = (tokens: DesignTokenTree, callback: DesignTokenTraverseCallback) =>
  traverseDeep(tokens, [], tokens, isDesignTokenDefinition, callback);

const tokensToCSS = (tokens: DesignTokenTree): string => {
  const lines: string[] = [];
  findDesignTokens(tokens, (path: DesignToken['path'], value: DesignToken) => {
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
  definition: DesignTokenTree;
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
