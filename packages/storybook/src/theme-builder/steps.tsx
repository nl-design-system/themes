import type { ReactNode } from 'react';
import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import {
  ButtonExample,
  FocusVisibleExample,
  FontSizeScale,
  HeadingsExample,
  LinkExample,
  InlineSpaceExample,
  BlockSpaceExample,
  RowSpaceExample,
  ColumnSpaceExample,
} from './examples';

export interface ThemeBuilderStepObject {
  name: string;
  tokens: string[];
  example: () => ReactNode;
  commonTokens?: string[];
  description?: () => ReactNode;
}

export const steps: ThemeBuilderStepObject[] = [
  {
    name: 'Brand colors',
    tokens: [],
    example: LinkExample,
    description: () => (
      <>
        <Paragraph>{'Kies je primaire kleuren.'}</Paragraph>
        <Paragraph>
          {
            'Je kunt in een latere stap kleuren kiezen die zijn afgeleid van de primaire kleuren, zoals lichtere en donkere varianten.'
          }
        </Paragraph>
      </>
    ),
  },
  {
    name: 'Font families',
    tokens: [
      'basis.common.typography.font-family.default',
      'basis.common.typography.font-family.sans-serif',
      'basis.common.typography.font-family.serif',
      'basis.common.typography.font-family.code',
    ],
    example: LinkExample,
    description: () => (
      <>
        <Paragraph>{'Decide your font families now.'}</Paragraph>
        <Paragraph>
          {
            'You need to choose least one font. You can choose up to three fonts: one for regular text, one for serif text, and one for code.'
          }
        </Paragraph>
      </>
    ),
  },
  {
    name: 'Font size scale',
    tokens: [
      'basis.common.typography.font-size.xx-small',
      'basis.common.typography.font-size.x-small',
      'basis.common.typography.font-size.small',
      'basis.common.typography.font-size.medium',
      'basis.common.typography.font-size.large',
      'basis.common.typography.font-size.x-large',
      'basis.common.typography.font-size.xx-large',
      'basis.common.typography.font-size.xxx-large',
    ],
    example: FontSizeScale,
    description: () => (
      <>
        <Paragraph>{'Decide your font sizes now.'}</Paragraph>
      </>
    ),
  },
  {
    name: 'Feedback colors: red',
    tokens: [
      'basis.common.feedback.light-color-scheme.red.shade-1',
      'basis.common.feedback.light-color-scheme.red.shade-2',
      'basis.common.feedback.light-color-scheme.red.shade-3',
      'basis.common.feedback.light-color-scheme.red.shade-4',
      'basis.common.feedback.light-color-scheme.red.shade-5',
      'basis.common.feedback.light-color-scheme.red.shade-6',
      'basis.common.feedback.light-color-scheme.red.shade-7',
      'basis.common.feedback.light-color-scheme.red.shade-8',
      'basis.common.feedback.light-color-scheme.red.shade-9',
      'basis.common.feedback.light-color-scheme.red.shade-10',
      'basis.common.feedback.light-color-scheme.red.shade-11',
      'basis.common.feedback.light-color-scheme.red.shade-12',
      'basis.common.feedback.light-color-scheme.red.inverse-1',
      'basis.common.feedback.light-color-scheme.red.inverse-2',
      'basis.common.feedback.light-color-scheme.red.inverse-3',
      'basis.common.feedback.light-color-scheme.red.inverse-4',
      'basis.common.feedback.light-color-scheme.red.inverse-5',
      'basis.common.feedback.light-color-scheme.red.inverse-6',
      'basis.common.feedback.light-color-scheme.red.inverse-7',
      'basis.common.feedback.light-color-scheme.red.inverse-8',
      'basis.common.feedback.light-color-scheme.red.inverse-9',
      'basis.common.feedback.light-color-scheme.red.inverse-10',
      'basis.common.feedback.light-color-scheme.red.inverse-11',
      'basis.common.feedback.light-color-scheme.red.inverse-12',
      'basis.common.feedback.dark-color-scheme.red.shade-1',
      'basis.common.feedback.dark-color-scheme.red.shade-2',
      'basis.common.feedback.dark-color-scheme.red.shade-3',
      'basis.common.feedback.dark-color-scheme.red.shade-4',
      'basis.common.feedback.dark-color-scheme.red.shade-5',
      'basis.common.feedback.dark-color-scheme.red.shade-6',
      'basis.common.feedback.dark-color-scheme.red.shade-7',
      'basis.common.feedback.dark-color-scheme.red.shade-8',
      'basis.common.feedback.dark-color-scheme.red.shade-9',
      'basis.common.feedback.dark-color-scheme.red.shade-10',
      'basis.common.feedback.dark-color-scheme.red.shade-11',
      'basis.common.feedback.dark-color-scheme.red.shade-12',
      'basis.common.feedback.dark-color-scheme.red.inverse-1',
      'basis.common.feedback.dark-color-scheme.red.inverse-2',
      'basis.common.feedback.dark-color-scheme.red.inverse-3',
      'basis.common.feedback.dark-color-scheme.red.inverse-4',
      'basis.common.feedback.dark-color-scheme.red.inverse-5',
      'basis.common.feedback.dark-color-scheme.red.inverse-6',
      'basis.common.feedback.dark-color-scheme.red.inverse-7',
      'basis.common.feedback.dark-color-scheme.red.inverse-8',
      'basis.common.feedback.dark-color-scheme.red.inverse-9',
      'basis.common.feedback.dark-color-scheme.red.inverse-10',
      'basis.common.feedback.dark-color-scheme.red.inverse-11',
      'basis.common.feedback.dark-color-scheme.red.inverse-12',
    ],
    example: FontSizeScale,
    description: () => (
      <>
        <Paragraph>{'Decide your font sizes now.'}</Paragraph>
      </>
    ),
  },
  {
    name: 'Link color',
    tokens: [
      'utrecht.link.color',
      'utrecht.link.active.color',
      'utrecht.link.visited.color',
      'utrecht.link.hover.color',
      'utrecht.link.focus.color',
    ],
    example: LinkExample,
  },
  {
    name: 'Font size scale',
    tokens: ['utrecht.document.font-size', 'utrecht.document.line-height'],
    example: HeadingsExample,
  },
  {
    name: 'Border radius',
    tokens: ['utrecht.form-control.border-radius', 'utrecht.button.border-radius'],
    example: ButtonExample,
  },
  {
    name: 'Focus visible: Basis',
    commonTokens: [
      'basis.common.focus.outline-color',
      'basis.common.focus.outline-offset',
      'basis.common.focus.outline-width',
      'basis.common.focus.color',
      'basis.common.focus.background-color',
    ],
    tokens: [],
    example: FocusVisibleExample,
  },
  {
    name: 'Inline space',
    commonTokens: [
      'basis.common.space.inline.x-small',
      'basis.common.space.inline.small',
      'basis.common.space.inline.medium',
      'basis.common.space.inline.large',
      'basis.common.space.inline.x-large',
    ],
    tokens: [],
    example: InlineSpaceExample,
  },
  {
    name: 'Block space',
    commonTokens: [
      'basis.common.space.inline.x-small',
      'basis.common.space.inline.small',
      'basis.common.space.inline.medium',
      'basis.common.space.inline.large',
      'basis.common.space.inline.x-large',
    ],
    tokens: [],
    example: BlockSpaceExample,
  },
  {
    name: 'Column space',
    commonTokens: [
      'basis.common.space.column.x-small',
      'basis.common.space.column.small',
      'basis.common.space.column.medium',
      'basis.common.space.column.large',
      'basis.common.space.column.x-large',
    ],
    tokens: [],
    example: ColumnSpaceExample,
  },
  {
    name: 'Row space',
    commonTokens: [
      'basis.common.space.row.x-small',
      'basis.common.space.row.small',
      'basis.common.space.row.medium',
      'basis.common.space.row.large',
      'basis.common.space.row.x-large',
    ],
    tokens: [],
    example: RowSpaceExample,
  },
  {
    name: 'Focus visible: Utrecht',
    commonTokens: [
      'utrecht.focus.outline-color',
      'utrecht.focus.outline-offset',
      'utrecht.focus.outline-width',
      'utrecht.focus.color',
      'utrecht.focus.background-color',
    ],
    tokens: [],
    example: FocusVisibleExample,
  },
  {
    name: 'Pointer target',
    tokens: ['utrecht.pointer-target.min-size'],
    example: ButtonExample,
    description: () => (
      <>
        <Paragraph>
          {
            'Kies voor 44px voor WCAG 2.2 Niveau AAA minimum, 24px voor WCAG 2.2 Niveau AA minimum, of voor bijvoorbeeld 48px voor het minimum van Material UI.'
          }
        </Paragraph>
        <Paragraph>
          {
            'De minimum target size heeft effect op veel componenten: Textbox, Textarea, Listbox, en Select. De volgende componenten zijn nog niet configurabel: Button, Link Button, Skip Link, Drawer.'
          }
        </Paragraph>
      </>
    ),
  },
  {
    name: 'Basis Thema',
    tokens: [],
    example: HeadingsExample,
  },
  {
    name: 'Font family',
    tokens: ['utrecht.document.font-family', 'utrecht.heading.font-family'],
    example: HeadingsExample,
  },
];
