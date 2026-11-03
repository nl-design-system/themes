import { ReactNode } from 'react';

export const STORY_GROUPS: { [index: string]: string } = {
  ACCORDION: 'Accordion',
  ACTION_GROUP: 'Action Group',
  ALERT: 'Alerts',
  AVATAR: 'Avatars',
  BADGES: 'Badges',
  BREADCRUMB_NAV: 'Breadcrumb Navigation',
  BUTTON_DEFAULT: 'Default Button',
  BUTTON_LINK_DEFAULT: 'Link that looks like a button',
  CALENDAR: 'Calendar',
  CARD_AS_LINK: 'Card as Link',
  CASE_CARD: 'Case Card',
  CHECKBOX: 'Checkbox',
  CODE_BLOCK: 'Code Block',
  CODE: 'Code',
  COLOR_SAMPLE: 'Color Sample',
  DATA_SUMMARY: 'Data Summary',
  DATE_INPUT: 'Date Input',
  DESCRIPTION_LIST: 'Description List',
  EMPHASIS: 'Emphasis',
  FIGURE: 'Figure',
  FILE: 'File',
  FORM_FIELD_DESCRIPTION: 'Form Field Description',
  FORM_FIELD_ERROR_MESSAGE: 'Form Field Error Message',
  FORM_FIELD_LABEL_CHECKBOX: 'Form Field Label for Checkbox',
  FORM_FIELD_LABEL_DEFAULT: 'Default Form Field Label',
  FORM_FIELD_LABEL_RADIO: 'Form Field Label for Radio Button',
  FORM_FIELD: 'Form Field',
  GRID: 'Grid',
  HEADINGS: 'Headings',
  ICON: 'Icons',
  IMAGE: 'Image',
  LINK_BUTTON_DEFAULT: 'Button that looks like a link',
  LINK_LIST: 'Link List',
  LINK: 'Link',
  LISTS: 'Lists',
  LOGIN_LINK: 'Login Link',
  MARK: 'Mark',
  MODAL_DIALOG: 'Modal Dialog',
  NOTE: 'Note',
  PAGE_BODY: 'Page Body',
  PAGE_FOOTER: 'Page Footer',
  PAGE_HEADER: 'Page Header',
  PAGE_LAYOUT: 'Page Layout',
  PAGE_NUMBER_NAVIGATION: 'Page Number Navigation',
  PARAGRAPH: 'Paragraph',
  PASSWORD_INPUT: 'Password Input',
  RADIO_BUTTON: 'Radio Button',
  ROOT: 'Root',
  SELECT: 'Select',
  SIDE_NAVIGATION: 'Side Navigation',
  SKIP_LINK: 'Skip Link',
  STEPS: 'Steps',
  TABS: 'Tabs',
  TASK_NAVIGATION: 'Task Navigation',
  TEXTAREA: 'Textarea',
  TEXTBOX: 'Textbox',
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
