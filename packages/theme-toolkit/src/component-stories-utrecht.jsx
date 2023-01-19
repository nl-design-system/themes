import PropTypes from 'prop-types';
import React from 'react';

import { STORY_GROUPS } from './component-stories-util';

import {
  Alert,
  Button,
  LinkButton,
  ButtonLink,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
  Separator,
  UnorderedList,
  UnorderedListItem,
  OrderedList,
  OrderedListItem,
  Document,
  // BadgeCounter,
  // BadgeData,
  // Blockquote,
  Checkbox,
  // CustomCheckbox ,
  // Emphasis,
  FormFieldDescription,
  Fieldset,
  FieldsetLegend,
  FormLabel,
  // FormToggle ,
  Link,
  // Page ,
  // PageContent ,
  PageFooter,
  // PageHeader ,
  // Pagination ,
  Select,
  SelectOption,
  Textarea,
  Textbox,
  Table,
  TableRow,
  TableHeader,
  TableBody,
  TableHeaderCell,
  TableCell,
  TableCaption,
  RadioButton,
} from '@utrecht/component-library-react';

const Blockquote = ({ children }) => <div className="utrecht-blockquote">{children}</div>;

Blockquote.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

const BadgeCounter = ({ children }) => <div className="utrecht-badge-counter">{children}</div>;

BadgeCounter.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

const BadgeData = ({ children }) => <div className="utrecht-badge-data">{children}</div>;

