/* eslint-disable react/prop-types */
import { Meta, StoryObj } from '@storybook/react-vite';
import purmerendScrapedTokens from './project-wallace-purmerend.tokens.json';
import { getTokenValue, isDesignToken } from '@nl-design-system-unstable/tokens-lib/src/design-tokens';
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
        value="purmerend.Color.cyan-6"
      />
      <ColorPickerCombobox tokens={tokens} id="xxasdijfpij123f" label="basis.primary-action.seed.color" value="white" />
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
      <ColorPickerCombobox tokens={tokens} id="xxasdijfpi54315jf" label="basis.form-accent.seed.color" />

      <ColorPickerCombobox tokens={tokens} id="xxasdijfpi54315j1f" label="basis.border.color" />
      <ColorPickerCombobox tokens={tokens} id="xxasdijfpi54315j2f" label="basis.border.disabled.color" />
      <ColorPickerCombobox tokens={tokens} id="xxasdijfpi54315j4f" label="basis.border.focus.color" />

      <ColorPickerCombobox tokens={tokens} id="xxasdijfpi54315j3f" label="basis.document/background.color" />
      <ColorPickerCombobox tokens={tokens} id="xxasdijfpi54315j6f" label="basis.border.line.color" />
      <ColorPickerCombobox tokens={tokens} id="xxasdijfpi54315jf5" label="basis.border.focus.color" />

      <ColorPickerCombobox tokens={tokens} id="xvxasdijfpi54315jf5" label="basis.button.color" />
      <ColorPickerCombobox tokens={tokens} id="xxvasdijfpi54315jf5" label="basis.button.hover.color" />
      <ColorPickerCombobox tokens={tokens} id="xxasvdijfpi54315jf5" label="basis.button.disabled.color" />
      <ColorPickerCombobox tokens={tokens} id="xxasvdijfpi54315jf5" label="basis.button.primary.background.color" />

      <ColorPickerCombobox tokens={tokens} id="dxxasdijfpi54315jf5" label="basis.alert.error.color" />
      <ColorPickerCombobox tokens={tokens} id="xxasdijfpi54315jf5" label="basis.alert.oke.color" />
      <ColorPickerCombobox tokens={tokens} id="xxasdijfpi54315jf5" label="basis.alert.warning.color" />

      <ColorPickerCombobox tokens={tokens} id="dxxasdijfpi54315jf5" label="basis.form-control.focus.background.color" />
      <ColorPickerCombobox tokens={tokens} id="xdxasdijfpi54315jf5" label="basis.form-control.focus.border.color" />
      <ColorPickerCombobox tokens={tokens} id="xxasddijfpi54315jf5" label="basis.form-control.focus.color" />
      <ColorPickerCombobox tokens={tokens} id="xxasdijfpi54d315jf5" label="basis.form-control.disabled.accent.color" />

      <ColorPickerCombobox
        tokens={tokens}
        id="xxasdijfpi54315jf5"
        label="basis.footer-contact-button-background-hover.color"
      />
      <ColorPickerCombobox
        tokens={tokens}
        id="xxasdijfpi54315jf5"
        label="basis.footer-contact-button-text-hover.color"
      />

      <ColorPickerCombobox tokens={tokens} id="dxxasdijfpi54315jf5" label="basis.form-border.color" />
      <ColorPickerCombobox tokens={tokens} id="xdxasdijfpi54315jf5" label="basis.menu.icon.color" />
      <ColorPickerCombobox
        tokens={tokens}
        id="xxasddijfpi54315jf5"
        label="basis.vacature.dienstverband.background.color"
      />

      <ColorPickerCombobox tokens={tokens} id="xxasdijdfpi54315jf5" label="basis.link.visited.color" />
      <ColorPickerCombobox tokens={tokens} id="xxasdijfpi54d315jfg5" label="basis.primary.icon.color" expanded />
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
