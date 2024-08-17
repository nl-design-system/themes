import { ComponentTokensTable } from './ComponentTokensTable';
import { ExampleTokensCSS } from './ExampleTokensCSS';
import { ExampleTokensJSON } from './ExampleTokensJSON';
// eslint-disable-next-line no-unused-vars
import { StyleDictionaryDesignToken, StyleDictionaryTree } from './design-tokens';

export interface ComponentTokensSectionProps {
  component: string;
  tokens: StyleDictionaryDesignToken[];
  definition: StyleDictionaryTree;
}

export const ComponentTokensSection = ({ component, tokens, definition }: ComponentTokensSectionProps) => (
  <>
    {definition ? <ExampleTokensJSON definition={definition}></ExampleTokensJSON> : ''}
    {definition ? <ExampleTokensCSS definition={definition}></ExampleTokensCSS> : ''}
    <ComponentTokensTable component={component} tokens={tokens}></ComponentTokensTable>
  </>
);
