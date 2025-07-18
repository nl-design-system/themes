import { ReactNode } from 'react';

export const STORY_GROUPS: { [index: string]: string } = {
  AVATAR: 'Avatars',
  ALERT: 'Alerts',
  BUTTON_DEFAULT: 'Default Button',
  BUTTON_LINK_DEFAULT: 'Link that looks like a button',
  CHECKBOX: 'Checkbox',
  RADIO_BUTTON: 'Radio Button',
  LINK_BUTTON_DEFAULT: 'Button that looks like a link',
  PARAGRAPH: 'Paragraph',
  HEADINGS: 'Headings',
  LISTS: 'Lists',
  TEXTBOX: 'Textbox',
  TEXTAREA: 'Textarea',
  SELECT: 'Select',
  BADGES: 'Badges',
  LINK: 'Link',
  FORM_LABEL_DEFAULT: 'Default Form Label',
  FORM_LABEL_CHECKBOX: 'Form Label for Checkbox',
  FORM_LABEL_RADIO: 'Form Label for Radio Button',
  EMPHASIS: 'Emphasis',
  FORM_FIELD_DESCRIPTION: 'Form Field Description',
  FORM_FIELD_ERROR_MESSAGE: 'Form Field Error Message',
  STEPS: 'Steps',
  LINK_LIST: 'Link List',
  SIDE_NAVIGATION: 'Side Navigation',
  ICON: 'Icons',
  CASE_CARD: 'Case Card',
  PAGE_HEADER: 'Page Header',
};

export interface ComponentStory {
  storyId: string;
  component?: string;
  group?: string;
  name: string;
  state?: boolean;
  inline?: boolean;
  render: () => ReactNode;
  detectTokens?: {
    anyOf?: string[];
    allOf?: string[];
  };
}
