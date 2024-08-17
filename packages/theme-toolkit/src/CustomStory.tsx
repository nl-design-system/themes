// eslint-disable-next-line no-unused-vars
import { type PropsWithChildren } from 'react';

const Canvas = ({ children }: PropsWithChildren) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
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
    </div>
  );
};

export const CustomStory = ({ children }: PropsWithChildren) => <Canvas>{children}</Canvas>;
