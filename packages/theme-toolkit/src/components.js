import { BadgeCounter } from '@utrecht/components/badge-counter/bem';
import { BadgeData } from '@utrecht/components/badge-data/bem';
import { Blockquote } from '@utrecht/components/blockquote/bem';
import { Button } from '@utrecht/components/button/bem';
import { CustomCheckbox } from '@utrecht/components/custom-checkbox/bem';
import { Emphasis } from '@utrecht/components/emphasis/bem';
import { FormFieldDescription } from '@utrecht/components/form-field-description/bem';
import { FormFieldset } from '@utrecht/components/form-fieldset/bem';
import { FormLabel } from '@utrecht/components/form-label/bem';
import { FormToggle } from '@utrecht/components/form-toggle/bem';
import { Heading1 } from '@utrecht/components/heading-1/bem';
import { Heading2 } from '@utrecht/components/heading-2/bem';
import { Heading3 } from '@utrecht/components/heading-3/bem';
import { Heading4 } from '@utrecht/components/heading-4/bem';
import { Heading5 } from '@utrecht/components/heading-5/bem';
import { Heading6 } from '@utrecht/components/heading-6/bem';
import { Link } from '@utrecht/components/link/bem';
import { OrderedList } from '@utrecht/components/ordered-list/bem';
import { PageFooter } from '@utrecht/components/page-footer/bem';
import { Pagination } from '@utrecht/components/pagination/bem';
import { Paragraph } from '@utrecht/components/paragraph/bem';
import { Select } from '@utrecht/components/select/bem';
import { Separator } from '@utrecht/components/separator/bem';
import { TextArea } from '@utrecht/components/textarea/bem';
import { TextBox } from '@utrecht/components/textbox/bem';
import { UnorderedList } from '@utrecht/components/unordered-list/bem';

const Document = ({ innerHTML = '' }) => `<div class="utrecht-document">${innerHTML}</div>`;

