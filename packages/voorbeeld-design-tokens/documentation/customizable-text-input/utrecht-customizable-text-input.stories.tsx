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
    end: (
      <span style={{ display: 'block', paddingInline: 'var(--utrecht-space-inline-xs)' }}>
        <UtrechtIconSearch />
      </span>
    ),
    children: <Textbox id="textbox-default" type="text" defaultValue="The quick brown fox jumps over the lazy dog" />,
  },
  argTypes: {
    children: { control: false },
    end: { control: false },
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
