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
        'utrecht.paragraph.lead.color',
        'utrecht.paragraph.lead.font-size',
        'utrecht.paragraph.lead.font-weight',
        'utrecht.paragraph.lead.line-height',
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
      allOf: ['utrecht.heading-1.font-size'],
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
      allOf: ['utrecht.heading-2.font-size'],
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
      allOf: ['utrecht.heading-3.font-size'],
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
      allOf: ['utrecht.heading-4.font-size'],
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
    storyId: 'react-nl-number-badge--default',
    group: STORY_GROUPS['BADGES'],
    name: 'Candidate Number Badge',
    render: () => <NumberBadge>42</NumberBadge>,
  },
  {
    storyId: 'react-nl-data-badge--default',
    group: STORY_GROUPS['BADGES'],
    name: 'Candidate Data Badge',
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
        'utrecht.link.color',
        'utrecht.link.text-decoration',
        'utrecht.link.text-decoration-thickness',
        'utrecht.link.text-underline-offset',
      ],
    },
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
      anyOf: ['utrecht.link.active.color'],
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
      anyOf: [
        'utrecht.link.hover.color',
        'utrecht.link.hover.text-decoration',
        'utrecht.link.hover.text-decoration-thickness',
      ],
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
      anyOf: ['utrecht.link.placeholder.color', 'utrecht.link.placeholder.font-weight'],
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
        'utrecht.link.focus.color',
        'utrecht.link.focus.background-color',
        'utrecht.link.focus.text-decoration',
        'utrecht.link.focus.text-decoration-thickness',
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
      anyOf: ['utrecht.link.focus-visible.text-decoration', 'utrecht.link.focus-visible.text-decoration-thickness'],
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
      anyOf: ['utrecht.link.visited.color'],
    },
  },
  {
    storyId: 'react-nl-mark--default',
    name: 'Candidate Mark',
    render: () => <Mark>Mark my words!</Mark>,
    detectTokens: {
      anyOf: ['utrecht.mark.color', 'utrecht.mark.background-color'],
    },
  },
  {
    storyId: 'react-nl-code--default',
    name: 'Candidate Code',
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
    storyId: 'react-nl-color-sample',
    name: 'Candidate Color Sample',
    render: () => <ColorSample value="#007DAD" />,
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
    storyId: 'react-nl-color-sample-dark',
    name: 'Candidate Color Sample Dark',
    render: () => <ColorSample value="#007DAD" />,
    detectTokens: {
      anyOf: ['utrecht.color-sample.dark.border-color'],
    },
  },
  {
    storyId: 'react-nl-color-sample-light',
    name: 'Candidate Color Sample Light',
    render: () => <ColorSample value="#007DAD" />,
    detectTokens: {
      anyOf: ['utrecht.color-sample.light.border-color'],
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
