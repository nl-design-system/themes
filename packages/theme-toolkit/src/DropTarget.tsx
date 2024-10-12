import { forwardRef, HTMLAttributes, PropsWithChildren, ForwardedRef } from 'react';
import { clsx } from 'clsx';
import './DropTarget.css';

export interface DropTargetProps extends HTMLAttributes<HTMLDivElement> {
  appearance?: string | 'subtle';
  dropEffect?: string | 'copy';
}

export const DropTarget = forwardRef(function DropTarget(
  { appearance, children, className, dropEffect }: PropsWithChildren<DropTargetProps>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  //

  return (
    <div
      className={clsx(
        'kernteam-dropzone',
        {
          'kernteam-dropzone--subtle': appearance === 'subtle',
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
