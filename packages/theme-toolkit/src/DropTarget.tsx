import { forwardRef, HTMLAttributes, PropsWithChildren, ForwardedRef } from 'react';
import { clsx } from 'clsx';
import './DropTarget.css';

export interface DropTargetProps extends HTMLAttributes<HTMLDivElement> {
  dropEffect?: string | 'copy';
}

export const DropTarget = forwardRef(function DropTarget(
  { children, className, dropEffect }: PropsWithChildren<DropTargetProps>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  //

  return (
    <div
      className={clsx(
        'kernteam-dropzone',
        {
          'kernteam-dropzone--drop-effect': !!dropEffect,
          'kernteam-dropzone--drop-effect-copy': dropEffect === 'copy',
        },
        className,
      )}
      ref={ref}
    >
      {children}
    </div>
  );
});
