import { type Theme, mergeTokens } from '@nl-design-system-community/design-tokens-schema';
import { setBasisColor, createTransform } from '@nl-design-system-community/sittard-geleen-design-tokens/src/util.mts';
import { generateTheme as generateSittardGeleenTheme } from '@nl-design-system-community/sittard-geleen-design-tokens/src/generate-theme.mts';

export const generateTheme = (
  config: { initialTheme?: Theme; log?: boolean; colorScheme?: 'light' | 'dark' } = {},
): Theme => {
  // Use an existing theme as initial Design Tokens JSON, stack the Vidar modifications on top of that.
  const initialTheme = generateSittardGeleenTheme(config);

  // Create a new theme.
  let theme: Theme = structuredClone(initialTheme);

  const safeTransform = createTransform({ log: true });

  theme = safeTransform(
    {
      description: 'Vidar design decision: primary color',
    },
    () => {
      return mergeTokens([
        setBasisColor(theme, 'action-1', '#00577e', {
          anchor: 'bg-default',
          inverseSeedColor: '#004166',
          inverseAnchor: 'bg-default',
        }),
        {
          basis: {
            color: {
              'action-1': {
                'color-default': {
                  $value: '#ffffff',
                },
                'color-hover': {
                  $value: '#ffffff',
                },
                'color-active': {
                  $value: '#ffffff',
                },
                'border-default': {
                  $value: '#ffffff',
                },
                'border-hover': {
                  $value: '#ffffff',
                },
                'border-active': {
                  $value: '#ffffff',
                },
                'color-subtle': {
                  $value: '#000000',
                },
                'color-document': {
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
      description: 'Vidar design decision: secondary color',
    },
    () => {
      return mergeTokens([
        setBasisColor(theme, 'action-2', '#e4253b', {
          anchor: 'color-default',
          inverseSeedColor: '#c70022',
          inverseAnchor: 'bg-default',
        }),
        {
          basis: {
            color: {
              'action-2': {
                'border-default': {
                  $value: '#000000',
                },
                'border-hover': {
                  $value: '#000000',
                },
                'border-active': {
                  $value: '#000000',
                },
                'color-subtle': {
                  $value: '#000000',
                },
                'bg-default': {
                  $value: '#ffffff',
                },
              },
            },
          },
          utrecht: {
            accordion: {
              button: {
                color: {
                  $type: 'color',
                  $value: '{basis.color.default.color-default}',
                },
                active: {
                  color: {
                    $type: 'color',
                    $value: '{basis.color.default.color-active}',
                  },
                },
                hover: {
                  color: {
                    $type: 'color',
                    $value: '{basis.color.default.color-hover}',
                  },
                },
              },
            },
          },
          nl: {
            button: {
              secondary: {
                'background-color': {
                  $type: 'color',
                  $value: '{basis.color.action-2.color-default}',
                },
                color: {
                  $type: 'color',
                  $value: '#ffffff',
                },
                active: {
                  'background-color': {
                    $type: 'color',
                    $value: '{basis.color.action-2.color-active}',
                  },
                  color: {
                    $type: 'color',
                    $value: '#ffffff',
                  },
                },
                hover: {
                  'background-color': {
                    $type: 'color',
                    $value: '{basis.color.action-2.color-hover}',
                  },
                  color: {
                    $type: 'color',
                    $value: '#ffffff',
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
      description: 'Vidar design decision: focus color',
    },
    () => {
      return mergeTokens([
        theme,
        {
          basis: {
            focus: {
              'background-color': {
                $value: '#ffdd00',
              },
              color: {
                $value: '#0b0c0c',
              },
            },
          },
        },
      ]);
    },
  );

  theme = safeTransform(
    {
      description: 'Vidar design decision: text color',
    },
    () => {
      const scrapedColors = ['rgb(33, 36, 38)'];

      return setBasisColor(theme, 'default', scrapedColors[0], { profile: 'neutral', anchor: 'color-default' });
    },
  );

  return theme;
};
