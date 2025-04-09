# @nl-design-system-unstable/voorbeeld-design-tokens

## 3.4.0

### Minor Changes

- 14505df: De volgende tokens zijn toegevoegd aan de Heading component.

  - `nl.heading.level-1.margin-block-start`
  - `nl.heading.level-1.margin-block-end`
  - `nl.heading.level-2.margin-block-start`
  - `nl.heading.level-2.margin-block-end`
  - `nl.heading.level-3.margin-block-start`
  - `nl.heading.level-3.margin-block-end`
  - `nl.heading.level-4.margin-block-start`
  - `nl.heading.level-4.margin-block-end`
  - `nl.heading.level-5.margin-block-start`
  - `nl.heading.level-5.margin-block-end`
  - `nl.heading.level-6.margin-block-start`
  - `nl.heading.level-6.margin-block-end`

- 42a7949: De volgende tokens zijn toegevoegd aan de Paragraph component.

  - `nl.paragraph.margin-block-start`
  - `nl.paragraph.margin-block-end`
  - `nl.paragraph.lead.margin-block-start`
  - `nl.paragraph.lead.margin-block-end`

## 3.3.5

### Patch Changes

- b87ebef: - Split up component tokensets per organisation, making it easier to copy and paste a token set of a specific component from an organisation.
  - Changed the order of tokens, making them easier to scan.

## 3.3.4

### Patch Changes

- fe6ae00: Use `rem` font sizes in typography tokens for line-height and font-size, to support user preferences for increased line-heights and font-sizes.

## 3.3.3

### Patch Changes

- 39fe849: Fix Color Sample checkerboard color to be grey instead of violet.
- 474b8ae: Fix color contrast for the Color Sample border, to have enough contrast between both black and the border color, and white and the border-color.

## 3.3.2

### Patch Changes

- 8dcd3a2: Improvements for Candidate components.

## 3.3.1

### Patch Changes

- e57282b: Convert percentages to unitless line-height values in the theme output.

## 3.3.0

### Minor Changes

- 1c72a35: - Removed margin tokens to align component with all other components within Figma.
  - Changed color of Separator because of WCAG non-text-contrast.

### Patch Changes

- 9244bf4: Added missing line-height token for Form field Error Message.

## 3.2.0

### Minor Changes

- 7cd5afb: Add candidate code-component tokens

## 3.1.0

### Minor Changes

- 9d9343f: Add tokens for candidate components:

  - `nl.color-sample`
  - `nl.link`
  - `nl.mark`
  - `nl.paragraph`

## 3.0.0

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

## 2.0.0

### Major Changes

- 4c23b37: Renamed tokens:

  - `link.focus.text-decoration` to `link.focus-visible.text-decoration`
  - `link.focus.text-decoration-thickness` to `link.focus-visible.text-decoration-thickness`
  - `skip-link.focus.text-decoration` to `skip-link.focus-visible.text-decoration`
  - `skip-link.focus.background-color` to `skip-link.focus-visible.background-color`
  - `skip-link.focus.color` to `skip-link.focus-visible.color`

  Deleted tokens:
  `todo.link.active.text-decoration`

- 4a31d3a: Renamed

  - tokenset from `text input` to `textbox`.

  Removed tokens:

  - `textbox.hover.border-width`
  - `textbox.focus.border-width`

  Added token:

  - `textbox.min-block-size`
  - `textbox.invalid.border-block-end-width`

  Prefix from `.utrecht` to `.todo`

  - `textbox.focus.border-width`
  - `textbox.hover.*`

  Referenced to common form-control tokens.

- c1bad10: Changed name of tokens:

  - `.breadcrumb.divider.color` to `.breadcrumb-nav.separator.color`.
  - `.breadcrumb.divider.size` to `.breadcrumb-nav.separator.size`.
  - `.breadcrumb.margin-inline` to `breadcrumb-nav.column-gap`.
  - `.breadcrumb.link.icon.margin-inline` to `.breadcrumb-nav.link.icon.column-gap`.

