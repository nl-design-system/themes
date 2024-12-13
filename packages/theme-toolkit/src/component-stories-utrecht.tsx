// eslint-disable-next-line no-unused-vars
import { PropsWithChildren } from 'react';

import { ComponentStory, STORY_GROUPS } from './component-stories-util';

import {
  Alert,
  Button,
  LinkButton,
  ButtonLink,
  Heading,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
  Separator,
  UnorderedList,
  UnorderedListItem,
  OrderedList,
  OrderedListItem,
  DataBadge,
  Document,
  // BadgeCounter,
  // Blockquote,
  Checkbox,
  // CustomCheckbox ,
  // Emphasis,
  FormFieldDescription,
  Fieldset,
  FieldsetLegend,
  FormLabel,
  // FormToggle ,
  Link,
  // Page ,
  // PageContent ,
  PageFooter,
  // PageHeader ,
  // Pagination ,
  Select,
  SelectOption,
  Superscript,
  Subscript,
  Textarea,
  Textbox,
  Table,
  TableRow,
  TableHeader,
  TableBody,
  TableHeaderCell,
  TableCell,
  TableCaption,
  RadioButton,
  SpotlightSection,
  Mark,
  CodeBlock,
  Code,
  ColorSample,
} from '@utrecht/component-library-react/dist/css-module';

const Blockquote = ({ children }: PropsWithChildren) => <div className="utrecht-blockquote">{children}</div>;

const BadgeCounter = ({ children }: PropsWithChildren) => <div className="utrecht-badge-counter">{children}</div>;

