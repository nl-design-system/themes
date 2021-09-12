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
    template: () => `<utrecht-button>Button</utrecht-button>`,
  },
  {
    name: '@utrecht/heading-1',
    template: () => `<utrecht-heading-1>The Quick Brown Fox Jumps Over The Lazy Dog</utrecht-heading-1>`,
  },
  {
    name: '@utrecht/heading-2',
    template: () => `<utrecht-heading-2>The Quick Brown Fox Jumps Over The Lazy Dog</utrecht-heading-2>`,
  },
  {
    name: '@utrecht/heading-3',
    template: () => `<utrecht-heading-3>The Quick Brown Fox Jumps Over The Lazy Dog</utrecht-heading-3>`,
  },
  {
    name: '@utrecht/heading-4',
    template: () => `<utrecht-heading-4>The Quick Brown Fox Jumps Over The Lazy Dog</utrecht-heading-4>`,
  },
  {
    name: '@utrecht/heading-5',
    template: () => `<utrecht-heading-5>The Quick Brown Fox Jumps Over The Lazy Dog</utrecht-heading-5>`,
  },
  {
    name: '@utrecht/heading-6',
    template: () => `<utrecht-heading-6>The Quick Brown Fox Jumps Over The Lazy Dog</utrecht-heading-6>`,
  },
  {
    name: '@utrecht/paragraph',
    template: () => `<utrecht-paragraph>The Quick Brown Fox Jumps Over The Lazy Dog</utrecht-paragraph>`,
  },
  {
    name: '@utrecht/textbox',
    template: () => `<utrecht-textbox value="The Quick Brown Fox Jumps Over The Lazy Dog"></utrecht-textbox>`,
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
