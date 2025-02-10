import { STORY_GROUPS } from './component-stories-util';
import { DotBadge } from '@rijkshuisstijl-community/components-react';

export const RHC_COMPONENT_STORIES = [
  {
    storyId: 'react-rhc-dot-badge--default',
    component: 'rhc-dot-badge',
    group: STORY_GROUPS['BADGES'],
    name: 'Rijkshuisstijl Dot Badge',
    render: () => <DotBadge label={'Nieuw bericht'} />,
  },
];
