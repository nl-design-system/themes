import { Button } from '@utrecht/components/button/bem';
import { Heading1 } from '@utrecht/components/heading-1/bem';
import { Heading2 } from '@utrecht/components/heading-2/bem';
import { Heading3 } from '@utrecht/components/heading-3/bem';
import { Heading4 } from '@utrecht/components/heading-4/bem';
import { Heading5 } from '@utrecht/components/heading-5/bem';
import { Heading6 } from '@utrecht/components/heading-6/bem';
import { Link } from '@utrecht/components/link/bem';
import { OrderedList } from '@utrecht/components/ordered-list/bem';
import { PageFooter } from '@utrecht/components/page-footer/bem';
import { Select } from '@utrecht/components/select/bem';
import { Paragraph } from '@utrecht/components/paragraph/bem';
import { Separator } from '@utrecht/components/separator/bem';
import { TextArea } from '@utrecht/components/textarea/bem';
import { TextBox } from '@utrecht/components/textbox/bem';
import { UnorderedList } from '@utrecht/components/unordered-list/bem';

const stringSort = (a, b) => (a === b ? 0 : a > b ? 1 : -1);

const Document = ({ innerHTML = '' }) => `<div class="utrecht-document">${innerHTML}</div>`;

const genericArgs = {
  variants: {},
};

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

  {
    name: '@utrecht/button',
    template: ({ active = false, disabled = false, focus = false, hover = false }) => {
      return `<dl>
      <dt>normal</dt>
      <dd>${Button({ textContent: 'Send' })}</dd>
      ${hover ? `<dt>hover</dt><dd>${Button({ hover: true, textContent: 'Send' })}</dd>` : ''}
      ${focus ? `<dt>focus</dt><dd>${Button({ focus: true, textContent: 'Send' })}</dd>` : ''}
      ${active ? `<dt>active</dt><dd>${Button({ active: true, textContent: 'Send' })}</dd>` : ''}
      ${disabled ? `<dt>disabled</dt><dd>${Button({ textContent: 'Send', disabled: true })}</dd>` : ''}
      </dl>`;
    },
  },
  { name: '@utrecht/checkbox', template: () => '' },
  { name: '@utrecht/document', template: () => Document({ innerHTML: 'The Quick Brown Fox Jumps Over The Lazy Dog' }) },
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
  {
    name: '@utrecht/heading-1',
    template: () => Heading1({ distanced: true, textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' }),
  },
  {
    name: '@utrecht/heading-2',
    template: () => Heading2({ distanced: true, textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' }),
  },
  {
    name: '@utrecht/heading-3',
    template: () => Heading3({ distanced: true, textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' }),
  },
  {
    name: '@utrecht/heading-4',
    template: () => Heading4({ distanced: true, textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' }),
  },
  {
    name: '@utrecht/heading-5',
    template: () => Heading5({ distanced: true, textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' }),
  },
  {
    name: '@utrecht/heading-6',
    template: () => Heading6({ distanced: true, textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' }),
  },
  { name: '@utrecht/icon', template: () => '' },
  {
    name: '@utrecht/link',
    template: ({ active = false, focus = false, hover = false, visited = false }) => {
      return `<dl>
      <dt>normal</dt>
      <dd>${Link({ textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' })}</dd>
      ${
        hover
          ? `<dt>hover</dt><dd>${Link({
              hover: true,
              textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
            })}</dd>`
          : ''
      }
      ${
        focus
          ? `<dt>focus</dt><dd>${Link({
              focus: true,
              textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
            })}</dd>`
          : ''
      }
      ${
        active
          ? `<dt>active</dt><dd>${Link({
              active: true,
              textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
            })}</dd>`
          : ''
      }
      ${
        visited
          ? `<dt>visited</dt><dd>${Link({
              textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
              visited: true,
            })}</dd>`
          : ''
      }
      </dl>`;
    },
  },
  { name: '@utrecht/link-list', template: () => '' },
  { name: '@utrecht/link-social', template: () => '' },
  { name: '@utrecht/logo', template: () => '' },
  { name: '@utrecht/mapcontrolbutton', template: () => '' },
  { name: '@utrecht/menulijst', template: () => '' },
  { name: '@utrecht/nav-top', template: () => '' },
  { name: '@utrecht/navigatie sidenav', template: () => '' },
  { name: '@utrecht/navigatie topnav', template: () => '' },
  {
    name: '@utrecht/ordered-list',
    template: () =>
      OrderedList({
        distanced: true,
        items: [
          { textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' },
          { textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' },
        ],
      }),
  },
  { name: '@utrecht/page', template: () => '' },
  { name: '@utrecht/page-content', template: () => '' },
  {
    name: '@utrecht/page-footer',
    template: () =>
      `${PageFooter({
        innerHTML: Paragraph({ textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' }),
      })}</footer>`,
  },
  { name: '@utrecht/page-header', template: () => '' },
  {
    name: '@utrecht/paragraph',
    template: ({ lead = false } = {}) =>
      [
        lead && Paragraph({ distanced: true, lead: true, textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' }),
        Paragraph({ distanced: true, textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' }),
      ]
        .filter(Boolean)
        .join('\n'),
  },
  // { name: '@utrecht/paragraph', template: () => '' },
  { name: '@utrecht/pre-heading', template: () => '' },
  { name: '@utrecht/radio-button', template: () => '' },
  { name: '@utrecht/search-bar', template: () => '' },
  {
    name: '@utrecht/select',
    template: () =>
      Select({
        options: [
          {
            label: 'Option 1',
          },
          {
            label: 'Option 2',
            selected: true,
          },
          {
            label: 'Option 3',
          },
        ],
      }),
  },
  {
    name: '@utrecht/separator',
    template: () =>
      Separator({
        distanced: true,
      }),
  },
  { name: '@utrecht/table', template: () => '' },
  {
    name: '@utrecht/textarea',
    template: ({
      disabled = false,
      placeholder = false,
      focus = false,
      hover = false,
      invalid = false,
      required = false,
    } = {}) => `<dl>
    <dt>normal</dt>
    <dd>${TextArea({ textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' })}</dd>
    ${
      placeholder
        ? `<dt>placeholder</dt><dd>${TextArea({ placeholder: 'The Quick Brown Fox Jumps Over The Lazy Dog' })}</dd>`
        : ''
    }
    ${
      disabled
        ? `<dt>disabled</dt><dd>${TextArea({
            disabled: true,
            textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
          })}</dd>`
        : ''
    }
    ${
      hover
        ? `<dt>hover</dt><dd>${TextArea({
            hover: true,
            textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
          })}</dd>`
        : ''
    }
    ${
      focus
        ? `<dt>focus</dt><dd>${TextArea({
            focus: true,
            textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
          })}</dd>`
        : ''
    }
    ${
      invalid
        ? `<dt>invalid</dt><dd>${TextArea({
            invalid: true,
            textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
          })}</dd>`
        : ''
    }
    ${
      required
        ? `<dt>required</dt><dd>${TextArea({
            required: true,
            textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
          })}</dd>`
        : ''
    }
   </dl>`,
  },
  {
    name: '@utrecht/textbox',
    template: ({
      disabled = false,
      placeholder = false,
      focus = false,
      hover = false,
      invalid = false,
      required = false,
    } = {}) => `<dl>
    <dt>normal</dt><dd>${TextBox({ value: 'The Quick Brown Fox Jumps Over The Lazy Dog' })}</dd>
    ${
      placeholder
        ? `<dt>placeholder</dt><dd>${TextBox({ placeholder: 'The Quick Brown Fox Jumps Over The Lazy Dog' })}</dd>`
        : ''
    }
    ${
      disabled
        ? `<dt>disabled</dt><dd>${TextBox({
            disabled: true,
            value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
          })}</dd>`
        : ''
    }
    ${
      hover
        ? `<dt>hover</dt><dd>${TextBox({ hover: true, value: 'The Quick Brown Fox Jumps Over The Lazy Dog' })}</dd>`
        : ''
    }
    ${
      focus
        ? `<dt>focus</dt><dd>${TextBox({ focus: true, value: 'The Quick Brown Fox Jumps Over The Lazy Dog' })}</dd>`
        : ''
    }
    ${
      invalid
        ? `<dt>invalid</dt><dd>${TextBox({ invalid: true, value: 'The Quick Brown Fox Jumps Over The Lazy Dog' })}</dd>`
        : ''
    }
    ${
      required
        ? `<dt>required</dt><dd>${TextBox({
            required: true,
            value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
          })}</dd>`
        : ''
    }
    </dl>`,
  },
  {
    name: '@utrecht/unordered-list',
    template: () =>
      UnorderedList({
        distanced: true,
        items: [
          { textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' },
          { textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' },
        ],
      }),
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
    .filter(([name]) => !Object.prototype.hasOwnProperty.call(genericArgs, name))
    .filter(([, checked]) => checked)
    .map(([name]) => {
      const component = components.find((comp) => comp.name === name);
      const variants = (args.variants && args.variants[name]) || {};
      return component ? component.template(variants) : '';
    })
    .join('\n');

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
