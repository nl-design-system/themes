import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textbox } from '@utrecht/component-library-react/dist/css-module';
import { CustomizableTextInput } from '@utrecht/customizable-text-input-react/css';
import { UtrechtIconSearch } from '@utrecht/web-component-library-react';

const meta = {
  id: 'utrecht-customizable-text-input',
  title: 'Components/Customizable Text Input/Utrecht',
  component: CustomizableTextInput,
  parameters: { actions: { disable: true } },
  args: {
    inputId: 'textbox-default',
    labelEnd: (
      <span className="utrecht-customizable-text-input-example__icon">
        <span className="utrecht-customizable-text-input-example__visually-hidden">Zoeken</span>
        <UtrechtIconSearch aria-hidden="true" />
      </span>
    ),
    children: <Textbox id="textbox-default" type="search" defaultValue="The quick brown fox jumps over the lazy dog" />,
  },
  argTypes: {
    children: { control: false },
    inputId: { control: false },
    labelEnd: { control: false },
  },
} satisfies Meta<typeof CustomizableTextInput>;

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
