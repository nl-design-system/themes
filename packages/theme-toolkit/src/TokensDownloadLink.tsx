import type { PropsWithChildren } from 'react';
import { useState, useEffect } from 'react';
import { styleDictionaryConversion } from './style-dictionary-util';
import { ButtonLink } from '@utrecht/component-library-react/dist/css-module';

export interface TokensDownloadLinkProps {
  tokens: any;
  selector?: string;
}

export const TokensDownloadLink = ({ children, tokens, selector }: PropsWithChildren<TokensDownloadLinkProps>) => {
  const [blobUrl, setBlobUrl] = useState('');

  useEffect(() => {
    styleDictionaryConversion(tokens, selector).then((css) => {
      setBlobUrl(URL.createObjectURL(new Blob([css], { type: 'text/css' })));
    }, console.error);
  }, [tokens]);

  return (
    <ButtonLink href={blobUrl} download="download">
      {children}
    </ButtonLink>
  );
};
