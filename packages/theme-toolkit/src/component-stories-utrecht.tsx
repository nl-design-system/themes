// eslint-disable-next-line no-unused-vars
import { PropsWithChildren, ReactNode } from 'react';

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
import { Listbox, ListboxOption } from '@utrecht/listbox-react/css';
import { clsx } from 'clsx';

const Blockquote = ({ children }: PropsWithChildren) => <div className="utrecht-blockquote">{children}</div>;

const BadgeCounter = ({ children }: PropsWithChildren) => <div className="utrecht-badge-counter">{children}</div>;

export interface ListboxOptionStoryProps {
  active?: boolean;
  disabled?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
  hover?: boolean;
  label: ReactNode;
  selected?: boolean;
}

export interface ListboxStoryProps {
  disabled?: boolean;
  invalid?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
  forcedColors?: boolean;
  multiple?: boolean;
  readOnly?: boolean;
  required?: boolean;
  options: ListboxOptionStoryProps[];
}

export const ListboxStory = ({
  disabled,
  focus,
  focusVisible,
  forcedColors,
  invalid,
  multiple,
  options,
  readOnly,
  required,
}: ListboxStoryProps) => (
  <Listbox
    className={clsx({
      'utrecht-listbox--focus': focus,
      'utrecht-listbox--focus-visible': focusVisible,
      'utrecht-listbox--forced-colors': forcedColors,
    })}
    disabled={disabled}
    invalid={invalid}
    multiple={multiple}
    required={required}
    readOnly={readOnly}
  >
    {options.map(({ active, disabled, focus, focusVisible, hover, label, selected }, index) => (
      <ListboxOption
        className={clsx({
          'utrecht-listbox__option--hover': hover,
          'utrecht-listbox__option--focus': focus,
          'utrecht-listbox__option--focus-visible': focusVisible,
        })}
        active={active}
        disabled={disabled}
        selected={selected}
        key={index}
      >
        {label}
      </ListboxOption>
    ))}
  </Listbox>
);