export const UTRECHT_COMPONENT_STORIES: ComponentStory[] = [
  {
    storyId: 'react-utrecht-button--default',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Default Button',
    render: () => <Button>Default</Button>,
    detectTokens: {
      allOf: ['utrecht.button.color', 'utrecht.button.background-color'],
    },
  },
  {
    storyId: 'react-utrecht-button--active',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Default Button: Active',
    state: true,
    render: () => <Button className="utrecht-button--active">Default</Button>,
    detectTokens: {
      allOf: ['utrecht.button.active.color', 'utrecht.button.active.background-color'],
    },
  },
  {
    storyId: 'react-utrecht-button--hover',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Default Button: Hover',
    state: true,
    render: () => <Button className="utrecht-button--hover">Default</Button>,
    detectTokens: {
      allOf: ['utrecht.button.hover.background-color', 'utrecht.button.hover.color'],
    },
  },
  {
    storyId: 'react-utrecht-button--focus',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Default Button: Focus',
    state: true,
    render: () => <Button className="utrecht-button--focus">Default</Button>,
    detectTokens: {
      allOf: ['utrecht.button.focus.background-color', 'utrecht.button.focus.color'],
    },
  },
  {
    storyId: 'react-utrecht-button--focus-visible',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Default Button: Focus Visible',
    state: true,
    render: () => <Button className="utrecht-button--focus-visible">Default</Button>,
  },
  {
    storyId: 'react-utrecht-button--busy',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Default Button: Busy',
    state: true,
    render: () => <Button busy>Default</Button>,
  },
  {
    storyId: 'react-utrecht-button--submit',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Default Button: Submit Type',
    state: true,
    render: () => <Button type="submit">Default</Button>,
  },
  {
    storyId: 'react-utrecht-button--primary-action-button',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Primary Action Button',
    state: true,
    render: () => <Button appearance="primary-action-button">Primary action</Button>,
    detectTokens: {
      allOf: ['utrecht.button.primary-action.color', 'utrecht.button.primary-action.background-color'],
    },
  },
  {
    storyId: 'react-utrecht-button--primary-action-button-danger',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Primary Action Button: Danger',
    state: true,
    render: () => (
      <Button appearance="primary-action-button" hint="danger">
        Dangerous primary action
      </Button>
    ),
  },
  {
    storyId: 'react-utrecht-button--primary-action-button-ok',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Primary Action Button: OK',
    state: true,
    render: () => (
      <Button appearance="primary-action-button" hint="ready">
        OK primary action
      </Button>
    ),
  },
  {
    storyId: 'react-utrecht-button--secondary-action-button',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Secondary Action Button',
    state: true,
    render: () => <Button appearance="secondary-action-button">Secondary action</Button>,
    detectTokens: {
      allOf: ['utrecht.button.secondary-action.color', 'utrecht.button.secondary-action.background-color'],
    },
  },
  {
    storyId: 'react-utrecht-button--secondary-action-button-danger',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Secondary Action Button: Danger',
    state: true,
    render: () => (
      <Button appearance="secondary-action-button" hint="danger">
        Dangerous secondary action
      </Button>
    ),
  },
  {
    storyId: 'react-utrecht-button--secondary-action-button-ok',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Secondary Action Button: OK',
    state: true,
    render: () => (
      <Button appearance="secondary-action-button" hint="ready">
        OK secondary action
      </Button>
    ),
  },
  {
    storyId: 'react-utrecht-button--subtle-button',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Subtle Button',
    state: true,
    render: () => <Button appearance="subtle-button">Subtle button</Button>,
    detectTokens: {
      allOf: ['utrecht.button.subtle-action.color', 'utrecht.button.subtle-action.background-color'],
    },
  },
  {
    storyId: 'react-utrecht-button--subtle-button-danger',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Subtle Button: Danger',
    state: true,
    render: () => (
      <Button appearance="subtle-button" hint="danger">
        Dangerous subtle button
      </Button>
    ),
  },
  {
    storyId: 'react-utrecht-button--subtle-button-ok',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Subtl Button: OK',
    state: true,
    render: () => (
      <Button appearance="subtle-button" hint="ready">
        OK subtle button
      </Button>
    ),
  },
  {
    storyId: 'react-utrecht-button--disabled',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Button Disabled',
    state: true,
    render: () => <Button disabled>Read more...</Button>,
    detectTokens: {
      allOf: ['utrecht.button.disabled.background-color', 'utrecht.button.disabled.color'],
    },
  },
  {
    storyId: 'react-utrecht-button-link--default',
    component: 'utrecht-button',
    group: STORY_GROUPS['LINK_BUTTON_DEFAULT'],
    name: 'Utrecht Link that looks like a button',
    state: true,
    render: () => <ButtonLink href="#">Link that looks like a button</ButtonLink>,
  },
  {
    storyId: 'react-utrecht-checkbox--default',
    component: 'utrecht-checkbox',
    group: STORY_GROUPS['CHECKBOX'],
    name: 'Utrecht Checkbox Default',
    render: () => <Checkbox />,
  },
  {
    storyId: 'react-utrecht-checkbox--checked',
    component: 'utrecht-checkbox',
    group: STORY_GROUPS['CHECKBOX'],
    name: 'Utrecht Checkbox Checked',
    render: () => <Checkbox defaultChecked />,
  },
  {
    storyId: 'react-utrecht-checkbox--disabled-checked',
    component: 'utrecht-checkbox',
    group: STORY_GROUPS['CHECKBOX'],
    name: 'Utrecht Checkbox Disabled Checked',
    render: () => <Checkbox defaultChecked disabled />,
  },
  {
    storyId: 'react-utrecht-checkbox--disabled',
    component: 'utrecht-checkbox',
    group: STORY_GROUPS['CHECKBOX'],
    name: 'Utrecht Checkbox Disabled',
    render: () => <Checkbox disabled />,
  },
  {
    storyId: 'react-utrecht-link-button--default',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_LINK_DEFAULT'],
    name: 'Utrecht Button that looks like a link',
    state: true,
    render: () => <LinkButton>Button that looks like a link</LinkButton>,
  },
  {
    storyId: 'react-utrecht-paragraph--default',
    group: STORY_GROUPS['PARAGRAPH'],
    name: 'Utrecht Paragraph',
    render: () => <Paragraph>Default</Paragraph>,
    detectTokens: {
      allOf: ['utrecht.paragraph.font-size'],
    },
  },
  {
    storyId: 'react-utrecht-paragraph--lead',
    component: 'utrecht-paragraph',
    group: STORY_GROUPS['PARAGRAPH'],
    name: 'Utrecht Lead Paragraph',
    render: () => <Paragraph lead>Lead</Paragraph>,
    detectTokens: {
      allOf: ['utrecht.paragraph.lead.font-size'],
    },
  },
  {
    storyId: 'react-utrecht-heading-1--default',
    component: 'utrecht-heading-1',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Utrecht Heading 1',
    render: () => <Heading1>The Quick Brown Fox Jumps Over The Lazy Dog</Heading1>,
    detectTokens: {
      allOf: ['utrecht.heading-1.font-size'],
    },
  },
  {
    storyId: 'react-utrecht-heading-2--default',
    component: 'utrecht-heading-2',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Utrecht Heading 2',
    render: () => <Heading2>The Quick Brown Fox Jumps Over The Lazy Dog</Heading2>,
    detectTokens: {
      allOf: ['utrecht.heading-2.font-size'],
    },
  },
  {
    storyId: 'react-utrecht-heading-3--default',
    component: 'utrecht-heading-3',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Utrecht Heading 3',
    render: () => <Heading3>The Quick Brown Fox Jumps Over The Lazy Dog</Heading3>,
    detectTokens: {
      allOf: ['utrecht.heading-3.font-size'],
    },
  },
  {
    storyId: 'react-utrecht-heading-4--default',
    component: 'utrecht-heading-4',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Utrecht Heading 4',
    render: () => <Heading4>The Quick Brown Fox Jumps Over The Lazy Dog</Heading4>,
    detectTokens: {
      allOf: ['utrecht.heading-4.font-size'],
    },
  },
  {
    storyId: 'react-utrecht-heading-5--default',
    component: 'utrecht-heading-5',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Utrecht Heading 5',
    render: () => <Heading5>The Quick Brown Fox Jumps Over The Lazy Dog</Heading5>,
    detectTokens: {
      allOf: ['utrecht.heading-5.font-size'],
    },
  },
  {
    storyId: 'react-utrecht-heading-6--default',
    component: 'utrecht-heading-6',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Utrecht Heading 6',
    render: () => <Heading6>The Quick Brown Fox Jumps Over The Lazy Dog</Heading6>,
    detectTokens: {
      allOf: ['utrecht.heading-6.font-size'],
    },
  },
  {
    storyId: 'react-utrecht-heading--level-1',
    component: 'utrecht-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Utrecht Heading - Level 1',
    render: () => <Heading level={1}>The Quick Brown Fox Jumps Over The Lazy Dog</Heading>,
    detectTokens: {
      allOf: ['utrecht.heading-1.font-size'],
    },
  },
  {
    storyId: 'react-utrecht-heading--level-2',
    component: 'utrecht-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Utrecht Heading - Level 2',
    render: () => <Heading level={2}>The Quick Brown Fox Jumps Over The Lazy Dog</Heading>,
    detectTokens: {
      allOf: ['utrecht.heading-2.font-size'],
    },
  },
  {
    storyId: 'react-utrecht-heading--level-3',
    component: 'utrecht-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Utrecht Heading - Level 3',
    render: () => <Heading level={3}>The Quick Brown Fox Jumps Over The Lazy Dog</Heading>,
    detectTokens: {
      allOf: ['utrecht.heading-3.font-size'],
    },
  },
  {
    storyId: 'react-utrecht-heading--level-4',
    component: 'utrecht-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Utrecht Heading - Level 4',
    render: () => <Heading level={4}>The Quick Brown Fox Jumps Over The Lazy Dog</Heading>,
    detectTokens: {
      allOf: ['utrecht.heading-4.font-size'],
    },
  },
  {
    storyId: 'react-utrecht-heading--level-5',
    component: 'utrecht-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Utrecht Heading - Level 5',
    render: () => <Heading level={5}>The Quick Brown Fox Jumps Over The Lazy Dog</Heading>,
  },
  {
    storyId: 'react-utrecht-heading--level-6',
    component: 'utrecht-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Utrecht Heading - Level 6',
    render: () => <Heading level={6}>The Quick Brown Fox Jumps Over The Lazy Dog</Heading>,
  },
  {
    storyId: 'react-utrecht-spotlight-section--default',
    component: 'utrecht-spotlight-section',
    name: 'Utrecht Spotlight Section',
    render: () => (
      <SpotlightSection>
        <Heading1>Lorem ipsum</Heading1>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
      </SpotlightSection>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.spotlight-section.color',
        'utrecht.spotlight-section.border-color',
        'utrecht.spotlight-section.border-width',
        'utrecht.spotlight-section.background-color',
        'utrecht.spotlight-section.padding-block-start',
        'utrecht.spotlight-section.padding-block-end',
        'utrecht.spotlight-section.padding-inline-start',
        'utrecht.spotlight-section.padding-inline-end',
        'utrecht.spotlight-section.marging-block-start',
        'utrecht.spotlight-section.marging-block-end',
      ],
    },
  },
  {
    storyId: 'react-utrecht-spotlight-section--info',
    component: 'utrecht-spotlight-section',
    name: 'Utrecht Spotlight Section: Info',
    render: () => (
      <SpotlightSection type="info">
        <Heading1>Lorem ipsum</Heading1>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
      </SpotlightSection>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.spotlight-section.info.color',
        'utrecht.spotlight-section.info.border-color',
        'utrecht.spotlight-section.info.border-width',
        'utrecht.spotlight-section.info.background-color',
        'utrecht.spotlight-section.info.icon-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-spotlight-section--warning',
    component: 'utrecht-spotlight-section',
    name: 'Utrecht Spotlight Section: Warning',
    render: () => (
      <SpotlightSection type="warning">
        <Heading1>Lorem ipsum</Heading1>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
      </SpotlightSection>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.spotlight-section.warning.color',
        'utrecht.spotlight-section.warning.border-color',
        'utrecht.spotlight-section.warning.border-width',
        'utrecht.spotlight-section.warning.background-color',
        'utrecht.spotlight-section.warning.icon-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-spotlight-section--error',
    component: 'utrecht-spotlight-section',
    name: 'Utrecht Spotlight Section: Error',
    render: () => (
      <SpotlightSection type="error">
        <Heading1>Lorem ipsum</Heading1>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
      </SpotlightSection>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.spotlight-section.error.color',
        'utrecht.spotlight-section.error.border-color',
        'utrecht.spotlight-section.error.border-width',
        'utrecht.spotlight-section.error.background-color',
        'utrecht.spotlight-section.error.icon-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-spotlight-section--ok',
    component: 'utrecht-spotlight-section',
    name: 'Utrecht Spotlight Section: Ok',
    render: () => (
      <SpotlightSection type="ok">
        <Heading1>Lorem ipsum</Heading1>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
      </SpotlightSection>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.spotlight-section.ok.color',
        'utrecht.spotlight-section.ok.border-color',
        'utrecht.spotlight-section.ok.border-width',
        'utrecht.spotlight-section.ok.background-color',
        'utrecht.spotlight-section.ok.icon-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-radio-button--default',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button Default',
    render: () => <RadioButton />,
  },
  {
    storyId: 'react-utrecht-radio-button--checked',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button Checked',
    render: () => <RadioButton defaultChecked />,
  },
  {
    storyId: 'react-utrecht-radio-button--disabled',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button Disabled',
    render: () => <RadioButton disabled />,
  },
  {
    storyId: 'react-utrecht-radio-button--disabled-checked',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button Disabled Checked',
    render: () => <RadioButton defaultChecked disabled />,
  },
  {
    storyId: 'react-utrecht-radio-button--invalid',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button Invalid',
    render: () => <RadioButton invalid />,
  },
  {
    storyId: 'react-utrecht-alert--default',
    component: 'utrecht-alert',
    name: 'Utrecht Alert Default',
    render: () => (
      <Alert>
        <Heading1>Lorem ipsum</Heading1>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
      </Alert>
    ),
  },
  {
    storyId: 'react-utrecht-alert--error',
    component: 'utrecht-alert',
    name: 'Utrecht Alert Error',
    render: () => (
      <Alert type="error">
        <Heading1>Lorem ipsum</Heading1>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
      </Alert>
    ),
  },
  {
    storyId: 'react-utrecht-alert--ok',
    component: 'utrecht-alert',
    name: 'Utrecht Alert Ok',
    render: () => (
      <Alert type="ok">
        <Heading1>Lorem ipsum</Heading1>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
      </Alert>
    ),
  },
  {
    storyId: 'react-utrecht-unordered-list--default',
    component: 'utrecht-unordered-list',
    group: STORY_GROUPS['LISTS'],
    name: 'Utrecht Unordered list',
    render: () => (
      <UnorderedList>
        <UnorderedListItem>The Quick Brown Fox Jumps Over The Lazy Dog</UnorderedListItem>
        <UnorderedListItem>The Quick Brown Fox Jumps Over The Lazy Dog</UnorderedListItem>
      </UnorderedList>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.unordered-list.font-size',
        'utrecht.unordered-list.line-height',
        'utrecht.unordered-list.margin-block-start',
        'utrecht.unordered-list.margin-block-end',
        'utrecht.unordered-list.padding-inline-start',
      ],
    },
  },
  {
    storyId: 'react-utrecht-unordered-list--item',
    component: 'utrecht-unordered-list',
    group: STORY_GROUPS['LISTS'],
    name: 'Utrecht Unordered list: Item',
    render: () => (
      <UnorderedList>
        <UnorderedListItem>The Quick Brown Fox Jumps Over The Lazy Dog</UnorderedListItem>
        <UnorderedListItem>The Quick Brown Fox Jumps Over The Lazy Dog</UnorderedListItem>
      </UnorderedList>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.unordered-list.item.margin-block-start',
        'utrecht.unordered-list.item.margin-block-end',
        'utrecht.unordered-list.item.padding-inline-start',
      ],
    },
  },
  {
    storyId: 'react-utrecht-unordered-list--marker',
    component: 'utrecht-unordered-list',
    group: STORY_GROUPS['LISTS'],
    name: 'Utrecht Unordered list: Marker',
    render: () => (
      <UnorderedList>
        <UnorderedListItem>The Quick Brown Fox Jumps Over The Lazy Dog</UnorderedListItem>
        <UnorderedListItem>The Quick Brown Fox Jumps Over The Lazy Dog</UnorderedListItem>
      </UnorderedList>
    ),
    detectTokens: {
      anyOf: ['utrecht.unordered-list.marker.color'],
    },
  },
  {
    storyId: 'react-utrecht-ordered-list--default',
    component: 'utrecht-ordered-list',
    group: STORY_GROUPS['LISTS'],
    name: 'Utrecht Ordered list',
    render: () => (
      <OrderedList>
        <OrderedListItem>The Quick Brown Fox Jumps Over The Lazy Dog</OrderedListItem>
        <OrderedListItem>The Quick Brown Fox Jumps Over The Lazy Dog</OrderedListItem>
      </OrderedList>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.ordered-list.font-size',
        'utrecht.ordered-list.line-height',
        'utrecht.ordered-list.margin-block-start',
        'utrecht.ordered-list.margin-block-end',
        'utrecht.ordered-list.padding-inline-start',
      ],
    },
  },
  {
    storyId: 'react-utrecht-ordered-list--item',
    component: 'utrecht-ordered-list',
    group: STORY_GROUPS['LISTS'],
    name: 'Utrecht Ordered list: Item',
    render: () => (
      <UnorderedList>
        <UnorderedListItem>The Quick Brown Fox Jumps Over The Lazy Dog</UnorderedListItem>
        <UnorderedListItem>The Quick Brown Fox Jumps Over The Lazy Dog</UnorderedListItem>
      </UnorderedList>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.ordered-list.item.margin-block-start',
        'utrecht.ordered-list.item.margin-block-end',
        'utrecht.ordered-list.item.padding-inline-start',
      ],
    },
  },
  {
    storyId: 'react-utrecht-separator--default',
    component: 'utrecht-separator',
    name: 'Utrecht Separator',
    render: () => <Separator />,
  },
  {
    storyId: 'react-utrecht-page-footer--default',
    name: 'Utrecht Page Footer',
    render: () => (
      <PageFooter>
        <Paragraph>The Quick Brown Fox Jumps Over The Lazy Dog</Paragraph>
      </PageFooter>
    ),
  },
  {
    storyId: 'react-utrecht-textbox--default',
    component: 'utrecht-textbox',
    group: STORY_GROUPS['TEXTBOX'],
    name: 'Utrecht Textbox',
    render: () => <Textbox defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog" />,
    detectTokens: {
      anyOf: [
        'utrecht.textbox.color',
        'utrecht.textbox.border-color',
        'utrecht.textbox.border-width',
        'utrecht.textbox.background-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-textbox--placeholder',
    component: 'utrecht-textbox',
    group: STORY_GROUPS['TEXTBOX'],
    name: 'Textbox with placeholder',
    render: () => <Textbox placeholder="The Quick Brown Fox Jumps Over The Lazy Dog" />,
    detectTokens: {
      anyOf: ['utrecht.textbox.placeholder.color'],
    },
  },
  {
    storyId: 'react-utrecht-textbox--disabled',
    component: 'utrecht-textbox',
    group: STORY_GROUPS['TEXTBOX'],
    name: 'Utrecht Textbox: Disabled',
    state: true,
    render: () => <Textbox disabled defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog" />,
    detectTokens: {
      anyOf: [
        'utrecht.textbox.disabled.color',
        'utrecht.textbox.disabled.border-color',
        'utrecht.textbox.disabled.border-width',
        'utrecht.textbox.disabled.background-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-textbox--hover',
    component: 'utrecht-textbox',
    group: STORY_GROUPS['TEXTBOX'],
    name: 'Utrecht Textbox: Hover',
    state: true,
    render: () => (
      <Textbox className="utrecht-textbox--hover" defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog" />
    ),
    detectTokens: {
      anyOf: [
        'utrecht.textbox.hover.color',
        'utrecht.textbox.hover.border-color',
        'utrecht.textbox.hover.border-width',
        'utrecht.textbox.hover.background-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-textbox--focus',
    component: 'utrecht-textbox',
    group: STORY_GROUPS['TEXTBOX'],
    name: 'Utrecht Textbox: Focus',
    state: true,
    render: () => (
      <Textbox className="utrecht-textbox--focus" defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog" />
    ),
    detectTokens: {
      anyOf: [
        'utrecht.textbox.focus.color',
        'utrecht.textbox.focus.border-color',
        'utrecht.textbox.focus.border-width',
        'utrecht.textbox.focus.background-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-textbox--focus-visible',
    component: 'utrecht-textbox',
    group: STORY_GROUPS['TEXTBOX'],
    name: 'Utrecht Textbox: Focus Visible',
    state: true,
    render: () => (
      <Textbox className="utrecht-textbox--focus-visible" defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog" />
    ),
    detectTokens: {
      anyOf: [
        'utrecht.textbox.focus-visible.color',
        'utrecht.textbox.focus-visible.border-color',
        'utrecht.textbox.focus-visible.border-width',
        'utrecht.textbox.focus-visible.background-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-textbox--invalid',
    component: 'utrecht-textbox',
    group: STORY_GROUPS['TEXTBOX'],
    name: 'Utrecht Textbox: Invalid',
    state: true,
    render: () => <Textbox invalid defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog" />,
  },
  {
    storyId: 'react-utrecht-textbox--readonly',
    component: 'utrecht-textbox',
    group: STORY_GROUPS['TEXTBOX'],
    name: 'Utrecht Textbox: Read Only',
    render: () => <Textbox readOnly defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog" />,
    detectTokens: {
      anyOf: [
        'utrecht.textbox.read-only.color',
        'utrecht.textbox.read-only.border-color',
        'utrecht.textbox.read-only.border-width',
        'utrecht.textbox.read-only.background-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-textbox--required',
    component: 'utrecht-textbox',
    group: STORY_GROUPS['TEXTBOX'],
    name: 'Utrecht Textbox: Required',
    render: () => <Textbox required defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog" />,
  },
  {
    storyId: 'react-utrecht-textarea--default',
    component: 'utrecht-textarea',
    group: STORY_GROUPS['TEXTAREA'],
    name: 'Utrecht Textarea',
    render: () => <Textarea defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog" />,
    detectTokens: {
      anyOf: [
        'utrecht.textarea.color',
        'utrecht.textarea.border-color',
        'utrecht.textarea.border-width',
        'utrecht.textarea.background-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-textarea--placeholder',
    component: 'utrecht-textarea',
    group: STORY_GROUPS['TEXTAREA'],
    name: 'Utrecht Textarea with placeholder',
    render: () => <Textarea placeholder="The Quick Brown Fox Jumps Over The Lazy Dog" />,
    detectTokens: {
      anyOf: ['utrecht.textarea.placeholder.color'],
    },
  },
  {
    storyId: 'react-utrecht-textarea--disabled',
    component: 'utrecht-textarea',
    group: STORY_GROUPS['TEXTAREA'],
    name: 'Utrecht Textarea: Disabled',
    state: true,
    render: () => <Textarea disabled defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog" />,
    detectTokens: {
      anyOf: [
        'utrecht.textarea.disabled.color',
        'utrecht.textarea.disabled.border-color',
        'utrecht.textarea.disabled.border-width',
        'utrecht.textarea.disabled.background-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-textarea--hover',
    component: 'utrecht-textarea',
    group: STORY_GROUPS['TEXTAREA'],
    name: 'Utrecht Textarea: Hover',
    state: true,
    render: () => (
      <Textarea className="utrecht-textarea--hover" defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog" />
    ),
    detectTokens: {
      anyOf: [
        'utrecht.textarea.hover.color',
        'utrecht.textarea.hover.border-color',
        'utrecht.textarea.hover.border-width',
        'utrecht.textarea.hover.background-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-textarea--focus',
    component: 'utrecht-textarea',
    group: STORY_GROUPS['TEXTAREA'],
    name: 'Utrecht Textarea: Focus',
    state: true,
    render: () => (
      <Textarea className="utrecht-textarea--focus" defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog" />
    ),
    detectTokens: {
      anyOf: [
        'utrecht.textarea.focus.color',
        'utrecht.textarea.focus.border-color',
        'utrecht.textarea.focus.border-width',
        'utrecht.textarea.focus.background-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-textarea--focus-visible',
    component: 'utrecht-textarea',
    group: STORY_GROUPS['TEXTAREA'],
    name: 'Utrecht Textarea: Focus Visible',
    state: true,
    render: () => (
      <Textarea
        className="utrecht-textarea--focus-visible"
        defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog"
      />
    ),
  },
  {
    storyId: 'react-utrecht-textarea--invalid',
    component: 'utrecht-textarea',
    group: STORY_GROUPS['TEXTAREA'],
    name: 'Utrecht Textarea: Invalid',
    state: true,
    render: () => <Textarea invalid defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog" />,
  },
  {
    storyId: 'react-utrecht-textarea--readonly',
    component: 'utrecht-textarea',
    group: STORY_GROUPS['TEXTAREA'],
    name: 'Utrecht Textarea: Read Only',
    render: () => <Textarea readOnly defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog" />,
    detectTokens: {
      anyOf: [
        'utrecht.textarea.read-only.color',
        'utrecht.textarea.read-only.border-color',
        'utrecht.textarea.read-only.border-width',
        'utrecht.textarea.read-only.background-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-textarea--required',
    component: 'utrecht-textarea',
    group: STORY_GROUPS['TEXTAREA'],
    name: 'Utrecht Textarea: Required',
    render: () => <Textarea required defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog" />,
  },
  {
    storyId: 'react-utrecht-table--default',
    component: 'utrecht-table',
    name: 'Utrecht Table',
    render: () => (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Column Heading Cell 1</TableHeaderCell>
            <TableHeaderCell scope="col">Column Heading Cell 2</TableHeaderCell>
            <TableHeaderCell scope="col">Column Heading Cell 3</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Row Heading Cell 1</TableHeaderCell>
            <TableCell>Data Cell 1</TableCell>
            <TableCell>Data Cell 2</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Row Heading Cell 2</TableHeaderCell>
            <TableCell>Data Cell 3</TableCell>
            <TableCell>Data Cell 4</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Row Heading Cell 3</TableHeaderCell>
            <TableCell>Data Cell 5</TableCell>
            <TableCell>Data Cell 6</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.table.cell.icon.size',
        'utrecht.table.cell.line-height',
        'utrecht.table.cell.padding-block-end',
        'utrecht.table.cell.padding-block-start',
        'utrecht.table.cell.padding-inline-end',
        'utrecht.table.cell.padding-inline-start',
        'utrecht.table.header.border-block-end-color',
        'utrecht.table.header.border-block-end-width',
        'utrecht.table.header.font-weight',
        'utrecht.table.row.border-block-end-color',
        'utrecht.table.row.border-block-end-width',
      ],
    },
  },
  {
    storyId: 'react-utrecht-table--caption',
    component: 'utrecht-table',
    name: 'Utrecht Table with caption',
    render: () => (
      <Table>
        <TableCaption>Caption of the Table</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Column Heading Cell 1</TableHeaderCell>
            <TableHeaderCell scope="col">Column Heading Cell 2</TableHeaderCell>
            <TableHeaderCell scope="col">Column Heading Cell 3</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Row Heading Cell 1</TableHeaderCell>
            <TableCell>Data Cell 1</TableCell>
            <TableCell>Data Cell 2</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Row Heading Cell 2</TableHeaderCell>
            <TableCell>Data Cell 3</TableCell>
            <TableCell>Data Cell 4</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Row Heading Cell 3</TableHeaderCell>
            <TableCell>Data Cell 5</TableCell>
            <TableCell>Data Cell 6</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.table.caption.font-family',
        'utrecht.table.caption.font-size',
        'utrecht.table.caption.color',
        'utrecht.table.caption.line-height',
        'utrecht.table.caption.text-align',
        'utrecht.table.caption.margin-block-end',
      ],
    },
  },
  {
    storyId: 'react-utrecht-select--default',
    component: 'utrecht-select',
    group: STORY_GROUPS['SELECT'],
    name: 'Utrecht Select',
    render: () => (
      <Select defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    ),
  },
  {
    storyId: 'react-utrecht-select--disabled',
    component: 'utrecht-select',
    group: STORY_GROUPS['SELECT'],
    name: 'Utrecht Select: Disabled',
    state: true,
    render: () => (
      <Select disabled defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    ),
  },
  {
    storyId: 'react-utrecht-select--invalid',
    component: 'utrecht-select',
    group: STORY_GROUPS['SELECT'],
    name: 'Utrecht Select: Invalid',
    state: true,
    render: () => (
      <Select invalid defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    ),
  },
  {
    storyId: 'react-utrecht-select--required',
    component: 'utrecht-select',
    group: STORY_GROUPS['SELECT'],
    name: 'Utrecht Select: Required',
    render: () => (
      <Select required defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    ),
  },
  {
    storyId: 'react-utrecht-select--focus',
    component: 'utrecht-select',
    group: STORY_GROUPS['SELECT'],
    name: 'Utrecht Select: Focus',
    state: true,
    render: () => (
      <Select className="utrecht-select--focus" defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    ),
  },
  {
    storyId: 'react-utrecht-select--focus-visible',
    component: 'utrecht-select',
    group: STORY_GROUPS['SELECT'],
    name: 'Utrecht Select: Focus Visible',
    state: true,
    render: () => (
      <Select className="utrecht-select--focus-visible" defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    ),
  },
  {
    storyId: 'react-utrecht-badge-counter--default',
    group: STORY_GROUPS['BADGES'],
    name: 'Utrecht Counter Badge',
    render: () => <BadgeCounter>42</BadgeCounter>,
  },
  {
    storyId: 'react-utrecht-data-badge--default',
    group: STORY_GROUPS['BADGES'],
    name: 'Utrecht Data Badge',
    render: () => <DataBadge>Category 1</DataBadge>,
  },
  {
    storyId: 'react-utrecht-blockquote--default',
    name: 'Utrecht Blockquote',
    render: () => <Blockquote>The Quick Brown Fox Jumps Over The Lazy Dog</Blockquote>,
  },
  {
    storyId: 'react-utrecht-link--default',
    group: STORY_GROUPS['LINK'],
    name: 'Utrecht Link',
    inline: true,
    render: () => (
      <Link href="https://example.com" target="_new" external>
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
    detectTokens: {
      anyOf: ['utrecht.link.color', 'utrecht.link.text-decoration', 'utrecht.link.text-decoration-thickness'],
    },
  },
  {
    storyId: 'react-utrecht-link--hover',
    group: STORY_GROUPS['LINK'],
    name: 'Utrecht Link: Hover',
    state: true,
    inline: true,
    render: () => (
      <Link href="https://example.com" target="_new" external className="utrecht-link--hover">
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.link.hover.color',
        'utrecht.link.hover.text-decoration',
        'utrecht.link.hover.text-decoration-thickness',
      ],
    },
  },
  {
    storyId: 'react-utrecht-link--focus',
    group: STORY_GROUPS['LINK'],
    name: 'Utrecht Link: Focus',
    state: true,
    inline: true,
    render: () => (
      <Link href="https://example.com" target="_new" external className="utrecht-link--focus">
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.link.focus.color',
        'utrecht.link.focus.text-decoration',
        'utrecht.link.focus.text-decoration-thickness',
      ],
    },
  },
  {
    storyId: 'react-utrecht-link--focus-visible',
    group: STORY_GROUPS['LINK'],
    name: 'Utrecht Link: Focus Visible',
    state: true,
    inline: true,
    render: () => (
      <Link href="https://example.com" target="_new" external className="utrecht-link--focus-visible">
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
  },
  {
    storyId: 'react-utrecht-link--visited',
    group: STORY_GROUPS['LINK'],
    name: 'Utrecht Link: Visited',
    state: true,
    inline: true,
    render: () => (
      <Link href="https://example.com" target="_new" external className="utrecht-link--visited">
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
  },
  {
    storyId: 'react-utrecht-document--default',
    name: 'Utrecht Document',
    render: () => <Document>The Quick Brown Fox Jumps Over The Lazy Dog</Document>,
    detectTokens: {
      anyOf: ['utrecht.document.color', 'utrecht.document.background-color', 'utrecht.document.font-size'],
    },
  },
  {
    storyId: 'react-utrecht-form-label--default',
    group: STORY_GROUPS['FORM_LABEL_DEFAULT'],
    name: 'Utrecht Form Label',
    render: () => <FormLabel>Label for form control</FormLabel>,
  },
  {
    storyId: 'react-utrecht-form-label--disabled',
    group: STORY_GROUPS['FORM_LABEL_DEFAULT'],
    name: 'Utrecht Form Label: Disabled',
    state: true,
    render: () => <FormLabel disabled>Label for disabled form control</FormLabel>,
  },
  {
    storyId: 'react-utrecht-form-label--checkbox',
    group: STORY_GROUPS['FORM_LABEL_CHECKBOX'],
    name: ' Utrecht Checkbox Form Label',
    render: () => <FormLabel type="checkbox">Label for checkbox option</FormLabel>,
  },
  {
    storyId: 'react-utrecht-form-label--checkbox-checked',
    group: STORY_GROUPS['FORM_LABEL_CHECKBOX'],
    name: 'Utrecht Checkbox Form Label: Checked',
    state: true,
    render: () => <FormLabel checked>Label for checked checkbox option</FormLabel>,
  },
  {
    storyId: 'react-utrecht-form-label--radio',
    group: STORY_GROUPS['FORM_LABEL_RADIO'],
    name: 'Utrecht Radio Button Form Label',
    render: () => <FormLabel type="radio">Label for radio button option</FormLabel>,
  },
  {
    storyId: 'react-utrecht-form-label--radio-checked',
    group: STORY_GROUPS['FORM_LABEL_RADIO'],
    name: 'Utrecht Radio Button Form Label: Checked',
    state: true,
    render: () => <FormLabel checked>Label for selected radio button option</FormLabel>,
  },
  {
    storyId: 'react-utrecht-mark--default',
    name: 'Utrecht Mark',
    render: () => <Mark>Mark my words!</Mark>,
    detectTokens: {
      anyOf: ['utrecht.mark.color', 'utrecht.mark.background-color'],
    },
  },
  {
    storyId: 'react-utrecht-subscript--default',
    name: 'Utrecht Subscript',
    render: () => <Subscript>Subscript tekst</Subscript>,
    detectTokens: {
      // subscript doesn't have any tokens of its own
      anyOf: ['utrecht.paragraph.font-size'],
    },
  },
  {
    storyId: 'react-utrecht-superscript--default',
    name: 'Utrecht Superscript',
    render: () => <Superscript>Superscript tekst</Superscript>,
    detectTokens: {
      // superscript doesn't have any tokens of its own
      anyOf: ['utrecht.paragraph.font-size'],
    },
  },
  {
    storyId: 'react-utrecht-code--default',
    name: 'Utrecht Code',
    render: () => <Code>{'<input type="url" value="https://example.fi/">'}</Code>,
    detectTokens: {
      allOf: ['utrecht.code.font-family'],
    },
  },
  {
    storyId: 'react-utrecht-code-block--default',
    name: 'Utrecht Code Block',
    render: () => (
      <CodeBlock>{`<!DOCTYPE html>
<html lang="nl" dir="ltr">
  <head>
    <title>NL Design System</title>
    <meta charset="utf-8"/>
  </head>
  <body>
    <h1>NL Design System</h1>
  </body>
</html>`}</CodeBlock>
    ),
    detectTokens: {
      allOf: ['utrecht.code-block.font-family'],
    },
  },
  {
    storyId: 'react-utrecht-color-sample',
    name: 'Utrecht Color Sample',
    render: () => <ColorSample color="#007DAD" />,
    detectTokens: {
      anyOf: ['utrecht.color-sample.border-color'],
    },
  },
  // {
  //   storyId: 'react-utrecht-emphasis--stressed',
  //   group: STORY_GROUPS['EMPHASIS'],
  //   name: 'Utrecht Stressed Emphasis',
  //   render: () => <Emphasis>The Quick Brown Fox Jumps Over The Lazy Dog</Emphasis>,
  // },
  // {
  //   storyId: 'react-utrecht-emphasis--strong',
  //   group: STORY_GROUPS['EMPHASIS'],
  //   name: 'Utrecht Strong Emphasis',
  //   render: () => <Emphasis strong>The Quick Brown Fox Jumps Over The Lazy Dog</Emphasis>,
  // },
  // {
  //   storyId: 'react-utrecht-emphasis--double',
  //   group: STORY_GROUPS['EMPHASIS'],
  //   name: 'Utrecht Double Emphasis',
  //   render: () => (
  //     <Emphasis>
  //       <Emphasis strong>The Quick Brown Fox Jumps Over The Lazy Dog</Emphasis>
  //     </Emphasis>
  //   ),
  // },
  {
    storyId: 'react-utrecht-form-fieldset--default',
    name: 'Utrecht Fieldset with legend',
    render: () => (
      <Fieldset>
        <FieldsetLegend>The Quick Brown Fox Jumps Over The Lazy Dog</FieldsetLegend>
        <Paragraph>The Quick Brown Fox Jumps Over The Lazy Dog</Paragraph>
      </Fieldset>
    ),
  },
  {
    storyId: 'react-utrecht-form-field-description--default',
    group: STORY_GROUPS['FORM_FIELD_DESCRIPTION'],
    name: 'Utrecht Form field description',
    render: () => <FormFieldDescription>The Quick Brown Fox Jumps Over The Lazy Dog</FormFieldDescription>,
  },
  {
    storyId: 'react-utrecht-form-field-description--invalid',
    group: STORY_GROUPS['FORM_FIELD_DESCRIPTION'],
    name: 'Utrecht Form field description: Invalid',
    state: true,
    render: () => <FormFieldDescription invalid>The Quick Brown Fox Jumps Over The Lazy Dog</FormFieldDescription>,
  },
  {
    storyId: 'react-utrecht-form-field-description--valid',
    group: STORY_GROUPS['FORM_FIELD_DESCRIPTION'],
    name: 'Utrecht Form field description: Valid',
    state: true,
    render: () => <FormFieldDescription valid>The Quick Brown Fox Jumps Over The Lazy Dog</FormFieldDescription>,
  },
  {
    storyId: 'react-utrecht-form-field-description--warning',
    group: STORY_GROUPS['FORM_FIELD_DESCRIPTION'],
    name: 'Utrecht Form field description: Warning',
    render: () => <FormFieldDescription warning>The Quick Brown Fox Jumps Over The Lazy Dog</FormFieldDescription>,
  },
  {
    storyId: 'react-utrecht-page-footer',
    name: 'Utrecht Page Footer',
    render: () => (
      <PageFooter>
        <Paragraph>Page Footer Area</Paragraph>
      </PageFooter>
    ),
  },
];
