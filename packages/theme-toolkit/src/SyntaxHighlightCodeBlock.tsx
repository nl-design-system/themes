/**
 * @license EUPL-1.2
 * Copyright (c) 2024 NL Design System Community
 */

import { CodeBlock, CodeBlockProps } from '@utrecht/component-library-react/dist/css-module';
import { Highlight } from 'prism-react-renderer';
import React, { Element, PropsWithChildren } from 'react';
import cssVariablePrismTheme from './CssVariablePrismTheme';

export interface SyntaxHighlightCodeBlockProps extends CodeBlockProps {
  lineNumber?: boolean;
  textContent: string;
  syntax?: string;
  trim?: boolean;
}

export function SyntaxHighlightCodeBlock({
  lineNumber,
  syntax,
  textContent,
  trim,
}: PropsWithChildren<SyntaxHighlightCodeBlockProps>): Element {
  let code = textContent;

  if (trim) {
    code = code.trim();
  }

  return (
    <Highlight theme={cssVariablePrismTheme} code={code} language={syntax || ''}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <CodeBlock style={style}>
          {tokens.map((line, i) => (
            <span key={i} {...getLineProps({ line })}>
              {lineNumber && <span>{i + 1}</span>}
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
              {'\n'}
            </span>
          ))}
        </CodeBlock>
      )}
    </Highlight>
  );
}

export default SyntaxHighlightCodeBlock;
