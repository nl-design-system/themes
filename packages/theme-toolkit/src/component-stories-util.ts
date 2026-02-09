import { ReactNode } from 'react';

export const STORY_GROUPS: { [index: string]: string } = {
  ACTION_GROUP: 'Action Group',
  AVATAR: 'Avatars',
  ALERT: 'Alerts',
  BUTTON_DEFAULT: 'Default Button',
  BUTTON_LINK_DEFAULT: 'Link that looks like a button',
  CARD_AS_LINK: 'Card as Link',
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
  FORM_FIELD_LABEL_DEFAULT: 'Default Form Field Label',
  FORM_FIELD_LABEL_CHECKBOX: 'Form Field Label for Checkbox',
  FORM_FIELD_LABEL_RADIO: 'Form Field Label for Radio Button',
  EMPHASIS: 'Emphasis',
  FORM_FIELD_DESCRIPTION: 'Form Field Description',
  FORM_FIELD_ERROR_MESSAGE: 'Form Field Error Message',
  STEPS: 'Steps',
  LINK_LIST: 'Link List',
  SIDE_NAVIGATION: 'Side Navigation',
  ICON: 'Icons',
  CASE_CARD: 'Case Card',
  PAGE_HEADER: 'Page Header',
  PAGE_FOOTER: 'Page Footer',
  LOGIN_LINK: 'Login Link',
  MODAL_DIALOG: 'Modal Dialog',
  PAGE_NUMBER_NAVIGATION: 'Page Number Navigation',
  IMAGE: 'Image',
  DESCRIPTION_LIST: 'Description List',
  FORM_SUMMARY: 'Form Summary',
  DATE_INPUT: 'Date Input',
  FIGURE: 'Figure',
  PASSWORD_INPUT: 'Password Input',
  CODE: 'Code',
  CODE_BLOCK: 'Code Block',
  COLOR_SAMPLE: 'Color Sample',
  SKIP_LINK: 'Skip Link',
  MARK: 'Mark',
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