- 3df569b: Changed prefix from `.utrecht` to `.todo` for tokens that do not (yet) exist in code:

  Additional states when checked:

  - `.checkbox.checked.active.background-color`
  - `.checkbox.checked.active.border-color`
  - `.checkbox.checked.active.border-width`
  - `.checkbox.checked.active.color`
  - `.checkbox.checked.focus.background-color`
  - `.checkbox.checked.focus.border-color`
  - `.checkbox.checked.focus.border-width`
  - `.checkbox.checked.focus.color`
  - `.checkbox.checked.hover.background-color`
  - `.checkbox.checked.hover.border-color`
  - `.checkbox.checked.hover.border-width`
  - `.checkbox.checked.hover.color`
  - `.checkbox.checked.disabled.background-color`
  - `.checkbox.checked.disabled.border-color`
  - `.checkbox.checked.disabled.color`

  Additional states when indeterminate:

  - `.checkbox.indeterminate.active.background-color`
  - `.checkbox.indeterminate.active.border-color`
  - `.checkbox.indeterminate.active.border-width`
  - `.checkbox.indeterminate.active.color`
  - `.checkbox.indeterminate.focus.background-color`
  - `.checkbox.indeterminate.focus.border-color`
  - `.checkbox.indeterminate.focus.border-width`
  - `.checkbox.indeterminate.focus.color`
  - `.checkbox.indeterminate.hover.background-color`
  - `.checkbox.indeterminate.hover.border-color`
  - `.checkbox.indeterminate.hover.border-width`
  - `.checkbox.indeterminate.hover.color`
  - `.checkbox.indeterminate.disabled.background-color`
  - `.checkbox.indeterminate.disabled.border-color`
  - `.checkbox.indeterminate.disabled.color`

- 2aea9be: Aligned textarea tokens with code.

  Renamed token:

  - `textarea.border-bottom-width` to `textarea.border-block-end-width`

  Removed tokens:

  - `textarea.hover.border-width`
  - `textarea.focus.border-width`

  Added token:

  - `textarea.min-block-size`
  - `textarea.invalid.border-block-end-width`

  Prefix from `.utrecht` to `.todo`

  - `textarea.focs.border-width`
  - `textarea.hover.*`

- 066e718: Aligned unordered-list tokens with code.

  Added token `unordered-list.item.padding-inline-start`

  Removed tokens:

  - `unordered-list.color`
  - `unordered-list.font-family`
  - `unordered-list.font-weight`
  - `unordered-list.marker.border-color`

- 8f77795: Aligned table tokens with code.

  Changed order in json for better scanning.

  Renamed token:

  - `table.header-cell.color` to `table.header.color`
  - `table.footer-cell.color` to `table.footer.color`
  - `table.data-cell.font-family` to `table.font-family`
  - `table.data-cell.font-size` to `table.font-size`
  - `table.data-cell.line-height` to `table.line-height`
  - `table.footer.border-block-end-color` to `table.footer.border-block-start-color`
  - `table.footer.border-block-end-width` to `table.footer.border-block-start-width`

  Removed token:

  - `table.data-cell.color`
  - `table.data-cell.font-weight`
  - `table.footer-cell.font-family`
  - `table.header-cell.font-family`
  - `table.footer-cell.font-size`
  - `table.header-cell.font-size`
  - `table.footer-cell.line-height`
  - `table.header-cell.line-height`

  Prefix from `.utrecht` to `.todo`

  - `table.footer.border-block-start-width`
  - `table.footer.border-block-start-color`
  - `table.footer-cell.font-weight`

### Minor Changes

- d25afd3: Changed the value of `padding-inline-start` tokens.
- 4b2c160: New added form-control-tokens:

  - `form-control.border-width`
  - `form-control.border-radius`
  - `form-control.font-family`
  - `form-control.font-size`
  - `form-control.line-height`
  - `form-control.max-inline-size`
  - `form-control.padding-block-end`
  - `form-control.padding-block-start`
  - `form-control.padding-inline-end`
  - `form-control.padding-inline-start`

  Referenced in Select component.

- 95b74c0: Add missing token for invalid border-block-end-width.

## 1.0.0

### Major Changes

- 3273fdc: Overview of tokens that had the utrecht prefix and now have the voorbeeld prefix:

  Typography
  .document.strong.font-weight

  Colors
  .root.background-color
  .document.subtle.color
  .document.inverse.color
  .document.inverse.background-color
  .container.border-color
  .line.border-color
  .interaction._ (all)
  .form-control.accent-color
  .form-control.active._ (all)
  .form-control.hover._ (all)
  .form-control.disabled.accent-color
  .feedback.informative._ (all)
  .feedback.negative._ (all)
  .feedback.positive._ (all)

  Size
  icon.functional.size
  icon.toptask.size

  Border
  .container.border-width
  .line.border-width
  .form-control.active.border-width
  .form-control.focus.border-width
  .form-control.hover.border-width

  Focus
  .focus.color
  `.form-control.focus.border-width`
  `.form-control.hover.border-width`

  Focus
  `.focus.color`

- fe0d2d3: Aligned ordered-list tokens with code.

  Added token `ordered-list.item.padding-inline-start`

  Removed tokens:

  - `ordered-list.color`
  - `ordered-list.font-family`
  - `ordered-list.font-weight`

- 2ba357f: `counter-badge` to `badge-counter`
- 63cdafa: Removed margin tokens from headings 1 to 6 to align with other component tokens within Figma.
- e95ef6b: Prefix from `.utrecht` to `.todo`
  - `drawer.header.label.font-family`
  - `drawer.header.label.font-weight`
  - `drawer.header.label.font-size`
  - `drawer.header.label.line-height`
