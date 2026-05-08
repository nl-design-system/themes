import { STORY_GROUPS } from './component-stories-util';
import { DotBadge, Alert, Heading, Logo, Paragraph } from '@rijkshuisstijl-community/components-react';

export const RHC_COMPONENT_STORIES = [
  {
    storyId: 'react-rhc-dot-badge--default',
    component: 'rhc-dot-badge',
    group: STORY_GROUPS['BADGES'],
    name: 'Rijkshuisstijl Dot Badge',
    render: () => <DotBadge label={'Nieuw bericht'} />,
  },
  {
    storyId: 'react-rhc-logo--default',
    component: 'rhc-logo',
    group: STORY_GROUPS['LOGO'],
    name: 'Rijkshuisstijl Logo',
    render: () => <Logo organisation="Rijkshuisstijl-community" />,
  },
  {
    storyId: 'react-rhc-alert--default',
    component: 'rhc-alert',
    group: STORY_GROUPS['ALERTS'],
    name: 'Rijkshuisstijl Alert',
    render: () => (
      <Alert type="info">
        <Heading level={3}>Heading</Heading>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod</Paragraph>
      </Alert>
    ),
  },
];
