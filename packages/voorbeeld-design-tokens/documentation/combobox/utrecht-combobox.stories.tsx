import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Combobox,
  FormField,
  FormLabel,
  Listbox,
  ListboxOption,
  Textbox,
} from '@utrecht/component-library-react/dist/css-module';

const options = [
  { id: 'utrecht-combobox-option-drenthe', label: 'Drenthe', active: true },
  { id: 'utrecht-combobox-option-flevoland', label: 'Flevoland' },
  { id: 'utrecht-combobox-option-friesland', label: 'Friesland' },
  { id: 'utrecht-combobox-option-gelderland', label: 'Gelderland' },
  { id: 'utrecht-combobox-option-groningen', label: 'Groningen' },
  { id: 'utrecht-combobox-option-limburg', label: 'Limburg' },
  { id: 'utrecht-combobox-option-noord-brabant', label: 'Noord-Brabant' },
  { id: 'utrecht-combobox-option-noord-holland', label: 'Noord-Holland' },
  { id: 'utrecht-combobox-option-overijssel', label: 'Overijssel' },
  { id: 'utrecht-combobox-option-utrecht', label: 'Utrecht' },
  { id: 'utrecht-combobox-option-zeeland', label: 'Zeeland' },
  { id: 'utrecht-combobox-option-zuid-holland', label: 'Zuid-Holland' },
];

const meta = {
  id: 'utrecht-combobox',
  title: 'Components/Combobox/Utrecht',
  component: Combobox,
  parameters: { actions: { disable: true } },
  render: (args) => (
    <div style={{ minBlockSize: '40em' }}>
      <FormField
        label={<FormLabel htmlFor="utrecht-combobox-input">Provincie</FormLabel>}
        input={
          <Combobox {...args}>
            <Textbox
              id="utrecht-combobox-input"
              className="utrecht-combobox__input"
              role="combobox"
              autoComplete="off"
              aria-autocomplete="list"
              aria-expanded="true"
              aria-controls="utrecht-combobox-popover"
              aria-activedescendant="utrecht-combobox-option-drenthe"
            />
            <Listbox
              id="utrecht-combobox-popover"
              className="utrecht-combobox__popover utrecht-combobox__popover--block-end"
              tabIndex={-1}
            >
              {options.map(({ id, label, active }) => (
                <ListboxOption key={id} id={id} active={active}>
                  {label}
                </ListboxOption>
              ))}
            </Listbox>
          </Combobox>
        }
      />
    </div>
  ),
} satisfies Meta<typeof Combobox>;

type Story = StoryObj<typeof meta>;

export default meta;

export const VoorbeeldTheme: Story = {
  name: 'Voorbeeld theme',
  parameters: { theme: 'voorbeeld-theme' },
};

export const UtrechtTheme: Story = {
  name: 'Utrecht theme',
  parameters: { theme: 'utrecht-theme' },
};
