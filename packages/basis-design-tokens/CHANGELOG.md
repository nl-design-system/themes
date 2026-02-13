# @nl-design-system-unstable/basis-design-tokens

## 3.0.2

### Patch Changes

- f0dfa7a: Removed documentation files to no longer include in Themes storybook and prepare for deprecation in the future.

## 3.0.1

### Patch Changes

- 35797a7: Verwijder `src/index.scss` in nieuwe stijl themes. Dit bestand was al onbruikbaar gezien het niet-bestaande bestanden importeerde.

## 3.0.0

### Major Changes

- ba45268: Basis Theme V3: MVP Theme Builder edition.

## 2.1.2

### Patch Changes

- 85440d4: Use thicker underline for links on hover, and move underline slightly away from text.
- 1f57b39: Make Fieldset legends bold for Purmerend and Basis thema.
- 0bb561e: Use `dashed` instead of `dotted` focus ring, because it adheres to WCAG more reliable. Some browsers render circular dots, in that case the 4px outline-width is not sufficient to achieve the minimum focus ring area.

## 2.1.1

### Patch Changes

- e57282b: Convert percentages to unitless line-height values in the theme output.

## 2.1.0

### Minor Changes

- 6a6099f: Add tokens to basis-theme:

  - configure default activate and submit cursor values
  - `utrecht.link` tokens for colors and text-decoration now fallback to component tokens, not common tokens
  - replace `utrecht.document.color` with `basis.body.color`
  - replace `utrecht.focus.color` with `basis.focus.color`
  - replace `utrecht.focus.background-color` with `basis.focus.background-color`
  - add `basis.color.focus.*` and `basis.color.selected.*` tokens

## 2.0.0

### Major Changes

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

  The following files are no longer available, and here are their migration steps:

  - `index.js`: switch to `variables.mjs`.
  - `index.json`: switch to `list.json`.
  - `index.less`: switch to `variables.json`.
  - `index.scss`: switch to `_variables.scss`.

  Also: `tokens.json` no longer contains the Style Dictionary CTI values in `attributes`. Only `$extensions`, `$type` and `$value` are supported from now on. The other properties may be removed without prior notice, such as: `filePath`, `isSource`, `original`, `name`, `attributes` and `path`.
