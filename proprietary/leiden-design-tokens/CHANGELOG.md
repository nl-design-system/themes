# @nl-design-system-unstable/leiden-design-tokens

## 3.0.0

### Major Changes

- 0fcf0aa: No longer ship the legacy files. Migration steps:

  - Migrate from `dist/index.json` to `dist/list.json`
  - Migrate from `dist/design-tokens.css` to `dist/theme.css`
  - Migrate from `dist/index.less` to `dist/variables.less`
  - Migrate from `index.js` to `dist/variables.mjs`

### Minor Changes

- df44bf8: Apply NL Design System Figma changelog 12.1.0, see: https://nldesignsystem.nl/handboek/designer/figma-changelog/#1210

### Patch Changes

- 0fcf0aa: Fix `box-shadow` design tokens with `[object Object]` values.

## 2.0.0

### Major Changes

- 2560b78: New theme based on NL Design System Start thema

## 1.0.0

### Minor Changes

- c5299b0: Use new standard design tokens package filenames:

  - `_mixin.scss`: SCSS file with a mixin that adds all CSS variables `@mixin voorbeeld-theme { /* ... */ }`.
  - `_variables.scss`: SCSS file with SCSS variables, for example: `$my-color-token: #ABCDEF !default;`.
  - `list.json`: JSON with array of all tokens. The `path`, `$value`, `$type` and `$extensions` properties are supported, all non-standard properties may be removed without prior notice.
  - `theme.css`: CSS file with all CSS properties in a class name: `.my-theme { /* ... */ }`.
  - `tokens.cjs`: CommonJS exports with the same data as `tokens.json`.
  - `tokens.d.ts`: TypeScript declaration for `tokens.mjs` and `tokens.json`.
  - `tokens.json`: JSON file with the design tokens tree.
  - `variables.cjs`: CommonJS file that exports every design token as camel cased property: `module.exports = { "myColorToken": "#ABCDEF" };`.
  - `variables.css`: CSS file with all tokens as CSS variable on the `:root` selector.
  - `variables.d.ts`: TypeScript declaration for `variables.mjs`.
  - `variables.less`: LESS stylesheet with all design tokens as variable: `@my-color-token: #ABCDEF;`.
  - `variables.mjs`: ES Module with akk design tokens exported as `const`: `export const myColorToken = "#ABCDEF";`.

  The following files are now deprecated, and here are their migration steps:

  - `index.js`: switch to `variables.mjs`.
  - `index.json`: switch to `list.json`.
  - `index.less`: switch to `variables.json`.
  - `index.scss`: switch to `_variables.scss`.

  Also: `tokens.json` no longer contains the Style Dictionary CTI values in `attributes`. Only `$extensions`, `$type` and `$value` are supported from now on. The other properties may be removed without prior notice, such as: `filePath`, `isSource`, `original`, `name`, `attributes` and `path`.
