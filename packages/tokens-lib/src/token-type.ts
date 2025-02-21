/**
 * NL Design System specific grouping of design token values into groups, we call "types".
 * For internal use only.
 */

export const TOKEN_TYPES = [
  'color',
  'font-family',
  'line-height',
  'font-weight',
  'font-size',
  'letter-spacing',
  'border-radius',
  'border-style',
  'border-width',
  'padding',
  'margin',
  'gap',
  'size',
  'cursor',
  'text-decoration-line',
  'text-decoration-thickness',
  'text-underline-offset',
  'text-underline-style',
];

type TypeToCSSProperty = {
  [index: string]: string[];
};

export const mapping: TypeToCSSProperty = {
  ['color']: [
    'color',
    'accent-color',
    'border-color',
    'text-decoration-color',
    'background-color',
    'border-block-color',
    'border-block-end-color',
    'border-block-start-color',
    'border-bottom-color',
    'border-color',
    'border-inline-color',
    'border-inline-end-color',
    'border-inline-start-color',
    'border-left-color',
    'border-right-color',
    'border-top-color',
    'outline-color',
  ],
  'font-family': ['font-family'],
  'line-height': ['line-height'],
  'font-weight': ['font-weight'],
  'font-size': ['font-size'],
  'letter-spacing': ['letter-spacing'],
  'border-radius': [
    'border-bottom-left-radius',
    'border-bottom-right-radius',
    'border-end-end-radius',
    'border-end-start-radius',
    'border-radius',
    'border-start-end-radius',
    'border-start-start-radius',
    'border-top-left-radius',
    'border-top-right-radius',
  ],
  'border-style': [
    'outline-style',
    'border-block-end-style',
    'border-block-start-style',
    'border-block-style',
    'border-bottom-style',
    'border-inline-end-style',
    'border-inline-start-style',
    'border-inline-style',
    'border-left-style',
    'border-right-style',
    'border-style',
    'border-top-style',
  ],
  'border-width': [
    'border-block-end-width',
    'border-block-start-width',
    'border-block-width',
    'border-bottom-width',
    'border-image-width',
    'border-inline-end-width',
    'border-inline-start-width',
    'border-inline-width',
    'border-left-width',
    'border-right-width',
    'border-top-width',
    'border-width',
  ],
  ['padding']: [
    'padding',
    'padding-left',
    'padding-right',
    'padding-top',
    'padding-bottom',
    'padding-inline',
    'padding-block',
    'padding-inline-start',
    'padding-inline-end',
    'padding-block-start',
    'padding-block-end',
  ],
  ['margin']: [
    'margin',
    'margin-left',
    'margin-right',
    'margin-top',
    'margin-bottom',
    'margin-inline',
    'margin-block',
    'margin-inline-start',
    'margin-inline-end',
    'margin-block-start',
    'margin-block-end',
  ],
  ['gap']: ['gap', 'column-gap', 'row-gap'],
  ['size']: [
    'width',
    'height',
    'inline-size',
    'block-size',
    'min-block-size',
    'min-inline-size',
    'min-height',
    'min-width',
    'max-block-size',
    'max-inline-size',
    'max-height',
    'max-width',
    'size', // `size` not an official CSS property
  ],
  ['cursor']: ['cursor'],
  ['text-decoration-line']: ['text-decoration', 'text-decoration-line'],
  ['text-decoration-thickness']: ['text-decoration-thickness'],
  ['text-underline-offset']: ['text-underline-offset'],
  ['text-underline-style']: ['text-underline-style'],
};

const entries = Object.entries(mapping);

/**
 * Map an CSS property name to an "NL Design System token type".
 */
export const getTokenType = (propertyName: string): string | undefined => {
  const group = entries.find(([, properties]) => properties.includes(propertyName));
  return group ? group[0] : undefined;
};

const $typeMapping: { [index: string]: string } = {
  ['color']: 'color',
  ['dimension']: 'length',
  ['duration']: 'time',
  ['fontFamily']: 'font-family',
  ['fontWeight']: 'font-weight',
  ['number']: 'number',
};

/**
 * Map an Design Tokens JSON `"$type"` to an "NL Design System token type".
 */
export const getToken$Type = (propertyName: string): string | undefined => {
  if (propertyName in $typeMapping) {
    return $typeMapping[propertyName];
  } else {
    return undefined;
  }
};
