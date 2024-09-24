import type { Decorator } from '@storybook/react';
import { clsx } from 'clsx';

export const ThemeDecorator: Decorator = (Story, { parameters }) => {
  console.log('PARAMS', parameters);
  return (
    <div className={clsx('utrecht-document', parameters.theme)}>
      <Story />
    </div>
  );
};
