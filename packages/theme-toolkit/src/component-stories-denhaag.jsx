import { STORY_GROUPS } from './component-stories-util';
// import { Button, ProcessSteps, Avatar, Alert, BadgeCounter, Divider } from '@gemeente-denhaag/components-react';
import { Status } from '@gemeente-denhaag/process-steps';

export const DENHAAG_COMPONENT_STORIES = [
  {
    storyId: 'react-denhaag-status--default',
    component: 'denhaag-steps',
    group: STORY_GROUPS.STEPS,
    name: 'Den Haag Status',
    render: () => (
      <Status
        steps={[
          {
            id: 'deelname',
            marker: 1,
            status: 'checked',
            steps: [
              {
                status: 'checked',
                title: 'Aanmelding ontvangen',
              },
            ],
            title: 'Deelname aan geluidsonderzoek',
          },
          {
            id: 'onderzoek',
            marker: 2,
            status: 'current',
            steps: [
              {
                status: 'checked',
                title: 'Afspraak meten geluidsoverlast gemaakt',
              },
              {
                title: 'Geluidsoverlast gemeten',
              },
              {
                title: 'Onderzoek resultaten verwerkt',
              },
            ],
            title: 'Onderzoek naar geluidsoverlast',
          },
          {
            id: 'uitvoeren',
            marker: 3,
            title: 'Uitvoeren van maatregelen',
          },
          {
            id: 'klaar',
            marker: 4,
            title: 'Maatregelen zijn uitgevoerd',
          },
        ]}
      ></Status>
    ),
  },
  // {
  //   storyId: 'react-denhaag-avatar--default',
  //   component: 'denhaag-avatar',
  //   group: STORY_GROUPS.AVATAR,
  //   name: 'Den Haag Avatar',
  //   render: () => <Avatar>DS</Avatar>,
  // },
  // {
  //   storyId: 'react-denhaag-avatar--square',
  //   component: 'denhaag-avatar',
  //   group: STORY_GROUPS.AVATAR,
  //   name: 'Den Haag Avatar Square',
  //   render: () => <Avatar variant="square">DS</Avatar>,
  // },
  // {
  //   storyId: 'react-denhaag-avatar--image',
  //   component: 'denhaag-avatar',
  //   group: STORY_GROUPS.AVATAR,
  //   name: 'Den Haag Image Avatar',
  //   render: () => <Avatar alt="Planet Earth" src="https://c1.staticflickr.com/9/8486/8245351490_2746ef972c_b.jpg" />,
  // },
  // {
  //   storyId: 'react-denhaag-alert--default',
  //   component: 'denhaag-alert',
  //   name: 'Den Haag Error Alert ',
  //   group: STORY_GROUPS.ALERT,
  //   render: () => (
  //     <Alert
  //       action={{
  //         buttonText: 'Continue',
  //         onClick: function noRefCheck() {},
  //       }}
  //       text="Here comes text. This text provides additional details and actionable steps the user can take."
  //       title="Title"
  //       close={function noRefCheck() {}}
  //     />
  //   ),
  // },
  // {
  //   storyId: 'react-denhaag-alert--error',
  //   component: 'denhaag-alert',
  //   name: 'Den Haag Error Alert ',
  //   group: STORY_GROUPS.ALERT,
  //   render: () => (
  //     <Alert
  //       action={{
  //         buttonText: 'Continue',
  //         onClick: function noRefCheck() {},
  //       }}
  //       text="Here comes text. This text provides additional details and actionable steps the user can take."
  //       title="Title"
  //       variant="error"
  //       close={function noRefCheck() {}}
  //     />
  //   ),
  // },
  // {
  //   storyId: 'react-denhaag-alert--warning',
  //   component: 'denhaag-alert',
  //   name: 'Den Haag Warning Alert ',
  //   group: STORY_GROUPS.ALERT,
  //   render: () => (
  //     <Alert
  //       action={{
  //         buttonText: 'Continue',
  //         onClick: function noRefCheck() {},
  //       }}
  //       text="Here comes text. This text provides additional details and actionable steps the user can take."
  //       title="Title"
  //       variant="warning"
  //       close={function noRefCheck() {}}
  //     />
  //   ),
  // },
  // {
  //   storyId: 'react-denhaag-alert--success',
  //   component: 'denhaag-alert',
  //   name: 'Den Haag Success Alert ',
  //   group: STORY_GROUPS.ALERT,
  //   render: () => (
  //     <Alert
  //       action={{
  //         buttonText: 'Continue',
  //         onClick: function noRefCheck() {},
  //       }}
  //       text="Here comes text. This text provides additional details and actionable steps the user can take."
  //       title="Title"
  //       variant="success"
  //       close={function noRefCheck() {}}
  //     />
  //   ),
  // },
  // {
  //   storyId: 'react-denhaag-alert--info',
  //   component: 'denhaag-alert',
  //   name: 'Den Haag Info Alert ',
  //   group: STORY_GROUPS.ALERT,
  //   render: () => (
  //     <Alert
  //       action={{
  //         buttonText: 'Continue',
  //         onClick: function noRefCheck() {},
  //       }}
  //       text="Here comes text. This text provides additional details and actionable steps the user can take."
  //       title="Title"
  //       variant="info"
  //       close={function noRefCheck() {}}
  //     />
  //   ),
  // },
  // {
  //   storyId: 'react-denhaag-badgecounter--default',
  //   component: 'denhaag-badgecounter',
  //   name: 'Den Haag Badge Counter',
  //   render: () => <BadgeCounter>13</BadgeCounter>,
  // },
  // {
  //   storyId: 'react-denhaag-divider--default',
  //   component: 'denhaag-divider',
  //   name: 'Den Haag Default Divider',
  //   render: () => (
  //     <div>
  //       <p>Before the divider.</p>
  //       <Divider />
  //       <p>After the divider.</p>
  //     </div>
  //   ),
  // },
  // {
  //   storyId: 'react-denhaag-button--default',
  //   component: 'denhaag-button',
  //   name: 'Den Haag Default Button',
  //   render: () => <Button>Den Haag Button</Button>,
  // },
  // {
  //   storyId: 'react-denhaag-button--disabled',
  //   component: 'denhaag-button',
  //   state: true,
  //   name: 'Den Haag Disabled Button',
  //   render: () => <Button disabled>Den Haag Button</Button>,
  // },
  // {
  //   storyId: 'react-denhaag-button--primary-action',
  //   component: 'denhaag-button',
  //   name: 'Den Haag Primary Action Button',
  //   render: () => <Button variant="primary-action">Den Haag Button</Button>,
  // },
  // {
  //   storyId: 'react-denhaag-button--secondary-action',
  //   component: 'denhaag-button',
  //   name: 'Den Haag Secondary Action Button',
  //   render: () => <Button variant="secondary-action">Den Haag Button</Button>,
  // },
];
