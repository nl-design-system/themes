# @nl-design-system-unstable/voorbeeld-design-tokens

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