- c8531eb: Deleted tokens

  - `skip-link.font-family`
  - `skip-link.font-size`
  - `skip-link.line-height`
  - `skip-link.focus.border-color`

  Prefix from `.utrecht` to `.todo`:

  - `skip-link.border-color`
  - `skip-link.border-width`
  - `skip-link.box-block-end-shadow`
  - `skip-link.font-weight`

  Renamed token `skip-link.box-block-end-shadow` to `skip-link.box-shadow`

- a1450ca: Aligned link-list tokens with code.
- 7be8d9f: Aligned form-field-error-message tokens with code.

  Renamed token:
  `.form-field-error-message.icon.margin-inline-end` to `.form-field-error-message.column-gap`

  Prefix from `.utrecht` to `.todo`:

  - `.form-field-error-message.column-gap`
  - `.form-field-error-message.icon.size`

  Added tokens:

  - `.form-field-error-message.background-color`
  - `.form-field-error-message.padding*` (all)

  Reordered tokens for easier scanning.

- 71d7484: Removed token that did not exist in code:

  - `utrecht.blockquote.attribution.padding-block-start`

  Changed prefix from `.utrecht` to `.todo` for tokens which do not (yet) exist in code:

  - `.blockquote.row-gap`
  - `.blockquote.attribution.font-family`
  - `.blockquote.attribution.font-weight`
  - `.blockquote.attribution.line-height`
  - `.blockquote.content.font-family`
  - `.blockquote.content.font-weight`
  - `.blockquote.content.line-height`

- 6e8337d: Removed margin tokens from Paragraph to align with other component tokens within Figma.
- f22ba6e: Changed prefix of heading.color token from todo. to utrecht. because it is available in code.
- 5c8d80f: - Renamed token and tokenset `radio` to `radio-button`.
  - Renamed token `radio-button.dot.size` to `radio-button.icon.size`.
  - Removed token `radio-button-border-radius`.
- 63d0037: Changed name to align with code:

  - `.accordion.body` to `.accordion.panel`
  - `.accordion.button.icon.margin-inline` to `.accordion.button.gap`

  Changed prefix from `.utrecht` to `.todo` for tokens which do not (yet) exist in code:

  - `.accordion.border-radius`
  - `.accordion.button.font-family`
  - `.accordion.button.font-size`
  - `.accordion.button.font-weight`
  - `.accordion.button.line-height`
  - `.accordion.button.expanded.background-color`
  - `.accordion.button.expanded.border-color`
  - `.accordion.button.expanded.color`
  - `.accordion.section.border-color`
  - `.accordion.section.border-block-end-width`

- cbddf5b: - `paragraph-lead` to `paragraph.lead`
  - `paragraph-small-print` to `paragraph.small`
- a698ba1: fix: focus.color was supported as a token in code of utrecht so get's its utrecht. prefix back.
- 7b2da01: Changed prefix from .utrecht to .todo for tokens that do not (yet) exist in code:

  - `.badge-counter.border-color`
  - `.badge-counter.border-width`
  - `.badge-counter.line-height`

- 71526ec: Added tokens that are available in code:

  - `.alert.background-color`
  - `.alert.border-color`
  - `.alert.border-radius`
  - `.alert.color`
  - `.alert.content.row-gap`
  - `.alert.message.row-gap`
  - `.alert.icon.color`

  Changed prefix from `.utrecht` to `.todo` for tokens that do not (yet) exist in code:

  - `.alert.heading.font-family`
  - `.alert.heading.font-size`
  - `.alert.heading.font-weight`
  - `.alert.heading.line-height`

  Removed tokens that are available in code, but have no use in Figma:

  - `.alert.margin-block-end`
  - `.alert.margin-block-start`

- 259e03b: - Renamed token `select.border-bottom-width` to `border-block-end-width`.

  - Added token `select.min-block-size`.
  - Removed token `select.invalid.color`.

  Prefix from `.utrecht` to `.todo`

  - `select.line-height`
  - `select.icon.size`
  - `select.focus.border-width`
  - `select.hover.*`

- 8ca54cd: Prefix from `.utrecht` to `.todo` for `link.active.text-decoration`.
- d0fd504: Removed tokens that are available in code, but have no use in Figma:

  - `.button.margin-block-end`
  - `.button.margin-block-start`

- a34a768: De design tokens van de Breadcrumb navigation zijn hernoemd. "Breadcrumb" heet nu namelijk "Breadcrumb navigation".

  De enige stap voor migratie is: `breadcrumb` moet je in de design tokens JSON aanpassen naar `breadcrumb-nav`.

### Minor Changes

- 264cd64: Add Link list tokens.