export const components = [
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
  {
    name: '@utrecht/separator',
    template: () =>
      Separator({
        distanced: true,
      }),
  },
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
  {
    name: '@utrecht/table',
    template: ({ caption = false }) => `<utrecht-html-content>
  <table>
    ${caption ? '<caption>Caption of the Table</caption>' : ''}
    <thead>
      <tr><th>Column Heading Cell 1</th><th>Column Heading Cell 2</th><th>Column Heading Cell 3</th></tr>
    </theed>
    <tbody>
      <tr><th>Row Heading Cell 1</th><td>Data Cell 1</td><td>Data Cell 2</td></tr>
      <tr><th>Row Heading Cell 2</th><td>Data Cell 3</td><td>Data Cell 4</td></tr>
      <tr><th>Row Heading Cell 3</th><td>Data Cell 5</td><td>Data Cell 6</td></tr>
    </tbody>
  </table>
</utrecht-html-content>
  `,
  },
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
  {
    name: '@utrecht/emphasis',
    template: ({ stressed = false, strong = true, stressedStrong = false }) => `<dl>
  ${
    stressed
      ? `<dt>stressed</dt><dd>${Emphasis({
          textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
          stressed: true,
        })}</dd>`
      : ''
  }
  ${
    strong
      ? `<dt>strong</dt><dd>${Emphasis({
          textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
          strong: true,
        })}</dd>`
      : ''
  }
  ${
    stressedStrong
      ? `<dt>strong and stressed</dt><dd>${Emphasis({
          textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
          stressed: true,
          strong: true,
        })}</dd>`
      : ''
  }
</dl>
`,
  },
  { name: '@utrecht/alternate-lang-link', template: () => '' },
  { name: '@utrecht/alternate-lang-nav', template: () => '' },
  { name: '@utrecht/article', template: () => '' },
  { name: '@utrecht/badge-counter', template: () => `<div>${BadgeCounter({ textContent: '42' })}</div>` },
  { name: '@utrecht/badge-data', template: () => `<div>${BadgeData({ textContent: 'Category 1' })}</div>` },
  { name: '@utrecht/badge-status', template: () => '' },
  {
    name: '@utrecht/blockquote',
    template: () =>
      Blockquote({
        textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
      }),
  },
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
  {
    name: '@utrecht/form-fieldset',
    template: () =>
      FormFieldset({
        legend: 'The Quick Brown Fox Jumps Over The Lazy Dog',
        content: Paragraph({ textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' }),
      }),
  },
  {
    name: '@utrecht/form-label',
    template: ({ checkbox = false, checked = false, disabled = false, radio = false }) => {
      return `<dl>
      <dt>normal</dt>
      <dd>${FormLabel({ textContent: 'Form input' })}</dd>
      ${
        disabled
          ? `<dt>for disabled input</dt><dd>${FormLabel({ textContent: 'Form input', disabled: true })}</dd>`
          : ''
      }
      ${
        checkbox
          ? `<dt>label for option with checkbox</dt><dd>${FormLabel({
              textContent: 'Form option',
              type: 'checkbox',
            })}</dd>`
          : ''
      }
      ${
        checkbox && checked
          ? `<dt>label for checked checkbox</dt><dd>${FormLabel({
              checked: true,
              textContent: 'Form option',
              type: 'checkbox',
            })}</dd>`
          : ''
      }
      ${
        radio
          ? `<dt>label for option with radio button</dt><dd>${FormLabel({
              textContent: 'Form option',
              type: 'radio',
            })}</dd>`
          : ''
      }
      ${
        radio && checked
          ? `<dt>label for selected radio button</dt><dd>${FormLabel({
              checked: true,
              textContent: 'Form option',
              type: 'radio',
            })}</dd>`
          : ''
      }
      </dl>`;
    },
  },
  {
    name: '@utrecht/form-field-description',
    template: ({ invalid = false, valid = false }) => {
      return `<dl>
      <dt>normal</dt>
      <dd>${FormFieldDescription({ innerHTML: 'The Quick Brown Fox Jumps Over The Lazy Dog' })}</dd>
      ${
        invalid
          ? `<dt>invalid</dt><dd>${FormFieldDescription({
              innerHTML: 'The Quick Brown Fox Jumps Over The Lazy Dog',
              status: 'invalid',
            })}</dd>`
          : ''
      }
      ${
        valid
          ? `<dt>valid</dt><dd>${FormFieldDescription({
              innerHTML: 'The Quick Brown Fox Jumps Over The Lazy Dog',
              status: 'valid',
            })}</dd>`
          : ''
      }
      </dl>`;
    },
  },
  { name: '@utrecht/checkbox', template: () => '' },
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
          ? `<dt>disabled and checked</dt><dd>${CustomCheckbox({ checked: true, disabled: true })}</dd>`
          : ''
      }
      ${invalid ? `<dt>invalid</dt><dd>${CustomCheckbox({ invalid: true })}</dd>` : ''}
      ${
        invalid && checked
          ? `<dt>invalid and checked</dt><dd>${CustomCheckbox({ checked: true, invalid: true })}</dd>`
          : ''
      }
      </dl>`;
    },
  },
  { name: '@utrecht/document', template: () => Document({ innerHTML: 'The Quick Brown Fox Jumps Over The Lazy Dog' }) },
  { name: '@utrecht/form-field', template: () => '' },
  { name: '@utrecht/form-field-textbox', template: () => '' },
  { name: '@utrecht/form-field-textarea', template: () => '' },
  { name: '@utrecht/form-field-checkbox', template: () => '' },
  { name: '@utrecht/form-field-checkbox-group', template: () => '' },
  { name: '@utrecht/form-field-toggle', template: () => '' },
  { name: '@utrecht/form-field-radio', template: () => '' },
  { name: '@utrecht/form-field-radio-group', template: () => '' },
  {
    name: '@utrecht/form-toggle',
    template: ({ checked = false, disabled = false, checkedDisabled = false }) => `<dl>
  <dt>normal</dt><dd>${FormToggle({})}</dd>
  ${checked ? `<dt>checked</dt><dd>${FormToggle({ checked: true })}</dd>` : ''}
  ${disabled ? `<dt>disabled</dt><dd>${FormToggle({ disabled: true })}</dd>` : ''}
  ${checkedDisabled ? `<dt>disabled and checked</dt><dd>${FormToggle({ checked: true })}</dd>` : ''}
  </dl>`,
  },
  { name: '@utrecht/heading', template: () => '' },

  { name: '@utrecht/icon', template: () => '' },

  { name: '@utrecht/link-list', template: () => '' },
  { name: '@utrecht/link-social', template: () => '' },
  { name: '@utrecht/logo', template: () => '' },
  { name: '@utrecht/mapcontrolbutton', template: () => '' },
  { name: '@utrecht/menulijst', template: () => '' },
  { name: '@utrecht/nav-top', template: () => '' },
  { name: '@utrecht/navigatie sidenav', template: () => '' },
  { name: '@utrecht/navigatie topnav', template: () => '' },
  { name: '@utrecht/page', template: () => '' },
  { name: '@utrecht/page-content', template: () => '' },
  { name: '@utrecht/page-header', template: () => '' },
  {
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
  { name: '@utrecht/pre-heading', template: () => '' },
  { name: '@utrecht/radio-button', template: () => '' },
  { name: '@utrecht/search-bar', template: () => '' },
  {
    name: '@utrecht/select',
    template: ({ disabled = false, empty = false, invalid = false, required = false }) => {
      const options = [
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
      ];
      return `<dl>
        <dt>normal</dt><dd>${Select({ options })}</dd>
        ${disabled ? `<dt>disabled</dt><dd>${Select({ disabled: true, options })}</dd>` : ''}
        ${empty ? `<dt>empty</dt><dd>${Select()}</dd>` : ''}
        ${invalid ? `<dt>invalid</dt><dd>${Select({ invalid: true, options })}</dd>` : ''}
        ${required ? `<dt>required</dt><dd>${Select({ required: true, options })}</dd>` : ''}
      </dl>`;
    },
  },
  {
    name: '@utrecht/textarea',
    template: ({
      disabled = false,
      placeholder = false,
      focus = false,
      hover = false,
      invalid = false,
      readOnly = false,
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
      readOnly
        ? `<dt>read-only</dt><dd>${TextArea({
            readOnly: true,
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
      readOnly = false,
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
      readOnly
        ? `<dt>read-only</dt><dd>${TextBox({
            readOnly: true,
            value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
          })}</dd>`
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
    name: '@utrecht/page-footer',
    template: () =>
      `${PageFooter({
        innerHTML: Paragraph({ textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' }),
      })}</footer>`,
  },
].filter(Boolean);

export const defaultArgs = components.reduce((args, { name }) => ({ ...args, [name]: false }), {});

export const argTypes = components
  .map(({ name }) => ({ description: name, control: 'boolean' }))
  .reduce((obj, component) => ({ ...obj, [component.description]: component }), {});

export const Template = (args) =>
  components
    .filter(({ name }) => Object.prototype.hasOwnProperty.call(args, name) && !!args[name])
    .map((component) => {
      const { name } = component;
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
