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
      anyOf: ['nl.button.XXXXXXXX.color'],
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
      anyOf: ['nl.button.XXXXXXXX.color'],
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
      anyOf: ['nl.button.XXXXXXXX.color'],
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
      anyOf: ['nl.button.XXXXXXXX.color'],
    },
  },
  {
    storyId: 'react-nl-button--primary',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Primary',
    inline: true,
    render: () => (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button label="Primary" purpose="primary" />
        <Button label="Primary (positive)" purpose="primary" hint="positive" />
        <Button label="Primary (negative)" purpose="primary" hint="negative" />
      </div>
    ),
    detectTokens: {
      anyOf: ['nl.button.XXXXXXXX.color'],
    },
  },
  {
    storyId: 'react-nl-button--primary-active',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Primary Active',
    inline: true,
    render: () => <Button className="nl-button--active" label="Primary Active" />,
    detectTokens: {
      anyOf: ['nl.button.XXXXXXXX.color'],
    },
  },
  {
    storyId: 'react-nl-button--primary-disabled',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Primary Disabled',
    inline: true,
    render: () => <Button disabled label="Primary Disabled" />,
    detectTokens: {
      anyOf: ['nl.button.XXXXXXXX.color'],
    },
  },
  {
    storyId: 'react-nl-button--primary-hover',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Primary Hover',
    state: true,
    inline: true,
    render: () => <Button className="nl-button--hover" label="Primary Hover" />,
    detectTokens: {
      anyOf: ['nl.button.XXXXXXXX.color'],
    },
  },
  {
    storyId: 'react-nl-button--secondary',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Secondary',
    inline: true,
    render: () => (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button label="Secondary" purpose="secondary" />
        <Button label="Secondary (positive)" purpose="secondary" hint="positive" />
        <Button label="Secondary (negative)" purpose="secondary" hint="negative" />
      </div>
    ),
    detectTokens: {
      anyOf: ['nl.button.XXXXXXXX.color'],
    },
  },
  {
    storyId: 'react-nl-button--secondary-active',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Secondary Active',
    inline: true,
    render: () => <Button className="nl-button--active" label="Secondary Active" />,
    detectTokens: {
      anyOf: ['nl.button.XXXXXXXX.color'],
    },
  },
  {
    storyId: 'react-nl-button--secondary-disabled',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Secondary Disabled',
    inline: true,
    render: () => <Button disabled label="Secondary Disabled" />,
    detectTokens: {
      anyOf: ['nl.button.XXXXXXXX.color'],
    },
  },
  {
    storyId: 'react-nl-button--secondary-hover',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Secondary Hover',
    state: true,
    inline: true,
    render: () => <Button className="nl-button--hover" label="Secondary Hover" />,
    detectTokens: {
      anyOf: ['nl.button.XXXXXXXX.color'],
    },
  },
  {
    storyId: 'react-nl-button--subtle',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Subtle',
    inline: true,
    render: () => (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button label="Subtle" purpose="subtle" />
        <Button label="Subtle (positive)" purpose="subtle" hint="positive" />
        <Button label="Subtle (negative)" purpose="subtle" hint="negative" />
      </div>
    ),
    detectTokens: {
      anyOf: ['nl.button.XXXXXXXX.color'],
    },
  },
  {
    storyId: 'react-nl-button--subtle-active',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Subtle Active',
    inline: true,
    render: () => <Button className="nl-button--active" label="Subtle Active" />,
    detectTokens: {
      anyOf: ['nl.button.XXXXXXXX.color'],
    },
  },
  {
    storyId: 'react-nl-button--subtle-disabled',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Subtle Disabled',
    inline: true,
    render: () => <Button disabled label="Subtle Disabled" />,
    detectTokens: {
      anyOf: ['nl.button.XXXXXXXX.color'],
    },
  },
  {
    storyId: 'react-nl-button--subtle-hover',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Subtle Hover',
    state: true,
    inline: true,
    render: () => <Button className="nl-button--hover" label="Subtle Hover" />,
    detectTokens: {
      anyOf: ['nl.button.XXXXXXXX.color'],
    },
  },
  {
    storyId: 'react-nl-button--toggle',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Toggle',
    inline: true,
    render: () => <Button label="Ingedrukt" pressed />,
    detectTokens: {
      anyOf: ['nl.button.XXXXXXXX.color'],
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
      anyOf: ['nl.button.XXXXXXXX.color'],
    },
  },
  {
    storyId: 'react-nl-button--default-disabled',
    component: 'nl-button',
    group: STORY_GROUPS['BUTTON_DEFAULT'],
    name: 'Candidate Button: Default Disabled',
    inline: true,
    render: () => <Button disabled label="Disabled" />,
    detectTokens: {
      anyOf: ['nl.button.XXXXXXXX.color'],
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
      anyOf: ['nl.button.XXXXXXXX.color'],
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
      anyOf: ['nl.button.XXXXXXXX.color'],
    },
  },
  {
    storyId: 'react-nl-code--default',
    name: 'Candidate Code',
    render: () => <Code>{'<input type="url" value="https://nldesignsystem.nl">'}</Code>,
    detectTokens: {
      anyOf: ['nl.code.color', 'nl.code.background-color', 'nl.code.font-size', 'nl.code.font-family'],
    },
  },
  {
    storyId: 'react-nl-code-block--default',
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
    name: 'Candidate Mark',
    render: () => <Mark>Mark my words!</Mark>,
    detectTokens: {
      anyOf: ['nl.mark.color', 'nl.mark.background-color'],
    },
  },
  {
    storyId: 'react-nl-number-badge--default',
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
