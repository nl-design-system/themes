import PropTypes from 'prop-types';
import React from 'react';

import {
  Button,
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
  // CustomCheckbox ,
  Emphasis,
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

const Story = ({ children, name }) => (
  <section>
    <h2>{name}</h2>
    <div
      role="presentation"
      style={{
        backgroundColor: 'white',
        borderRadius: '4px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px',
        marginBlockEnd: '40px',
        marginBlockStart: '25px',
        paddingBlockEnd: '30px',
        paddingBlockStart: '30px',
        paddingInlineEnd: '20px',
        paddingInlineStart: '20px',
        position: 'relative',
      }}
    >
      {children}
    </div>
  </section>
);

Story.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export const components = [
  /*
  {
    name: '@utrecht/custom-checkbox',
    template: ({ active, checked, disabled, focus, invalid }) => {
      return `<dl>
      <dt>not checked</dt>
      <dd>${CustomCheckbox({ textContent: 'Send' })}</dd>
      ${checked ? `<dt>checked</dt><dd>${CustomCheckbox({ checked: true })}</dd>` : ''}
      ${active ? `<dt>active</dt><dd>${CustomCheckbox({ active: true })}</dd>` : ''}
      ${focus ? `<dt>focus</dt><dd>${CustomCheckbox({ focus: true })}</dd>` : ''}
      ${disabled ? `<dt>disabled</dt><dd>${CustomCheckbox({ disabled: true })}</dd>` : ''}
      ${
        disabled && checked
          ? `<dt>disabled and checked</dt><dd>${CustomCheckbox({
              checked: true,
              disabled: true,
            })}</dd>`
          : ''
      }
      ${invalid ? `<dt>invalid</dt><dd>${CustomCheckbox({ invalid: true })}</dd>` : ''}
      ${
        invalid && checked
          ? `<dt>invalid and checked</dt><dd>${CustomCheckbox({
              checked: true,
              invalid: true,
            })}</dd>`
          : ''
      }
      </dl>`;
    },
  },
  {
    name: '@utrecht/form-toggle',
    template: ({ checked = false, disabled = false, checkedDisabled = false }) => `<dl>
  <dt>normal</dt><dd>${FormToggle({})}</dd>
  ${checked ? `<dt>checked</dt><dd>${FormToggle({ checked: true })}</dd>` : ''}
  ${disabled ? `<dt>disabled</dt><dd>${FormToggle({ disabled: true })}</dd>` : ''}
  ${checkedDisabled ? `<dt>disabled and checked</dt><dd>${FormToggle({ checked: true })}</dd>` : ''}
  </dl>`,
  },  {
    name: '@utrecht/pagination',
    template: () =>
      Pagination({
        currentIndex: 3,
        distanced: true,
        links: [
          {
            href: './1',
            index: 1,
            title: 'Result 1 to 10',
          },
          {
            href: './2',
            index: 2,
            title: 'Result 11 to 20',
          },
          {
            href: './3',
            index: 3,
            title: 'Result 21 to 30',
          },
          {
            href: './4',
            index: 4,
            title: 'Result 31 to 40',
          },
          {
            href: './5',
            index: 5,
            title: 'Result 41 to 50',
          },
        ],
        next: {
          href: './4',
        },
        prev: {
          href: './2',
        },
      }),
  },
  */
].filter(Boolean);

export const defaultArgs = components.reduce((args, { name }) => ({ ...args, [name]: false }), {});

export const argTypes = components
  .map(({ name }) => ({ description: name, control: 'boolean' }))
  .reduce((obj, component) => ({ ...obj, [component.description]: component }), {});

export const ComponentsTemplate = (args) =>
  components
    .filter(({ name }) => Object.prototype.hasOwnProperty.call(args, name) && !!args[name])
    .map((component) => {
      const { name } = component;
      const variants = (args.variants && args.variants[name]) || {};
      return component ? component.template(variants) : '';
    })
    .join('\n');

export const storyRenderers = {
  'react-button': () => (
    <Story name="Button">
      <Button>Default</Button>
    </Story>
  ),
  'react-button--disabled': () => (
    <Story name="Disabled button">
      <Button disabled>Default</Button>
    </Story>
  ),
  'react-button--active': () => (
    <Story name="Button active state">
      <Button styleActive>Default</Button>
    </Story>
  ),
  'react-button--hover': () => (
    <Story name="Button hover state">
      <Button styleHover>Default</Button>
    </Story>
  ),
  'react-button--focus': () => (
    <Story name="Button focus state">
      <Button styleFocus>Default</Button>
    </Story>
  ),
  'react-button--focus-visible': () => (
    <Story name="Button focus-visible state">
      <Button styleFocus styleFocusVisible>
        Default
      </Button>
    </Story>
  ),
  'react-button--submit': () => (
    <Story name="Submit button">
      <Button type="submit">Default</Button>
    </Story>
  ),
  'react-button--busy': () => (
    <Story name="Button busy state">
      <Button busy>Default</Button>
    </Story>
  ),
  'react-paragraph': () => (
    <Story name="Paragraph">
      <Paragraph>Default</Paragraph>
    </Story>
  ),
  'react-paragraph--lead': () => (
    <Story name="Lead paragraph">
      <Paragraph lead>Default</Paragraph>
    </Story>
  ),
  'react-heading-1': () => (
    <Story name="Heading 1">
      <Heading1>The Quick Brown Fox Jumps Over The Lazy Dog</Heading1>
    </Story>
  ),
  'react-heading-2': () => (
    <Story name="Heading 2">
      <Heading2>The Quick Brown Fox Jumps Over The Lazy Dog</Heading2>
    </Story>
  ),
  'react-heading-3': () => (
    <Story name="Heading 3">
      <Heading3>The Quick Brown Fox Jumps Over The Lazy Dog</Heading3>
    </Story>
  ),
  'react-heading-4': () => (
    <Story name="Heading 4">
      <Heading4>The Quick Brown Fox Jumps Over The Lazy Dog</Heading4>
    </Story>
  ),
  'react-heading-5': () => (
    <Story name="Heading 5">
      <Heading5>The Quick Brown Fox Jumps Over The Lazy Dog</Heading5>
    </Story>
  ),
  'react-heading-6': () => (
    <Story name="Heading 6">
      <Heading6>The Quick Brown Fox Jumps Over The Lazy Dog</Heading6>
    </Story>
  ),
  'react-unordered-list': () => (
    <Story name="Unordered list">
      <UnorderedList>
        <UnorderedListItem>The Quick Brown Fox Jumps Over The Lazy Dog</UnorderedListItem>
        <UnorderedListItem>The Quick Brown Fox Jumps Over The Lazy Dog</UnorderedListItem>
      </UnorderedList>
    </Story>
  ),
  'react-separator': () => (
    <Story name="Separator">
      <Separator />
    </Story>
  ),
  'react-ordered-list': () => (
    <Story name="Ordered list">
      <OrderedList>
        <OrderedListItem>The Quick Brown Fox Jumps Over The Lazy Dog</OrderedListItem>
        <OrderedListItem>The Quick Brown Fox Jumps Over The Lazy Dog</OrderedListItem>
      </OrderedList>
    </Story>
  ),
  'react-page-footer': () => (
    <Story name="Page footer">
      <PageFooter>
        <Paragraph>The Quick Brown Fox Jumps Over The Lazy Dog</Paragraph>
      </PageFooter>
    </Story>
  ),
  'react-textbox': () => (
    <Story name="Textbox">
      <Textbox />
    </Story>
  ),
  'react-textbox--placeholder': () => (
    <Story name="Textbox with placeholder">
      <Textbox placeholder="The Quick Brown Fox Jumps Over The Lazy Dog" />
    </Story>
  ),
  'react-textbox--disabled': () => (
    <Story name="Disabled textbox">
      <Textbox disabled />
    </Story>
  ),
  'react-textbox--hover': () => (
    <Story name="Textbox hover state">
      <Textbox styleHover />
    </Story>
  ),
  'react-textbox--focus': () => (
    <Story name="Textbox focus state">
      <Textbox styleFocus />
    </Story>
  ),
  'react-textbox--focus-visible': () => (
    <Story name="Textbox focus visible state">
      <Textbox styleFocus styleFocusVisible />
    </Story>
  ),
  'react-textbox--invalid': () => (
    <Story name="Invalid textbox">
      <Textbox invalid />
    </Story>
  ),
  'react-textbox--readonly': () => (
    <Story name="Readonly textbox">
      <Textbox readOnly />
    </Story>
  ),
  'react-textbox--required': () => (
    <Story name="Required textbox">
      <Textbox required />
    </Story>
  ),
  'react-textarea': () => (
    <Story name="Textarea">
      <Textarea />
    </Story>
  ),
  'react-textarea--placeholder': () => (
    <Story name="Textarea with placeholder">
      <Textarea placeholder="The Quick Brown Fox Jumps Over The Lazy Dog" />
    </Story>
  ),
  'react-textarea--disabled': () => (
    <Story name="Disabled textarea">
      <Textarea disabled />
    </Story>
  ),
  'react-textarea--hover': () => (
    <Story name="Textarea hover state">
      <Textarea styleHover />
    </Story>
  ),
  'react-textarea--focus': () => (
    <Story name="Textarea focus state">
      <Textarea styleFocus />
    </Story>
  ),
  'react-textarea--focus-visible': () => (
    <Story name="Textarea focus visible state">
      <Textarea styleFocus styleFocusVisible />
    </Story>
  ),
  'react-textarea--invalid': () => (
    <Story name="Invalid textarea">
      <Textarea invalid />
    </Story>
  ),
  'react-textarea--readonly': () => (
    <Story name="Readonly textarea">
      <Textarea readOnly />
    </Story>
  ),
  'react-textarea--required': () => (
    <Story name="Required textarea">
      <Textarea required />
    </Story>
  ),
  'react-table': () => (
    <Story name="Table">
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
    </Story>
  ),
  'react-table--caption': () => (
    <Story name="Table with caption">
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
    </Story>
  ),
  'react-select': () => (
    <Story name="Select">
      <Select defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    </Story>
  ),
  'react-select--disabled': () => (
    <Story name="Disabled select">
      <Select disabled defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    </Story>
  ),
  'react-select--invalid': () => (
    <Story name="Invalid select">
      <Select invalid defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    </Story>
  ),
  'react-select--required': () => (
    <Story name="Required select">
      <Select required defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    </Story>
  ),
  'react-select--readonly': () => (
    <Story name="Read-only select">
      <Select readOnly defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    </Story>
  ),
  'react-select--focus': () => (
    <Story name="Select focus state">
      <Select styleFocus defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    </Story>
  ),
  'react-select--focus-visible': () => (
    <Story name="Select focus-visible state">
      <Select styleFocus styleFocusVisible defaultValue="2">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </Select>
    </Story>
  ),
  'react-badge-counter': () => (
    <Story name="Counter badge">
      <BadgeCounter>42</BadgeCounter>
    </Story>
  ),
  'react-badge-data': () => (
    <Story name="Data badge">
      <BadgeData>Category 1</BadgeData>
    </Story>
  ),
  // 'react-blockquote': () => (
  //   <Story name="Blockquote">
  //     <Blockquote>The Quick Brown Fox Jumps Over The Lazy Dog</Blockquote>
  //   </Story>
  // ),
  'react-link': () => (
    <Story name="Link">
      <Link href="https://example.com" target="_new" external>
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    </Story>
  ),
  'react-link--hover': () => (
    <Story name="Link hover state">
      <Link href="https://example.com" target="_new" external styleHover>
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    </Story>
  ),
  'react-link--focus': () => (
    <Story name="Link focus state">
      <Link href="https://example.com" target="_new" external styleFocus>
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    </Story>
  ),
  'react-link--focus-visible': () => (
    <Story name="Link focus-visible state">
      <Link href="https://example.com" target="_new" external styleFocus styleFocusVisible>
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    </Story>
  ),
  'react-link--visited': () => (
    <Story name="Link visited state">
      <Link href="https://example.com" target="_new" external styleFocus styleVisited>
        The Quick Brown Fox Jumps Over The Lazy Dog
      </Link>
    </Story>
  ),
  'react-document': () => (
    <Story name="Document">
      <Document>The Quick Brown Fox Jumps Over The Lazy Dog</Document>
    </Story>
  ),
  'react-form-label': () => (
    <Story name="Form label">
      <FormLabel>Label for form control</FormLabel>
    </Story>
  ),
  'react-form-label--disabled': () => (
    <Story name="Disabled form label">
      <FormLabel disabled>Label for disabled form control</FormLabel>
    </Story>
  ),
  'react-form-label--checkbox': () => (
    <Story name="Checkbox form label">
      <FormLabel type="checkbox">Label for checkbox option</FormLabel>
    </Story>
  ),
  'react-form-label--checkbox-checked': () => (
    <Story name="Selected checkbox form label">
      <FormLabel checked>Label for checked checkbox option</FormLabel>
    </Story>
  ),
  'react-form-label--radio': () => (
    <Story name="Radio button form label">
      <FormLabel type="radio">Label for radio button option</FormLabel>
    </Story>
  ),
  'react-form-label--radio-checked': () => (
    <Story name="Selected radio button form label">
      <FormLabel checked>Label for selected radio button option</FormLabel>
    </Story>
  ),
  'react-emphasis--stressed': () => (
    <Story name="Emphasis">
      <Emphasis>The Quick Brown Fox Jumps Over The Lazy Dog</Emphasis>
    </Story>
  ),
  'react-emphasis--strong': () => (
    <Story name="Strong emphasis">
      <Emphasis strong>The Quick Brown Fox Jumps Over The Lazy Dog</Emphasis>
    </Story>
  ),
  'react-emphasis--double': () => (
    <Story name="Double emphasis">
      <Emphasis>
        <Emphasis strong>The Quick Brown Fox Jumps Over The Lazy Dog</Emphasis>
      </Emphasis>
    </Story>
  ),
  'react-form-fieldset': () => (
    <Story name="Fieldset with legend">
      <Fieldset>
        <FieldsetLegend>The Quick Brown Fox Jumps Over The Lazy Dog</FieldsetLegend>
        <Paragraph>The Quick Brown Fox Jumps Over The Lazy Dog</Paragraph>
      </Fieldset>
    </Story>
  ),
  'react-form-field-description': () => (
    <Story name="Form field description">
      <FormFieldDescription>The Quick Brown Fox Jumps Over The Lazy Dog</FormFieldDescription>
    </Story>
  ),
  'react-form-field-description--invalid': () => (
    <Story name="Form field description">
      <FormFieldDescription invalid>The Quick Brown Fox Jumps Over The Lazy Dog</FormFieldDescription>
    </Story>
  ),
  'react-form-field-description--valid': () => (
    <Story name="Form field description">
      <FormFieldDescription valid>The Quick Brown Fox Jumps Over The Lazy Dog</FormFieldDescription>
    </Story>
  ),
  'react-form-field-description--warning': () => (
    <Story name="Form field description">
      <FormFieldDescription warning>The Quick Brown Fox Jumps Over The Lazy Dog</FormFieldDescription>
    </Story>
  ),
};

export const ComponentStories = ({ config }) => {
  const stories = getComponentArgs(config);
  const render = (id, Template) => <Template key={id} />;

  const storyIds = [
    stories['@utrecht/paragraph'] && 'react-paragraph',
    stories['@utrecht/paragraph'] && stories['@utrecht/paragraph'].lead && 'react-paragraph--lead',
    stories['@utrecht/unordered-list'] && 'react-unordered-list',
    stories['@utrecht/ordered-list'] && 'react-ordered-list',
    stories['@utrecht/button'] && 'react-button',
    stories['@utrecht/button'] && stories['@utrecht/button'].disabled && 'react-button--disabled',
    stories['@utrecht/button'] && stories['@utrecht/button'].active && 'react-button--active',
    stories['@utrecht/button'] && stories['@utrecht/button'].hover && 'react-button--hover',
    stories['@utrecht/button'] && stories['@utrecht/button'].focus && 'react-button--focus',
    stories['@utrecht/button'] && stories['@utrecht/button'].focusVisible && 'react-button--focus-visible',
    stories['@utrecht/button'] && stories['@utrecht/button'].submit && 'react-button--submit',
    stories['@utrecht/button'] && stories['@utrecht/button'].busy && 'react-button--busy',
    stories['@utrecht/heading-1'] && 'react-heading-1',
    stories['@utrecht/heading-2'] && 'react-heading-2',
    stories['@utrecht/heading-3'] && 'react-heading-3',
    stories['@utrecht/heading-4'] && 'react-heading-4',
    stories['@utrecht/heading-5'] && 'react-heading-5',
    stories['@utrecht/heading-6'] && 'react-heading-6',
    stories['@utrecht/page-footer'] && 'react-page-footer',
    stories['@utrecht/textbox'] && 'react-textbox',
    stories['@utrecht/textbox'] && stories['@utrecht/textbox'].placeholder && 'react-textbox--placeholder',
    stories['@utrecht/textbox'] && stories['@utrecht/textbox'].disabled && 'react-textbox--disabled',
    stories['@utrecht/textbox'] && stories['@utrecht/textbox'].hover && 'react-textbox--hover',
    stories['@utrecht/textbox'] && stories['@utrecht/textbox'].focus && 'react-textbox--focus',
    stories['@utrecht/textbox'] && stories['@utrecht/textbox'].focusVisible && 'react-textbox--focus-visible',
    stories['@utrecht/textbox'] && stories['@utrecht/textbox'].invalid && 'react-textbox--invalid',
    stories['@utrecht/textbox'] && stories['@utrecht/textbox'].readOnly && 'react-textbox--readonly',
    stories['@utrecht/textarea'] && 'react-textarea',
    stories['@utrecht/textarea'] && stories['@utrecht/textarea'].placeholder && 'react-textarea--placeholder',
    stories['@utrecht/textarea'] && stories['@utrecht/textarea'].disabled && 'react-textarea--disabled',
    stories['@utrecht/textarea'] && stories['@utrecht/textarea'].hover && 'react-textarea--hover',
    stories['@utrecht/textarea'] && stories['@utrecht/textarea'].focus && 'react-textarea--focus',
    stories['@utrecht/textarea'] && stories['@utrecht/textarea'].focusVisible && 'react-textarea--focus-visible',
    stories['@utrecht/textarea'] && stories['@utrecht/textarea'].invalid && 'react-textarea--invalid',
    stories['@utrecht/textarea'] && stories['@utrecht/textarea'].readOnly && 'react-textarea--readonly',
    stories['@utrecht/table'] && 'react-table',
    stories['@utrecht/table'] && stories['@utrecht/table'].caption && 'react-table--caption',
    stories['@utrecht/select'] && 'react-select',
    stories['@utrecht/select'] && stories['@utrecht/select'].disabled && 'react-select--disabled',
    stories['@utrecht/select'] && stories['@utrecht/select'].focus && 'react-select--focus',
    stories['@utrecht/select'] && stories['@utrecht/select'].focusVisible && 'react-select--focus-visible',
    stories['@utrecht/select'] && stories['@utrecht/select'].invalid && 'react-select--invalid',
    stories['@utrecht/select'] && stories['@utrecht/select'].readOnly && 'react-select--readonly',
    stories['@utrecht/select'] && stories['@utrecht/select'].required && 'react-select--required',
    stories['@utrecht/badge-counter'] && 'react-badge-counter',
    stories['@utrecht/badge-data'] && 'react-badge-data',
    stories['@utrecht/blockquote'] && 'react-blockquote',
    stories['@utrecht/document'] && 'react-document',
    stories['@utrecht/link'] && 'react-link',
    stories['@utrecht/link'] && stories['@utrecht/link'].active && 'react-link--active',
    stories['@utrecht/link'] && stories['@utrecht/link'].hover && 'react-link--hover',
    stories['@utrecht/link'] && stories['@utrecht/link'].focus && 'react-link--focus',
    stories['@utrecht/link'] && stories['@utrecht/link'].focusVisible && 'react-link--focus-visible',
    stories['@utrecht/link'] && stories['@utrecht/link'].visited && 'react-link--visited',
    stories['@utrecht/form-label'] && 'react-form-label',
    stories['@utrecht/form-label'] && stories['@utrecht/form-label'].disabled && 'react-form-label--disabled',
    stories['@utrecht/form-label'] && stories['@utrecht/form-label'].radio && 'react-form-label--radio',
    stories['@utrecht/form-label'] &&
      stories['@utrecht/form-label'].radio &&
      stories['@utrecht/form-label'].checked &&
      'react-form-label--radio-checked',
    stories['@utrecht/form-label'] && stories['@utrecht/form-label'].checkbox && 'react-form-label--checkbox',
    stories['@utrecht/form-label'] &&
      stories['@utrecht/form-label'].checkbox &&
      stories['@utrecht/form-label'].checked &&
      'react-form-label--checkbox-checked',
    stories['@utrecht/emphasis'] && stories['@utrecht/emphasis'].stressed && 'react-emphasis--stressed',
    stories['@utrecht/emphasis'] && stories['@utrecht/emphasis'].strong && 'react-emphasis--strong',
    stories['@utrecht/emphasis'] && stories['@utrecht/emphasis'].stressedStrong && 'react-emphasis--double',
    stories['@utrecht/form-fieldset'] && 'react-form-fieldset',
    stories['@utrecht/form-field-description'] && 'react-form-field-description',
    stories['@utrecht/form-field-description'] &&
      stories['@utrecht/form-field-description'].invalid &&
      'react-form-field-description--invalid',
    stories['@utrecht/form-field-description'] &&
      stories['@utrecht/form-field-description'].warning &&
      'react-form-field-description--warning',
    stories['@utrecht/form-field-description'] &&
      stories['@utrecht/form-field-description'].valid &&
      'react-form-field-description--valid',
  ]
    .filter(Boolean)
    .sort();

  return (
    <div className={`${config.prefix}-theme utrecht-document`}>
      {storyIds.map((id) => (storyRenderers[id] ? render(id, storyRenderers[id]) : null))}
    </div>
  );
};

ComponentStories.propTypes = {
  config: PropTypes.any,
};

export const getComponentArgs = (config) => ({
  ...Object.fromEntries(
    Object.entries(config.components)
      .filter(([, settings]) => settings)
      .map(([name]) => [name, true]),
  ),
  variants: Object.fromEntries(
    Object.entries(config.components).filter(([, settings]) => !!settings && typeof settings === 'object'),
  ),
});
