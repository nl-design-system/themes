import { generateScale } from '@nl-design-system-community/color-scale-generator';
import {
  type Theme,
  setExtension,
  mergeTokens,
  StrictThemeSchema,
  ColorValueSchema,
  stringifyColor,
} from '@nl-design-system-community/design-tokens-schema';

export const PARENT_KEY_EXTENSION = 'nl.nldesignsystem.parent-key';

/**
 * Design the JSON format used by Tokens Studio where design tokens are grouped in token sets.
 */
export const hasParentKeys = (obj: Object): boolean => {
  const keys = Object.keys(obj);

  return keys.includes('$metadata') || keys.includes('$themes');
};

/**
 * Strip the top-level 'layer' of properties and merge their children into the top-level
 */
export const setParentKeyExtensions = (tokens: Record<string, unknown>) => {
  return Object.entries(tokens).reduce(
    (result, [property, value]) => {
      if (property.startsWith('$')) {
        return result;
      } else {
        console.log('x', value);
        setExtension(value, PARENT_KEY_EXTENSION, property);
      }
    },
    {} as Record<string, unknown>,
  );
};

/**
 * Group design tokens into design token sets, based on the parent-key stored in `$extensions`
 */
export const groupByParentKeys = (tokens: Record<string, unknown>, defaultTokenSet: string = 'unknown') => {
  return Object.entries(tokens).reduce(
    (result, [property, value]) => {
      const tokenSetName =
        value['$extension'] && value['$extension'][PARENT_KEY_EXTENSION]
          ? value['$extension'][PARENT_KEY_EXTENSION]
          : defaultTokenSet;

      return {
        ...result,
        [tokenSetName]: value,
      };
    },
    {} as Record<string, unknown>,
  );
};

export const tokensScale = ({ data }) =>
  Object.fromEntries(
    Object.entries(data).map(([key, $value]) => {
      const parsedValue = ColorValueSchema.safeParse($value);
      return [
        key,
        {
          $type: 'color',
          $value: parsedValue.success ? stringifyColor(parsedValue.data) : $value,
        },
      ];
    }),
  );

export const setBasisColor = (
  theme: Theme,
  name: string,
  seedColor: string,
  profile: {
    anchor?: string;
    chroma?: number;
    inverseAnchor?: string;
    inverseSeedColor?: string;
  } = {},
): Theme => {
  const defaultProfile = {
    profile: name.startsWith('accent-')
      ? 'accent'
      : name === 'disabled'
        ? 'disabled'
        : name.startsWith('action-')
          ? 'accent'
          : name === 'highlight'
            ? 'highlight'
            : name === 'positive'
              ? 'positive'
              : name === 'negative'
                ? 'negative'
                : name === 'warning'
                  ? 'warning'
                  : 'neutral',
  };

  return mergeTokens([
    theme,
    {
      basis: {
        color: {
          [name]: tokensScale(
            generateScale(seedColor, {
              ...defaultProfile,
              ...profile,
            }),
          ),
          [`${name}-inverse`]: tokensScale(
            generateScale(profile.inverseSeedColor || seedColor, {
              ...defaultProfile,
              ...profile,
              inverse: true,
              anchor: profile.inverseAnchor || 'auto',
            }),
          ),
        },
      },
    },
  ]);
};

export const createTransform =
  ({ log = false, strict = true }: { log?: boolean; strict?: boolean }) =>
  (step: { description: string }, callback: () => Theme) => {
    if (log) {
      console.log(step.description);
    }

    const transformedTheme = callback();

    const result = StrictThemeSchema.safeParse(transformedTheme) satisfies Theme;

    if (strict && !result.success) {
      console.error(result.error);
      console.error(`Error during: ${step.description}`);
      throw new Error();
    }

    return transformedTheme;
  };
