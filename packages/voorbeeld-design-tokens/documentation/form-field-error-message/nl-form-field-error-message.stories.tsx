import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormFieldErrorMessage } from '@nl-design-system-candidate/form-field-error-message-react/css';
import * as Stories from '@nl-design-system-candidate/form-field-error-message-docs/stories/form-field-error-message.stories';
import reactMeta from '@nl-design-system-candidate/form-field-error-message-docs/stories/form-field-error-message.react.meta';

const meta = {
  id: 'nl-form-field-error-message',
  title: 'Components/Form Field Error Message/Candidate',
  ...reactMeta,
  parameters: {
    ...((reactMeta as Meta).parameters ?? {}),
    actions: {
      ...((reactMeta as Meta).parameters?.actions ?? {}),
      disable: true,
    },
  },
} satisfies Meta<typeof FormFieldErrorMessage>;

type Story = StoryObj<typeof meta>;

export default meta;

export const VoorbeeldTheme: Story = {
  ...Stories.FormFieldErrorMessage,
  name: 'Voorbeeld theme',
  parameters: {
    theme: 'voorbeeld-theme',
  },
};

export const StartTheme: Story = {
  ...Stories.FormFieldErrorMessage,
  name: 'Start theme',
  parameters: {
    theme: 'start-theme',
  },
};
