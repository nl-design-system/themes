import { ComponentStory, STORY_GROUPS } from './component-stories-util';

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
    storyId: 'react-nl-code--default',
    name: 'Candidate Code',
    render: () => <Code>{'<input type="url" value="https://example.fi/">'}</Code>,
    detectTokens: {
      anyOf: [
        'nl.code.color',
        'nl.code.background-color',
        'nl.code.font-size',
        'nl.code.font-family',
        'nl.code.line-height',
      ],
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
        'nl.code-block.color',
        'nl.code-block.font-size',
        'nl.code-block.line-height',
        'nl.code-block.margin-block-start',
        'nl.code-block.margin-block-end',
        'nl.code-block.margin-inline-start',
        'nl.code-block.margin-inline-end',
        'nl.code-block.padding-block-start',
        'nl.code-block.padding-block-end',
        'nl.code-block.padding-inline-start',
        'nl.code-block.padding-inline-end',
      ],
    },
  },
  {
    storyId: 'react-nl-color-sample',
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
    storyId: 'react-nl-color-sample-dark',
    name: 'Candidate Color Sample Dark',
    render: () => <ColorSample value="#007DAD" />,
    detectTokens: {
      anyOf: ['nl.color-sample.dark.border-color'],
    },
  },
  {
    storyId: 'react-nl-color-sample-light',
    name: 'Candidate Color Sample Light',
    render: () => <ColorSample value="#007DAD" />,
    detectTokens: {
      anyOf: ['nl.color-sample.light.border-color'],
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
        'nl.data-badge.border-radius',
        'nl.data-badge.border-width',
        'nl.data-badge.background-color',
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
    render: () => (
      <Heading role="presentation" level={1}>
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Heading>
    ),
    detectTokens: {
      allOf: ['nl.heading-1.font-size'],
    },
  },
  {
    storyId: 'react-nl-heading--level-2',
    component: 'nl-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Candidate Heading - Level 2',
    render: () => (
      <Heading role="presentation" level={2}>
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Heading>
    ),
    detectTokens: {
      allOf: ['nl.heading-2.font-size'],
    },
  },
  {
    storyId: 'react-nl-heading--level-3',
    component: 'nl-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Candidate Heading - Level 3',
    render: () => (
      <Heading role="presentation" level={3}>
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Heading>
    ),
    detectTokens: {
      allOf: ['nl.heading-3.font-size'],
    },
  },
  {
    storyId: 'react-nl-heading--level-4',
    component: 'nl-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Candidate Heading - Level 4',
    render: () => (
      <Heading role="presentation" level={4}>
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Heading>
    ),
    detectTokens: {
      allOf: ['nl.heading-4.font-size'],
    },
  },
  {
    storyId: 'react-nl-heading--level-5',
    component: 'nl-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Candidate Heading - Level 5',
    render: () => (
      <Heading role="presentation" level={5}>
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Heading>
    ),
  },
  {
    storyId: 'react-nl-heading--level-6',
    component: 'nl-heading',
    group: STORY_GROUPS['HEADINGS'],
    name: 'Candidate Heading - Level 6',
    render: () => (
      <Heading role="presentation" level={6}>
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Heading>
    ),
  },
  {
    storyId: 'react-nl-link--active',
    group: STORY_GROUPS['LINK'],
    name: 'Candidate Link: Active',
    inline: true,
    render: () => (
      <Link href="https://example.com" target="_new" className="utrecht-link--active">
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
    render: () => (
      <Link href="https://example.com" target="_new">
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
    detectTokens: {
      anyOf: [
        'nl.link.color',
        'nl.link.text-decoration',
        'nl.link.text-decoration-thickness',
        'nl.link.text-underline-offset',
      ],
    },
  },
  {
    storyId: 'react-nl-link--focus',
    group: STORY_GROUPS['LINK'],
    name: 'Candidate Link: Focus',
    state: true,
    inline: true,
    render: () => (
      <Link href="https://example.com" target="_new" className="utrecht-link--focus">
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
    detectTokens: {
      anyOf: [
        'nl.link.focus.color',
        'nl.link.focus.background-color',
        'nl.link.focus.text-decoration',
        'nl.link.focus.text-decoration-thickness',
      ],
    },
  },
  {
    storyId: 'react-nl-link--focus-visible',
    group: STORY_GROUPS['LINK'],
    name: 'Candidate Link: Focus Visible',
    state: true,
    inline: true,
    render: () => (
      <Link href="https://example.com" target="_new" className="utrecht-link--focus utrecht-link--focus-visible">
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
    detectTokens: {
      anyOf: ['nl.link.focus-visible.text-decoration', 'nl.link.focus-visible.text-decoration-thickness'],
    },
  },
  {
    storyId: 'react-nl-link--hover',
    group: STORY_GROUPS['LINK'],
    name: 'Candidate Link: Hover',
    state: true,
    inline: true,
    render: () => (
      <Link href="https://example.com" target="_new" className="utrecht-link--hover">
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
    detectTokens: {
      anyOf: ['nl.link.hover.color', 'nl.link.hover.text-decoration', 'nl.link.hover.text-decoration-thickness'],
    },
  },
  {
    storyId: 'react-nl-link--placeholder',
    group: STORY_GROUPS['LINK'],
    name: 'Candidate Link: Placeholder',
    state: true,
    inline: true,
    render: () => (
      <Link href="https://example.com" target="_new">
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
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
      <Link href="https://example.com" target="_new" className="utrecht-link--visited">
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
    detectTokens: {
      anyOf: ['nl.link.visited.color'],
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
  },
  {
    storyId: 'react-nl-paragraph--default',
    group: STORY_GROUPS['PARAGRAPH'],
    name: 'Candidate Paragraph',
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
        'nl.paragraph.color',
        'nl.paragraph.font-size',
        'nl.paragraph.font-family',
        'nl.paragraph.font-weight',
        'nl.paragraph.line-height',
        'nl.paragraph.margin-block-start',
        'nl.paragraph.margin-block-end',
      ],
    },
  },
  {
    storyId: 'react-nl-paragraph--lead',
    component: 'nl-paragraph',
    group: STORY_GROUPS['PARAGRAPH'],
    name: 'Candidate Lead Paragraph',
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
        'nl.paragraph.lead.color',
        'nl.paragraph.lead.font-size',
        'nl.paragraph.lead.font-weight',
        'nl.paragraph.lead.line-height',
      ],
    },
  },
  {
    storyId: 'react-nl-skip-link',
    name: 'Candidate Skip Link',
    render: () => <SkipLink href="main" />,
    detectTokens: {
      anyOf: [],
    },
  },
];
