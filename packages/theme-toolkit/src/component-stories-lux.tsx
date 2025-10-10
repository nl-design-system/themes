import { STORY_GROUPS } from './component-stories-util';
import { LuxLoginLink as LoginLink } from '@lux-design-system/web-components-react';

export const LUX_COMPONENT_STORIES = [
  {
    storyId: 'react-lux-login-link--default',
    component: 'lux-login-link',
    group: STORY_GROUPS['LOGIN_LINK'],
    name: 'Lux Login Link',
    render: () => <LoginLink agent="digid" />,
  },
];
