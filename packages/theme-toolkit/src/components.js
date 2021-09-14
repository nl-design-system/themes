import { Button } from '@utrecht/components/button/bem';
import { Heading1 } from '@utrecht/components/heading-1/bem';
import { Heading2 } from '@utrecht/components/heading-2/bem';
import { Heading3 } from '@utrecht/components/heading-3/bem';
import { Heading4 } from '@utrecht/components/heading-4/bem';
import { Heading5 } from '@utrecht/components/heading-5/bem';
import { Heading6 } from '@utrecht/components/heading-6/bem';
import { Paragraph } from '@utrecht/components/paragraph/bem';
import { TextBox } from '@utrecht/components/textbox/bem';

const stringSort = (a, b) => (a === b ? 0 : a > b ? 1 : -1);

export const components = [
  { name: '@utrecht/alternate-lang-link', template: () => '' },
  { name: '@utrecht/alternate-lang-nav', template: () => '' },
  { name: '@utrecht/article', template: () => '' },
  { name: '@utrecht/badge', template: () => '' },
  { name: '@utrecht/badge-counter', template: () => '' },
  { name: '@utrecht/badge-data', template: () => '' },
  { name: '@utrecht/badge-status', template: () => '' },
  { name: '@utrecht/blockquote', template: () => '' },
  { name: '@utrecht/breadcrumb', template: () => '' },
  // { name: '@utrecht/button', template: () => '' },
  { name: '@utrecht/checkbox', template: () => '' },
  { name: '@utrecht/document', template: () => '' },
  { name: '@utrecht/emphasis', template: () => '' },
  { name: '@utrecht/form-field', template: () => '' },
  { name: '@utrecht/form-field-checkbox', template: () => '' },
  { name: '@utrecht/form-field-checkbox-group', template: () => '' },
  { name: '@utrecht/form-field-description', template: () => '' },
  { name: '@utrecht/form-field-radio', template: () => '' },
  { name: '@utrecht/form-field-radio-group', template: () => '' },
  { name: '@utrecht/form-field-textarea', template: () => '' },
  { name: '@utrecht/form-field-textbox', template: () => '' },
  { name: '@utrecht/form-field-toggle', template: () => '' },
  { name: '@utrecht/form-fieldset', template: () => '' },
  { name: '@utrecht/form-input', template: () => '' },
  { name: '@utrecht/form-label', template: () => '' },
  { name: '@utrecht/form-toggle', template: () => '' },
  { name: '@utrecht/heading', template: () => '' },
  // { name: '@utrecht/heading-1', template: () => '' },
  // { name: '@utrecht/heading-2', template: () => '' },
  // { name: '@utrecht/heading-3', template: () => '' },
  // { name: '@utrecht/heading-4', template: () => '' },
  // { name: '@utrecht/heading-5', template: () => '' },
  // { name: '@utrecht/heading-6', template: () => '' },
  { name: '@utrecht/icon', template: () => '' },
  { name: '@utrecht/link', template: () => '' },
  { name: '@utrecht/link-list', template: () => '' },
  { name: '@utrecht/link-social', template: () => '' },
  { name: '@utrecht/logo', template: () => '' },
  { name: '@utrecht/mapcontrolbutton', template: () => '' },
  { name: '@utrecht/menulijst', template: () => '' },
  { name: '@utrecht/nav-top', template: () => '' },
  { name: '@utrecht/navigatie sidenav', template: () => '' },
  { name: '@utrecht/navigatie topnav', template: () => '' },
  { name: '@utrecht/ordered-list', template: () => '' },
  { name: '@utrecht/page', template: () => '' },
  { name: '@utrecht/page-content', template: () => '' },
  { name: '@utrecht/page-footer', template: () => '' },
  { name: '@utrecht/page-header', template: () => '' },
  { name: '@utrecht/pagination', template: () => '' },
  // { name: '@utrecht/paragraph', template: () => '' },
  { name: '@utrecht/pre-heading', template: () => '' },
  { name: '@utrecht/radio-button', template: () => '' },
  { name: '@utrecht/search-bar', template: () => '' },
  { name: '@utrecht/select', template: () => '' },
  { name: '@utrecht/separator', template: () => '' },
  { name: '@utrecht/table', template: () => '' },
  { name: '@utrecht/textarea', template: () => '' },
  // { name: '@utrecht/textbox', template: () => '' },
  { name: '@utrecht/unordered-list', template: () => '' },
  {
    name: '@utrecht/button',
    template: () => Button({ textContent: 'Button' }),
  },
  {
    name: '@utrecht/heading-1',
    template: () => Heading1({ textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' }),
  },
  {
    name: '@utrecht/heading-2',
    template: () => Heading2({ textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' }),
  },
  {
    name: '@utrecht/heading-3',
    template: () => Heading3({ textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' }),
  },
  {
    name: '@utrecht/heading-4',
    template: () => Heading4({ textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' }),
  },
  {
    name: '@utrecht/heading-5',
    template: () => Heading5({ textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' }),
  },
  {
    name: '@utrecht/heading-6',
    template: () => Heading6({ textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' }),
  },
  {
    name: '@utrecht/paragraph',
    template: () => Paragraph({ textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' }),
  },
  {
    name: '@utrecht/textbox',
    template: () => TextBox({ value: 'The Quick Brown Fox Jumps Over The Lazy Dog' }),
  },
]
  .filter(Boolean)
  .sort((a, b) => stringSort(a.name, b.name));

export const defaultArgs = components.reduce((args, { name }) => ({ ...args, [name]: false }), {});

export const argTypes = components
  .map(({ name }) => ({ description: name, control: 'boolean' }))
  .reduce((obj, component) => ({ ...obj, [component.description]: component }), {});

export const Template = (args) =>
  Object.entries(args)
    .filter(([, checked]) => checked)
    .map(([name]) => {
      const component = components.find((comp) => comp.name === name);
      return component ? component.template() : '';
    })
    .join('\n');
