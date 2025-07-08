export default {
  '*.{css,scss}': ['stylelint --allow-empty-input --fix', 'prettier --write'],
  '*.{js,cjs,mjs,json,jsx,ts,tsx}': ['eslint --no-error-on-unmatched-pattern --fix', 'prettier --write'],
  '*.{yml,yaml}': ['prettier --write'],
  '*.md': ['markdownlint', 'prettier --write'],
  'package.json': 'npmPkgJsonLint --allowEmptyTargets',
};
