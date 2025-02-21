// eslint-disable-next-line no-unused-vars
import { type PropsWithChildren } from 'react';
import { Document } from '@utrecht/component-library-react';
import { clsx } from 'clsx';

const Canvas = ({ className, children }: PropsWithChildren<{ className?: string }>) => {
  return (
    <Document
      className={clsx(className, 'utrecht-document--surface')}
      style={{
        borderRadius: '4px',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px',
        marginBlock: '25px 40px',
        paddingBlock: '30px',
        paddingInline: '20px',
        position: 'relative',
      }}
    >
      {children}
    </Document>
  );
};

export const CustomStory = Canvas;
