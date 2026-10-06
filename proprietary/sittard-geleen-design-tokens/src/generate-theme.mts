import {
  type Theme,
  ThemeSchema,
  excludeParentKeys,
  mergeTokens,
} from '@nl-design-system-community/design-tokens-schema';
import { hasParentKeys, setBasisColor, createTransform } from './util.mts';
import startTheme from '@nl-design-system-unstable/start-design-tokens/figma/start.tokens.json' with { type: 'json' };

export const generateTheme = (
  config: { initialTheme?: Theme; log?: boolean; colorScheme?: 'light' | 'dark' } = {},
): Theme => {
  // Use the Start Theme as initial Design Tokens JSON, stack modifications on top of that.
  // By using npm package as starting point, so it will be easy to upgrade by re-running modifications on top of new versions.
  const { log = false, initialTheme = startTheme } = config;

  // Create a new theme.
  let theme: Theme = structuredClone(initialTheme);

  // Check the initial state is fully valid.
  // Then continue to validate after each modification.
  theme = ThemeSchema.parse(theme) satisfies Theme;

  const unsafeTransform = createTransform({ log: true, strict: false });
  const safeTransform = createTransform({ log: true });

  // Filter out dark mode, before the parent keys are excluded in the next step
  theme = unsafeTransform({ description: 'Exclude color-scheme-dark' }, () => {
    return Object.entries(theme).reduce((obj, [key, value]) => {
      const isOtherColorScheme = /^color-scheme-/gi.test(key);

      if (isOtherColorScheme && log) {
        console.log(`Remove ${key}`);
      }

      // Exclude `color-scheme-` token sets
      // return obj;
      return isOtherColorScheme
        ? obj
        : {
            ...obj,
            [key]: value,
          };
    }, {});
  });

  theme = safeTransform({ description: 'Exclude parent keys when necessary' }, () => {
    // The Start Theme Design Tokens JSON format doesn't use the official Design Tokens JSON format,
    // the first level of keys are token sets in the Tokens Studio JSON format.
    if (hasParentKeys(theme)) {
      // theme = setParentKeyExtensions(theme);
      return excludeParentKeys(theme);
    } else {
      return theme;
    }
  });

  theme = safeTransform({ description: 'Improve tokens for fluid design' }, () => {
    //
    return mergeTokens([
      theme,
      // https://github.com/nl-design-system/documentatie/pull/4699/changes
      {
        basis: {
          'form-control': {
            'padding-block-end': {
              $value: '{basis.space.block.md}',
            },
            'padding-block-start': {
              $value: '{basis.space.block.md}',
            },
            'padding-inline-end': {
              $value: '{basis.space.inline.md}',
            },
            'padding-inline-start': {
              $value: '{basis.space.inline.md}',
            },
          },
        },
        denhaag: {
          'side-navigation': {
            link: {
              'padding-block-end': { $value: '{basis.space.block.sm}' },
              'padding-block-start': { $value: '{basis.space.block.sm}' },
              'padding-inline-start': { $value: '{basis.space.inline.xl}' },
            },
          },
        },
        nl: {
          button: {
            'column-gap': {
              $value: '{basis.space.inline.xs}',
            },
          },
          'code-block': {
            'padding-block': { $value: '{basis.space.block.md}' },
            'padding-inline': { $value: '{basis.space.inline.md}' },
          },
        },
        utrecht: {
          'breadcrumb-nav': {
            item: {
              'padding-inline-end': {
                $value: '{basis.space.inline.xs}',
              },
              'padding-inline-start': {
                $value: '{basis.space.inline.xs}',
              },
            },
          },
          listbox: {
            option: {
              'padding-inline-end': {
                $value: '{basis.form-control.padding-inline-start}',
              },
              'padding-inline-start': {
                $value: '{basis.form-control.padding-inline-start}',
              },
            },
          },
          table: {
            cell: {
              'padding-block-end': {
                $value: '{basis.space.block.sm}',
              },
              'padding-block-start': {
                $value: '{basis.space.block.sm}',
              },
              'padding-inline-end': {
                $value: '{basis.space.inline.md}',
              },
              'padding-inline-start': {
                $value: '{basis.space.inline.md}',
              },
            },
          },
        },
      },
    ]);
  });

  theme = safeTransform(
    {
      description: 'Compatibility with common tokens in the community',
    },
    () => {
      return mergeTokens([
        theme,
        {
          denhaag: {
            // `denhaag.focus` existed first, but since it now is available in Basis Tokens that will be the source of truth
            focus: {
              'background-color': {
                $type: 'color',
                $value: '{basis.focus.background-color}',
              },
              border: {
                $type: 'border',
                $value: {
                  color: '{denhaag.focus.border-color}',
                  width: '{denhaag.focus.border-width}',
                  style: '{denhaag.focus.border-style}',
                },
              },
              'border-color': {
                $type: 'color',
                $value: '{basis.focus.outline-color}',
              },
              'border-style': {
                $type: 'other',
                $value: '{basis.focus.outline-style}',
              },
              'border-width': {
                $type: 'dimension',
                $value: '{basis.focus.outline-width}',
              },
              color: {
                $type: 'color',
                $value: '{basis.focus.color}',
              },
              'outline-offset': {
                $type: 'dimension',
                $value: '{basis.focus.outline-offset}',
              },
            },
          },
          utrecht: {
            // `utrecht.focus` existed first, but since it now is available in Basis Tokens that will be the source of truth
            focus: {
              'outline-width': {
                $value: '{basis.focus.outline-width}',
              },
              'outline-color': {
                $value: '{basis.focus.outline-color}',
              },
              'outline-style': {
                $value: '{basis.focus.outline-style}',
              },
              'outline-offset': {
                $value: '{basis.focus.outline-offset}',
              },
            },
            'pointer-target': {
              'min-size': {
                $value: '{basis.pointer-target.min-block-size}',
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Accessibility design decision: minimal pointer target at WCAG AAA',
    },
    () => {
      return mergeTokens([
        theme,
        {
          basis: {
            'pointer-target': {
              'min-block-size': {
                $value: '44px',
              },
            },
          },
          // The following token is missing from the start theme
          utrecht: {
            listbox: {
              option: {
                'min-block-size': {
                  $value: '{basis.pointer-target.min-block-size}',
                },
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Create aliases to candidate component: button',
    },
    () => {
      return mergeTokens([
        theme,
        {
          utrecht: {
            button: {
              'background-color': {
                $type: 'color',
                $value: '{nl.button.default.background-color}',
              },
              'border-color': {
                $type: 'color',
                $value: '{nl.button.default.background-color}',
              },
              'border-radius': {
                $type: 'dimension',
                $value: '{nl.button.border-radius}',
              },
              'border-width': {
                $type: 'dimension',
                $value: '{nl.button.default.border-width}',
              },
              color: {
                $type: 'color',
                $value: '{nl.button.default.color}',
              },
              'column-gap': {
                $type: 'dimension',
                $value: '{nl.button.column-gap}',
              },
              'font-family': {
                $type: 'fontFamilies',
                $value: '{nl.button.font-family}',
              },
              'font-size': {
                $type: 'fontSizes',
                $value: '{nl.button.default.font-size}',
              },
              'font-weight': {
                $type: 'fontWeights',
                $value: '{nl.button.default.font-weight}',
              },
              'line-height': {
                $type: 'lineHeights',
                $value: '{nl.button.default.line-height}',
              },
              'min-block-size': {
                $type: 'dimension',
                $value: '{nl.button.min-block-size}',
              },
              'min-inline-size': {
                $type: 'dimension',
                $value: '{nl.button.min-inline-size}',
              },
              'padding-block-end': {
                $type: 'dimension',
                $value: '{nl.button.padding-block-end}',
              },
              'padding-block-start': {
                $type: 'dimension',
                $value: '{nl.button.padding-block-start}',
              },
              'padding-inline-end': {
                $type: 'dimension',
                $value: '{nl.button.padding-inline-end}',
              },
              'padding-inline-start': {
                $type: 'dimension',
                $value: '{nl.button.padding-inline-start}',
              },
              icon: {
                gap: {
                  $type: 'dimension',
                  $value: '{nl.button.column-gap}',
                },
                size: {
                  $type: 'dimension',
                  $value: '{nl.button.icon.size}',
                },
              },
              active: {
                'background-color': {
                  $type: 'color',
                  $value: '{nl.button.default.active.background-color}',
                },
                'border-color': {
                  $type: 'color',
                  $value: '{nl.button.default.active.border-color}',
                },
                color: {
                  $type: 'color',
                  $value: '{nl.button.default.active.color}',
                },
              },
              disabled: {
                'background-color': {
                  $type: 'color',
                  $value: '{nl.button.default.disabled.background-color}',
                },
                'border-color': {
                  $type: 'color',
                  $value: '{nl.button.default.disabled.border-color}',
                },
                color: {
                  $type: 'color',
                  $value: '{nl.button.default.disabled.color}',
                },
              },
              focus: {
                'background-color': {
                  $type: 'color',
                  $value: '{basis.focus.background-color}',
                },
                'border-color': {
                  $type: 'color',
                  $value: '{utrecht.button.border-color}',
                },
                color: {
                  $type: 'color',
                  $value: '{basis.focus.color}',
                },
              },
              hover: {
                'background-color': {
                  $type: 'color',
                  $value: '{nl.button.default.hover.background-color}',
                },
                'border-color': {
                  $type: 'color',
                  $value: '{nl.button.default.hover.border-color}',
                },
                color: {
                  $type: 'color',
                  $value: '{nl.button.default.hover.color}',
                },
              },
              pressed: {
                'background-color': {
                  $type: 'color',
                  $value: '{nl.button.default.pressed.background-color}',
                },
                'border-color': {
                  $type: 'color',
                  $value: '{nl.button.default.pressed.border-color}',
                },
                color: {
                  $type: 'color',
                  $value: '{nl.button.default.pressed.color}',
                },
              },
              'primary-action': {
                'background-color': {
                  $type: 'color',
                  $value: '{nl.button.primary.background-color}',
                },
                'border-color': {
                  $type: 'color',
                  $value: '{nl.button.primary.border-color}',
                },
                color: {
                  $type: 'color',
                  $value: '{nl.button.primary.color}',
                },
                'font-size': {
                  $type: 'fontSizes',
                  $value: '{nl.button.primary.font-size}',
                },
                'font-weight': {
                  $type: 'fontWeights',
                  $value: '{nl.button.primary.font-weight}',
                },
                'line-height': {
                  $type: 'lineHeights',
                  $value: '{nl.button.primary.line-height}',
                },
                active: {
                  'background-color': {
                    $type: 'color',
                    $value: '{nl.button.primary.active.background-color}',
                  },
                  'border-color': {
                    $type: 'color',
                    $value: '{nl.button.primary.active.border-color}',
                  },
                  color: {
                    $type: 'color',
                    $value: '{nl.button.primary.active.color}',
                  },
                },
                disabled: {
                  'background-color': {
                    $type: 'color',
                    $value: '{nl.button.primary.disabled.background-color}',
                  },
                  'border-color': {
                    $type: 'color',
                    $value: '{nl.button.primary.disabled.border-color}',
                  },
                  color: {
                    $type: 'color',
                    $value: '{nl.button.primary.disabled.color}',
                  },
                },
                focus: {
                  'background-color': {
                    $type: 'color',
                    $value: '{basis.focus.background-color}',
                  },
                  'border-color': {
                    $type: 'color',
                    $value: '{utrecht.button.primary-action.border-color}',
                  },
                  color: {
                    $type: 'color',
                    $value: '{basis.focus.color}',
                  },
                },
                hover: {
                  'background-color': {
                    $type: 'color',
                    $value: '{nl.button.primary.hover.background-color}',
                  },
                  'border-color': {
                    $type: 'color',
                    $value: '{nl.button.primary.hover.border-color}',
                  },
                  color: {
                    $type: 'color',
                    $value: '{nl.button.primary.hover.color}',
                  },
                },
                pressed: {
                  'background-color': {
                    $type: 'color',
                    $value: '{nl.button.primary.pressed.background-color}',
                  },
                  'border-color': {
                    $type: 'color',
                    $value: '{nl.button.primary.pressed.border-color}',
                  },
                  color: {
                    $type: 'color',
                    $value: '{nl.button.primary.pressed.color}',
                  },
                },
              },
              'secondary-action': {
                'background-color': {
                  $type: 'color',
                  $value: '{nl.button.secondary.background-color}',
                },
                'border-color': {
                  $type: 'color',
                  $value: '{nl.button.secondary.border-color}',
                },
                color: {
                  $type: 'color',
                  $value: '{nl.button.secondary.color}',
                },
                'font-size': {
                  $type: 'fontSizes',
                  $value: '{nl.button.secondary.font-size}',
                },
                'font-weight': {
                  $type: 'fontWeights',
                  $value: '{nl.button.secondary.font-weight}',
                },
                'line-height': {
                  $type: 'lineHeights',
                  $value: '{nl.button.secondary.line-height}',
                },
                active: {
                  'background-color': {
                    $type: 'color',
                    $value: '{nl.button.secondary.active.background-color}',
                  },
                  'border-color': {
                    $type: 'color',
                    $value: '{nl.button.secondary.active.border-color}',
                  },
                  color: {
                    $type: 'color',
                    $value: '{nl.button.secondary.active.color}',
                  },
                },
                disabled: {
                  'background-color': {
                    $type: 'color',
                    $value: '{nl.button.secondary.disabled.background-color}',
                  },
                  'border-color': {
                    $type: 'color',
                    $value: '{nl.button.secondary.disabled.border-color}',
                  },
                  color: {
                    $type: 'color',
                    $value: '{nl.button.secondary.disabled.color}',
                  },
                },
                focus: {
                  'background-color': {
                    $type: 'color',
                    $value: '{basis.focus.background-color}',
                  },
                  'border-color': {
                    $type: 'color',
                    $value: '{utrecht.button.secondary-action.border-color}',
                  },
                  color: {
                    $type: 'color',
                    $value: '{basis.focus.color}',
                  },
                },
                hover: {
                  'background-color': {
                    $type: 'color',
                    $value: '{nl.button.secondary.hover.background-color}',
                  },
                  'border-color': {
                    $type: 'color',
                    $value: '{nl.button.secondary.hover.border-color}',
                  },
                  color: {
                    $type: 'color',
                    $value: '{nl.button.secondary.hover.color}',
                  },
                },
                pressed: {
                  'background-color': {
                    $type: 'color',
                    $value: '{nl.button.secondary.pressed.background-color}',
                  },
                  'border-color': {
                    $type: 'color',
                    $value: '{nl.button.secondary.pressed.border-color}',
                  },
                  color: {
                    $type: 'color',
                    $value: '{nl.button.secondary.pressed.color}',
                  },
                },
              },
              subtle: {
                'background-color': {
                  $type: 'color',
                  $value: '{nl.button.subtle.background-color}',
                },
                'border-color': {
                  $type: 'color',
                  $value: '{nl.button.subtle.border-color}',
                },
                color: {
                  $type: 'color',
                  $value: '{nl.button.subtle.color}',
                },
                'font-size': {
                  $type: 'fontSizes',
                  $value: '{basis.text.font-size.md}',
                },
                'font-weight': {
                  $type: 'fontWeights',
                  $value: '{basis.text.font-weight.bold}',
                },
                'line-height': {
                  $type: 'lineHeights',
                  $value: '{basis.text.line-height.md}',
                },
                active: {
                  'background-color': {
                    $type: 'color',
                    $value: '{nl.button.subtle.active.background-color}',
                  },
                  'border-color': {
                    $type: 'color',
                    $value: '{nl.button.subtle.active.border-color}',
                  },
                  color: {
                    $type: 'color',
                    $value: '{nl.button.subtle.active.color}',
                  },
                },
                disabled: {
                  'background-color': {
                    $type: 'color',
                    $value: '{nl.button.subtle.disabled.background-color}',
                  },
                  'border-color': {
                    $type: 'color',
                    $value: '{nl.button.subtle.disabled.border-color}',
                  },
                  color: {
                    $type: 'color',
                    $value: '{nl.button.subtle.disabled.color}',
                  },
                },
                focus: {
                  'background-color': {
                    $type: 'color',
                    $value: '{basis.focus.background-color}',
                  },
                  'border-color': {
                    $type: 'color',
                    $value: '{utrecht.button.subtle.border-color}',
                  },
                  color: {
                    $type: 'color',
                    $value: '{basis.focus.color}',
                  },
                },
                hover: {
                  'background-color': {
                    $type: 'color',
                    $value: '{nl.button.subtle.hover.background-color}',
                  },
                  'border-color': {
                    $type: 'color',
                    $value: '{nl.button.subtle.hover.border-color}',
                  },
                  color: {
                    $type: 'color',
                    $value: '{nl.button.subtle.hover.color}',
                  },
                },
                pressed: {
                  'background-color': {
                    $type: 'color',
                    $value: '{nl.button.subtle.pressed.background-color}',
                  },
                  'border-color': {
                    $type: 'color',
                    $value: '{nl.button.subtle.pressed.border-color}',
                  },
                  color: {
                    $type: 'color',
                    $value: '{nl.button.subtle.pressed.color}',
                  },
                },
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Create aliases to candidate component: Code',
    },
    () => {
      return mergeTokens([
        theme,
        {
          utrecht: {
            code: {
              'background-color': {
                $value: '{nl.code.background-color}',
              },
              color: {
                $value: '{nl.code.color}',
              },
              'font-family': {
                $value: '{nl.code.font-family}',
              },
              'font-size': {
                // $value: '{nl.code.font-size}',
              },
              'line-height': {
                // $value: '{nl.code.line-height}',
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Create aliases to candidate component: Code Block',
    },
    () => {
      return mergeTokens([
        theme,
        {
          utrecht: {
            'code-block': {
              'background-color': {
                $value: '{nl.code-block.background-color}',
              },
              color: {
                $value: '{nl.code-block.color}',
              },
              'font-family': {
                $value: '{nl.code-block.font-family}',
              },
              'font-size': {
                $value: '{nl.code-block.font-size}',
              },
              'line-height': {
                $value: '{nl.code-block.line-height}',
              },
              'margin-block-start': {},
              'margin-block-end': {},
              'margin-inline-start': {},
              'margin-inline-end': {},
              'padding-block-start': {
                $value: '{nl.code-block.padding-block}',
              },
              'padding-block-end': {
                $value: '{nl.code-block.padding-block}',
              },
              'padding-inline-start': {
                $value: '{nl.code-block.padding-inline}',
              },
              'padding-inline-end': {
                $value: '{nl.code-block.padding-inline}',
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Create aliases to candidate component: Color Sample',
    },
    () => {
      return mergeTokens([
        theme,
        {
          utrecht: {
            'color-sample': {
              'background-color': {},
              'border-width': {
                $value: '{nl.color-sample.border-width}',
              },
              'border-color': {
                $value: '{nl.color-sample.border-color}',
              },
              'border-radius': {
                $value: '{nl.color-sample.border-radius}',
              },
              'block-size': {
                $value: '{nl.color-sample.block-size}',
              },
              'inline-size': {
                $value: '{nl.color-sample.inline-size}',
              },
              dark: {
                'border-color': {},
              },
              light: {
                'border-color': {},
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Create aliases to candidate component: Data Badge',
    },
    () => {
      return mergeTokens([
        theme,
        {
          utrecht: {
            'data-badge': {
              'background-color': {
                $value: '{nl.data-badge.background-color}',
              },
              'border-radius': {
                $value: '{nl.data-badge.border-radius}',
              },
              'border-width': {
                $value: '{nl.data-badge.border-width}',
              },
              color: {
                $value: '{nl.data-badge.color}',
              },
              'font-size': {
                $value: '{nl.data-badge.font-size}',
              },
              'font-weight': {
                $value: '{nl.data-badge.font-weight}',
              },
              'line-height': {
                $value: '{nl.data-badge.line-height}',
              },
              'min-block-size': {},
              'min-inline-size': {},
              'padding-block': {
                $value: '{nl.data-badge.padding-block}',
              },
              'padding-inline': {
                $value: '{nl.data-badge.padding-inline}',
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Create aliases to candidate component: Heading',
    },
    () => {
      return mergeTokens([
        theme,
        {
          utrecht: {
            'heading-1': {
              color: {
                $value: '{nl.heading.level-1.color}',
              },
              'font-family': {
                $value: '{nl.heading.level-1.font-family}',
              },
              'font-size': {
                $value: '{nl.heading.level-1.font-size}',
              },
              'font-weight': {
                $value: '{nl.heading.level-1.font-weight}',
              },
              'line-height': {
                $value: '{nl.heading.level-1.line-height}',
              },
              'margin-block-end': {
                $value: '{nl.heading.level-1.margin-block-end}',
              },
              'margin-block-start': {
                $value: '{nl.heading.level-1.margin-block-start}',
              },
            },
            'heading-2': {
              color: {
                $value: '{nl.heading.level-2.color}',
              },
              'font-family': {
                $value: '{nl.heading.level-2.font-family}',
              },
              'font-size': {
                $value: '{nl.heading.level-2.font-size}',
              },
              'font-weight': {
                $value: '{nl.heading.level-2.font-weight}',
              },
              'line-height': {
                $value: '{nl.heading.level-2.line-height}',
              },
              'margin-block-end': {
                $value: '{nl.heading.level-2.margin-block-end}',
              },
              'margin-block-start': {
                $value: '{nl.heading.level-2.margin-block-start}',
              },
            },
            'heading-3': {
              color: {
                $value: '{nl.heading.level-3.color}',
              },
              'font-family': {
                $value: '{nl.heading.level-3.font-family}',
              },
              'font-size': {
                $value: '{nl.heading.level-3.font-size}',
              },
              'font-weight': {
                $value: '{nl.heading.level-3.font-weight}',
              },
              'line-height': {
                $value: '{nl.heading.level-3.line-height}',
              },
              'margin-block-end': {
                $value: '{nl.heading.level-3.margin-block-end}',
              },
              'margin-block-start': {
                $value: '{nl.heading.level-3.margin-block-start}',
              },
            },
            'heading-4': {
              color: {
                $value: '{nl.heading.level-4.color}',
              },
              'font-family': {
                $value: '{nl.heading.level-4.font-family}',
              },
              'font-size': {
                $value: '{nl.heading.level-4.font-size}',
              },
              'font-weight': {
                $value: '{nl.heading.level-4.font-weight}',
              },
              'line-height': {
                $value: '{nl.heading.level-4.line-height}',
              },
              'margin-block-end': {
                $value: '{nl.heading.level-4.margin-block-end}',
              },
              'margin-block-start': {
                $value: '{nl.heading.level-4.margin-block-start}',
              },
            },
            'heading-5': {
              color: {
                $value: '{nl.heading.level-5.color}',
              },
              'font-family': {
                $value: '{nl.heading.level-5.font-family}',
              },
              'font-size': {
                $value: '{nl.heading.level-5.font-size}',
              },
              'font-weight': {
                $value: '{nl.heading.level-5.font-weight}',
              },
              'line-height': {
                $value: '{nl.heading.level-5.line-height}',
              },
              'margin-block-end': {
                $value: '{nl.heading.level-5.margin-block-end}',
              },
              'margin-block-start': {
                $value: '{nl.heading.level-5.margin-block-start}',
              },
            },
            'heading-6': {
              color: {
                $value: '{nl.heading.level-6.color}',
              },
              'font-family': {
                $value: '{nl.heading.level-6.font-family}',
              },
              'font-size': {
                $value: '{nl.heading.level-6.font-size}',
              },
              'font-weight': {
                $value: '{nl.heading.level-6.font-weight}',
              },
              'line-height': {
                $value: '{nl.heading.level-6.line-height}',
              },
              'margin-block-end': {
                $value: '{nl.heading.level-6.margin-block-end}',
              },
              'margin-block-start': {
                $value: '{nl.heading.level-6.margin-block-start}',
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Create aliases to candidate component: Link',
    },
    () => {
      return mergeTokens([
        theme,
        {
          utrecht: {
            link: {
              color: {},
              'text-decoration': {
                $value: '{nl.link.text-decoration-line}',
              },
              'text-decoration-color': {
                $value: '{nl.link.text-decoration-color}',
              },
              'text-decoration-thickness': {
                $value: '{nl.link.text-decoration-thickness}',
              },
              'text-underline-offset': {
                $value: '{nl.link.text-underline-offset}',
              },
              active: {
                color: {},
              },
              focus: {
                color: {
                  $value: '{basis.focus.color}',
                },
                'background-color': {
                  $value: '{basis.focus.background-color}',
                },
                'text-decoration': {},
                'text-decoration-thickness': {},
              },
              'focus-visible': {
                'text-decoration': {},
                'text-decoration-thickness': {},
              },
              hover: {
                color: {
                  $value: '{nl.link.hover.color}',
                },
                'text-decoration': {
                  $value: '{nl.link.hover.text-decoration-line}',
                },
                'text-decoration-thickness': {
                  $value: '{nl.link.hover.text-decoration-thickness}',
                },
              },
              placeholder: {
                color: {
                  $value: '{nl.link.disabled.color}',
                },
                'font-weight': {},
              },
              visited: {
                color: {
                  $value: '{nl.link.color}',
                },
              },
              icon: {
                size: {},
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Create aliases to candidate component: Mark',
    },
    () => {
      return mergeTokens([
        theme,
        {
          utrecht: {
            mark: {
              'background-color': {
                $value: '{nl.mark.background-color}',
              },
              color: {
                $value: '{nl.mark.color}',
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Create aliases to candidate component: Number Badge',
    },
    () => {
      return mergeTokens([
        theme,
        {
          utrecht: {
            'number-badge': {
              'background-color': {
                $value: '{nl.number-badge.background-color}',
              },
              'border-color': {
                $value: '{nl.number-badge.border-color}',
              },
              'border-radius': {
                $value: '{nl.number-badge.border-radius}',
              },
              'border-width': {
                $value: '{nl.number-badge.border-width}',
              },
              color: {
                $value: '{nl.number-badge.color}',
              },
              'font-family': {
                $value: '{nl.number-badge.font-family}',
              },
              'font-size': {
                $value: '{nl.number-badge.font-size}',
              },
              'font-weight': {
                $value: '{nl.number-badge.font-weight}',
              },
              'min-size': {},
              'min-block-size': {},
              'min-inline-size': {},
              'padding-block': {
                $value: '{nl.number-badge.padding-block}',
              },
              'padding-inline': {
                $value: '{nl.number-badge.padding-inline}',
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Create aliases to candidate component: Paragraph',
    },
    () => {
      return mergeTokens([
        theme,
        {
          utrecht: {
            paragraph: {
              color: {
                $value: '{nl.paragraph.color}',
              },
              'font-family': {
                $value: '{nl.paragraph.font-family}',
              },
              'font-size': {
                $value: '{nl.paragraph.font-size}',
              },
              'font-weight': {
                $value: '{nl.paragraph.font-weight}',
              },
              'line-height': {
                $value: '{nl.paragraph.line-height}',
              },
              'margin-block-start': {
                $value: '{nl.paragraph.margin-block-start}',
              },
              'margin-block-end': {
                $value: '{nl.paragraph.margin-block-end}',
              },
              lead: {
                color: {
                  $value: '{nl.paragraph.color}',
                },
                'font-size': {
                  $value: '{nl.paragraph.lead.font-size}',
                },
                'font-weight': {
                  $value: '{nl.paragraph.lead.font-weight}',
                },
                'line-height': {
                  $value: '{nl.paragraph.lead.line-height}',
                },
              },
              small: {
                color: {},
                'font-size': {},
                'font-weight': {},
                'line-height': {},
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Create aliases to candidate component: Skip Link',
    },
    () => {
      return mergeTokens([
        theme,
        {
          utrecht: {
            'skip-link': {
              'background-color': {
                $value: '{nl.skip-link.background-color}',
              },
              color: {
                $value: '{nl.skip-link.color}',
              },
              'min-block-size': {
                $value: '{nl.skip-link.min-block-size}',
              },
              'min-inline-size': {
                $value: '{nl.skip-link.min-inline-size}',
              },
              'padding-block-start': {
                $value: '{nl.skip-link.padding-block}',
              },
              'padding-block-end': {
                $value: '{nl.skip-link.padding-block}',
              },
              'padding-inline-start': {
                $value: '{nl.skip-link.padding-inline}',
              },
              'padding-inline-end': {
                $value: '{nl.skip-link.padding-inline}',
              },
              'text-decoration': {},
              'z-index': {},
              focus: {
                'background-color': {},
                color: {},
                'text-decoration': {},
              },
              'focus-visible': {
                'background-color': {},
                color: {},
                'text-decoration': {},
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: round buttons',
    },
    () => {
      return mergeTokens([
        theme,
        {
          nl: {
            button: {
              'border-radius': {
                $value: '{basis.border-radius.round}',
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: buttons are not bold',
    },
    () => {
      return mergeTokens([
        theme,
        {
          nl: {
            button: {
              'font-weight': {
                $value: '{basis.text.font-weight.default}',
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: proprietary font',
    },
    () => {
      return mergeTokens([
        theme,
        {
          basis: {
            text: {
              'font-family': {
                default: {
                  $value: '"Roobert", sans-serif',
                },
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: text color',
    },
    () => {
      const scrapedColors = ['rgb(33, 36, 38)'];

      // TODO
      return setBasisColor(theme, 'default', scrapedColors[0], { profile: 'neutral', anchor: 'color-default' });
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: link underline',
    },
    () => {
      return mergeTokens([
        theme,
        {
          nl: {
            link: {
              color: {},
              'text-decoration-color': {
                $value: '{nl.link.color}',
              },
              'text-decoration-thickness': {
                $value: '0.1ex',
              },
              'text-underline-offset': {
                $value: '0.3ex',
              },
              hover: {
                'text-decoration-line': {
                  $value: 'underline',
                },
                'text-decoration-thickness': {
                  $value: '0.3ex',
                },
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: disabled color',
    },
    () => {
      const scrapedColors = ['rgb(33, 36, 38)'];

      // return setBasisColor(theme, 'disabled', scrapedColors[0]);
      return theme;
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: primary color',
    },
    () => {
      const scrapedColors = ['#d3dd33', '#c8d400'];

      return mergeTokens([
        setBasisColor(theme, 'action-1', scrapedColors[0], { anchor: 'bg-default' }),
        {
          basis: {
            color: {
              'action-1': {
                'bg-hover': {
                  $value: scrapedColors[1],
                },
                'color-default': {
                  $value: '#000000',
                },
                'color-hover': {
                  $value: '#000000',
                },
                'color-active': {
                  $value: '#000000',
                },
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: secondary color',
    },
    () => {
      const scrapedColors = ['rgb(34, 117, 165)'];

      const tokens = setBasisColor(theme, 'action-2', scrapedColors[0], {
        anchor: 'color-default',
        profile: 'neutral',
      });

      return mergeTokens([
        tokens,
        {
          basis: {
            color: {
              'action-2': {
                // The generated bg-hover has insufficient contrast.
                // As a workaround, use the lighter bg-default as hover color too.
                // 'bg-hover': {
                //   $value: tokens['basis']['color']['action-2']['bg-document']['$value'],
                // },
                'border-default': {
                  $value: tokens['basis']['color']['action-2']['border-active']['$value'],
                },
                'border-hover': {
                  $value: tokens['basis']['color']['action-2']['border-active']['$value'],
                },
              },
            },
          },
          // Workaround for insufficient contrast due to combining two color scales in one component
          utrecht: {
            accordion: {
              button: {
                'background-color': {
                  $type: 'color',
                  $value: '{basis.color.action-2.bg-default}',
                },
                color: {
                  $type: 'color',
                  $value: '{basis.color.action-2.color-default}',
                },
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: negative color',
    },
    () => {
      const scrapedColors = ['#ce0303', '#ba3b21'];

      return setBasisColor(theme, 'negative', scrapedColors[0]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: accent-1 color',
    },
    () => {
      const scrapedColors = ['#2274a5', '#007bff', '#2d3691', '#80bdff', '#edf4f8', '#d3e2ed', '#2275a5', '#1b5d84'];

      // TODO
      // return setBasisColor(theme, 'accent-1', scrapedColors[0]);
      return theme;
    },
  );
  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: accent-2 color',
    },
    () => {
      const scrapedColors = ['#00a86b', '#4dd6b0'];

      return setBasisColor(theme, 'accent-2', scrapedColors[0]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: positive color',
    },
    () => {
      const scrapedColors = ['#00a86b'];

      return setBasisColor(theme, 'positive', scrapedColors[0]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: highlight color',
    },
    () => {
      const scrapedColors = ['yellow'];

      return setBasisColor(theme, 'highlight', scrapedColors[0]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: selected color',
    },
    () => {
      const scrapedColors = ['blue'];

      return setBasisColor(theme, 'selected', scrapedColors[0]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: secondary color',
    },
    () => {
      return mergeTokens([theme, {}]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: primary button color - not inverse',
    },
    () => {
      return mergeTokens([
        theme,
        {
          nl: {
            button: {
              primary: {
                'background-color': {
                  $type: 'color',
                  $value: '{basis.color.action-1.bg-default}',
                },
                'border-color': {
                  $type: 'color',
                  $value: '{basis.color.transparent}',
                },
                'border-width': {
                  $type: 'dimension',
                  $value: '{nl.button.default.border-width}',
                },
                color: {
                  $type: 'color',
                  $value: '{basis.color.action-1.color-default}',
                },
                active: {
                  'background-color': {
                    $type: 'color',
                    $value: '{basis.color.action-1.bg-active}',
                  },
                  'border-color': {
                    $type: 'color',
                    $value: '{basis.color.transparent}',
                  },
                  color: {
                    $type: 'color',
                    $value: '{basis.color.action-1.color-active}',
                  },
                },
                disabled: {
                  'background-color': {
                    $type: 'color',
                    $value: '{basis.color.disabled.bg-default}',
                  },
                  'border-color': {
                    $type: 'color',
                    $value: '{basis.color.disabled.border-subtle}',
                  },
                  color: {
                    $type: 'color',
                    $value: '{basis.color.disabled.color-subtle}',
                  },
                },
                hover: {
                  'background-color': {
                    $type: 'color',
                    $value: '{basis.color.action-1.bg-hover}',
                  },
                  'border-color': {
                    $type: 'color',
                    $value: '{basis.color.transparent}',
                  },
                  color: {
                    $type: 'color',
                    $value: '{basis.color.action-1.color-hover}',
                  },
                },
                pressed: {
                  'background-color': {
                    $type: 'color',
                    $value: '{basis.color.action-1-inverse.bg-default}',
                  },
                  'border-color': {
                    $type: 'color',
                    $value: '{basis.color.action-1-inverse.border-default}',
                  },
                  color: {
                    $type: 'color',
                    $value: '{basis.color.action-1-inverse.color-default}',
                  },
                  active: {
                    'background-color': {
                      $type: 'color',
                      $value: '{basis.color.action-1-inverse.bg-active}',
                    },
                    'border-color': {
                      $type: 'color',
                      $value: '{basis.color.action-1-inverse.border-active}',
                    },
                    color: {
                      $type: 'color',
                      $value: '{basis.color.action-1-inverse.color-active}',
                    },
                  },
                  disabled: {
                    'background-color': {
                      $type: 'color',
                      $value: '{basis.color.disabled-inverse.bg-default}',
                    },
                    'border-color': {
                      $type: 'color',
                      $value: '{basis.color.disabled-inverse.border-subtle}',
                    },
                    color: {
                      $type: 'color',
                      $value: '{basis.color.disabled-inverse.color-subtle}',
                    },
                  },
                  hover: {
                    'background-color': {
                      $type: 'color',
                      $value: '{basis.color.action-1-inverse.bg-hover}',
                    },
                    'border-color': {
                      $type: 'color',
                      $value: '{basis.color.action-1-inverse.border-hover}',
                    },
                    color: {
                      $type: 'color',
                      $value: '{basis.color.action-1-inverse.color-hover}',
                    },
                  },
                },
                negative: {
                  'background-color': {
                    $type: 'color',
                    $value: '{basis.color.negative.bg-default}',
                  },
                  'border-color': {
                    $type: 'color',
                    $value: '{basis.color.transparent}',
                  },
                  color: {
                    $type: 'color',
                    $value: '{basis.color.negative.color-default}',
                  },
                  active: {
                    'background-color': {
                      $type: 'color',
                      $value: '{basis.color.negative.bg-active}',
                    },
                    'border-color': {
                      $type: 'color',
                      $value: '{basis.color.transparent}',
                    },
                    color: {
                      $type: 'color',
                      $value: '{basis.color.negative.color-active}',
                    },
                  },
                  hover: {
                    'background-color': {
                      $type: 'color',
                      $value: '{basis.color.negative.bg-hover}',
                    },
                    'border-color': {
                      $type: 'color',
                      $value: '{basis.color.transparent}',
                    },
                    color: {
                      $type: 'color',
                      $value: '{basis.color.negative.color-hover}',
                    },
                  },
                  pressed: {
                    'background-color': {
                      $type: 'color',
                      $value: '{basis.color.negative-inverse.bg-default}',
                    },
                    'border-color': {
                      $type: 'color',
                      $value: '{basis.color.negative-inverse.border-default}',
                    },
                    color: {
                      $type: 'color',
                      $value: '{basis.color.negative-inverse.color-default}',
                    },
                    active: {
                      'background-color': {
                        $type: 'color',
                        $value: '{basis.color.negative-inverse.bg-active}',
                      },
                      'border-color': {
                        $type: 'color',
                        $value: '{basis.color.negative-inverse.border-active}',
                      },
                      color: {
                        $type: 'color',
                        $value: '{basis.color.negative-inverse.color-active}',
                      },
                    },
                    hover: {
                      'background-color': {
                        $type: 'color',
                        $value: '{basis.color.negative-inverse.bg-hover}',
                      },
                      'border-color': {
                        $type: 'color',
                        $value: '{basis.color.negative-inverse.border-hover}',
                      },
                      color: {
                        $type: 'color',
                        $value: '{basis.color.negative-inverse.color-hover}',
                      },
                    },
                  },
                },
                positive: {
                  'background-color': {
                    $type: 'color',
                    $value: '{basis.color.positive.bg-default}',
                  },
                  'border-color': {
                    $type: 'color',
                    $value: '{basis.color.transparent}',
                  },
                  color: {
                    $type: 'color',
                    $value: '{basis.color.positive.color-default}',
                  },
                  active: {
                    'background-color': {
                      $type: 'color',
                      $value: '{basis.color.positive.bg-active}',
                    },
                    'border-color': {
                      $type: 'color',
                      $value: '{basis.color.transparent}',
                    },
                    color: {
                      $type: 'color',
                      $value: '{basis.color.positive.color-active}',
                    },
                  },
                  hover: {
                    'background-color': {
                      $type: 'color',
                      $value: '{basis.color.positive.bg-hover}',
                    },
                    'border-color': {
                      $type: 'color',
                      $value: '{basis.color.transparent}',
                    },
                    color: {
                      $type: 'color',
                      $value: '{basis.color.positive.color-hover}',
                    },
                  },
                  pressed: {
                    'background-color': {
                      $type: 'color',
                      $value: '{basis.color.positive-inverse.bg-default}',
                    },
                    'border-color': {
                      $type: 'color',
                      $value: '{basis.color.positive-inverse.border-default}',
                    },
                    color: {
                      $type: 'color',
                      $value: '{basis.color.positive-inverse.color-default}',
                    },
                    active: {
                      'background-color': {
                        $type: 'color',
                        $value: '{basis.color.positive-inverse.bg-active}',
                      },
                      'border-color': {
                        $type: 'color',
                        $value: '{basis.color.positive-inverse.border-active}',
                      },
                      color: {
                        $type: 'color',
                        $value: '{basis.color.positive-inverse.color-active}',
                      },
                    },
                    hover: {
                      'background-color': {
                        $type: 'color',
                        $value: '{basis.color.positive-inverse.bg-hover}',
                      },
                      'border-color': {
                        $type: 'color',
                        $value: '{basis.color.positive-inverse.border-hover}',
                      },
                      color: {
                        $type: 'color',
                        $value: '{basis.color.positive-inverse.color-hover}',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: secondary color',
    },
    () => {
      return mergeTokens([theme, {}]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: secondary button - color and inverse design',
    },
    () => {
      return mergeTokens([theme, {}]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: subtle button - border',
    },
    () => {
      return mergeTokens([
        theme,
        {
          nl: {
            button: {
              subtle: {
                'border-color': {
                  $value: '{nl.button.subtle.color}',
                },
                'border-width': {
                  $value: '{basis.border-width.md}',
                },
                hover: {
                  'border-color': {
                    $value: '{nl.button.subtle.border-color}',
                  },
                },
                disabled: {
                  'border-color': {
                    $value: '{basis.color.disabled.border-subtle}',
                  },
                },
                positive: {
                  'border-color': {
                    $value: '{nl.button.subtle.positive.color}',
                  },
                  hover: {
                    'border-color': {
                      $value: '{nl.button.subtle.positive.border-color}',
                    },
                  },
                },
                negative: {
                  'border-color': {
                    $value: '{nl.button.subtle.negative.color}',
                  },
                  hover: {
                    'border-color': {
                      $value: '{nl.button.subtle.negative.border-color}',
                    },
                  },
                },
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: data badge - border',
    },
    () => {
      return mergeTokens([
        theme,
        {
          nl: {
            'data-badge': {
              'border-color': {
                $value: '{basis.color.default.border-subtle}',
              },
              'border-width': {
                $value: '{basis.border-width.sm}',
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: number badge - border',
    },
    () => {
      return mergeTokens([
        theme,
        {
          nl: {
            'number-badge': {
              'border-color': {
                $value: '{basis.color.default.border-subtle}',
              },
              'border-width': {
                $value: '{basis.border-width.sm}',
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: link color',
    },
    () => {
      return mergeTokens([theme, {}]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: mark / highlight color',
    },
    () => {
      return mergeTokens([theme, {}]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: only hover effect for Checkbox and Radio Button',
    },
    () => {
      return mergeTokens([
        theme,
        {
          basis: {
            'form-control': {
              // No hover effect by default
              hover: {
                'background-color': {
                  $value: '{basis.form-control.background-color}',
                },
                color: {
                  $value: '{basis.form-control.color}',
                },
              },
            },
          },
          utrecht: {
            checkbox: {
              hover: {
                'background-color': {
                  $value: '{basis.color.default.bg-hover}',
                },
                color: {
                  $value: '{basis.color.default.color-hover}',
                },
              },
            },
            'radio-button': {
              hover: {
                'background-color': {
                  $value: '{basis.color.default.bg-hover}',
                },
                color: {
                  $value: '{basis.color.default.color-hover}',
                },
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: general focus color / button focus color',
    },
    () => {
      return mergeTokens([theme, {}]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: focus offset',
    },
    () => {
      return mergeTokens([
        theme,
        {
          basis: {
            focus: {
              'outline-offset': {
                $value: '{basis.space.inline.sm}',
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: form control border color',
    },
    () => {
      return mergeTokens([
        theme,
        {
          basis: {
            'form-control': {
              'border-color': {
                $value: '{basis.color.action-1.border-default}',
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: checkbox color',
    },
    () => {
      return mergeTokens([theme, {}]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: radio button color',
    },
    () => {
      return mergeTokens([theme, {}]);
    },
  );

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: page footer color / inverse design',
    },
    () => {
      return mergeTokens([theme, {}]);
    },
  );

  const pxToRem = (px: number): string => `${px / 16}rem`;

  theme = safeTransform(
    {
      description: 'Sittard-Geleen design decision: font-sizes and line-heights',
    },
    () => {
      return mergeTokens([
        theme,
        {
          basis: {
            text: {
              'font-size': {
                md: {
                  $value: pxToRem(18),
                  // Regular text is fixed at 18px
                  min: {
                    $value: pxToRem(18),
                  },
                  max: {
                    $value: pxToRem(18),
                  },
                },
                lg: {
                  $value: pxToRem(20),
                  // Heading 5 font-size on sittard-geleen.nl is fluid between 16px and 20px
                  min: {
                    $value: pxToRem(18),
                  },
                  max: {
                    $value: pxToRem(20),
                  },
                },
                xl: {
                  $value: pxToRem(20),
                  // Heading 4 font-size on sittard-geleen.nl is fluid between 18px and 20px
                  min: {
                    $value: pxToRem(18),
                  },
                  max: {
                    $value: pxToRem(20),
                  },
                },
                '2xl': {
                  $value: pxToRem(24),
                  // Heading 3 font-size on sittard-geleen.nl is fluid between 20px and 24px
                  min: {
                    $value: pxToRem(20),
                  },
                  max: {
                    $value: pxToRem(24),
                  },
                },
                '3xl': {
                  $value: pxToRem(32),
                  // Heading 2 font-size on sittard-geleen.nl is fluid between 24px and 32px
                  min: {
                    $value: pxToRem(24),
                  },
                  max: {
                    $value: pxToRem(32),
                  },
                },
                '4xl': {
                  $value: pxToRem(40),
                  // Heading 1 font-size on sittard-geleen.nl is fluid between 28px and 40px
                  min: {
                    $value: pxToRem(28),
                  },
                  max: {
                    $value: pxToRem(40),
                  },
                },
              },
              'line-height': {
                sm: {
                  $value: '1.6',
                },
                md: {
                  $value: '1.6',
                },
                lg: {
                  $value: '1.2',
                },
                xl: {
                  $value: '1.2',
                },
                '2xl': {
                  $value: '1.2',
                },
                '3xl': {
                  $value: '1.2',
                },
                '4xl': {
                  $value: '1.2',
                },
              },
            },
          },
          nl: {
            heading: {
              // In Start Thema the Heading Level 1 is at 3xl. But we need one more step, so every heading level needs to adjust by one.
              'level-1': {
                'font-size': {
                  $value: '{basis.text.font-size.4xl}',
                },
                'line-height': {
                  $value: '{basis.text.line-height.4xl}',
                },
              },
              'level-2': {
                'font-size': {
                  $value: '{basis.text.font-size.3xl}',
                },
                'line-height': {
                  $value: '{basis.text.line-height.3xl}',
                },
              },
              'level-3': {
                'font-size': {
                  $value: '{basis.text.font-size.2xl}',
                },
                'line-height': {
                  $value: '{basis.text.line-height.2xl}',
                },
              },
              'level-4': {
                'font-size': {
                  $value: '{basis.text.font-size.xl}',
                },
                'line-height': {
                  $value: '{basis.text.line-height.xl}',
                },
              },
              // Heading 5 and Heading 6 have the same design
              'level-5': {
                'font-size': {
                  $value: '{basis.text.font-size.lg}',
                },
                'line-height': {
                  $value: '{basis.text.line-height.lg}',
                },
              },
              'level-6': {
                'font-size': {
                  $value: '{basis.text.font-size.lg}',
                },
                'line-height': {
                  $value: '{basis.text.line-height.lg}',
                },
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Add Open Forms default tokens',
    },
    () => {
      return mergeTokens([theme, {}]);
    },
  );

  theme = safeTransform(
    {
      description: 'Missing listbox tokens',
    },
    () => {
      return mergeTokens([
        theme,
        {
          utrecht: {
            listbox: {
              option: {
                hover: {
                  'background-color': {
                    $type: 'color',
                    $value: '{basis.form-control.hover.background-color}',
                  },
                  color: {
                    $type: 'color',
                    $value: '{basis.form-control.hover.color}',
                  },
                },
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Add legacy tokens for Utrecht Form Field Description',
    },
    () => {
      return mergeTokens([
        theme,
        {
          utrecht: {
            'form-field-description': {
              invalid: {
                color: {
                  $value: '{utrecht.form-field-error-message.color}',
                },
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Add Utrecht Data List component',
    },
    () => {
      return mergeTokens([
        theme,
        {
          utrecht: {
            'data-list': {
              'margin-block-end': {},
              'margin-block-start': {},
              'item-key': {
                color: {},
                'font-size': {},
                'font-weight': {
                  $value: '{basis.text.font-weight.bold}',
                },
                'line-height': {},
              },
              'item-value': {
                color: {},
                'font-size': {},
                'font-weight': {},
                'line-height': {},
              },
              rows: {
                'border-bottom-color': {},
                'border-bottom-width': {},
                gap: {},
                column: {
                  'min-inline-size': {},
                  'inline-size': {},
                },
                item: {
                  'margin-block-start': {},
                  'padding-block-end': {},
                  'padding-block-start': {},
                },
                'item-value': {
                  'margin-block-start': {},
                },
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Add Open Forms design tokens',
    },
    () => {
      return mergeTokens([
        theme,
        {
          of: {
            color: {
              'read-only-bg': {
                $value: '{basis.color.disabled.bg-default}',
              },
              'focus-border': {
                $value: '{basis.focus.outline-color}',
              },
              border: {
                $value: '{basis.color.default.border-default}',
              },
              'fg-muted': {
                $value: '{basis.color.default.border-subtle}',
              },
              fg: {
                $value: '{basis.color.default.color-default}',
              },
              bg: {
                $value: '{basis.color.default.bg-document}',
              },
              danger: {
                $value: '{basis.color.negative.color-default}',
              },
              warning: {
                $value: '{basis.color.warning.color-default}',
              },
              success: {
                $value: 'green',
              },
              info: {
                $value: '{basis.color.info.color-default}',
              },
              secondary: {
                $value: '{basis.color.action-2.bg-default}',
              },
              'primary-light': {
                $value: '{basis.color.action-1.bg-default}',
              },
              primary: {
                $value: '{basis.color.action-1.color-default}',
              },
            },
            text: {
              'font-size': {
                $value: '{basis.text.font-size.md}',
              },
              small: {
                'font-size': {
                  $value: '{basis.text.font-size.sm}',
                },
              },
              big: {
                'font-size': {
                  $value: '{basis.text.font-size.lg}',
                },
              },
              margin: {
                $value: '{basis.space.block.md}',
              },
            },
            alert: {
              'error-bg': {
                $value: {
                  $value: '{basis.color.negative.bg-default}',
                },
              },
              'warning-bg': {
                $value: {
                  $value: '{basis.color.warning.bg-default}',
                },
              },
              'info-bg': {
                $value: {
                  $value: '{basis.color.info.bg-default}',
                },
              },
            },
            field: {
              'border-color': {
                $value: '{basis.color.default.border-default}',
              },
            },
            typography: {
              'sans-serif': {
                'font-family': {
                  $value: '{basis.text.font-family.default}',
                },
              },
            },
            layout: {
              bg: {
                $value: '{basis.color.default.bg-default}',
              },
            },
            label: {
              'font-weight': {
                $value: '{utrecht.form-label.font-weight}',
              },
            },
            'input-group': {
              gap: {
                $value: '{basis.space.inline.lg}',
              },
            },
            'file-upload': {
              'drop-area': {
                padding: {
                  $value: '{basis.space.block.xl}',
                },
              },
            },
            summary: {
              'row-spacing': {
                $value: '{basis.space.block.md}',
              },
            },
            'language-selection': {
              gap: {
                $value: '{basis.space.inline.sm}',
              },
            },
            button: {
              bg: {
                $value: '{nl.button.default.background-color}',
              },
              border: {
                $value: '{nl.button.default.border-color}',
              },
              fg: {
                $value: '{nl.button.default.color}',
              },
              active: {
                bg: {
                  $value: '{nl.button.default.active.background-color}',
                },
                fg: {
                  $value: '{nl.button.default.active.color}',
                },
                'color-border': {
                  $value: '{nl.button.default.active.border-color}',
                },
              },
              hover: {
                bg: {
                  $value: '{nl.button.default.hover.background-color}',
                },
                fg: {
                  $value: '{nl.button.default.hover.color}',
                },
              },
              primary: {
                bg: {
                  $value: '{nl.button.primary.background-color}',
                },
                fg: {
                  $value: '{nl.button.primary.color}',
                },
                'color-border': {
                  $value: '{nl.button.primary.border-color}',
                },
                hover: {
                  bg: {
                    $value: '{nl.button.primary.hover.background-color}',
                  },
                  'color-border': {
                    $value: '{nl.button.primary.hover.border-color}',
                  },
                },
                active: {
                  bg: {
                    $value: '{nl.button.primary.active.background-color}',
                  },
                  fg: {
                    $value: '{nl.button.primary.active.color}',
                  },
                  'color-border': {
                    $value: '{nl.button.primary.active.border-color}',
                  },
                },
              },
              danger: {
                bg: {
                  $value: '{nl.button.primary.negative.background-color}',
                },
                fg: {
                  $value: '{nl.button.primary.negative.color}',
                },
                'color-border': {
                  $value: '{nl.button.primary.negative.border-color}',
                },
                hover: {
                  bg: {
                    $value: '{nl.button.primary.negative.hover.background-color}',
                  },
                  'color-border': {
                    $value: '{nl.button.primary.negative.hover.border-color}',
                  },
                },
                active: {
                  bg: {
                    $value: '{nl.button.primary.negative.active.background-color}',
                  },
                  fg: {
                    $value: '{nl.button.primary.negative.active.color}',
                  },
                  'color-border': {
                    $value: '{nl.button.primary.negative.active.border-color}',
                  },
                },
              },
            },
            select: {
              highlighted: {
                bg: {
                  $value: '{basis.color.selected.bg-hover}',
                },
              },
              menu: {
                'background-color': {
                  $value: '{utrecht.listbox.background-color}',
                },
                'border-radius': {
                  $value: '{utrecht.listbox.border-radius}',
                },
                border: {
                  $value: 'solid {utrecht.listbox.border-width} {utrecht.listbox.border-color}',
                },
                option: {
                  'background-color': {
                    $value: '{utrecht.listbox.background-color}',
                  },
                  'font-weight': {
                    $value: '{basis.text.font-weight.default}',
                  },
                  focus: {
                    'background-color': {
                      $value: '{utrecht.listbox.option.selected.background-color}',
                    },
                  },
                  'padding-block-start': {
                    $value: '{utrecht.listbox.option.padding-block-start}',
                  },
                  'padding-block-end': {
                    $value: '{utrecht.listbox.option.padding-block-end}',
                  },
                  'padding-inline-start': {
                    $value: '{utrecht.listbox.option.padding-inline-start}',
                  },
                  'padding-inline-end': {
                    $value: '{utrecht.listbox.option.padding-inline-end}',
                  },
                },
              },
            },
            checkbox: {
              bg: {
                $value: '{basis.color.transparent}',
              },
            },
            'page-footer': {
              bg: {
                $value: '{utrecht.page-footer.background-color}',
              },
              fg: {
                $value: '{utrecht.page-footer.color}',
              },
            },
          },
          'of-utrecht': {
            'form-field-description': {
              errors: {
                'font-weight': {
                  $value: '{utrecht.form-field-error-message.font-weight}',
                },
                'line-height': {
                  $value: '{utrecht.form-field-error-message.line-height}',
                },
              },
            },
            'form-field': {
              radio: {
                'margin-block-start': {
                  $value: '{basis.space.block.md}',
                },
              },
            },
            link: {
              muted: {
                color: {
                  $value: '{utrecht.link.placeholder.color}',
                },
              },
            },
          },
        },
      ]);
    },
  );

  /*

    --of-select-menu-box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1);
    --of-select-menu-margin-block-end: 0;
    --of-select-menu-margin-block-start: -1px;
    --of-select-menu-option-font-weight: normal;
    --of-button-anchor-active-bg: transparent;
    --of-button-anchor-active-color-border: transparent;
    --of-button-anchor-active-fg: #014e74;
    --of-button-anchor-bg: transparent;
    --of-button-anchor-color-border: transparent;
    --of-button-anchor-fg: var(--utrecht-link-color);
    --of-button-anchor-focus-color-border: var(--of-color-focus-border);
    --of-button-anchor-focus-visible-color-border: var(--of-color-focus-border);
    --of-button-anchor-hover-bg: transparent;
    --of-button-anchor-hover-color-border: transparent;
    --of-button-danger-focus-color-border: #000000;
    --of-button-danger-focus-visible-color-border: #000000;
    --of-button-focus-color-border: var(--of-color-focus-border);
    --of-button-focus-visible-color-border: var(--of-color-focus-border);
    --of-button-primary-focus-color-border: #000000;
    --of-button-primary-focus-visible-color-border: #000000;
    --of-cosign-bg: var(--of-checkbox-bg);
    --of-fieldset-legend-color: var(--of-color-primary);
    --of-header-logo-height: auto;
    --of-header-logo-url: none;
    --of-header-logo-width: auto;
    --of-heading-fg: var(--of-color-fg);
    --of-helptext-bg: #d3e3ec;
    --of-helptext-fg: var(--of-color-fg);
    --of-input-font-weight: bold;
    --of-input-group-align-items: center;
    --of-input-group-justify-content: flex-start;
    --of-login-button-logo-dark-focus-color-border: var(--of-color-focus-border);
    --of-login-button-logo-dark-focus-visible-color-border: var(--of-color-focus-border);
    --of-login-button-logo-light-focus-color-border: #000000;
    --of-login-button-logo-light-focus-visible-color-border: #000000;
    --of-page-header-bg: #ffffff;
    --of-page-header-desktop-padding: var(--of-text-desktop-margin);
    --of-page-header-laptop-padding: var(--of-text-laptop-margin);
    --of-page-header-logo-return-url-min-height: 50px;
    --of-page-header-logo-return-url-min-width: 100px;
    --of-page-header-logo-return-url-mobile-min-height: 25px;
    --of-page-header-logo-return-url-mobile-min-width: 50px;
    --of-page-header-mobile-padding: 10px 15px 10px 10px;
    --of-page-header-tablet-padding: var(--of-text-tablet-margin);
    --of-progress-indicator-mobile-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
    --of-progress-indicator-mobile-margin: 15px;
    --of-progress-indicator-sticky-spacing: 20px;

    --of-text-desktop-margin: var(--of-text-margin);
    --of-text-laptop-margin: var(--of-text-margin);
    --of-text-mobile-margin: var(--of-text-margin);
    --of-text-tablet-margin: var(--of-text-margin);
    --of-utrecht-form-field-description-background-color: #d3e3ec;
    --of-utrecht-form-field-description-border-left-color: var(--of-color-info);
    --of-utrecht-form-field-description-border-left-width: 4px;
    --of-utrecht-form-field-description-line-height: 1.5;
    --of-utrecht-form-field-description-padding-block: 11px;
    --of-utrecht-form-field-description-padding-inline: 16px;
    --of-utrecht-link-font-family: var(--of-typography-sans-serif-font-family);



    --of-page-footer-bg: var(--of-color-primary);
    --of-page-footer-fg: var(--of-color-bg);
    --of-checkbox-bg: #F3F3F3;
    --of-button-active-bg: #bfbfbf;
    --of-button-active-color-border: #5e5e5e;
    --of-button-active-fg: var(--of-color-fg);
    --of-utrecht-link-muted-color: var(--of-color-fg-muted);
--of-alert-error-bg: #f8d7da;
--of-alert-info-bg: #d9ebf7;
--of-alert-warning-bg: #fff3cd;
--of-color-bg: #ffffff;
--of-color-border: #767676;
--of-color-danger: #D52B1E;
--of-color-fg-muted: #767676;
--of-color-fg: #000000;
--of-color-focus-border: #0177b2;
--of-color-info: #007bc7;
--of-color-primary-light: #d3e3ec;
--of-color-primary: #01689B;
--of-color-read-only-bg: #e9ecef;
--of-color-secondary: #cee0ea;
--of-color-success: green;
--of-color-warning: #E17000;
--of-field-border-color: #979797;
--of-file-upload-drop-area-padding: 15px;
--of-input-group-gap: 12px;
--of-label-font-weight: normal;
--of-language-selection-gap: .2em;
--of-layout-bg: #E6E6E6;
--of-summary-row-spacing: 10px;
--of-text-big-font-size: 1.125rem;
--of-text-font-size: 1rem;
--of-text-margin: 20px;
--of-text-small-font-size: 0.875rem;
--of-typography-sans-serif-font-family: "Fira Sans", Calibri, sans-serif;
    --of-utrecht-form-field-description-errors-font-weight: bold;
    --of-utrecht-form-field-description-errors-line-height: 1.33;
    --of-button-bg: var(--of-color-bg);
    --of-button-color-border: var(--of-color-border);
    --of-button-danger-active-bg: #a02017;
    --of-button-danger-active-color-border: #881b13;
    --of-button-danger-active-fg: #ee837d;
    --of-button-danger-bg: var(--of-color-danger);
    --of-button-danger-color-border: #aa2218;
    --of-button-danger-fg: #fce9e8;
    --of-button-danger-hover-bg: #aa2218;
    --of-button-danger-hover-color-border: #881b13;
    --of-button-primary-active-bg: #01608f;
    --of-button-primary-active-color-border: #01537c;
    --of-button-primary-active-fg: #bfbfbf;
    --of-button-primary-bg: #0177b2;
    --of-button-primary-color-border: var(--of-color-primary);
    --of-button-primary-fg: #ffffff;
    --of-button-primary-hover-bg: #016698;
    --of-button-primary-hover-color-border: #01537c;
    --of-button-fg: var(--of-color-fg);
    --of-button-hover-bg: #cccccc;
    --of-button-hover-color-border: #5e5e5e;

    --of-select-menu-background-color: var(--of-color-bg);
    --of-select-menu-border-radius: 0;
                --of-select-highlighted-bg: #E6E6E6;
    --of-select-menu-border: solid 1px var(--of-color-border);
    --of-select-menu-option-focus-background-color: #E6E6E6;
    --of-select-menu-option-padding-block-end: 10px;
    --of-select-menu-option-padding-block-start: 10px;
    --of-select-menu-option-padding-inline-end: 12px;
    --of-select-menu-option-padding-inline-start: 12px;

    */

  return theme;
};
