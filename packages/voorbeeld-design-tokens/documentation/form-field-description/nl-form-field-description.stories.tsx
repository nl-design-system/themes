import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormFieldDescription } from '@nl-design-system-candidate/form-field-description-react/css';
import * as Stories from '@nl-design-system-candidate/form-field-description-docs/stories/form-field-description.stories';
import reactMeta from '@nl-design-system-candidate/form-field-description-docs/stories/form-field-description.react.meta';

const meta = {
  id: 'nl-form-field-description',
  title: 'Components/Form Field Description/Candidate',
  ...reactMeta,
  parameters: {
    ...((reactMeta as Meta).parameters ?? {}),
    actions: {
      ...((reactMeta as Meta).parameters?.actions ?? {}),
      disable: true,
    },
  },
} satisfies Meta<typeof FormFieldDescription>;

type Story = StoryObj<typeof meta>;

export default meta;

export const VoorbeeldTheme: Story = {
  ...Stories.FormFieldDescription,
  name: 'Voorbeeld theme',
  parameters: {
    theme: 'voorbeeld-theme',
  },
};

export const StartTheme: Story = {
  ...Stories.FormFieldDescription,
  name: 'Start theme',
  parameters: {
    theme: 'start-theme',
  },
};