BadgeData.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export const UTRECHT_COMPONENT_STORIES = [
  {
    storyId: 'react-utrecht-alert--ok',
    component: 'utrecht-alert',
    group: STORY_GROUPS.ALERT,
    name: 'Utrecht Alert ok',
    render: () => (
      <Alert type="ok">
        <Heading1>Alert Ok</Heading1>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quam vero nesciunt, dolore assumenda
          accusamus perspiciatis in similique inventore voluptatum reiciendis reprehenderit totam qui suscipit obcaecati
          pariatur, harum nemo veritatis.
        </Paragraph>
      </Alert>
    ),
  },
  {
    storyId: 'react-utrecht-alert--error',
    component: 'utrecht-alert',
    group: STORY_GROUPS.ALERT,
    name: 'Utrecht Alert error',
    render: () => (
      <Alert type="error">
        <Heading1>Alert Error</Heading1>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quam vero nesciunt, dolore assumenda
          accusamus perspiciatis in similique inventore voluptatum reiciendis reprehenderit totam qui suscipit obcaecati
          pariatur, harum nemo veritatis.
        </Paragraph>
      </Alert>
    ),
  },
  {
    storyId: 'react-utrecht-button--default',
    component: 'utrecht-button',
    group: STORY_GROUPS.BUTTON_DEFAULT,
    name: 'Utrecht Default Button',
    render: () => <Button>Default</Button>,
  },
  {
    storyId: 'react-utrecht-button--active',
    component: 'utrecht-button',
    group: STORY_GROUPS.BUTTON_DEFAULT,
    name: 'Utrecht Default Button: Active',
    state: true,
    render: () => <Button className="utrecht-button--active">Default</Button>,
  },
  {
    storyId: 'react-utrecht-button--hover',
    component: 'utrecht-button',
    group: STORY_GROUPS.BUTTON_DEFAULT,
    name: 'Utrecht Default Button: Hover',
    state: true,
    render: () => <Button className="utrecht-button--hover">Default</Button>,
  },
  {
    storyId: 'react-utrecht-button--focus',
    component: 'utrecht-button',
    group: STORY_GROUPS.BUTTON_DEFAULT,
    name: 'Utrecht Default Button: Focus',
    state: true,
    render: () => <Button className="utrecht-button--focus">Default</Button>,
  },
  {
    storyId: 'react-utrecht-button--focus-visible',
    component: 'utrecht-button',
    group: STORY_GROUPS.BUTTON_DEFAULT,
    name: 'Utrecht Default Button: Focus Visible',
    state: true,
    render: () => <Button className="utrecht-button--focus-visible">Default</Button>,
  },
  {
    storyId: 'react-utrecht-button--busy',
    component: 'utrecht-button',
    group: STORY_GROUPS.BUTTON_DEFAULT,
    name: 'Utrecht Default Button: Busy',
    state: true,
    render: () => <Button busy>Default</Button>,
  },
  {
    storyId: 'react-utrecht-button--submit',
    component: 'utrecht-button',
    group: STORY_GROUPS.BUTTON_DEFAULT,
    name: 'Utrecht Default Button: Submit Type',
    state: true,
    render: () => <Button type="submit">Default</Button>,
  },
  {
    storyId: 'react-utrecht-button--primary-action-button',
    component: 'utrecht-button',
    group: STORY_GROUPS.BUTTON_DEFAULT,
    name: 'Utrecht Primary Action Button',
    state: true,
    render: () => <Button appearance="primary-action-button">Primary action</Button>,
  },
  {
    storyId: 'react-utrecht-button--primary-action-button-danger',
    component: 'utrecht-button',
    group: STORY_GROUPS.BUTTON_DEFAULT,
    name: 'Utrecht Primary Action Button: Danger',
    state: true,
    render: () => (
      <Button appearance="primary-action-button" hint="danger">
        Dangerous primary action
      </Button>
    ),
  },
  {
    storyId: 'react-utrecht-button--primary-action-button-ok',
    component: 'utrecht-button',
    group: STORY_GROUPS.BUTTON_DEFAULT,
    name: 'Utrecht Primary Action Button: OK',
    state: true,
    render: () => (
      <Button appearance="primary-action-button" hint="ready">
        OK primary action
      </Button>
    ),
  },
  {
    storyId: 'react-utrecht-button--secondary-action-button',
    component: 'utrecht-button',
    group: STORY_GROUPS.BUTTON_DEFAULT,
    name: 'Utrecht Secondary Action Button',
    state: true,
    render: () => <Button appearance="secondary-action-button">Secondary action</Button>,
  },
  {
    storyId: 'react-utrecht-button--secondary-action-button-danger',
    component: 'utrecht-button',
    group: STORY_GROUPS.BUTTON_DEFAULT,
    name: 'Utrecht Secondary Action Button: Danger',
    state: true,
    render: () => (
      <Button appearance="secondary-action-button" hint="danger">
        Dangerous secondary action
      </Button>
    ),
  },
  {
    storyId: 'react-utrecht-button--secondary-action-button-ok',
    component: 'utrecht-button',
    group: STORY_GROUPS.BUTTON_DEFAULT,
    name: 'Utrecht Secondary Action Button: OK',
    state: true,
    render: () => (
      <Button appearance="secondary-action-button" hint="ready">
        OK secondary action
      </Button>
    ),
  },
  {
    storyId: 'react-utrecht-button--subtle-button',
    component: 'utrecht-button',
    group: STORY_GROUPS.BUTTON_DEFAULT,
    name: 'Utrecht Subtle Button',
    state: true,
    render: () => <Button appearance="subtle-button">Subtle button</Button>,
  },
  {
    storyId: 'react-utrecht-button--subtle-button-danger',
    component: 'utrecht-button',
    group: STORY_GROUPS.BUTTON_DEFAULT,
    name: 'Utrecht Subtle Button: Danger',
    state: true,
    render: () => (
      <Button appearance="subtle-button" hint="danger">
        Dangerous subtle button
      </Button>
    ),
  },
  {
    storyId: 'react-utrecht-button--subtle-button-ok',
    component: 'utrecht-button',
    group: STORY_GROUPS.BUTTON_DEFAULT,
    name: 'Utrecht Subtl Button: OK',
    state: true,
    render: () => (
      <Button appearance="subtle-button" hint="ready">
        OK subtle button
      </Button>
    ),
  },
  {
    storyId: 'react-utrecht-button-link--default',
    component: 'utrecht-button',
    group: STORY_GROUPS.LINK_BUTTON_DEFAULT,
    name: 'Utrecht Link that looks like a button',
    state: true,
    render: () => <ButtonLink href="#">Link that looks like a button</ButtonLink>,
  },
  {
    storyId: 'react-utrecht-checkbox--default',
    component: 'utrecht-button',
    group: STORY_GROUPS.CHECKBOX,
    name: 'Checkbox',
    state: true,
    render: () => <Checkbox />,
  },
  {
    storyId: 'react-utrecht-link-button--default',
    component: 'utrecht-button',
    group: STORY_GROUPS.BUTTON_LINK_DEFAULT,
    name: 'Utrecht Button that looks like a link',
    state: true,
    render: () => <LinkButton>Button that looks like a link</LinkButton>,
  },
  {
    storyId: 'react-utrecht-paragraph--default',
    group: STORY_GROUPS.PARAGRAPH,
    name: 'Utrecht Paragraph',
    render: () => <Paragraph>Default</Paragraph>,
  },
  {
    storyId: 'react-utrecht-paragraph--lead',
    component: 'utrecht-paragraph',
    group: STORY_GROUPS.PARAGRAPH,
    name: 'Utrecht Lead Paragraph',
    render: () => <Paragraph lead>Lead</Paragraph>,
  },
  {
    storyId: 'react-utrecht-heading-1--default',
    component: 'utrecht-heading-1',
    group: STORY_GROUPS.HEADINGS,
    name: 'Utrecht Heading 1',
    render: () => <Heading1>The Quick Brown Fox Jumps Over The Lazy Dog</Heading1>,
  },
  {
    storyId: 'react-utrecht-heading-2--default',
    component: 'utrecht-heading-2',
    group: STORY_GROUPS.HEADINGS,
    name: 'Utrecht Heading 2',
    render: () => <Heading2>The Quick Brown Fox Jumps Over The Lazy Dog</Heading2>,
  },
  {
    storyId: 'react-utrecht-heading-3--default',
    component: 'utrecht-heading-3',
    group: STORY_GROUPS.HEADINGS,
    name: 'Utrecht Heading 3',
    render: () => <Heading3>The Quick Brown Fox Jumps Over The Lazy Dog</Heading3>,
  },
  {
    storyId: 'react-utrecht-heading-4--default',
    component: 'utrecht-heading-4',
    group: STORY_GROUPS.HEADINGS,
    name: 'Utrecht Heading 4',
    render: () => <Heading4>The Quick Brown Fox Jumps Over The Lazy Dog</Heading4>,
  },
  {
    storyId: 'react-utrecht-heading-5--default',
    component: 'utrecht-heading-5',
    group: STORY_GROUPS.HEADINGS,
    name: 'Utrecht Heading 5',
    render: () => <Heading5>The Quick Brown Fox Jumps Over The Lazy Dog</Heading5>,
  },
  {
    storyId: 'react-utrecht-heading-6--default',
    component: 'utrecht-heading-6',
    group: STORY_GROUPS.HEADINGS,
    name: 'Utrecht Heading 6',
    render: () => <Heading6>The Quick Brown Fox Jumps Over The Lazy Dog</Heading6>,
  },
  {
    storyId: 'react-utrecht-unordered-list--default',
    component: 'utrecht-unordered-list',
    group: STORY_GROUPS.LISTS,
    name: 'Utrecht Unordered list',
    render: () => (
      <UnorderedList>
        <UnorderedListItem>The Quick Brown Fox Jumps Over The Lazy Dog</UnorderedListItem>
        <UnorderedListItem>The Quick Brown Fox Jumps Over The Lazy Dog</UnorderedListItem>
      </UnorderedList>
    ),
  },
  {
    storyId: 'react-utrecht-ordered-list--default',
    component: 'utrecht-ordered-list',
    group: STORY_GROUPS.LISTS,
    name: 'Utrecht Ordered list',
    render: () => (
      <OrderedList>
        <OrderedListItem>The Quick Brown Fox Jumps Over The Lazy Dog</OrderedListItem>
        <OrderedListItem>The Quick Brown Fox Jumps Over The Lazy Dog</OrderedListItem>
      </OrderedList>
    ),
  },
  {
    storyId: 'react-utrecht-separator--default',
    component: 'utrecht-separator',
    name: 'Utrecht Separator',
    render: () => <Separator />,
  },
  {
    storyId: 'react-utrecht-page-footer--default',
    name: 'Utrecht Page Footer',
    render: () => (
      <PageFooter>
        <Paragraph>The Quick Brown Fox Jumps Over The Lazy Dog</Paragraph>
      </PageFooter>
    ),
  },
  {
    storyId: 'react-utrecht-textbox--default',
    component: 'utrecht-textbox',
    group: STORY_GROUPS.TEXTBOX,
    name: 'Utrecht Textbox',
    render: () => <Textbox value="The Quick Brown Fox Jumps Over The Lazy Dog" />,
  },
  {
    storyId: 'react-utrecht-textbox--default',
    component: 'utrecht-textbox',
    group: STORY_GROUPS.TEXTBOX,
    name: 'Utrecht Textbox',
    render: () => <Textbox value="The Quick Brown Fox Jumps Over The Lazy Dog" />,
  },
  {
    storyId: 'react-utrecht-textbox--placeholder',
    component: 'utrecht-textbox',
    group: STORY_GROUPS.TEXTBOX,
    name: 'Textbox with placeholder',
    render: () => <Textbox placeholder="The Quick Brown Fox Jumps Over The Lazy Dog" />,
  },
  {
    storyId: 'react-utrecht-textbox--disabled',
    component: 'utrecht-textbox',
    group: STORY_GROUPS.TEXTBOX,
    name: 'Utrecht Textbox: Disabled',
    state: true,
    render: () => <Textbox disabled value="The Quick Brown Fox Jumps Over The Lazy Dog" />,
  },
  {
    storyId: 'react-utrecht-textbox--hover',
    component: 'utrecht-textbox',
    group: STORY_GROUPS.TEXTBOX,
    name: 'Utrecht Textbox: Hover',
    state: true,
    render: () => <Textbox className="utrecht-textbox--hover" value="The Quick Brown Fox Jumps Over The Lazy Dog" />,
  },
  {
    storyId: 'react-utrecht-textbox--focus',
    component: 'utrecht-textbox',
    group: STORY_GROUPS.TEXTBOX,
    name: 'Utrecht Textbox: Focus',
    state: true,
    render: () => <Textbox className="utrecht-textbox--focus" value="The Quick Brown Fox Jumps Over The Lazy Dog" />,
  },
  {
    storyId: 'react-utrecht-textbox--focus-visible',
    component: 'utrecht-textbox',
    group: STORY_GROUPS.TEXTBOX,
    name: 'Utrecht Textbox: Focus Visible',
    state: true,
    render: () => (
      <Textbox className="utrecht-textbox--focus-visible" value="The Quick Brown Fox Jumps Over The Lazy Dog" />
    ),
  },
  {
    storyId: 'react-utrecht-textbox--invalid',
    component: 'utrecht-textbox',
    group: STORY_GROUPS.TEXTBOX,
    name: 'Utrecht Textbox: Invalid',
    state: true,
    render: () => <Textbox invalid value="The Quick Brown Fox Jumps Over The Lazy Dog" />,
  },
  {
    storyId: 'react-utrecht-textbox--readonly',
    component: 'utrecht-textbox',
    group: STORY_GROUPS.TEXTBOX,
    name: 'Utrecht Textbox: Read Only',
    render: () => <Textbox readOnly value="The Quick Brown Fox Jumps Over The Lazy Dog" />,
  },
  {
    storyId: 'react-utrecht-textbox--required',
    component: 'utrecht-textbox',
    group: STORY_GROUPS.TEXTBOX,
    name: 'Utrecht Textbox: Required',
    render: () => <Textbox required value="The Quick Brown Fox Jumps Over The Lazy Dog" />,
  },
  {
    storyId: 'react-utrecht-textarea--default',
    component: 'utrecht-textarea',
    group: STORY_GROUPS.TEXTAREA,
    name: 'Utrecht Textarea',
    render: () => <Textarea>The Quick Brown Fox Jumps Over The Lazy Dog</Textarea>,
  },
  {
    storyId: 'react-utrecht-textarea--placeholder',
    component: 'utrecht-textarea',
    group: STORY_GROUPS.TEXTAREA,
    name: 'Utrecht Textarea with placeholder',
    render: () => <Textarea placeholder="The Quick Brown Fox Jumps Over The Lazy Dog" />,
  },
  {
    storyId: 'react-utrecht-textarea--disabled',
    component: 'utrecht-textarea',
    group: STORY_GROUPS.TEXTAREA,
    name: 'Utrecht Textarea: Disabled',
    state: true,
    render: () => <Textarea disabled>The Quick Brown Fox Jumps Over The Lazy Dog</Textarea>,
  },
  {
    storyId: 'react-utrecht-textarea--hover',
    component: 'utrecht-textarea',
    group: STORY_GROUPS.TEXTAREA,
    name: 'Utrecht Textarea: Hover',
    state: true,
    render: () => <Textarea className="utrecht-textarea--hover">The Quick Brown Fox Jumps Over The Lazy Dog</Textarea>,
  },
  {
    storyId: 'react-utrecht-textarea--focus',
    component: 'utrecht-textarea',
    group: STORY_GROUPS.TEXTAREA,
    name: 'Utrecht Textarea: Focus',
    state: true,
    render: () => <Textarea className="utrecht-textarea--focus">The Quick Brown Fox Jumps Over The Lazy Dog</Textarea>,
  },
  {
    storyId: 'react-utrecht-textarea--focus-visible',
    component: 'utrecht-textarea',
    group: STORY_GROUPS.TEXTAREA,
    name: 'Utrecht Textarea: Focus Visible',
    state: true,
    render: () => (
      <Textarea className="utrecht-textarea--focus-visible">The Quick Brown Fox Jumps Over The Lazy Dog</Textarea>
    ),
  },
  {
    storyId: 'react-utrecht-textarea--invalid',
    component: 'utrecht-textarea',
    group: STORY_GROUPS.TEXTAREA,
    name: 'Utrecht Textarea: Invalid',
    state: true,
    render: () => <Textarea invalid>The Quick Brown Fox Jumps Over The Lazy Dog</Textarea>,
  },
  {
    storyId: 'react-utrecht-textarea--readonly',
    component: 'utrecht-textarea',
    group: STORY_GROUPS.TEXTAREA,
    name: 'Utrecht Textarea: Read Only',
    render: () => <Textarea readOnly>The Quick Brown Fox Jumps Over The Lazy Dog</Textarea>,
  },
  {
    storyId: 'react-utrecht-textarea--required',
    component: 'utrecht-textarea',
    group: STORY_GROUPS.TEXTAREA,
    name: 'Utrecht Textarea: Required',
    render: () => <Textarea required>The Quick Brown Fox Jumps Over The Lazy Dog</Textarea>,
  },
  {
    storyId: 'react-utrecht-table--default',
    component: 'utrecht-table',
    name: 'Utrecht Table',
    render: () => (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Column Heading Cell 1</TableHeaderCell>
            <TableHeaderCell scope="col">Column Heading Cell 2</TableHeaderCell>
            <TableHeaderCell scope="col">Column Heading Cell 3</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Row Heading Cell 1</TableHeaderCell>
            <TableCell>Data Cell 1</TableCell>
            <TableCell>Data Cell 2</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Row Heading Cell 2</TableHeaderCell>
            <TableCell>Data Cell 3</TableCell>
            <TableCell>Data Cell 4</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Row Heading Cell 3</TableHeaderCell>
            <TableCell>Data Cell 5</TableCell>
            <TableCell>Data Cell 6</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
  },
  {
    storyId: 'react-utrecht-table--caption',
    component: 'utrecht-table',
    name: 'Utrecht Table with caption',
    render: () => (
      <Table>
        <TableCaption>Caption of the Table</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Column Heading Cell 1</TableHeaderCell>
            <TableHeaderCell scope="col">Column Heading Cell 2</TableHeaderCell>
            <TableHeaderCell scope="col">Column Heading Cell 3</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell scope="row">Row Heading Cell 1</TableHeaderCell>
            <TableCell>Data Cell 1</TableCell>
            <TableCell>Data Cell 2</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Row Heading Cell 2</TableHeaderCell>
            <TableCell>Data Cell 3</TableCell>
            <TableCell>Data Cell 4</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope="row">Row Heading Cell 3</TableHeaderCell>
            <TableCell>Data Cell 5</TableCell>
            <TableCell>Data Cell 6</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
  },
  {
    storyId: 'react-utrecht-select--default',
    component: 'utrecht-select',
    group: STORY_GROUPS.SELECT,
    name: 'Utrecht Select',
    render: () => (
      <Select defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    ),
  },
  {
    storyId: 'react-utrecht-select--disabled',
    component: 'utrecht-select',
    group: STORY_GROUPS.SELECT,
    name: 'Utrecht Select: Disabled',
    state: true,
    render: () => (
      <Select disabled defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    ),
  },
  {
    storyId: 'react-utrecht-select--invalid',
    component: 'utrecht-select',
    group: STORY_GROUPS.SELECT,
    name: 'Utrecht Select: Invalid',
    state: true,
    render: () => (
      <Select invalid defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    ),
  },
  {
    storyId: 'react-utrecht-select--required',
    component: 'utrecht-select',
    group: STORY_GROUPS.SELECT,
    name: 'Utrecht Select: Required',
    render: () => (
      <Select required defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    ),
  },
  {
    storyId: 'react-utrecht-select--readonly',
    component: 'utrecht-select',
    group: STORY_GROUPS.SELECT,
    name: 'Utrecht Select: Read Only',
    render: () => (
      <Select readOnly defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    ),
  },
  {
    storyId: 'react-utrecht-select--focus',
    component: 'utrecht-select',
    group: STORY_GROUPS.SELECT,
    name: 'Utrecht Select: Focus',
    state: true,
    render: () => (
      <Select className="utrecht-select--focus" defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    ),
  },
  {
    storyId: 'react-utrecht-select--focus-visible',
    component: 'utrecht-select',
    group: STORY_GROUPS.SELECT,
    name: 'Utrecht Select: Focus Visible',
    state: true,
    render: () => (
      <Select className="utrecht-select--focus-visible" defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    ),
  },
  {
    storyId: 'react-utrecht-badge-counter--default',
    group: STORY_GROUPS.BADGES,
    name: 'Utrecht Counter Badge',
    render: () => <BadgeCounter>42</BadgeCounter>,
  },
  {
    storyId: 'react-utrecht-badge-data--default',
    group: STORY_GROUPS.BADGES,
    name: 'Utrecht Data Badge',
    render: () => <BadgeData>Category 1</BadgeData>,
  },
  {
    storyId: 'react-utrecht-blockquote--default',
    name: 'Utrecht Blockquote',
    render: () => <Blockquote>The Quick Brown Fox Jumps Over The Lazy Dog</Blockquote>,
  },
  {
    storyId: 'react-utrecht-link--default',
    group: STORY_GROUPS.LINK,
    name: 'Utrecht Link',
    inline: true,
    render: () => (
      <Link href="https://example.com" target="_new" external>
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
  },
  {
    storyId: 'react-utrecht-link--hover',
    group: STORY_GROUPS.LINK,
    name: 'Utrecht Link: Hover',
    state: true,
    inline: true,
    render: () => (
      <Link href="https://example.com" target="_new" external className="utrecht-link--hover">
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
  },
  {
    storyId: 'react-utrecht-link--focus',
    group: STORY_GROUPS.LINK,
    name: 'Utrecht Link: Focus',
    state: true,
    inline: true,
    render: () => (
      <Link href="https://example.com" target="_new" external className="utrecht-link--focus">
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
  },
  {
    storyId: 'react-utrecht-link--focus-visible',
    group: STORY_GROUPS.LINK,
    name: 'Utrecht Link: Focus Visible',
    state: true,
    inline: true,
    render: () => (
      <Link href="https://example.com" target="_new" external className="utrecht-link--focus-visible">
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
  },
  {
    storyId: 'react-utrecht-link--visited',
    group: STORY_GROUPS.LINK,
    name: 'Utrecht Link: Visited',
    state: true,
    inline: true,
    render: () => (
      <Link href="https://example.com" target="_new" external className="utrecht-link--visited">
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    ),
  },
  {
    storyId: 'react-utrecht-document--default',
    name: 'Utrecht Document',
    render: () => <Document>The Quick Brown Fox Jumps Over The Lazy Dog</Document>,
  },
  {
    storyId: 'react-utrecht-form-label--default',
    group: STORY_GROUPS.FORM_LABEL_DEFAULT,
    name: 'Utrecht Form Label',
    render: () => <FormLabel>Label for form control</FormLabel>,
  },
  {
    storyId: 'react-utrecht-form-label--disabled',
    group: STORY_GROUPS.FORM_LABEL_DEFAULT,
    name: 'Utrecht Form Label: Disabled',
    state: true,
    render: () => <FormLabel disabled>Label for disabled form control</FormLabel>,
  },
  {
    storyId: 'react-utrecht-form-label--checkbox',
    group: STORY_GROUPS.FORM_LABEL_CHECKBOX,
    name: ' Utrecht Checkbox Form Label',
    render: () => <FormLabel type="checkbox">Label for checkbox option</FormLabel>,
  },
  {
    storyId: 'react-utrecht-form-label--checkbox-checked',
    group: STORY_GROUPS.FORM_LABEL_CHECKBOX,
    name: 'Utrecht Checkbox Form Label: Checked',
    state: true,
    render: () => <FormLabel checked>Label for checked checkbox option</FormLabel>,
  },
  {
    storyId: 'react-utrecht-form-label--radio',
    group: STORY_GROUPS.FORM_LABEL_RADIO,
    name: 'Utrecht Radio Button Form Label',
    render: () => <FormLabel type="radio">Label for radio button option</FormLabel>,
  },
  {
    storyId: 'react-utrecht-form-label--radio-checked',
    group: STORY_GROUPS.FORM_LABEL_RADIO,
    name: 'Utrecht Radio Button Form Label: Checked',
    state: true,
    render: () => <FormLabel checked>Label for selected radio button option</FormLabel>,
  },
  // {
  //   storyId: 'react-utrecht-emphasis--stressed',
  //   group: STORY_GROUPS.EMPHASIS,
  //   name: 'Utrecht Stressed Emphasis',
  //   render: () => <Emphasis>The Quick Brown Fox Jumps Over The Lazy Dog</Emphasis>,
  // },
  // {
  //   storyId: 'react-utrecht-emphasis--strong',
  //   group: STORY_GROUPS.EMPHASIS,
  //   name: 'Utrecht Strong Emphasis',
  //   render: () => <Emphasis strong>The Quick Brown Fox Jumps Over The Lazy Dog</Emphasis>,
  // },
  // {
  //   storyId: 'react-utrecht-emphasis--double',
  //   group: STORY_GROUPS.EMPHASIS,
  //   name: 'Utrecht Double Emphasis',
  //   render: () => (
  //     <Emphasis>
  //       <Emphasis strong>The Quick Brown Fox Jumps Over The Lazy Dog</Emphasis>
  //     </Emphasis>
  //   ),
  // },
  {
    storyId: 'react-utrecht-form-fieldset--default',
    name: 'Utrecht Fieldset with legend',
    render: () => (
      <Fieldset>
        <FieldsetLegend>The Quick Brown Fox Jumps Over The Lazy Dog</FieldsetLegend>
        <Paragraph>The Quick Brown Fox Jumps Over The Lazy Dog</Paragraph>
      </Fieldset>
    ),
  },
  {
    storyId: 'react-utrecht-form-field-description--default',
    group: STORY_GROUPS.FORM_FIELD_DESCRIPTION,
    name: 'Utrecht Form field description',
    render: () => <FormFieldDescription>The Quick Brown Fox Jumps Over The Lazy Dog</FormFieldDescription>,
  },
  {
    storyId: 'react-utrecht-form-field-description--invalid',
    group: STORY_GROUPS.FORM_FIELD_DESCRIPTION,
    name: 'Utrecht Form field description: Invalid',
    state: true,
    render: () => <FormFieldDescription invalid>The Quick Brown Fox Jumps Over The Lazy Dog</FormFieldDescription>,
  },
  {
    storyId: 'react-utrecht-form-field-description--valid',
    group: STORY_GROUPS.FORM_FIELD_DESCRIPTION,
    name: 'Utrecht Form field description: Valid',
    state: true,
    render: () => <FormFieldDescription valid>The Quick Brown Fox Jumps Over The Lazy Dog</FormFieldDescription>,
  },
  {
    storyId: 'react-utrecht-form-field-description--warning',
    group: STORY_GROUPS.FORM_FIELD_DESCRIPTION,
    name: 'Utrecht Form field description: Warning',
    render: () => <FormFieldDescription warning>The Quick Brown Fox Jumps Over The Lazy Dog</FormFieldDescription>,
  },
  {
    storyId: 'react-utrecht-radio-button--default',
    group: STORY_GROUPS.RADIO_BUTTON,
    name: 'Utrecht Radio Button: Default',
    render: () => <RadioButton />,
  },
];
