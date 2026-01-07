/* eslint-disable react/prop-types */
import { Meta, StoryObj } from '@storybook/react-vite';
import purmerendScrapedTokens from './project-wallace-purmerend.tokens.json';
import { getTokenValue, isDesignToken } from '@nl-design-system-unstable/tokens-lib/src/design-tokens';
// import {} from '@utrecht/component-library-react/dist/css-module';
import { ComboboxStory } from './Combobox';
import { useId } from 'react';

const projectWallaceWorkaround = (projectWallaceValue) => {
  let value = projectWallaceValue;

  // Project Wallace workaround
  if (Array.isArray(value) && typeof value[0] === 'string') {
    value = value[0];
  }
  return value;
};

const unquote = (fontFamily: string) => fontFamily.replace(/^["'\s]+|["'\s+]$/g, '');

const stringSort = (a, b) => (a === b ? 0 : a > b ? 1 : -1);
const sortByName = ([, a], [, b]) =>
  stringSort(unquote(projectWallaceWorkaround(getTokenValue(a))), unquote(projectWallaceWorkaround(getTokenValue(b))));

const FontFamilyPickerCombobox = ({ tokens, ...restProps }) => {
  // console.log(Object.entries(tokens).map(unquote(projectWallaceWorkaround(getTokenValue(a)))));
  const props = {
    defaultValue: '',
    expanded: false,
    options: Object.entries(tokens['FontFamily'])
      .filter(([_, value]) => isDesignToken(value))
      // Filter out any values that are not CSS font-family values.
      .filter(([_, token]) => !/var\(/.test(String(getTokenValue(token))))

      // Filter out any values that are CSS font family `generic-name` values.
      .filter(([_, token]) => {
        const value = projectWallaceWorkaround(String(getTokenValue(token)));

        const isGenericName = ['monospace', 'sans-serif', 'serif'].includes(value);

        return !isGenericName;
      })
      .sort(sortByName)

      // For example, exclude: var(--my-fav-font)
      .map(([_, token], index) => {
        let fontFamily = unquote(projectWallaceWorkaround(getTokenValue(token)));

        // Exclude any CSS font-family fallback values from the design token.
        // For example: "Times New Roman", sans-serif
        // will become: "Times New Roman"
        fontFamily = String(getTokenValue(token as any)).replace(/,.*/gim, '');

        return {
          selected: index === 1,
          value: String(getTokenValue(token as any)),
          label: <div style={{ fontFamily }}>{fontFamily}</div>,
        };
      }),
    ...restProps,
  };

  return <ComboboxStory id={props.id || useId()} {...props} />;
};

const FontFamilyPoc = ({ tokens }) => {
  return (
    <div className="utrecht-document voorbeeld-theme">
      <FontFamilyPickerCombobox tokens={tokens} id="xxasdijfpi54315jfg5" label="basis.typography.body.font-family" />

      <FontFamilyPickerCombobox tokens={tokens} id="xxasdijfpi54315jfg5" label="basis.typography.heading.font-family" />

      <FontFamilyPickerCombobox
        tokens={tokens}
        id="xxasdijfpi54315jfg5"
        label="basis.typography.input.font-family"
        expanded
      />
    </div>
  );
};

const meta = {
  title: 'Theme Builder/FontFamily Picker',
  id: 'theme-builder-fontfamily-picker',
  component: FontFamilyPoc,
  args: {
    tokens: {},
  },
  argTypes: {
    tokens: {},
  },
} satisfies Meta<typeof FontFamilyPoc>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Purmerend: Story = {
  args: {
    tokens: purmerendScrapedTokens,
  },
};
