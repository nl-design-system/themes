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
  FormFieldErrorMessage,
  LinkList,
  Icon,
  ButtonGroup as ActionGroup,
} from '@utrecht/component-library-react/dist/css-module';
import { UtrechtIconChevronRight } from '@utrecht/web-component-library-react';
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
  label: string;
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
  label,
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
    aria-label={label}
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
    name: 'Utrecht Checkbox default',
    render: () => <Checkbox aria-label="Example Checkbox component" />,
    detectTokens: {
      anyOf: [
        'utrecht.checkbox.background-color',
        'utrecht.checkbox.border-color',
        'utrecht.checkbox.border-radius',
        'utrecht.checkbox.border-width',
        'utrecht.checkbox.color',
        'utrecht.checkbox.icon.size',
        'utrecht.checkbox.size',
      ],
    },
  },
  {
    storyId: 'react-utrecht-checkbox--checked',
    component: 'utrecht-checkbox',
    group: STORY_GROUPS['CHECKBOX'],
    name: 'Utrecht Checkbox Checked',
    render: () => <Checkbox defaultChecked aria-label="Example Checkbox component that is checked" />,
    detectTokens: {
      anyOf: [
        'utrecht.checkbox.checked.border-color',
        'utrecht.checkbox.checked.border-width',
        'utrecht.checkbox.checked.background-color',
        'utrecht.checkbox.checked.color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-checkbox--disabled',
    component: 'utrecht-checkbox',
    group: STORY_GROUPS['CHECKBOX'],
    name: 'Utrecht Checkbox Disabled',
    render: () => <Checkbox disabled aria-label="Example Checkbox component that is disabled" />,
    detectTokens: {
      anyOf: [
        'utrecht.checkbox.disabled.border-color',
        'utrecht.checkbox.disabled.border-width',
        'utrecht.checkbox.disabled.background-color',
        'utrecht.checkbox.disabled.color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-checkbox--active',
    component: 'utrecht-checkbox',
    group: STORY_GROUPS['CHECKBOX'],
    name: 'Utrecht Checkbox Active',
    render: () => (
      <Checkbox className="utrecht-checkbox--active" aria-label="Example Checkbox component, simulating active state" />
    ),
    detectTokens: {
      anyOf: [
        'utrecht.checkbox.active.border-color',
        'utrecht.checkbox.active.border-width',
        'utrecht.checkbox.active.background-color',
        'utrecht.checkbox.active.color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-checkbox--hover',
    component: 'utrecht-checkbox',
    group: STORY_GROUPS['CHECKBOX'],
    name: 'Utrecht Checkbox Hover',
    render: () => (
      <Checkbox className="utrecht-checkbox--hover" aria-label="Example Checkbox component, simulating hover" />
    ),
    detectTokens: {
      anyOf: [
        'utrecht.checkbox.hover.border-color',
        'utrecht.checkbox.hover.border-width',
        'utrecht.checkbox.hover.background-color',
        'utrecht.checkbox.hover.color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-checkbox--focus',
    component: 'utrecht-checkbox',
    group: STORY_GROUPS['CHECKBOX'],
    name: 'Utrecht Checkbox focus',
    render: () => (
      <Checkbox
        className="utrecht-checkbox--focus utrecht-checkbox--focus-visible"
        aria-label="Example Checkbox component, simulating focus-visible"
      />
    ),
    detectTokens: {
      anyOf: [
        'utrecht.checkbox.focus.border-color',
        'utrecht.checkbox.focus.border-width',
        'utrecht.checkbox.focus.background-color',
        'utrecht.checkbox.focus.color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-checkbox--indeterminate',
    component: 'utrecht-checkbox',
    group: STORY_GROUPS['CHECKBOX'],
    name: 'Utrecht Checkbox indeterminate',
    render: () => <Checkbox indeterminate aria-label="Example Checkbox component that is indeterminate" />,
    detectTokens: {
      anyOf: [
        'utrecht.checkbox.indeterminate.border-color',
        'utrecht.checkbox.indeterminate.border-width',
        'utrecht.checkbox.indeterminate.background-color',
        'utrecht.checkbox.indeterminate.color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-checkbox--invalid',
    component: 'utrecht-checkbox',
    group: STORY_GROUPS['CHECKBOX'],
    name: 'Utrecht Checkbox invalid',
    render: () => <Checkbox invalid aria-label="Example Checkbox component that is invalid" />,
    detectTokens: {
      anyOf: [
        'utrecht.checkbox.invalid.border-color',
        'utrecht.checkbox.invalid.border-width',
        'utrecht.checkbox.invalid.background-color',
        'utrecht.checkbox.invalid.color',
      ],
    },
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
    render: () => (
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum
      </Paragraph>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.paragraph.color',
        'utrecht.paragraph.font-size',
        'utrecht.paragraph.font-family',
        'utrecht.paragraph.font-weight',
        'utrecht.paragraph.line-height',
        'utrecht.paragraph.margin-block-start',
        'utrecht.paragraph.margin-block-end',
      ],
    },
  },
  {
    storyId: 'react-utrecht-paragraph--lead',
    component: 'utrecht-paragraph',
    group: STORY_GROUPS['PARAGRAPH'],
    name: 'Utrecht Lead Paragraph',
    render: () => (
      <Paragraph lead>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum
      </Paragraph>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.paragraph.lead.color',
        'utrecht.paragraph.lead.font-size',
        'utrecht.paragraph.lead.font-weight',
        'utrecht.paragraph.lead.line-height',
      ],
    },
  },
  {
    storyId: 'react-utrecht-paragraph--small',
    component: 'utrecht-paragraph',
    group: STORY_GROUPS['PARAGRAPH'],
    name: 'Utrecht Small Paragraph',
    render: () => (
      <Paragraph small>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum
      </Paragraph>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.paragraph.small.color',
        'utrecht.paragraph.small.font-size',
        'utrecht.paragraph.small.font-weight',
        'utrecht.paragraph.small.line-height',
      ],
    },
  },
  {
    storyId: 'react-utrecht-heading-1--default',
    component: 'utrecht-heading-1',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Utrecht Heading 1',
    render: () => <Heading1 role="presentation">The Quick Brown Fox Jumps Over The Lazy Dog</Heading1>,
    detectTokens: {
      anyOf: [
        'utrecht.heading-1.font-size',
        'utrecht.heading-1.font-family',
        'utrecht.heading-1.font-weight',
        'utrecht.heading-1.color',
        'utrecht.heading-1.line-height',
        'utrecht.heading-1.margin-block-end',
        'utrecht.heading-1.margin-block-start',
      ],
    },
  },
  {
    storyId: 'react-utrecht-heading-2--default',
    component: 'utrecht-heading-2',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Utrecht Heading 2',
    render: () => <Heading2 role="presentation">The Quick Brown Fox Jumps Over The Lazy Dog</Heading2>,
    detectTokens: {
      anyOf: [
        'utrecht.heading-2.font-size',
        'utrecht.heading-2.font-family',
        'utrecht.heading-2.font-weight',
        'utrecht.heading-2.color',
        'utrecht.heading-2.line-height',
        'utrecht.heading-2.margin-block-end',
        'utrecht.heading-2.margin-block-start',
      ],
    },
  },
  {
    storyId: 'react-utrecht-heading-3--default',
    component: 'utrecht-heading-3',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Utrecht Heading 3',
    render: () => <Heading3 role="presentation">The Quick Brown Fox Jumps Over The Lazy Dog</Heading3>,
    detectTokens: {
      anyOf: [
        'utrecht.heading-3.font-size',
        'utrecht.heading-3.font-family',
        'utrecht.heading-3.font-weight',
        'utrecht.heading-3.color',
        'utrecht.heading-3.line-height',
        'utrecht.heading-3.margin-block-end',
        'utrecht.heading-3.margin-block-start',
      ],
    },
  },
  {
    storyId: 'react-utrecht-heading-4--default',
    component: 'utrecht-heading-4',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Utrecht Heading 4',
    render: () => <Heading4 role="presentation">The Quick Brown Fox Jumps Over The Lazy Dog</Heading4>,
    detectTokens: {
      anyOf: [
        'utrecht.heading-4.font-size',
        'utrecht.heading-4.font-family',
        'utrecht.heading-4.font-weight',
        'utrecht.heading-4.color',
        'utrecht.heading-4.line-height',
        'utrecht.heading-4.margin-block-end',
        'utrecht.heading-4.margin-block-start',
      ],
    },
  },
  {
    storyId: 'react-utrecht-heading-5--default',
    component: 'utrecht-heading-5',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Utrecht Heading 5',
    render: () => <Heading5 role="presentation">The Quick Brown Fox Jumps Over The Lazy Dog</Heading5>,
    detectTokens: {
      anyOf: [
        'utrecht.heading-5.font-size',
        'utrecht.heading-5.font-family',
        'utrecht.heading-5.font-weight',
        'utrecht.heading-5.color',
        'utrecht.heading-5.line-height',
        'utrecht.heading-5.margin-block-end',
        'utrecht.heading-5.margin-block-start',
      ],
    },
  },
  {
    storyId: 'react-utrecht-heading-6--default',
    component: 'utrecht-heading-6',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Utrecht Heading 6',
    render: () => <Heading6 role="presentation">The Quick Brown Fox Jumps Over The Lazy Dog</Heading6>,
    detectTokens: {
      anyOf: [
        'utrecht.heading-6.font-size',
        'utrecht.heading-6.font-family',
        'utrecht.heading-6.font-weight',
        'utrecht.heading-6.color',
        'utrecht.heading-6.line-height',
        'utrecht.heading-6.margin-block-end',
        'utrecht.heading-6.margin-block-start',
      ],
    },
  },
  {
    storyId: 'react-utrecht-heading--level-1',
    component: 'utrecht-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Utrecht Heading - Level 1',
    render: () => (
      <Heading role="presentation" level={1}>
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Heading>
    ),
    detectTokens: {
      allOf: ['utrecht.heading-1.font-size'],
    },
  },
  {
    storyId: 'react-utrecht-heading--level-2',
    component: 'utrecht-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Utrecht Heading - Level 2',
    render: () => (
      <Heading role="presentation" level={2}>
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Heading>
    ),
    detectTokens: {
      allOf: ['utrecht.heading-2.font-size'],
    },
  },
  {
    storyId: 'react-utrecht-heading--level-3',
    component: 'utrecht-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Utrecht Heading - Level 3',
    render: () => (
      <Heading role="presentation" level={3}>
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Heading>
    ),
    detectTokens: {
      allOf: ['utrecht.heading-3.font-size'],
    },
  },
  {
    storyId: 'react-utrecht-heading--level-4',
    component: 'utrecht-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Utrecht Heading - Level 4',
    render: () => (
      <Heading role="presentation" level={4}>
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Heading>
    ),
    detectTokens: {
      allOf: ['utrecht.heading-4.font-size'],
    },
  },
  {
    storyId: 'react-utrecht-heading--level-5',
    component: 'utrecht-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Utrecht Heading - Level 5',
    render: () => (
      <Heading role="presentation" level={5}>
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Heading>
    ),
  },
  {
    storyId: 'react-utrecht-heading--level-6',
    component: 'utrecht-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Utrecht Heading - Level 6',
    render: () => (
      <Heading role="presentation" level={6}>
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Heading>
    ),
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
        'utrecht.spotlight-section.margin-block-start',
        'utrecht.spotlight-section.margin-block-end',
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
    render: () => <RadioButton aria-label="Example radio button" />,
    detectTokens: {
      anyOf: [
        'utrecht.radio-button.background-color',
        'utrecht.radio-button.border-color',
        'utrecht.radio-button.border-width',
        'utrecht.radio-button.size',
        'utrecht.radio-button.margin-block-start',
        'utrecht.radio-button.margin-inline-end',
        'utrecht.radio-button.icon.size',
      ],
    },
  },
  {
    storyId: 'react-utrecht-radio-button--hover',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button Hover',
    render: () => (
      <RadioButton aria-label="Example radio button that simulates hover" className="utrecht-radio-button--hover" />
    ),
    detectTokens: {
      anyOf: [
        'utrecht.form-control.hover.color',
        'utrecht.form-control.hover.background-color',
        'utrecht.form-control.hover.border-color',
        'utrecht.radio-button.hover.color',
        'utrecht.radio-button.hover.background-color',
        'utrecht.radio-button.hover.border-color',
        'utrecht.radio-button.border-width',
      ],
    },
  },
  {
    storyId: 'react-utrecht-radio-button--focus',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button focus',
    render: () => (
      <RadioButton aria-label="Example radio button that simulates focus" className="utrecht-radio-button--focus" />
    ),
    detectTokens: {
      anyOf: [
        'utrecht.radio-button.focus.color',
        'utrecht.radio-button.focus.background-color',
        'utrecht.radio-button.focus.border-color',
        'utrecht.radio-button.focus.border-width',
      ],
    },
  },
  {
    storyId: 'react-utrecht-radio-button--focus-visible',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button focus-visible',
    render: () => (
      <RadioButton
        aria-label="Example radio that simulates focus-visible"
        className="utrecht-radio-button--focus-visible"
      />
    ),
    detectTokens: {
      anyOf: [
        'utrecht.radio-button.focus-visible.color',
        'utrecht.radio-button.focus-visible.background-color',
        'utrecht.radio-button.focus-visible.border-color',
        'utrecht.radio-button.focus-visible.border-width',
      ],
    },
  },
  {
    storyId: 'react-utrecht-radio-button--active',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button active',
    render: () => (
      <RadioButton aria-label="Example radio button that simulates active" className="utrecht-radio-button--active" />
    ),
    detectTokens: {
      anyOf: [
        'utrecht.radio-button.active.color',
        'utrecht.radio-button.active.background-color',
        'utrecht.radio-button.active.border-color',
        'utrecht.radio-button.active.border-width',
      ],
    },
  },
  {
    storyId: 'react-utrecht-radio-button--disabled',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button Disabled',
    render: () => <RadioButton aria-label="Example radio button that simulates disabled" disabled />,
    detectTokens: {
      anyOf: [
        'utrecht.radio-button.disabled.color',
        'utrecht.radio-button.disabled.background-color',
        'utrecht.radio-button.disabled.border-color',
        'utrecht.radio-button.disabled.border-width',
      ],
    },
  },
  /* disable + focus should not have any specific styling, skipped that one */
  {
    storyId: 'react-utrecht-radio-button--disabled-focus-visible',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button Disabled + focus-visible',
    render: () => (
      <RadioButton
        disabled
        aria-label="Example radio button that is disabled and simulates focus-visible "
        className="utrecht-radio-button--focus-visible"
      />
    ),
    detectTokens: {
      anyOf: [],
    },
  },
  /* disable + hover should not have any specific styling, skipped that one */
  /* disable + active should not have any specific styling, skipped that one */
  {
    storyId: 'react-utrecht-radio-button--checked',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button Checked',
    render: () => <RadioButton aria-label="Example radio button that is checked initially" defaultChecked />,
    detectTokens: {
      anyOf: [
        'utrecht.radio-button.checked.color',
        'utrecht.radio-button.checked.background-color',
        'utrecht.radio-button.checked.border-color',
        'utrecht.radio-button.checked.border-width',
      ],
    },
  },
  {
    storyId: 'react-utrecht-radio-button--checked-focus-visible',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button Checked + focus-visible',
    render: () => (
      <RadioButton
        defaultChecked
        aria-label="Example radio button that is checked initially and simulates focus-visible"
        className="utrecht-radio-button--focus-visible"
      />
    ),
    detectTokens: {
      anyOf: [],
    },
  },
  {
    storyId: 'react-utrecht-radio-button--checked-hover',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Checked + hover',
    render: () => (
      <RadioButton
        defaultChecked
        aria-label="Example radio button that is checked initially and simulates hover"
        className="utrecht-radio-button--hover"
      />
    ),
    detectTokens: {
      anyOf: [],
    },
  },
  {
    storyId: 'react-utrecht-radio-button--checked-active',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Checked + active',
    render: () => (
      <RadioButton
        defaultChecked
        className="utrecht-radio-button--active"
        aria-label="Example radio button that is checked initially and simulates active"
      />
    ),
    detectTokens: {
      anyOf: [],
    },
  },
  {
    storyId: 'react-utrecht-radio-button--checked-disabled',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button Checked + disabled',
    render: () => (
      <RadioButton
        aria-label="Example radio button that is disabled and is checked initially"
        defaultChecked
        disabled
      />
    ),
    detectTokens: {
      anyOf: [
        'utrecht.radio-button.disabled.background-color',
        'utrecht.radio-button.disabled.border-color',
        'utrecht.radio-button.disabled.border-width',
        'utrecht.radio-button.disabled.color',
        'utrecht.radio-button.checked.background-color',
        'utrecht.radio-button.checked.border-color',
        'utrecht.radio-button.checked.border-width',
        'utrecht.radio-button.checked.color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-radio-button--invalid',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button Invalid',
    render: () => <RadioButton aria-label="Example radio button that is invalid" invalid />,
    detectTokens: {
      anyOf: [
        'utrecht.radio-button.invalid.background-color',
        'utrecht.radio-button.invalid.border-color',
        'utrecht.radio-button.invalid.border-width',
        'utrecht.radio-button.invalid.color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-radio-button--checked-invalid',
    component: 'utrecht-radio-button',
    name: 'Utrecht Radio Button Checked + Invalid',
    render: () => (
      <RadioButton aria-label="Example radio button that is checked initially and is invalid" defaultChecked invalid />
    ),
    detectTokens: {
      anyOf: [],
    },
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
    detectTokens: {
      anyOf: [
        'utrecht.alert.background-color',
        'utrecht.alert.border-color',
        'utrecht.alert.border-radius',
        'utrecht.alert.border-width',
        'utrecht.alert.color',
        'utrecht.alert.column-gap',
        'utrecht.alert.margin-block-end',
        'utrecht.alert.margin-block-start',
        'utrecht.alert.padding-block-end',
        'utrecht.alert.padding-block-start',
        'utrecht.alert.padding-inline-end',
        'utrecht.alert.padding-inline-start',
        'utrecht.alert.content.row-gap',
        'utrecht.alert.icon.color',
        'utrecht.alert.icon.inset-block-start',
        'utrecht.alert.icon.size',
        'utrecht.alert.message.row-gap',
      ],
    },
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
    detectTokens: {
      anyOf: [
        'utrecht.alert.error.color',
        'utrecht.alert.error.background-color',
        'utrecht.alert.error.border-color',
        'utrecht.alert.error.border-width',
        'utrecht.alert.icon.error.color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-alert--warning',
    component: 'utrecht-alert',
    name: 'Utrecht Alert Warning',
    render: () => (
      <Alert type="warning">
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
    detectTokens: {
      anyOf: [
        'utrecht.alert.warning.color',
        'utrecht.alert.warning.background-color',
        'utrecht.alert.warning.border-color',
        'utrecht.alert.warning.border-width',
        'utrecht.alert.icon.warning.color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-alert--info',
    component: 'utrecht-alert',
    name: 'Utrecht Alert info',
    render: () => (
      <Alert type="info">
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
    detectTokens: {
      anyOf: [
        'utrecht.alert.info.color',
        'utrecht.alert.info.background-color',
        'utrecht.alert.info.border-color',
        'utrecht.alert.info.border-width',
        'utrecht.alert.icon.info.color',
      ],
    },
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
    detectTokens: {
      anyOf: [
        'utrecht.alert.ok.color',
        'utrecht.alert.ok.background-color',
        'utrecht.alert.ok.border-color',
        'utrecht.alert.ok.border-width',
        'utrecht.alert.icon.ok.color',
      ],
    },
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
    detectTokens: {
      anyOf: [
        'utrecht.separator.color',
        'utrecht.separator.block-size',
        'utrecht.separator.margin-block-end',
        'utrecht.separator.margin-block-start',
      ],
    },
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
    render: () => <Textbox aria-label="Example textbox" defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog" />,
    detectTokens: {
      anyOf: [
        'utrecht.textbox.color',
        'utrecht.textbox.background-color',
        'utrecht.textbox.border-color',
        'utrecht.textbox.border-width',
        'utrecht.textbox.border-radius',
        'utrecht.textbox.border-block-end-width',
        'utrecht.textbox.border-bottom-width',
        'utrecht.textbox.font-family',
        'utrecht.textbox.font-size',
        'utrecht.textbox.font-weight',
        'utrecht.textbox.line-height',
        'utrecht.textbox.max-inline-size',
        'utrecht.textbox.padding-block-end',
        'utrecht.textbox.padding-block-start',
        'utrecht.textbox.padding-inline-end',
        'utrecht.textbox.padding-inline-start',
      ],
    },
  },
  {
    storyId: 'react-utrecht-textbox--placeholder',
    component: 'utrecht-textbox',
    group: STORY_GROUPS['TEXTBOX'],
    name: 'Textbox with placeholder',
    render: () => (
      <Textbox
        aria-label="Example textbox with a placeholder text"
        placeholder="The Quick Brown Fox Jumps Over The Lazy Dog"
      />
    ),
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
    render: () => (
      <Textbox
        aria-label="Example textbox that is disabled"
        disabled
        defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog"
      />
    ),
    detectTokens: {
      anyOf: [
        'utrecht.textbox.disabled.color',
        'utrecht.textbox.disabled.border-color',
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
      <Textbox
        aria-label="Example textbox that simulates hover"
        className="utrecht-textbox--hover"
        defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog"
      />
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
      <Textbox
        aria-label="Example textbox that simulates focus"
        className="utrecht-textbox--focus"
        defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog"
      />
    ),
    detectTokens: {
      anyOf: [
        'utrecht.textbox.focus.color',
        'utrecht.textbox.focus.border-color',
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
      <Textbox
        aria-label="Example textbox that simulates focus-visible"
        className="utrecht-textbox--focus-visible"
        defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog"
      />
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
    render: () => (
      <Textbox
        aria-label="Example textbox that is invalid"
        invalid
        defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog"
      />
    ),
    detectTokens: {
      anyOf: [
        'utrecht.textbox.invalid.color',
        'utrecht.textbox.invalid.border-color',
        'utrecht.textbox.invalid.border-width',
        'utrecht.textbox.invalid.background-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-textbox--readonly',
    component: 'utrecht-textbox',
    group: STORY_GROUPS['TEXTBOX'],
    name: 'Utrecht Textbox: Read Only',
    render: () => (
      <Textbox
        aria-label="Example textbox that is read-only"
        readOnly
        defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog"
      />
    ),
    detectTokens: {
      anyOf: [
        'utrecht.textbox.read-only.color',
        'utrecht.textbox.read-only.border-color',
        'utrecht.textbox.read-only.background-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-textbox--required',
    component: 'utrecht-textbox',
    group: STORY_GROUPS['TEXTBOX'],
    name: 'Utrecht Textbox: Required',
    render: () => (
      <Textbox
        required
        aria-label="Example textbox that is required"
        defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog"
      />
    ),
  },
  {
    storyId: 'react-utrecht-textarea--default',
    component: 'utrecht-textarea',
    group: STORY_GROUPS['TEXTAREA'],
    name: 'Utrecht Textarea',
    render: () => <Textarea aria-label="Example textarea" defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog" />,
    detectTokens: {
      anyOf: [
        'utrecht.textarea.color',
        'utrecht.textarea.background-color',
        'utrecht.textarea.border-color',
        'utrecht.textarea.border-width',
        'utrecht.textarea.border-radius',
        'utrecht.textarea.border-block-end-width',
        'utrecht.textarea.border-bottom-width',
        'utrecht.textarea.font-family',
        'utrecht.textarea.font-size',
        'utrecht.textarea.font-weight',
        'utrecht.textarea.line-height',
        'utrecht.textarea.max-inline-size',
        'utrecht.textarea.min-block-size',
        'utrecht.textarea.padding-block-end',
        'utrecht.textarea.padding-block-start',
        'utrecht.textarea.padding-inline-end',
        'utrecht.textarea.padding-inline-start',
      ],
    },
  },
  {
    storyId: 'react-utrecht-textarea--placeholder',
    component: 'utrecht-textarea',
    group: STORY_GROUPS['TEXTAREA'],
    name: 'Utrecht Textarea with placeholder',
    render: () => (
      <Textarea
        aria-label="Example textarea with a placeholder text"
        placeholder="The Quick Brown Fox Jumps Over The Lazy Dog"
      />
    ),
    detectTokens: {
      anyOf: ['utrecht.textarea.placeholder.color', 'utrecht.textarea.placeholder.font-style'],
    },
  },
  {
    storyId: 'react-utrecht-textarea--disabled',
    component: 'utrecht-textarea',
    group: STORY_GROUPS['TEXTAREA'],
    name: 'Utrecht Textarea: Disabled',
    state: true,
    render: () => (
      <Textarea
        aria-label="Example textarea that is disabled"
        disabled
        defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog"
      />
    ),
    detectTokens: {
      anyOf: [
        'utrecht.textarea.disabled.color',
        'utrecht.textarea.disabled.border-color',
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
      <Textarea
        aria-label="Example textarea that simulates hover"
        className="utrecht-textarea--hover"
        defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog"
      />
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
      <Textarea
        aria-label="Example textarea that simulates focus"
        className="utrecht-textarea--focus"
        defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog"
      />
    ),
    detectTokens: {
      anyOf: [
        'utrecht.textarea.focus.color',
        'utrecht.textarea.focus.border-color',
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
        aria-label="Example textarea that simulates focus-visible"
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
    render: () => (
      <Textarea
        aria-label="Example textarea that is invalid"
        invalid
        defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog"
      />
    ),
    detectTokens: {
      anyOf: [
        'utrecht.textarea.invalid.color',
        'utrecht.textarea.invalid.border-color',
        'utrecht.textarea.invalid.border-width',
        'utrecht.textarea.invalid.border-block-end-width',
        'utrecht.textarea.invalid.background-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-textarea--readonly',
    component: 'utrecht-textarea',
    group: STORY_GROUPS['TEXTAREA'],
    name: 'Utrecht Textarea: Read Only',
    render: () => (
      <Textarea
        aria-label="Example textarea that is read-only"
        readOnly
        defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog"
      />
    ),
    detectTokens: {
      anyOf: [
        'utrecht.textarea.read-only.color',
        'utrecht.textarea.read-only.border-color',
        'utrecht.textarea.read-only.background-color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-textarea--required',
    component: 'utrecht-textarea',
    group: STORY_GROUPS['TEXTAREA'],
    name: 'Utrecht Textarea: Required',
    render: () => (
      <Textarea
        aria-label="Example textarea that is required"
        required
        defaultValue="The Quick Brown Fox Jumps Over The Lazy Dog"
      />
    ),
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
        'utrecht.table.border-color',
        'utrecht.table.border-width',
        'utrecht.table.font-family',
        'utrecht.table.font-size',
        'utrecht.table.line-height',
        'utrecht.table.margin-block-end',
        'utrecht.table.margin-block-start',
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
        'utrecht.table.caption.font-size',
        'utrecht.table.caption.font-weight',
        'utrecht.table.caption.font-family',
        'utrecht.table.caption.color',
        'utrecht.table.caption.line-height',
        'utrecht.table.caption.text-align',
        'utrecht.table.caption.margin-block-end',
      ],
    },
  },
  {
    storyId: 'react-utrecht-table--header',
    component: 'utrecht-table',
    name: 'Utrecht Table with header',
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
        'utrecht.table.header.background-color',
        'utrecht.table.header.font-weight',
        'utrecht.table.header.color',
        'utrecht.table.header.border-block-end-color',
        'utrecht.table.header.border-block-end-width',
      ],
    },
  },
  {
    storyId: 'react-utrecht-table--header-cell',
    component: 'utrecht-table',
    name: 'Utrecht Table with header-cell',
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
        'utrecht.table.header-cell.color',
        'utrecht.table.header-cell.font-weight',
        'utrecht.table.header-cell.font-size',
      ],
    },
  },
  {
    storyId: 'react-utrecht-table--footer',
    component: 'utrecht-table',
    name: 'Utrecht Table with footer',
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
      anyOf: ['utrecht.table.footer.color', 'utrecht.table.footer.background-color'],
    },
  },
  {
    storyId: 'react-utrecht-table--cell',
    component: 'utrecht-table',
    name: 'Utrecht Table with cell',
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
        'utrecht.table.cell.line-height',
        'utrecht.table.cell.padding-block-end',
        'utrecht.table.cell.padding-block-start',
        'utrecht.table.cell.padding-inline-end',
        'utrecht.table.cell.padding-inline-start',
      ],
    },
  },
  {
    storyId: 'react-utrecht-table--row',
    component: 'utrecht-table',
    name: 'Utrecht Table with row',
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
        'utrecht.table.row.border-block-end-color',
        'utrecht.table.row.border-block-end-width',
        'utrecht.table.row.padding-block-start',
        'utrecht.table.row.padding-inline-end',
        'utrecht.table.row.padding-inline-start',
      ],
    },
  },
  {
    storyId: 'react-utrecht-select--default',
    component: 'utrecht-select',
    group: STORY_GROUPS['SELECT'],
    name: 'Utrecht Select',
    render: () => (
      <Select defaultValue="2" aria-label="Example Select component with 3 options">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.select.background-color',
        'utrecht.select.background-image',
        'utrecht.select.border-block-end-width',
        'utrecht.select.border-bottom-width',
        'utrecht.select.border-color',
        'utrecht.select.border-radius',
        'utrecht.select.color',
        'utrecht.select.font-family',
        'utrecht.select.font-size',
        'utrecht.select.font-weight',
        'utrecht.select.line-height',
        'utrecht.select.min-block-size',
        'utrecht.select.max-inline-size',
        'utrecht.select.padding-block-end',
        'utrecht.select.padding-block-start',
        'utrecht.select.padding-inline-end',
        'utrecht.select.padding-inline-start',
      ],
    },
  },
  {
    storyId: 'react-utrecht-select--disabled',
    component: 'utrecht-select',
    group: STORY_GROUPS['SELECT'],
    name: 'Utrecht Select: Disabled',
    state: true,
    render: () => (
      <Select disabled defaultValue="2" aria-label="Example disabled Select component">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.select.disabled.background-color',
        'utrecht.select.disabled.border-color',
        'utrecht.select.disabled.color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-select--invalid',
    component: 'utrecht-select',
    group: STORY_GROUPS['SELECT'],
    name: 'Utrecht Select: Invalid',
    state: true,
    render: () => (
      <Select invalid defaultValue="2" aria-label="Example Select component with 3 options that is invalid">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.select.invalid.background-color',
        'utrecht.select.invalid.border-block-end-width',
        'utrecht.select.invalid.color',
        'utrecht.select.invalid.border-width',
      ],
    },
  },
  {
    storyId: 'react-utrecht-select--required',
    component: 'utrecht-select',
    group: STORY_GROUPS['SELECT'],
    name: 'Utrecht Select: Required',
    render: () => (
      <Select required defaultValue="2" aria-label="Example Select component with 3 options that is required">
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
      <Select
        className="utrecht-select--focus"
        defaultValue="2"
        aria-label="Example Select component with 3 options, simulating focus"
      >
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.select.focus.background-color',
        'utrecht.select.focus.border-color',
        'utrecht.select.focus.color',
      ],
    },
  },
  {
    storyId: 'react-utrecht-select--focus-visible',
    component: 'utrecht-select',
    group: STORY_GROUPS['SELECT'],
    name: 'Utrecht Select: Focus Visible',
    state: true,
    render: () => (
      <Select
        className="utrecht-select--focus utrecht-select--focus-visible"
        defaultValue="2"
        aria-label="Example Select component with 3 options, simulating focus-visible"
      >
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
    detectTokens: {
      anyOf: [
        'utrecht.data-badge.color',
        'utrecht.data-badge.border-radius',
        'utrecht.data-badge.border-width',
        'utrecht.data-badge.background-color',
        'utrecht.data-badge.font-size',
        'utrecht.data-badge.font-weight',
        'utrecht.data-badge.line-height',
        'utrecht.data-badge.min-block-size',
        'utrecht.data-badge.min-inline-size',
        'utrecht.data-badge.padding-block',
        'utrecht.data-badge.padding-inline',
      ],
    },
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
      anyOf: [
        'utrecht.link.color',
        'utrecht.link.text-decoration',
        'utrecht.link.text-decoration-thickness',
        'utrecht.link.text-underline-offset',
      ],
    },
  },
  {
    storyId: 'react-utrecht-link--active',
    group: STORY_GROUPS['LINK'],
    name: 'Utrecht Link: Active',
    inline: true,
    render: () => (
      <Link href="https://example.com" target="_new" external className="utrecht-link--active">
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
    detectTokens: {
      anyOf: ['utrecht.link.active.color'],
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
    storyId: 'react-utrecht-link--placeholder',
    group: STORY_GROUPS['LINK'],
    name: 'Utrecht Link: Placeholder',
    state: true,
    inline: true,
    render: () => (
      <Link href="https://example.com" target="_new" placeholder>
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
    detectTokens: {
      anyOf: ['utrecht.link.placeholder.color', 'utrecht.link.placeholder.font-weight'],
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
        'utrecht.link.focus.background-color',
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
      <Link
        href="https://example.com"
        target="_new"
        external
        className="utrecht-link--focus utrecht-link--focus-visible"
      >
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
    detectTokens: {
      anyOf: ['utrecht.link.focus-visible.text-decoration', 'utrecht.link.focus-visible.text-decoration-thickness'],
    },
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
    detectTokens: {
      anyOf: ['utrecht.link.visited.color'],
    },
  },
  {
    storyId: 'react-utrecht-document--default',
    name: 'Utrecht Document',
    render: () => <Document>The Quick Brown Fox Jumps Over The Lazy Dog</Document>,
    detectTokens: {
      anyOf: [
        'utrecht.document.color',
        'utrecht.document.background-color',
        'utrecht.document.font-size',
        'utrecht.document.font-family',
        'utrecht.document.font-weight',
        'utrecht.document.line-height',
      ],
    },
  },
  {
    storyId: 'react-utrecht-form-label--default',
    group: STORY_GROUPS['FORM_LABEL_DEFAULT'],
    name: 'Utrecht Form Label',
    render: () => <FormLabel>Label for form control</FormLabel>,
    detectTokens: {
      anyOf: ['utrecht.form-label.color', 'utrecht.form-label.font-weight', 'utrecht.form-label.font-size'],
    },
  },
  {
    storyId: 'react-utrecht-form-label--disabled',
    group: STORY_GROUPS['FORM_LABEL_DEFAULT'],
    name: 'Utrecht Form Label: Disabled',
    state: true,
    render: () => <FormLabel disabled>Label for disabled form control</FormLabel>,
    detectTokens: {
      anyOf: ['utrecht.form-label.disabled.color'],
    },
  },
  {
    storyId: 'react-utrecht-form-label--checkbox',
    group: STORY_GROUPS['FORM_LABEL_CHECKBOX'],
    name: ' Utrecht Checkbox Form Label',
    render: () => <FormLabel type="checkbox">Label for checkbox option</FormLabel>,
    detectTokens: {
      anyOf: ['utrecht.form-label.checkbox.font-weight'],
    },
  },
  {
    storyId: 'react-utrecht-form-label--checkbox-checked',
    group: STORY_GROUPS['FORM_LABEL_CHECKBOX'],
    name: 'Utrecht Checkbox Form Label: Checked',
    state: true,
    render: () => <FormLabel checked>Label for checked checkbox option</FormLabel>,
    detectTokens: {
      anyOf: ['utrecht.form-label.checked.color', 'utrecht.form-label.checked.font-weight'],
    },
  },
  {
    storyId: 'react-utrecht-form-label--radio',
    group: STORY_GROUPS['FORM_LABEL_RADIO'],
    name: 'Utrecht Radio Button Form Label',
    render: () => <FormLabel type="radio">Label for radio button option</FormLabel>,
    detectTokens: {
      anyOf: ['utrecht.form-label.radio.color', 'utrecht.form-label.radio.font-weight'],
    },
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
      anyOf: [
        'utrecht.code.color',
        'utrecht.code.background-color',
        'utrecht.code.font-size',
        'utrecht.code.font-family',
        'utrecht.code.line-height',
      ],
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
      anyOf: [
        'utrecht.code-block.font-family',
        'utrecht.code-block.background-color',
        'utrecht.code-block.color',
        'utrecht.code-block.font-size',
        'utrecht.code-block.line-height',
        'utrecht.code-block.margin-block-start',
        'utrecht.code-block.margin-block-end',
        'utrecht.code-block.margin-inline-start',
        'utrecht.code-block.margin-inline-end',
        'utrecht.code-block.padding-block-start',
        'utrecht.code-block.padding-block-end',
        'utrecht.code-block.padding-inline-start',
        'utrecht.code-block.padding-inline-end',
      ],
    },
  },
  {
    storyId: 'react-utrecht-color-sample',
    name: 'Utrecht Color Sample',
    render: () => <ColorSample color="#007DAD" />,
    detectTokens: {
      anyOf: [
        'utrecht.color-sample.background-color',
        'utrecht.color-sample.border-color',
        'utrecht.color-sample.border-width',
        'utrecht.color-sample.border-radius',
        'utrecht.color-sample.block-size',
        'utrecht.color-sample.inline-size',
      ],
    },
  },
  {
    storyId: 'react-utrecht-color-sample-dark',
    name: 'Utrecht Color Sample Dark',
    render: () => <ColorSample color="#007DAD" />,
    detectTokens: {
      anyOf: ['utrecht.color-sample.dark.border-color'],
    },
  },
  {
    storyId: 'react-utrecht-color-sample-light',
    name: 'Utrecht Color Sample Light',
    render: () => <ColorSample color="#007DAD" />,
    detectTokens: {
      anyOf: ['utrecht.color-sample.light.border-color'],
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
    detectTokens: {
      anyOf: [
        'utrecht.form-field-description.color',
        'utrecht.form-field-description.font-family',
        'utrecht.form-field-description.font-size',
        'utrecht.form-field-description.font-style',
        'utrecht.form-field-description.line-height',
        'utrecht.form-field-description.margin-block-start',
        'utrecht.form-field-description.margin-block-end',
      ],
    },
  },
  {
    storyId: 'react-utrecht-form-field-error-message--default',
    group: STORY_GROUPS['FORM_FIELD_ERROR_MESSAGE'],
    name: 'Utrecht Form field Error Message',
    render: () => <FormFieldErrorMessage>The Quick Brown Fox Jumps Over The Lazy Dog</FormFieldErrorMessage>,
    detectTokens: {
      anyOf: [
        'utrecht.form-field-error-message.background-color',
        'utrecht.form-field-error-message.color',
        'utrecht.form-field-error-message.font-family',
        'utrecht.form-field-error-message.font-size',
        'utrecht.form-field-error-message.font-style',
        'utrecht.form-field-error-message.font-weight',
        'utrecht.form-field-error-message.line-height',
        'utrecht.form-field-error-message.margin-block-start',
        'utrecht.form-field-error-message.margin-block-end',
        'utrecht.form-field-error-message.padding-block-start',
        'utrecht.form-field-error-message.padding-block-end',
        'utrecht.form-field-error-message.padding-inline-start',
        'utrecht.form-field-error-message.padding-inline-end',
      ],
    },
  },
  {
    storyId: 'react-utrecht-page-footer',
    name: 'Utrecht Page Footer',
    render: () => (
      <PageFooter>
        <Paragraph>Page Footer Area</Paragraph>
      </PageFooter>
    ),
    detectTokens: {
      anyOf: [
        'utrecht.page-footer.color',
        'utrecht.page-footer.background-color',
        'utrecht.page-footer.background-image',
        'utrecht.page-footer.padding-inline-end',
        'utrecht.page-footer.padding-inline-start',
        'utrecht.page-footer.padding-block-end',
        'utrecht.page-footer.padding-block-start',
        'utrecht.page-footer.content.color',
        'utrecht.page-footer.content.background-color',
        'utrecht.page-footer.content.padding-inline-end',
        'utrecht.page-footer.content.padding-inline-start',
        'utrecht.page-footer.content.padding-block-end',
        'utrecht.page-footer.content.padding-block-start',
      ],
    },
  },
  {
    storyId: 'react-utrecht-listbox',
    name: 'Utrecht Listbox',
    render: () => (
      <ListboxStory
        label="Example listbox with 3 items"
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
        label="Example listbox with 3 items, simulating focus-visible"
        focus
        focusVisible
        options={[
          { label: 'Option #1' },
          {
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
        label="Example listbox with 3 items, one item simulates hover"
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
        label="Example listbox with 3 items, one item is selected"
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
        label="Example listbox with 3 items, one item is selected and simulates hover"
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
        label="Example listbox with 3 items, one item is active"
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
        label="Example listbox with 3 items, one item is disabled"
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
        label="Example listbox with 3 items, one item is disabled and selected"
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
  {
    storyId: 'react-utrecht-link-list--default',
    component: 'utrecht-link-list',
    group: STORY_GROUPS['LINK_LIST'],
    name: 'Utrecht Icon',
    render: () => (
      <LinkList
        icon={() => <UtrechtIconChevronRight />}
        links={[
          { href: '#', children: 'Bekijk alle beschikbare documenten en aanvullende informatie over dit onderwerp' },
          { href: '#', children: 'Contact' },
          { href: '#', children: 'Veelgestelde vragen' },
        ]}
      />
    ),
  },
  {
    storyId: 'react-utrecht-icon--default',
    component: 'utrecht-icon',
    group: STORY_GROUPS['ICON'],
    name: 'Utrecht Icon',
    render: () => <Icon>→</Icon>,
  },
  {
    storyId: 'react-utrecht-action-group--default',
    component: 'utrecht-action-group',
    group: STORY_GROUPS['ACTION_GROUP'],
    name: 'Utrecht Action Group',
    render: () => (
      <ActionGroup>
        <Button appearance="primary-action-button">Opslaan en doorgaan</Button>
        <Button appearance="secondary-action-button">Annuleren</Button>
      </ActionGroup>
    ),
  },
];