export const UTRECHT_COMPONENT_STORIES: ComponentStory[] = [
  {
    storyId: 'react-utrecht-button--default',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Default Button',
    render: () => <Button>Default</Button>,
    detectTokens: {
      anyOf: [
        'utrecht.button.color',
        'utrecht.button.background-color',
        'utrecht.button.border-color',
        'utrecht.button.border-radius',
        'utrecht.button.border-width',
        'utrecht.button.column-gap',
        'utrecht.button.font-family',
        'utrecht.button.font-size',
        'utrecht.button.font-weight',
        'utrecht.button.inline-size',
        'utrecht.button.line-height',
        'utrecht.button.min-block-size',
        'utrecht.button.min-inline-size',
        'utrecht.button.padding-block-start',
        'utrecht.button.padding-block-end',
        'utrecht.button.padding-inline-start',
        'utrecht.button.padding-inline-end',
        'utrecht.button.text-transform',
      ],
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
      anyOf: [
        'utrecht.button.active.color',
        'utrecht.button.active.background-color',
        'utrecht.button.active.border-color',
      ],
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
      anyOf: [
        'utrecht.button.hover.background-color',
        'utrecht.button.hover.color',
        'utrecht.button.hover.border-color',
        'utrecht.button.hover.scale',
      ],
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
      anyOf: [
        'utrecht.button.focus.color',
        'utrecht.button.focus.background-color',
        'utrecht.button.focus.border-color',
        'utrecht.button.focus.scale',
      ],
    },
  },
  {
    storyId: 'react-utrecht-button--disabled',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Default Button: Disabled',
    state: true,
    render: () => <Button disabled>Default</Button>,
    detectTokens: {
      anyOf: [
        'utrecht.button.disabled.color',
        'utrecht.button.disabled.background-color',
        'utrecht.button.disabled.border-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-button--pressed',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Default Button: Pressed',
    state: true,
    render: () => <Button pressed>Default</Button>,
    detectTokens: {
      anyOf: [
        'utrecht.button.pressed.color',
        'utrecht.button.pressed.background-color',
        'utrecht.button.pressed.border-color',
      ],
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
      anyOf: [
        'utrecht.button.primary-action.color',
        'utrecht.button.primary-action.background-color',
        'utrecht.button.primary-action.border-color',
        'utrecht.button.primary-action.border-width',
        'utrecht.button.primary-action.font-size',
        'utrecht.button.primary-action.font-weight',
        'utrecht.button.primary-action.line-height',
      ],
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
    storyId: 'react-utrecht-button--primary-action-active',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Primary Action Button: Active',
    state: true,
    render: () => (
      <Button appearance="primary-action-button" className="utrecht-button--active">
        Primary action
      </Button>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.button.primary-action.active.color',
        'utrecht.button.primary-action.active.background-color',
        'utrecht.button.primary-action.active.border-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-button--primary-action-disabled',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Primary Action Button: Disabled',
    state: true,
    render: () => (
      <Button appearance="primary-action-button" disabled>
        Primary action
      </Button>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.button.primary-action.disabled.color',
        'utrecht.button.primary-action.disabled.background-color',
        'utrecht.button.primary-action.disabled.border-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-button--primary-action-hover',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Primary Action Button: Hover',
    state: true,
    render: () => (
      <Button appearance="primary-action-button" className="utrecht-button--hover">
        Primary action
      </Button>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.button.primary-action.hover.color',
        'utrecht.button.primary-action.hover.background-color',
        'utrecht.button.primary-action.hover.border-color',
        'utrecht.button.primary-action.hover.scale',
      ],
    },
  },
  {
    storyId: 'react-utrecht-button--primary-action-focus',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Primary Action Button: Focus',
    state: true,
    render: () => (
      <Button appearance="primary-action-button" className="utrecht-button--focus utrecht-button--focus-visible">
        Primary action
      </Button>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.button.primary-action.focus.color',
        'utrecht.button.primary-action.focus.background-color',
        'utrecht.button.primary-action.focus.border-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-button--primary-action-pressed',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Primary Action Button: Pressed',
    state: true,
    render: () => (
      <Button appearance="primary-action-button" pressed>
        Primary action
      </Button>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.button.primary-action.pressed.color',
        'utrecht.button.primary-action.pressed.background-color',
        'utrecht.button.primary-action.pressed.border-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-button--secondary-action-button',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Secondary Action Button',
    state: true,
    render: () => <Button appearance="secondary-action-button">Secondary action</Button>,
    detectTokens: {
      anyOf: [
        'utrecht.button.secondary-action.color',
        'utrecht.button.secondary-action.background-color',
        'utrecht.button.secondary-action.border-color',
        'utrecht.button.secondary-action.border-width',
        'utrecht.button.secondary-action.font-size',
        'utrecht.button.secondary-action.font-weight',
        'utrecht.button.secondary-action.line-height',
      ],
    },
  },
  {
    storyId: 'react-utrecht-button--secondary-action-active',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Secondary Action Button: Active',
    state: true,
    render: () => (
      <Button appearance="secondary-action-button" className="utrecht-button--active">
        Secondary action
      </Button>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.button.secondary-action.active.color',
        'utrecht.button.secondary-action.active.background-color',
        'utrecht.button.secondary-action.active.border-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-button--secondary-action-disabled',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Secondary Action Button: Disabled',
    state: true,
    render: () => (
      <Button appearance="secondary-action-button" disabled>
        Secondary action
      </Button>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.button.secondary-action.disabled.color',
        'utrecht.button.secondary-action.disabled.background-color',
        'utrecht.button.secondary-action.disabled.border-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-button--secondary-action-hover',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Secondary Action Button: Hover',
    state: true,
    render: () => (
      <Button appearance="secondary-action-button" className="utrecht-button--hover">
        Secondary action
      </Button>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.button.secondary-action.hover.color',
        'utrecht.button.secondary-action.hover.background-color',
        'utrecht.button.secondary-action.hover.border-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-button--secondary-action-focus',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Secondary Action Button: Focus',
    state: true,
    render: () => (
      <Button
        appearance="secondary-action-button-focus"
        className="utrecht-button--focus utrecht-button--focus-visible"
      >
        Secondary action
      </Button>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.button.secondary-action.focus.color',
        'utrecht.button.secondary-action.focus.background-color',
        'utrecht.button.secondary-action.focus.border-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-button--secondary-action-pressed',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Secondary Action Button: Pressed',
    state: true,
    render: () => (
      <Button appearance="secondary-action-button" pressed>
        Secondary action
      </Button>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.button.secondary-action.pressed.color',
        'utrecht.button.secondary-action.pressed.background-color',
        'utrecht.button.secondary-action.pressed.border-color',
      ],
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
      anyOf: [
        'utrecht.button.subtle.color',
        'utrecht.button.subtle.background-color',
        'utrecht.button.subtle.border-color',
        'utrecht.button.subtle.border-width',
        'utrecht.button.subtle.font-size',
        'utrecht.button.subtle.font-weight',
        'utrecht.button.subtle.line-height',
      ],
    },
  },
  {
    storyId: 'react-utrecht-button--subtle-active',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Subtle Button: Active',
    state: true,
    render: () => (
      <Button appearance="subtle-button" className="utrecht-button--active">
        Subtle button
      </Button>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.button.subtle.active.color',
        'utrecht.button.subtle.active.background-color',
        'utrecht.button.subtle.active.border-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-button--subtle-disabled',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Subtle Button: Disabled',
    state: true,
    render: () => (
      <Button appearance="subtle-button" disabled>
        Subtle button
      </Button>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.button.subtle.disabled.color',
        'utrecht.button.subtle.disabled.background-color',
        'utrecht.button.subtle.disabled.border-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-button--subtle-hover',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Subtle Button: Hover',
    state: true,
    render: () => (
      <Button appearance="subtle-button" className="utrecht-button--hover">
        Subtle button
      </Button>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.button.subtle.hover.color',
        'utrecht.button.subtle.hover.background-color',
        'utrecht.button.subtle.hover.border-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-button--subtle-focus',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Subtle Button: Focus',
    state: true,
    render: () => (
      <Button appearance="subtle-button" className="utrecht-button--focus utrecht-button--focus-visible">
        Subtle button
      </Button>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.button.subtle.focus.color',
        'utrecht.button.subtle.focus.background-color',
        'utrecht.button.subtle.focus.border-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-button--subtle-pressed',
    component: 'utrecht-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Utrecht Subtle Button: Pressed',
    state: true,
    render: () => (
      <Button appearance="subtle-button" pressed>
        Subtle button
      </Button>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.button.subtle.pressed.color',
        'utrecht.button.subtle.pressed.background-color',
        'utrecht.button.subtle.pressed.border-color',
      ],
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
    detectTokens: {
      anyOf: [
        'utrecht.form-control.color',
        'utrecht.form-control.background-color',
        'utrecht.form-control.border-color',
        'utrecht.radio-button.color',
        'utrecht.radio-button.background-color',
        'utrecht.radio-button.border-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-radio-button--hover',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button Hover',
    render: () => <RadioButton className="utrecht-radio-button--hover" />,
    detectTokens: {
      anyOf: [
        'utrecht.form-control.hover.color',
        'utrecht.form-control.hover.background-color',
        'utrecht.form-control.hover.border-color',
        'utrecht.radio-button.hover.color',
        'utrecht.radio-button.hover.background-color',
        'utrecht.radio-button.hover.border-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-radio-button--focus',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button focus',
    render: () => <RadioButton className="utrecht-radio-button--focus" />,
    detectTokens: {
      anyOf: [
        'utrecht.radio-button.color',
        'utrecht.radio-button.background-color',
        'utrecht.radio-button.border-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-radio-button--focus-visible',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button focus-visible',
    render: () => <RadioButton className="utrecht-radio-button--focus-visible" />,
    detectTokens: {
      anyOf: [
        'utrecht.radio-button.color',
        'utrecht.radio-button.background-color',
        'utrecht.radio-button.border-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-radio-button--active',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button active',
    render: () => <RadioButton className="utrecht-radio-button--active" />,
    detectTokens: {
      anyOf: [
        'utrecht.radio-button.color',
        'utrecht.radio-button.background-color',
        'utrecht.radio-button.border-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-radio-button--disabled',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button Disabled',
    render: () => <RadioButton disabled />,
    detectTokens: {
      anyOf: [
        'utrecht.radio-button.color',
        'utrecht.radio-button.background-color',
        'utrecht.radio-button.border-color',
      ],
    },
  },
  /* disable + focus should not have any specific styling, skipped that one */
  {
    storyId: 'react-utrecht-radio-button--disabled-focus-visible',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button Disabled + focus-visible',
    render: () => <RadioButton disabled className="utrecht-radio-button--focus-visible" />,
    detectTokens: {
      anyOf: [
        'utrecht.radio-button.color',
        'utrecht.radio-button.background-color',
        'utrecht.radio-button.border-color',
      ],
    },
  },
  /* disable + hover should not have any specific styling, skipped that one */
  /* disable + active should not have any specific styling, skipped that one */
  {
    storyId: 'react-utrecht-radio-button--checked',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button Checked',
    render: () => <RadioButton defaultChecked />,
    detectTokens: {
      anyOf: [
        'utrecht.radio-button.color',
        'utrecht.radio-button.background-color',
        'utrecht.radio-button.border-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-radio-button--checked-focus-visible',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button Checked + focus-visible',
    render: () => <RadioButton defaultChecked className="utrecht-radio-button--focus-visible" />,
    detectTokens: {
      anyOf: [
        'utrecht.radio-button.color',
        'utrecht.radio-button.background-color',
        'utrecht.radio-button.border-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-radio-button--checked-hover',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Checked + hover',
    render: () => <RadioButton defaultChecked className="utrecht-radio-button--hover" />,
    detectTokens: {
      anyOf: [
        'utrecht.radio-button.color',
        'utrecht.radio-button.background-color',
        'utrecht.radio-button.border-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-radio-button--checked-active',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Checked + active',
    render: () => <RadioButton defaultChecked className="utrecht-radio-button--active" />,
    detectTokens: {
      anyOf: [
        'utrecht.radio-button.color',
        'utrecht.radio-button.background-color',
        'utrecht.radio-button.border-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-radio-button--checked-disabled',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button Checked + disabled',
    render: () => <RadioButton defaultChecked disabled />,
    detectTokens: {
      anyOf: [
        'utrecht.radio-button.color',
        'utrecht.radio-button.background-color',
        'utrecht.radio-button.border-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-radio-button--invalid',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button Invalid',
    render: () => <RadioButton invalid />,
  },
  {
    storyId: 'react-utrecht-radio-button--checked-invalid',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button Checked + Invalid',
    render: () => <RadioButton defaultChecked invalid />,
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
  {
    storyId: 'react-utrecht-listbox',
    name: 'Utrecht Listbox',
    render: () => (
      <ListboxStory
        options={[
          { label: 'Option #1' },
          {
            hover: true,
            label: 'Option #2',
          },
          { label: 'Option #3' },
        ]}
      />
    ),
    detectTokens: {
      anyOf: [
        'utrecht.listbox.background-color',
        'utrecht.listbox.border-color',
        'utrecht.listbox.border-radius',
        'utrecht.listbox.border-width',
        'utrecht.listbox.color',
        'utrecht.listbox.font-weight',
        'utrecht.listbox.inline-size',
        'utrecht.listbox.max-block-size',
        'utrecht.listbox.padding-block-end',
        'utrecht.listbox.padding-block-start',
        'utrecht.listbox.padding-inline-end',
        'utrecht.listbox.padding-inline-start',
        'utrecht.listbox.option.background-color',
        'utrecht.listbox.option.color',
        'utrecht.listbox.option.min-block-size',
        'utrecht.listbox.option.padding-block-end',
        'utrecht.listbox.option.padding-block-start',
        'utrecht.listbox.option.padding-inline-end',
        'utrecht.listbox.option.padding-inline-start',
        'utrecht.listbox.option.icon.size',
        // TODO: Option group tokens
      ],
    },
  },
  {
    storyId: 'react-utrecht-listbox--focus-visible',
    name: 'Utrecht Listbox Focus-visible',
    render: () => (
      <ListboxStory
        focus
        focusVisible
        options={[
          { label: 'Option #1' },
          {
            hover: true,
            label: 'Option #2',
          },
          { label: 'Option #3' },
        ]}
      />
    ),
  },
  {
    storyId: 'react-utrecht-listbox--option-hover',
    name: 'Utrecht Listbox Option Hover',
    render: () => (
      <ListboxStory
        options={[
          { label: 'Option #1' },
          {
            hover: true,
            label: 'Option #2',
          },
          { label: 'Option #3' },
        ]}
      />
    ),
    detectTokens: {
      anyOf: ['utrecht.listbox.option.hover.background-color', 'utrecht.listbox.option.hover.color'],
    },
  },
  {
    storyId: 'react-utrecht-listbox--option-selected',
    name: 'Utrecht Listbox Option Selected',
    render: () => (
      <ListboxStory
        options={[
          { label: 'Option #1' },
          {
            selected: true,
            label: 'Option #2',
          },
          { label: 'Option #3' },
        ]}
      />
    ),
    detectTokens: {
      anyOf: ['utrecht.listbox.option.selected.background-color', 'utrecht.listbox.option.selected.color'],
    },
  },
  {
    storyId: 'react-utrecht-listbox--option-selected-hover',
    name: 'Utrecht Listbox Option Selected + Hover',
    render: () => (
      <ListboxStory
        options={[
          { label: 'Option #1' },
          {
            hover: true,
            selected: true,
            label: 'Option #2',
          },
          { label: 'Option #3' },
        ]}
      />
    ),
    detectTokens: {
      anyOf: ['utrecht.listbox.option.selected.hover.background-color', 'utrecht.listbox.option.selected.hover.color'],
    },
  },
  {
    storyId: 'react-utrecht-listbox--option-active',
    name: 'Utrecht Listbox Option Active',
    render: () => (
      <ListboxStory
        options={[
          { label: 'Option #1' },
          {
            active: true,
            label: 'Option #2',
          },
          { label: 'Option #3' },
        ]}
      />
    ),
    detectTokens: {
      anyOf: ['utrecht.listbox.option.active.background-color', 'utrecht.listbox.option.active.color'],
    },
  },
  {
    storyId: 'react-utrecht-listbox--option-disabled',
    name: 'Utrecht Listbox Option Disabled',
    render: () => (
      <ListboxStory
        options={[
          { label: 'Option #1' },
          {
            disabled: true,
            label: 'Option #2',
          },
          { label: 'Option #3' },
        ]}
      />
    ),
    detectTokens: {
      anyOf: ['utrecht.listbox.option.disabled.background-color', 'utrecht.listbox.option.disabled.color'],
    },
  },
  {
    storyId: 'react-utrecht-listbox--option-disabled-selected',
    name: 'Utrecht Listbox Option Disabled + Selected',
    render: () => (
      <ListboxStory
        options={[
          { label: 'Option #1' },
          {
            disabled: true,
            selected: true,
            label: 'Option #2',
          },
          { label: 'Option #3' },
        ]}
      />
    ),
    detectTokens: {
      anyOf: [
        'utrecht.listbox.option.selected.disabled.background-color',
        'utrecht.listbox.option.selected.disabled.color',
      ],
    },
  },
];
