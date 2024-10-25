import type { PropsWithChildren } from 'react';
import { useState, useEffect } from 'react';
import { styleDictionaryConversion } from './style-dictionary';

export interface StyleDictionaryStyleProps {
  tokens: any;
  selector?: string;
}

export const StyleDictionaryStyle = ({ tokens, selector = ':root' }: PropsWithChildren<StyleDictionaryStyleProps>) => {
  const [css, setCss] = useState('');

  useEffect(() => {
    styleDictionaryConversion(tokens, selector).then((css) => {
      setCss(css);
    }, console.error);
  }, [tokens]);

  return <style dangerouslySetInnerHTML={{ __html: css }}></style>;
};
