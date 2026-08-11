import type { Decorator } from '@storybook/react-vite';
import { Root } from '@utrecht/root-react/css';
import { clsx } from 'clsx';

export const ThemeDecorator: Decorator = (Story, { parameters }) => {
  if (parameters.rootComponent) {
    return (
      <Root Component="div" className={parameters.theme}>
        <Story />
      </Root>
    );
  } else {
    return (
      <div className={clsx('utrecht-document', parameters.theme)}>
        <Story />
      </div>
    );
  }
};
