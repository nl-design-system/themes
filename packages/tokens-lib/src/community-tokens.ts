import { readFile } from 'node:fs/promises';
import merge from 'lodash-es/merge';

const tokenPackages = [
  '@utrecht/accordion-css',
  '@utrecht/alert-dialog-css',
  // '@utrecht/alternate-lang-nav-css',
  '@utrecht/article-css',
  '@utrecht/backdrop-css',
  '@utrecht/badge-counter-css',
  '@utrecht/badge-data-css',
  '@utrecht/badge-list-css',
  '@utrecht/badge-status-css',
  '@utrecht/blockquote-css',
  '@utrecht/breadcrumb-nav-css',
  '@utrecht/button-css',
  '@utrecht/button-group-css',
  '@utrecht/button-link-css',
  '@utrecht/calendar-css',
  '@utrecht/checkbox-css',
  '@utrecht/code-block-css',
  '@utrecht/color-sample-css',
  '@utrecht/column-layout-css',
  // '@utrecht/combobox-css',
  '@utrecht/currency-data-css',
  '@utrecht/custom-checkbox-css',
  '@utrecht/data-list-css',
  '@utrecht/data-placeholder-css',
  '@utrecht/digid-button-css',
  '@utrecht/document-css',
  '@utrecht/drawer-css',
  '@utrecht/emphasis-css',
  '@utrecht/form-field-css',
  '@utrecht/form-field-description-css',
  '@utrecht/form-field-error-message-css',
  '@utrecht/form-fieldset-css',
  '@utrecht/form-label-css',
  '@utrecht/form-toggle-css',
  '@utrecht/heading-1-css',
  '@utrecht/heading-2-css',
  '@utrecht/heading-3-css',
  '@utrecht/heading-4-css',
  '@utrecht/heading-5-css',
  '@utrecht/heading-6-css',
  '@utrecht/heading-group-css',
  // '@utrecht/html-content-css',
  '@utrecht/iban-data-css',
  // '@utrecht/icon',
  '@utrecht/index-char-nav-css',
  '@utrecht/link-button-css',
  '@utrecht/link-list-css',
  '@utrecht/link-social-css',
  '@utrecht/list-social-css',
  '@utrecht/listbox-css',
  '@utrecht/logo-button-css',
  '@utrecht/logo-image-css',
  '@utrecht/map-control-button-css',
  '@utrecht/map-marker-css',
  '@utrecht/multiline-data-css',
  '@utrecht/nav-bar-css',
  '@utrecht/nav-list-css',
  '@utrecht/number-data-css',
  '@utrecht/ordered-list-css',
  '@utrecht/page-content-css',
  '@utrecht/page-footer-css',
  '@utrecht/page-header-css',
  '@utrecht/pagination-css',
  '@utrecht/paragraph-css',
  '@utrecht/pre-heading-css',
  '@utrecht/preserve-data-css',
  '@utrecht/radio-button-css',
  '@utrecht/search-bar-css',
  '@utrecht/separator-css',
  '@utrecht/skip-link-css',
  '@utrecht/spotlight-section-css',
  '@utrecht/surface-css',
  '@utrecht/textarea-css',
  '@utrecht/textbox-css',
  '@utrecht/top-task-link-css',
  '@utrecht/top-task-nav-css',
  '@utrecht/unordered-list-css',
  // '@utrecht/url-data-css',
];

export const getCommunityTokens = async () => {
  const tokens = await Promise.all(
    tokenPackages.map(async (packageName) => {
      const packagePath = import.meta.resolve(packageName);
      const tokensPath = new URL('../src/tokens.json', packagePath);

      try {
        return JSON.parse(await readFile(tokensPath, 'utf-8'));
      } catch (e) {
        return {};
      }
    }),
  );

  return merge({}, ...tokens);
};
