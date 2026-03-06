import type { Decorator } from '@storybook/react-vite';
import { clsx } from 'clsx';

export const ThemeDecorator: Decorator = (Story, { parameters }) => (
  <div className={clsx('utrecht-document', parameters.theme)}>
    <Story />
  </div>
);
