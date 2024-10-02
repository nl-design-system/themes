import type { ReactNode } from 'react';
import { Paragraph } from '@utrecht/component-library-react/dist/css-module';
import { ButtonExample, FocusVisibleExample, HeadingsExample, LinkExample, AlertExample } from './examples';

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
        <Paragraph>Nu moet ik nog met de hand: voeg brand tokens tool aan je Figma.tokens.json bestand</Paragraph>
        <Paragraph>ProjectWallace gebruiken om DesignToken van een theme te bekijken</Paragraph>
      </>
    ),
  },
  {
    name: 'Common colors/Signaal colors',
    tokens: ['basis.color.green', 'basis.color.red', 'basis.color.yellow'],
    example: AlertExample,
    description: () => (
      <>
        <Paragraph>{'Kies rood,groen of geel.'}</Paragraph>
      </>
    ),
  },
  {
    name: 'Font families',
    tokens: [],
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
    name: 'Focus visible',
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
