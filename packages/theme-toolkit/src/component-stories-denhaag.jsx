import React from 'react';

import { STORY_GROUPS } from './component-stories-util';
import { ProcessSteps, Avatar, Alert, BadgeCounter, Divider } from '@gemeente-denhaag/components-react';

export const DENHAAG_COMPONENT_STORIES = [
  {
    storyId: 'react-denhaag-process-steps--default',
    name: 'Den Haag Process Steps',
    render: () => <ProcessSteps></ProcessSteps>,
  },
  {
    storyId: 'react-denhaag-avatar--default',
    group: STORY_GROUPS.AVATAR,
    name: 'Den Haag Avatar',
    render: () => <Avatar>DS</Avatar>,
  },
  {
    storyId: 'react-denhaag-avatar--square',
    group: STORY_GROUPS.AVATAR,
    name: 'Den Haag Avatar Square',
    render: () => <Avatar variant="square">DS</Avatar>,
  },
  {
    storyId: 'react-denhaag-avatar--image',
    group: STORY_GROUPS.AVATAR,
    name: 'Den Haag Image Avatar',
    render: () => <Avatar alt="Planet Earth" src="https://c1.staticflickr.com/9/8486/8245351490_2746ef972c_b.jpg" />,
  },
  {
    storyId: 'react-denhaag-alert--default',
    name: 'Den Haag Error Alert ',
    group: STORY_GROUPS.ALERT,
    render: () => (
      <Alert
        action={{
          buttonText: 'Continue',
          onClick: function noRefCheck() {},
        }}
        text="Here comes text. This text provides additional details and actionable steps the user can take."
        title="Title"
        close={function noRefCheck() {}}
      />
    ),
  },
  {
    storyId: 'react-denhaag-alert--error',
    name: 'Den Haag Error Alert ',
    group: STORY_GROUPS.ALERT,
    render: () => (
      <Alert
        action={{
          buttonText: 'Continue',
          onClick: function noRefCheck() {},
        }}
        text="Here comes text. This text provides additional details and actionable steps the user can take."
        title="Title"
        variant="error"
        close={function noRefCheck() {}}
      />
    ),
  },
  {
    storyId: 'react-denhaag-alert--warning',
    name: 'Den Haag Warning Alert ',
    group: STORY_GROUPS.ALERT,
    render: () => (
      <Alert
        action={{
          buttonText: 'Continue',
          onClick: function noRefCheck() {},
        }}
        text="Here comes text. This text provides additional details and actionable steps the user can take."
        title="Title"
        variant="warning"
        close={function noRefCheck() {}}
      />
    ),
  },
  {
    storyId: 'react-denhaag-alert--success',
    name: 'Den Haag Success Alert ',
    group: STORY_GROUPS.ALERT,
    render: () => (
      <Alert
        action={{
          buttonText: 'Continue',
          onClick: function noRefCheck() {},
        }}
        text="Here comes text. This text provides additional details and actionable steps the user can take."
        title="Title"
        variant="success"
        close={function noRefCheck() {}}
      />
    ),
  },
  {
    storyId: 'react-denhaag-alert--info',
    name: 'Den Haag Info Alert ',
    group: STORY_GROUPS.ALERT,
    render: () => (
      <Alert
        action={{
          buttonText: 'Continue',
          onClick: function noRefCheck() {},
        }}
        text="Here comes text. This text provides additional details and actionable steps the user can take."
        title="Title"
        variant="info"
        close={function noRefCheck() {}}
      />
    ),
  },
  {
    storyId: 'react-denhaag-badgecounter--default',
    name: 'Den Haag Badge Counter',
    render: () => <BadgeCounter>13</BadgeCounter>,
  },
  {
    storyId: 'react-denhaag-divider--default',
    name: 'Den Haag Default Divider',
    render: () => (
      <div>
        <p>Before the divider.</p>
        <Divider />
        <p>After the divider.</p>
      </div>
    ),
  },
];
