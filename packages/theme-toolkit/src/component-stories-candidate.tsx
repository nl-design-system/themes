import { ComponentStory, STORY_GROUPS } from './component-stories-util';

import { Button } from '@nl-design-system-candidate/button-react/css';
import { CodeBlock } from '@nl-design-system-candidate/code-block-react/css';
import { Code } from '@nl-design-system-candidate/code-react/css';
import { ColorSample } from '@nl-design-system-candidate/color-sample-react/css';
import { DataBadge } from '@nl-design-system-candidate/data-badge-react/css';
import { Heading } from '@nl-design-system-candidate/heading-react/css';
import { Link } from '@nl-design-system-candidate/link-react/css';
import { Mark } from '@nl-design-system-candidate/mark-react/css';
import { NumberBadge } from '@nl-design-system-candidate/number-badge-react/css';
import { Paragraph } from '@nl-design-system-candidate/paragraph-react/css';
import { SkipLink } from '@nl-design-system-candidate/skip-link-react/css';

export const CANDIDATE_COMPONENT_STORIES: ComponentStory[] = [
  {
    storyId: 'react-nl-button--default',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Default',
    inline: true,
    render: () => <Button label="Default" />,
    detectTokens: {
      anyOf: [
        'nl.button.icon.size',
        'nl.button.icon.size',
        'nl.button.border-radius',
        'nl.button.column-gap',
        'nl.button.font-family',
        'nl.button.min-block-size',
        'nl.button.min-inline-size',
        'nl.button.outline-offset',
        'nl.button.padding-block-end',
        'nl.button.padding-block-start',
        'nl.button.padding-inline-end',
        'nl.button.padding-inline-start',
        'nl.button.default.background-color',
        'nl.button.default.border-color',
        'nl.button.default.border-width',
        'nl.button.default.color',
        'nl.button.default.font-size',
        'nl.button.default.font-weight',
        'nl.button.default.line-height',
      ],
    },
  },
  {
    storyId: 'react-nl-button--default-active',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Default Active',
    inline: true,
    render: () => <Button className="nl-button--active" label="Default Active" />,
    detectTokens: {
      anyOf: [
        'nl.button.default.active.background-color',
        'nl.button.default.active.border-color',
        'nl.button.default.active.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--default-disabled',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Default Disabled',
    inline: true,
    render: () => <Button disabled label="Default Disabled" />,
    detectTokens: {
      anyOf: [
        'nl.button.default.disabled.background-color',
        'nl.button.default.disabled.border-color',
        'nl.button.default.disabled.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--default-hover',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Default Hover',
    state: true,
    inline: true,
    render: () => <Button className="nl-button--hover" label="Default Hover" />,
    detectTokens: {
      anyOf: [
        'nl.button.default.hover.background-color',
        'nl.button.default.hover.border-color',
        'nl.button.default.hover.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--default-pressed',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Default Pressed',
    inline: true,
    render: () => <Button label="Default Pressed" pressed />,
    detectTokens: {
      anyOf: [
        'nl.button.default.pressed.background-color',
        'nl.button.default.pressed.border-color',
        'nl.button.default.pressed.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--primary',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Primary',
    inline: true,
    render: () => <Button label="Primary" purpose="primary" />,
    detectTokens: {
      anyOf: [
        'nl.button.primary.background-color',
        'nl.button.primary.border-color',
        'nl.button.primary.border-width',
        'nl.button.primary.color',
        'nl.button.primary.font-size',
        'nl.button.primary.font-weight',
        'nl.button.primary.line-height',
      ],
    },
  },
  {
    storyId: 'react-nl-button--primary-active',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Primary Active',
    inline: true,
    render: () => <Button className="nl-button--active" label="Primary Active" purpose="primary" />,
    detectTokens: {
      anyOf: [
        'nl.button.primary.active.background-color',
        'nl.button.primary.active.border-color',
        'nl.button.primary.active.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--primary-disabled',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Primary Disabled',
    inline: true,
    render: () => <Button disabled label="Primary Disabled" purpose="primary" />,
    detectTokens: {
      anyOf: [
        'nl.button.primary.disabled.background-color',
        'nl.button.primary.disabled.border-color',
        'nl.button.primary.disabled.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--primary-hover',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Primary Hover',
    state: true,
    inline: true,
    render: () => <Button className="nl-button--hover" label="Primary Hover" purpose="primary" />,
    detectTokens: {
      anyOf: [
        'nl.button.primary.hover.background-color',
        'nl.button.primary.hover.border-color',
        'nl.button.primary.hover.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--primary-pressed',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Primary Pressed',
    inline: true,
    render: () => <Button label="Primary Pressed" pressed purpose="primary" />,
    detectTokens: {
      anyOf: [
        'nl.button.primary.pressed.background-color',
        'nl.button.primary.pressed.border-color',
        'nl.button.primary.pressed.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--primary-positive',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Primary (positive)',
    inline: true,
    render: () => <Button label="Primary (positive)" purpose="primary" hint="positive" />,
    detectTokens: {
      anyOf: [
        'nl.button.primary.positive.background-color',
        'nl.button.primary.positive.border-color',
        'nl.button.primary.positive.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--primary-positive-active',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Primary (positive) Active',
    inline: true,
    render: () => (
      <Button className="nl-button--active" label="Primary (positive) Active" purpose="primary" hint="positive" />
    ),
    detectTokens: {
      anyOf: [
        'nl.button.primary.positive.active.background-color',
        'nl.button.primary.positive.active.border-color',
        'nl.button.primary.positive.active.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--primary-positive-disabled',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Primary (positive) Disabled',
    inline: true,
    render: () => <Button disabled label="Primary (positive) Disabled" purpose="primary" hint="positive" />,
    detectTokens: {
      anyOf: [
        'nl.button.primary.disabled.background-color',
        'nl.button.primary.disabled.border-color',
        'nl.button.primary.disabled.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--primary-positive-hover',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Primary (positive) Hover',
    state: true,
    inline: true,
    render: () => (
      <Button className="nl-button--hover" label="Primary (positive) Hover" purpose="primary" hint="positive" />
    ),
    detectTokens: {
      anyOf: [
        'nl.button.primary.positive.hover.background-color',
        'nl.button.primary.positive.hover.border-color',
        'nl.button.primary.positive.hover.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--primary-positive-pressed',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Primary (positive) Pressed',
    inline: true,
    render: () => <Button label="Primary (positive) Pressed" pressed purpose="primary" hint="positive" />,
    detectTokens: {
      anyOf: [
        'nl.button.primary.positive.pressed.background-color',
        'nl.button.primary.positive.pressed.border-color',
        'nl.button.primary.positive.pressed.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--primary-negative',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Primary (negative)',
    inline: true,
    render: () => <Button label="Primary (negative)" purpose="primary" hint="negative" />,
    detectTokens: {
      anyOf: [
        'nl.button.primary.negative.background-color',
        'nl.button.primary.negative.border-color',
        'nl.button.primary.negative.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--primary-negative-active',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Primary (negative) Active',
    inline: true,
    render: () => (
      <Button className="nl-button--active" label="Primary (negative) Active" purpose="primary" hint="negative" />
    ),
    detectTokens: {
      anyOf: [
        'nl.button.primary.negative.active.background-color',
        'nl.button.primary.negative.active.border-color',
        'nl.button.primary.negative.active.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--primary-negative-disabled',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Primary (negative) Disabled',
    inline: true,
    render: () => <Button disabled label="Primary (negative) Disabled" purpose="primary" hint="negative" />,
    detectTokens: {
      anyOf: [
        'nl.button.primary.disabled.background-color',
        'nl.button.primary.disabled.border-color',
        'nl.button.primary.disabled.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--primary-negative-hover',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Primary (negative) Hover',
    state: true,
    inline: true,
    render: () => (
      <Button className="nl-button--hover" label="Primary (negative) Hover" purpose="primary" hint="negative" />
    ),
    detectTokens: {
      anyOf: [
        'nl.button.primary.negative.hover.background-color',
        'nl.button.primary.negative.hover.border-color',
        'nl.button.primary.negative.hover.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--primary-negative-pressed',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Primary (negative) Pressed',
    inline: true,
    render: () => <Button label="Primary (negative) Pressed" pressed purpose="primary" hint="negative" />,
    detectTokens: {
      anyOf: [
        'nl.button.primary.negative.pressed.background-color',
        'nl.button.primary.negative.pressed.border-color',
        'nl.button.primary.negative.pressed.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--secondary',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Secondary',
    inline: true,
    render: () => <Button label="Secondary" purpose="secondary" />,
    detectTokens: {
      anyOf: [
        'nl.button.secondary.background-color',
        'nl.button.secondary.border-color',
        'nl.button.secondary.border-width',
        'nl.button.secondary.color',
        'nl.button.secondary.font-size',
        'nl.button.secondary.font-weight',
        'nl.button.secondary.line-height',
      ],
    },
  },
  {
    storyId: 'react-nl-button--secondary-active',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Secondary Active',
    inline: true,
    render: () => <Button className="nl-button--active" label="Secondary Active" purpose="secondary" />,
    detectTokens: {
      anyOf: [
        'nl.button.secondary.active.background-color',
        'nl.button.secondary.active.border-color',
        'nl.button.secondary.active.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--secondary-disabled',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Secondary Disabled',
    inline: true,
    render: () => <Button disabled label="Secondary Disabled" purpose="secondary" />,
    detectTokens: {
      anyOf: [
        'nl.button.secondary.disabled.background-color',
        'nl.button.secondary.disabled.border-color',
        'nl.button.secondary.disabled.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--secondary-hover',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Secondary Hover',
    state: true,
    inline: true,
    render: () => <Button className="nl-button--hover" label="Secondary Hover" purpose="secondary" />,
    detectTokens: {
      anyOf: [
        'nl.button.secondary.hover.background-color',
        'nl.button.secondary.hover.border-color',
        'nl.button.secondary.hover.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--secondary-pressed',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Secondary Pressed',
    inline: true,
    render: () => <Button label="Secondary Pressed" pressed purpose="secondary" />,
    detectTokens: {
      anyOf: [
        'nl.button.secondary.pressed.background-color',
        'nl.button.secondary.pressed.border-color',
        'nl.button.secondary.pressed.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--secondary-positive',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Secondary (positive)',
    inline: true,
    render: () => <Button label="Secondary (positive)" purpose="secondary" hint="positive" />,
    detectTokens: {
      anyOf: [
        'nl.button.secondary.positive.background-color',
        'nl.button.secondary.positive.border-color',
        'nl.button.secondary.positive.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--secondary-positive-active',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Secondary (positive) Active',
    inline: true,
    render: () => (
      <Button className="nl-button--active" label="Secondary (positive) Active" purpose="secondary" hint="positive" />
    ),
    detectTokens: {
      anyOf: [
        'nl.button.secondary.positive.active.background-color',
        'nl.button.secondary.positive.active.border-color',
        'nl.button.secondary.positive.active.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--secondary-positive-disabled',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Secondary (positive) Disabled',
    inline: true,
    render: () => <Button disabled label="Secondary (positive) Disabled" purpose="secondary" hint="positive" />,
    detectTokens: {
      anyOf: [
        'nl.button.secondary.disabled.background-color',
        'nl.button.secondary.disabled.border-color',
        'nl.button.secondary.disabled.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--secondary-positive-hover',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Secondary (positive) Hover',
    state: true,
    inline: true,
    render: () => (
      <Button className="nl-button--hover" label="Secondary (positive) Hover" purpose="secondary" hint="positive" />
    ),
    detectTokens: {
      anyOf: [
        'nl.button.secondary.positive.hover.background-color',
        'nl.button.secondary.positive.hover.border-color',
        'nl.button.secondary.positive.hover.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--secondary-positive-pressed',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Secondary (positive) Pressed',
    inline: true,
    render: () => <Button label="Secondary (positive) Pressed" pressed purpose="secondary" hint="positive" />,
    detectTokens: {
      anyOf: [
        'nl.button.secondary.positive.pressed.background-color',
        'nl.button.secondary.positive.pressed.border-color',
        'nl.button.secondary.positive.pressed.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--secondary-negative',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Secondary (negative)',
    inline: true,
    render: () => <Button label="Secondary (negative)" purpose="secondary" hint="negative" />,
    detectTokens: {
      anyOf: [
        'nl.button.secondary.negative.background-color',
        'nl.button.secondary.negative.border-color',
        'nl.button.secondary.negative.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--secondary-negative-active',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Secondary (negative) Active',
    inline: true,
    render: () => (
      <Button className="nl-button--active" label="Secondary (negative) Active" purpose="secondary" hint="negative" />
    ),
    detectTokens: {
      anyOf: [
        'nl.button.secondary.negative.active.background-color',
        'nl.button.secondary.negative.active.border-color',
        'nl.button.secondary.negative.active.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--secondary-negative-disabled',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Secondary (negative) Disabled',
    inline: true,
    render: () => <Button disabled label="Secondary (negative) Disabled" purpose="secondary" hint="negative" />,
    detectTokens: {
      anyOf: [
        'nl.button.secondary.disabled.background-color',
        'nl.button.secondary.disabled.border-color',
        'nl.button.secondary.disabled.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--secondary-negative-hover',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Secondary (negative) Hover',
    state: true,
    inline: true,
    render: () => (
      <Button className="nl-button--hover" label="Secondary (negative) Hover" purpose="secondary" hint="negative" />
    ),
    detectTokens: {
      anyOf: [
        'nl.button.secondary.negative.hover.background-color',
        'nl.button.secondary.negative.hover.border-color',
        'nl.button.secondary.negative.hover.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--secondary-negative-pressed',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Secondary (negative) Pressed',
    inline: true,
    render: () => <Button label="Secondary (negative) Pressed" pressed purpose="secondary" hint="negative" />,
    detectTokens: {
      anyOf: [
        'nl.button.secondary.negative.pressed.background-color',
        'nl.button.secondary.negative.pressed.border-color',
        'nl.button.secondary.negative.pressed.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--subtle',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Subtle',
    inline: true,
    render: () => <Button label="Subtle" purpose="subtle" />,
    detectTokens: {
      anyOf: [
        'nl.button.subtle.background-color',
        'nl.button.subtle.border-color',
        'nl.button.subtle.border-width',
        'nl.button.subtle.color',
        'nl.button.subtle.font-size',
        'nl.button.subtle.font-weight',
        'nl.button.subtle.line-height',
      ],
    },
  },
  {
    storyId: 'react-nl-button--subtle-active',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Subtle Active',
    inline: true,
    render: () => <Button className="nl-button--active" label="Subtle Active" purpose="subtle" />,
    detectTokens: {
      anyOf: [
        'nl.button.subtle.active.background-color',
        'nl.button.subtle.active.border-color',
        'nl.button.subtle.active.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--subtle-disabled',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Subtle Disabled',
    inline: true,
    render: () => <Button disabled label="Subtle Disabled" purpose="subtle" />,
    detectTokens: {
      anyOf: [
        'nl.button.subtle.disabled.background-color',
        'nl.button.subtle.disabled.border-color',
        'nl.button.subtle.disabled.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--subtle-hover',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Subtle Hover',
    state: true,
    inline: true,
    render: () => <Button className="nl-button--hover" label="Subtle Hover" purpose="subtle" />,
    detectTokens: {
      anyOf: [
        'nl.button.subtle.hover.background-color',
        'nl.button.subtle.hover.border-color',
        'nl.button.subtle.hover.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--subtle-pressed',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Subtle Pressed',
    inline: true,
    render: () => <Button label="Subtle Pressed" pressed purpose="subtle" />,
    detectTokens: {
      anyOf: [
        'nl.button.subtle.pressed.background-color',
        'nl.button.subtle.pressed.border-color',
        'nl.button.subtle.pressed.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--subtle-positive',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Subtle (positive)',
    inline: true,
    render: () => <Button label="Subtle (positive)" purpose="subtle" hint="positive" />,
    detectTokens: {
      anyOf: [
        'nl.button.subtle.positive.background-color',
        'nl.button.subtle.positive.border-color',
        'nl.button.subtle.positive.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--subtle-positive-active',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Subtle (positive) Active',
    inline: true,
    render: () => (
      <Button className="nl-button--active" label="Subtle (positive) Active" purpose="subtle" hint="positive" />
    ),
    detectTokens: {
      anyOf: [
        'nl.button.subtle.positive.active.background-color',
        'nl.button.subtle.positive.active.border-color',
        'nl.button.subtle.positive.active.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--subtle-positive-disabled',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Subtle (positive) Disabled',
    inline: true,
    render: () => <Button disabled label="Subtle (positive) Disabled" purpose="subtle" hint="positive" />,
    detectTokens: {
      anyOf: [
        'nl.button.subtle.disabled.background-color',
        'nl.button.subtle.disabled.border-color',
        'nl.button.subtle.disabled.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--subtle-positive-hover',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Subtle (positive) Hover',
    state: true,
    inline: true,
    render: () => (
      <Button className="nl-button--hover" label="Subtle (positive) Hover" purpose="subtle" hint="positive" />
    ),
    detectTokens: {
      anyOf: [
        'nl.button.subtle.positive.hover.background-color',
        'nl.button.subtle.positive.hover.border-color',
        'nl.button.subtle.positive.hover.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--subtle-positive-pressed',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Subtle (positive) Pressed',
    inline: true,
    render: () => <Button label="Subtle (positive) Pressed" pressed purpose="subtle" hint="positive" />,
    detectTokens: {
      anyOf: [
        'nl.button.subtle.positive.pressed.background-color',
        'nl.button.subtle.positive.pressed.border-color',
        'nl.button.subtle.positive.pressed.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--subtle-negative',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Subtle (negative)',
    inline: true,
    render: () => <Button label="Subtle (negative)" purpose="subtle" hint="negative" />,
    detectTokens: {
      anyOf: [
        'nl.button.subtle.negative.background-color',
        'nl.button.subtle.negative.border-color',
        'nl.button.subtle.negative.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--subtle-negative-active',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Subtle (negative) Active',
    inline: true,
    render: () => (
      <Button className="nl-button--active" label="Subtle (negative) Active" purpose="subtle" hint="negative" />
    ),
    detectTokens: {
      anyOf: [
        'nl.button.subtle.negative.active.background-color',
        'nl.button.subtle.negative.active.border-color',
        'nl.button.subtle.negative.active.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--subtle-negative-disabled',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Subtle (negative) Disabled',
    inline: true,
    render: () => <Button disabled label="Subtle (negative) Disabled" purpose="subtle" hint="negative" />,
    detectTokens: {
      anyOf: [
        'nl.button.subtle.disabled.background-color',
        'nl.button.subtle.disabled.border-color',
        'nl.button.subtle.disabled.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--subtle-negative-hover',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Subtle (negative) Hover',
    state: true,
    inline: true,
    render: () => (
      <Button className="nl-button--hover" label="Subtle (negative) Hover" purpose="subtle" hint="negative" />
    ),
    detectTokens: {
      anyOf: [
        'nl.button.subtle.negative.hover.background-color',
        'nl.button.subtle.negative.hover.border-color',
        'nl.button.subtle.negative.hover.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--subtle-negative-pressed',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Subtle (negative) Pressed',
    inline: true,
    render: () => <Button label="Subtle (negative) Pressed" pressed purpose="subtle" hint="negative" />,
    detectTokens: {
      anyOf: [
        'nl.button.subtle.negative.pressed.background-color',
        'nl.button.subtle.negative.pressed.border-color',
        'nl.button.subtle.negative.pressed.color',
      ],
    },
  },
  {
    storyId: 'react-nl-button--focussed',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Focussed',
    state: true,
    inline: true,
    render: () => <Button className="nl-button--focus-visible" label="Focus" />,
    detectTokens: {
      anyOf: ['nl.button.focus.background-color', 'nl.button.focus.border-color', 'nl.button.focus.color'],
    },
  },
  {
    storyId: 'react-nl-button--full-width',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Volle breedte',
    inline: true,
    render: () => (
      <>
        <div style={{ display: 'flex', resize: 'both', overflow: 'auto' }}>
          <Button style={{ flex: 1 }} label="Volle breedte" />
        </div>
        <br />
        <div style={{ display: 'flex', resize: 'both', overflow: 'auto', width: '300px' }}>
          <Button style={{ flex: 1 }} label="Volle breedte" />
        </div>
      </>
    ),
    detectTokens: {
      anyOf: [],
    },
  },
  {
    storyId: 'react-nl-code--default',
    component: 'nl-code',
    group: STORY_GROUPS['CODE'],
    name: 'Candidate Code',
    render: () => <Code>{'<input type="url" value="https://nldesignsystem.nl">'}</Code>,
    detectTokens: {
      anyOf: ['nl.code.color', 'nl.code.background-color', 'nl.code.font-size', 'nl.code.font-family'],
    },
  },
  {
    storyId: 'react-nl-code-block--default',
    component: 'nl-code-block',
    group: STORY_GROUPS['CODE_BLOCK'],
    name: 'Candidate Code Block',
    render: () => (
      <CodeBlock>
        {`<!DOCTYPE html>
        <html lang="nl" dir="ltr">
          <head>
            <title>NL Design System</title>
            <meta charset="utf-8"/>
          </head>
          <body>
            <h1>NL Design System</h1>
          </body>
        </html>`}
      </CodeBlock>
    ),
    detectTokens: {
      anyOf: [
        'nl.code-block.font-family',
        'nl.code-block.background-color',
        'nl.code-block.border-radius',
        'nl.code-block.color',
        'nl.code-block.font-size',
        'nl.code-block.line-height',
        'nl.code-block.padding-block',
        'nl.code-block.padding-inline',
      ],
    },
  },
  {
    storyId: 'react-nl-color-sample--default',
    component: 'nl-color-sample',
    group: STORY_GROUPS['COLOR_SAMPLE'],
    name: 'Candidate Color Sample',
    render: () => <ColorSample value="#007DAD" />,
    detectTokens: {
      anyOf: [
        'nl.color-sample.background-color',
        'nl.color-sample.border-color',
        'nl.color-sample.border-width',
        'nl.color-sample.border-radius',
        'nl.color-sample.block-size',
        'nl.color-sample.inline-size',
      ],
    },
  },
  {
    storyId: 'react-nl-data-badge--default',
    component: 'nl-data-badge',
    group: STORY_GROUPS['BADGES'],
    name: 'Candidate Data Badge',
    render: () => <DataBadge>Category 1</DataBadge>,
    detectTokens: {
      anyOf: [
        'nl.data-badge.color',
        'nl.data-badge.border-color',
        'nl.data-badge.border-radius',
        'nl.data-badge.border-width',
        'nl.data-badge.background-color',
        'nl.data-badge.font-family',
        'nl.data-badge.font-size',
        'nl.data-badge.font-weight',
        'nl.data-badge.line-height',
        'nl.data-badge.min-block-size',
        'nl.data-badge.min-inline-size',
        'nl.data-badge.padding-block',
        'nl.data-badge.padding-inline',
      ],
    },
  },
  {
    storyId: 'react-nl-heading--level-1',
    component: 'nl-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Candidate Heading - Level 1',
    render: () => <Heading level={1}>The Quick Brown Fox Jumps Over The Lazy Dog</Heading>,
    detectTokens: {
      anyOf: [
        'nl.heading-1.color',
        'nl.heading-1.font-family',
        'nl.heading-1.font-size',
        'nl.heading-1.font-weight',
        'nl.heading-1.line-height',
        'nl.heading-1.margin-block-end',
        'nl.heading-1.margin-block-start',
      ],
    },
  },
  {
    storyId: 'react-nl-heading--level-2',
    component: 'nl-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Candidate Heading - Level 2',
    render: () => <Heading level={2}>The Quick Brown Fox Jumps Over The Lazy Dog</Heading>,
    detectTokens: {
      anyOf: [
        'nl.heading-2.color',
        'nl.heading-2.font-family',
        'nl.heading-2.font-size',
        'nl.heading-2.font-weight',
        'nl.heading-2.line-height',
        'nl.heading-2.margin-block-end',
        'nl.heading-2.margin-block-start',
      ],
    },
  },
  {
    storyId: 'react-nl-heading--level-3',
    component: 'nl-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Candidate Heading - Level 3',
    render: () => <Heading level={3}>The Quick Brown Fox Jumps Over The Lazy Dog</Heading>,
    detectTokens: {
      anyOf: [
        'nl.heading-3.color',
        'nl.heading-3.font-family',
        'nl.heading-3.font-size',
        'nl.heading-3.font-weight',
        'nl.heading-3.line-height',
        'nl.heading-3.margin-block-end',
        'nl.heading-3.margin-block-start',
      ],
    },
  },
  {
    storyId: 'react-nl-heading--level-4',
    component: 'nl-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Candidate Heading - Level 4',
    render: () => <Heading level={4}>The Quick Brown Fox Jumps Over The Lazy Dog</Heading>,
    detectTokens: {
      anyOf: [
        'nl.heading-4.color',
        'nl.heading-4.font-family',
        'nl.heading-4.font-size',
        'nl.heading-4.font-weight',
        'nl.heading-4.line-height',
        'nl.heading-4.margin-block-end',
        'nl.heading-4.margin-block-start',
      ],
    },
  },
  {
    storyId: 'react-nl-heading--level-5',
    component: 'nl-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Candidate Heading - Level 5',
    render: () => <Heading level={5}>The Quick Brown Fox Jumps Over The Lazy Dog</Heading>,
    detectTokens: {
      anyOf: [
        'nl.heading-5.color',
        'nl.heading-5.font-family',
        'nl.heading-5.font-size',
        'nl.heading-5.font-weight',
        'nl.heading-5.line-height',
        'nl.heading-5.margin-block-end',
        'nl.heading-5.margin-block-start',
      ],
    },
  },
  {
    storyId: 'react-nl-heading--level-6',
    component: 'nl-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Candidate Heading - Level 6',
    render: () => <Heading level={6}>The Quick Brown Fox Jumps Over The Lazy Dog</Heading>,
    detectTokens: {
      anyOf: [
        'nl.heading-6.color',
        'nl.heading-6.font-family',
        'nl.heading-6.font-size',
        'nl.heading-6.font-weight',
        'nl.heading-6.line-height',
        'nl.heading-6.margin-block-end',
        'nl.heading-6.margin-block-start',
      ],
    },
  },
  {
    storyId: 'react-nl-link--active',
    component: 'nl-link',
    group: STORY_GROUPS['LINK'],
    name: 'Candidate Link: Active',
    inline: true,
    render: () => (
      <Link href="https://nldesignsystem.nl" className="nl-link--active">
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
    detectTokens: {
      anyOf: ['nl.link.active.color'],
    },
  },
  {
    storyId: 'react-nl-link--default',
    component: 'nl-link',
    group: STORY_GROUPS['LINK'],
    name: 'Candidate Link',
    inline: true,
    render: () => <Link href="https://nldesignsystem.nl">The Quick Brown Fox Jumps Over The Lazy Dog</Link>,
    detectTokens: {
      anyOf: [
        'nl.link.color',
        'nl.link.text-decoration-color',
        'nl.link.text-decoration-line',
        'nl.link.text-decoration-thickness',
        'nl.link.text-underline-offset',
      ],
    },
  },
  {
    storyId: 'react-nl-link--hover',
    component: 'nl-link',
    group: STORY_GROUPS['LINK'],
    name: 'Candidate Link: Hover',
    state: true,
    inline: true,
    render: () => (
      <Link href="https://nldesignsystem.nl" className="nl-link--hover">
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
    detectTokens: {
      anyOf: ['nl.link.hover.color', 'nl.link.hover.text-decoration-line', 'nl.link.hover.text-decoration-thickness'],
    },
  },
  {
    storyId: 'react-nl-link--placeholder',
    component: 'nl-link',
    group: STORY_GROUPS['LINK'],
    name: 'Candidate Link: Placeholder',
    state: true,
    inline: true,
    render: () => <Link href="https://nldesignsystem.nl">The Quick Brown Fox Jumps Over The Lazy Dog</Link>,
    detectTokens: {
      anyOf: ['nl.link.placeholder.color', 'nl.link.placeholder.font-weight'],
    },
  },
  {
    storyId: 'react-nl-link--visited',
    component: 'nl-link',
    group: STORY_GROUPS['LINK'],
    name: 'Candidate Link: Visited',
    state: true,
    inline: true,
    render: () => (
      <Link href="https://nldesignsystem.nl" className="nl-link--visited">
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
    detectTokens: {
      anyOf: ['nl.link.visited.color'],
    },
  },
  {
    storyId: 'react-nl-link--current',
    component: 'nl-link',
    group: STORY_GROUPS['LINK'],
    name: 'Candidate Link: Current',
    state: true,
    inline: true,
    render: () => (
      <Link href="https://nldesignsystem.nl" className="nl-link--current">
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
    detectTokens: {
      anyOf: ['nl.link.current.cursor'],
    },
  },
  {
    storyId: 'react-nl-link--disabled',
    component: 'nl-link',
    group: STORY_GROUPS['LINK'],
    name: 'Candidate Link: Disabled',
    state: true,
    inline: true,
    render: () => (
      <Link href="https://nldesignsystem.nl" className="nl-link--disabled">
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
    detectTokens: {
      anyOf: ['nl.link.disabled.color', 'nl.link.disabled.cursor'],
    },
  },
  {
    storyId: 'react-nl-mark--default',
    component: 'nl-mark',
    group: STORY_GROUPS['MARK'],
    name: 'Candidate Mark',
    render: () => <Mark>Mark my words!</Mark>,
    detectTokens: {
      anyOf: ['nl.mark.color', 'nl.mark.background-color'],
    },
  },
  {
    storyId: 'react-nl-number-badge--default',
    component: 'nl-number-badge',
    group: STORY_GROUPS['BADGES'],
    name: 'Candidate Number Badge',
    render: () => <NumberBadge>42</NumberBadge>,
    detectTokens: {
      anyOf: [
        'nl.number-badge.background-color',
        'nl.number-badge.border-color',
        'nl.number-badge.border-radius',
        'nl.number-badge.border-width',
        'nl.number-badge.color',
        'nl.number-badge.font-family',
        'nl.number-badge.font-size',
        'nl.number-badge.font-weight',
        'nl.number-badge.min-block-size',
        'nl.number-badge.min-inline-size',
        'nl.number-badge.padding-block',
        'nl.number-badge.padding-inline',
      ],
    },
  },
  {
    storyId: 'react-nl-paragraph--default',
    component: 'nl-paragraph',
    group: STORY_GROUPS['PARAGRAPH'],
    name: 'Candidate Paragraph',
    render: () => <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>,
    detectTokens: {
      anyOf: [
        'nl.paragraph.color',
        'nl.paragraph.font-family',
        'nl.paragraph.font-size',
        'nl.paragraph.font-weight',
        'nl.paragraph.line-height',
        'nl.paragraph.margin-block-end',
        'nl.paragraph.margin-block-start',
      ],
    },
  },
  {
    storyId: 'react-nl-paragraph--lead',
    component: 'nl-paragraph',
    group: STORY_GROUPS['PARAGRAPH'],
    name: 'Candidate Lead Paragraph',
    render: () => <Paragraph purpose="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>,
    detectTokens: {
      anyOf: [
        'nl.paragraph.lead.color',
        'nl.paragraph.lead.font-size',
        'nl.paragraph.lead.font-weight',
        'nl.paragraph.lead.line-height',
        'nl.paragraph.lead.margin-block-end',
        'nl.paragraph.lead.margin-block-start',
      ],
    },
  },
  {
    storyId: 'react-nl-skip-link',
    component: 'nl-skip-link',
    group: STORY_GROUPS['SKIP_LINK'],
    name: 'Candidate Skip Link',
    render: () => <SkipLink href="main" />,
    detectTokens: {
      anyOf: [
        'nl.skip-link.background-color',
        'nl.skip-link.color',
        'nl.skip-link.font-size',
        'nl.skip-link.line-height',
        'nl.skip-link.min-block-size',
        'nl.skip-link.min-inline-size',
        'nl.skip-link.padding-block',
        'nl.skip-link.padding-inline',
        'nl.skip-link.text-decoration-thickness',
        'nl.skip-link.text-underline-offset',
      ],
    },
  },
];
