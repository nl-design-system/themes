/* eslint-disable react/prop-types */
import { Meta, StoryObj } from '@storybook/react';
import purmerendScrapedTokens from './project-wallace-purmerend.tokens.json';
import { getTokenValue, isDesignToken } from '@nl-design-system-unstable/theme-toolkit/src/design-tokens';
import { ColorSample } from '@utrecht/component-library-react/dist/css-module';
import { ComboboxStory } from './Combobox';
import { useId } from 'react';

const ColorPickerCombobox = ({ tokens, ...restProps }) => {
  const props = {
    defaultValue: '',
    expanded: false,
    options: Object.entries(tokens['Color'])
      .filter(([_, value]) => isDesignToken(value))
      .map(([_, token], index) => {
        return {
          selected: index === 1,
          value: String(getTokenValue(token as any)),
          label: (
            <>
              <ColorSample color={String(getTokenValue(token as any))} />
              {String(getTokenValue(token as any))}
            </>
          ),
        };
      }),
    ...restProps,
  };

  return <ComboboxStory id={props.id || useId()} {...props} />;
};

const ColorPickerPoc = ({ tokens }) => {
  return (
    <div className="utrecht-document voorbeeld-theme">
      <ColorPickerCombobox
        tokens={tokens}
        id="xxasdijfpij21435"
        label="basis.link.color"
        value="purmerend.Color.blauw-12"
      />
      <ColorPickerCombobox tokens={tokens} id="xxasdijfpij123f" label="basis.primary-action.seed.color" />
      <ColorPickerCombobox
        tokens={tokens}
        id="xxasdijfpij123f"
        label="basis.primary-action.background-color"
        value="navy"
      />
      <ColorPickerCombobox tokens={tokens} id="xxasdijfpij123f" label="basis.primary-action.color" value="white" />
      <ColorPickerCombobox tokens={tokens} id="xxasdijfpij123f" label="basis.primary-action.hover.color" />
      <ColorPickerCombobox tokens={tokens} id="xxasdijfpi123jf" label="basis.secondary-action.seed.color" />
      <ColorPickerCombobox tokens={tokens} id="xxasdijfpi132jf" label="basis.disabled.seed.color" />
      <ColorPickerCombobox tokens={tokens} id="xxasdijfpi54315jf" label="basis.form-accent.seed.color" expanded />
    </div>
  );
};

const meta = {
  title: 'Theme Builder/Color Picker',
  id: 'theme-builder-color-picker',
  component: ColorPickerPoc,
  args: {
    tokens: {},
  },
  argTypes: {
    tokens: {},
  },
} satisfies Meta<typeof ColorPickerPoc>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Purmerend: Story = {
  args: {
    tokens: purmerendScrapedTokens,
  },
};
