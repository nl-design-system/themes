# @nl-design-system-unstable/voorbeeld-design-tokens

## 8.0.0

### Major Changes

- 32b6be1: De volgende tokens zijn toegevoegd aan Modal Dialog component:

  - `ams.dialog.background-color`
  - `ams.dialog.border-color`
  - `ams.dialog.border-style`
  - `ams.dialog.border-width`
  - `ams.dialog.gap`
  - `ams.dialog.inline-size`
  - `ams.dialog.max-block-size`
  - `ams.dialog.max-inline-size`
  - `ams.dialog.medium.inline-size`
  - `ams.dialog.medium.max-block-size`
  - `ams.dialog.backdrop.background-color`
  - `ams.dialog.header.gap`
  - `ams.dialog.header.padding-block`
  - `ams.dialog.header.padding-inline`
  - `ams.dialog.header.medium.padding-block`
  - `ams.dialog.header.medium.padding-inline`
  - `ams.dialog.body.padding-block`
  - `ams.dialog.body.padding-inline`
  - `ams.dialog.body.medium.padding-inline`
  - `ams.dialog.footer.padding-block`
  - `ams.dialog.footer.padding-inline`
  - `ams.dialog.footer.medium.padding-block`
  - `ams.dialog.footer.medium.padding-inline`
  - `todo.dialog.border-radius`
  - `todo.dialog.box-shadow`

  De volgende tokens zijn verwijderd uit ToDo Modal Dialog component:

  - `todo.modal-dialog.background-color`
  - `todo.modal-dialog.border-color`
  - `todo.modal-dialog.border-radius`
  - `todo.modal-dialog.border-width`
  - `todo.modal-dialog.box-shadow`
  - `todo.modal-dialog.color`
  - `todo.modal-dialog.content.padding-block-end`
  - `todo.modal-dialog.content.padding-block-start`
  - `todo.modal-dialog.content.padding-inline`
  - `todo.modal-dialog.footer.background-color`
  - `todo.modal-dialog.footer.border-color`
  - `todo.modal-dialog.footer.border-width`
  - `todo.modal-dialog.footer.padding-block-end`
  - `todo.modal-dialog.footer.padding-block-start`
  - `todo.modal-dialog.footer.padding-inline-end`
  - `todo.modal-dialog.footer.padding-inline-start`
  - `todo.modal-dialog.header.background-color`
  - `todo.modal-dialog.header.border-color`
  - `todo.modal-dialog.header.border-width`
  - `todo.modal-dialog.header.column-gap`
  - `todo.modal-dialog.header.padding-block-end`
  - `todo.modal-dialog.header.padding-block-start`
  - `todo.modal-dialog.header.padding-inline-end`
  - `todo.modal-dialog.header.padding-inline-start`
  - `todo.modal-dialog.header.label.color`
  - `todo.modal-dialog.header.label.font-family`
  - `todo.modal-dialog.header.label.font-size`
  - `todo.modal-dialog.header.label.font-weight`
  - `todo.modal-dialog.header.label.line-height`

- fea1c1f: Token `ams.heading.inverse-color` is hernoemd naar `ams.heading.inverse.color` in Heading component.

### Minor Changes

- 11566b7: De volgende tokens zijn toegevoegd aan Date Input component:

  - `ams.date-input.background-color`
  - `ams.date-input.border-color`
  - `ams.date-input.border-style`
  - `ams.date-input.border-width`
  - `ams.date-input.color`
  - `ams.date-input.font-size`
  - `ams.date-input.font-family`
  - `ams.date-input.font-weight`
  - `ams.date-input.line-height`
  - `ams.date-input.min-block-size`
  - `ams.date-input.min-inline-size`
  - `ams.date-input.outline-offset`
  - `ams.date-input.padding-block`
  - `ams.date-input.padding-inline`
  - `ams.date-input.calendar-picker-indicator.background-image`
  - `ams.date-input.calendar-picker-indicator.cursor`
  - `ams.date-input.disabled.border-color`
  - `ams.date-input.disabled.color`
  - `ams.date-input.disabled.cursor`
  - `ams.date-input.disabled.calendar-picker-indicator.background-image`
  - `ams.date-input.hover.box-shadow`
  - `ams.date-input.hover.calendar-picker-indicator.background-image`
  - `ams.date-input.invalid.border-color`
  - `ams.date-input.invalid.hover.border-color`
  - `ams.date-input.invalid.hover.box-shadow`

- 775c4ef: De volgende tokens zijn toegevoegd aan Description List component:

  - `ams.description-list.color`
  - `ams.description-list.column-gap`
  - `ams.description-list.font-family`
  - `ams.description-list.font-size`
  - `ams.description-list.grid-template-columns`
  - `ams.description-list.line-height`
  - `ams.description-list.row-gap`
  - `ams.description-list.description.font-weight`
  - `ams.description-list.description.padding-inline-start`
  - `ams.description-list.inverse.color`
  - `ams.description-list.medium.grid-template-columns`
  - `ams.description-list.narrow.grid-template-columns`
  - `ams.description-list.section.column-gap`
  - `ams.description-list.term.font-weight`
  - `ams.description-list.wide.grid-template-columns`

- bc75456: De volgende tokens zijn toegevoegd aan Navigation Bar component:

  - `utrecht.nav-bar.content.background-color`
  - `utrecht.nav-bar.content.color`

  Waarde van token `utrecht.nav-bar.content.max-inline-size` is gewijzigd van `1184px` naar `{basis.page.max-inline-size}`.

  Controleer of deze wijziging ook wenselijk is voor het thema van jouw organisatie. Zo niet, dan hoef je deze niet over te nemen.

- e959539: De volgende tokens zijn toegevoegd aan Calendar component:

  - `utrecht.calendar.background-color`
  - `utrecht.calendar.width`
  - `utrecht.calendar.icon.size`
  - `utrecht.calendar.navigation.background-color`
  - `utrecht.calendar.navigation.color`
  - `utrecht.calendar.navigation.padding-block-end`
  - `utrecht.calendar.navigation.padding-block-start`
  - `utrecht.calendar.navigation.label.color`
  - `utrecht.calendar.navigation.label.font-size`
  - `utrecht.calendar.table.padding-block-end`
  - `utrecht.calendar.table.padding-block-start`
  - `utrecht.calendar.table.days-item-day.border-color`
  - `utrecht.calendar.table.days-item-day.border-width`
  - `utrecht.calendar.table.days-item-day.color`
  - `utrecht.calendar.table.days-item-day.size`
  - `utrecht.calendar.table.days-item-day.active.background-color`
  - `utrecht.calendar.table.days-item-day.active.border-color`
  - `utrecht.calendar.table.days-item-day.active.color`
  - `utrecht.calendar.table.days-item-day.disabled.background-color`
  - `utrecht.calendar.table.days-item-day.disabled.border-color`
  - `utrecht.calendar.table.days-item-day.disabled.color`
  - `utrecht.calendar.table.days-item-day.emphasis.background-color`
  - `utrecht.calendar.table.days-item-day.emphasis.border-color`
  - `utrecht.calendar.table.days-item-day.emphasis.color`
  - `utrecht.calendar.table.days-item-day.emphasis.font-weight`
  - `utrecht.calendar.table.days-item-day.focus.background-color`
  - `utrecht.calendar.table.days-item-day.focus.border-color`
  - `utrecht.calendar.table.days-item-day.focus.color`
  - `utrecht.calendar.table.days-item-day.hover.background-color`
  - `utrecht.calendar.table.days-item-day.hover.border-color`
  - `utrecht.calendar.table.days-item-day.hover.color`
  - `utrecht.calendar.table.days-item-day.is-today.background-color`
  - `utrecht.calendar.table.days-item-day.is-today.border-color`
  - `utrecht.calendar.table.days-item-day.is-today.color`
  - `utrecht.calendar.table.days-item-day.is-today.font-weight`
  - `utrecht.calendar.table.days-item-day.out-of-the-month.background-color`
  - `utrecht.calendar.table.days-item-day.out-of-the-month.border-color`
  - `utrecht.calendar.table.days-item-day.out-of-the-month.color`
  - `utrecht.calendar.table.days-item-day.selected.background-color`
  - `utrecht.calendar.table.days-item-day.selected.border-color`
  - `utrecht.calendar.table.days-item-day.selected.color`
  - `utrecht.calendar.table.days-item-day.selected.font-weight`
  - `utrecht.calendar.table.weeks-item.width`
  - `todo.calendar.table.days-item-day.disabled.font-weight`

## 7.4.1

### Patch Changes

- 7d5674d: Token `nl.button.outline-offset` is verwijderd uit Button component.

## 7.4.0

### Minor Changes

- 36adf55: De waarde van de volgende tokens zijn gewijzigd:

  - Waarde van token `nl.button.padding-block-end` is gewijzigd van `basis.space.block.lg` naar `basis.space.block.md`.
  - Waarde van token `nl.button.padding-block-start` is gewijzigd van `basis.space.block.lg` naar `basis.space.block.md`.
  - Waarde van token `nl.button.icon-only.padding-block-end` is gewijzigd van `basis.space.block.lg` naar `basis.space.block.md`.
  - Waarde van token `nl.button.icon-only.padding-block-start` is gewijzigd van `basis.space.block.lg` naar `basis.space.block.md`.
  - Waarde van token `nl.button.icon-only.padding-inline-end` is gewijzigd van `basis.space.inline.lg` naar `basis.space.inline.md`.
  - Waarde van token `nl.button.icon-only.padding-inline-start` is gewijzigd van `basis.space.inline.lg` naar `basis.space.inline.md`.

## 7.3.0

### Minor Changes

- 162881e: Waarde van token `nl.button.subtle.border-width` is gewijzigd van `{nl.button.default.border-width}` naar `0px`.

## 7.2.0

### Minor Changes

- f0e24c1: De volgende tokens zijn toegevoegd voor de Breadcrumb Navigation component van Amsterdam:

  - `ams.breadcrumb.font-family`
  - `ams.breadcrumb.font-size`
  - `ams.breadcrumb.font-weight`
  - `ams.breadcrumb.line-height`
  - `ams.breadcrumb.separator.background-image`
  - `ams.breadcrumb.separator.block-size`
  - `ams.breadcrumb.separator.inline-size`
  - `ams.breadcrumb.separator.margin-inline`
  - `ams.breadcrumb.link.color`
  - `ams.breadcrumb.link.outline-offset`
  - `ams.breadcrumb.link.text-decoration-line`
  - `ams.breadcrumb.link.text-underline-offset`
  - `ams.breadcrumb.link.text-decoration-thickness`
  - `ams.breadcrumb.link.hover.color`
  - `ams.breadcrumb.link.hover.text-decoration-line`

- 56ffd5c: De volgende tokens zijn toegevoegd aan Button component:

  - `nl.button.icon-only.padding-block-end`
  - `nl.button.icon-only.padding-block-start`
  - `nl.button.icon-only.padding-inline-end`
  - `nl.button.icon-only.padding-inline-start`

- 38fabb0: De volgende tokens zijn toegevoegd aan Navigation List component:

  - `rhc.navigation-list.item.background-color`
  - `rhc.navigation-list.item.border-color`
  - `rhc.navigation-list.item.border-width`
  - `rhc.navigation-list.item.column-gap`
  - `rhc.navigation-list.item.min-height`
  - `rhc.navigation-list.item.padding-block`
  - `rhc.navigation-list.item.padding-inline`
  - `rhc.navigation-list.item.active.background-color`
  - `rhc.navigation-list.item.hover.background-color`
  - `rhc.navigation-list.item.focus.background-color`
  - `rhc.navigation-list.item.content.column-gap`
  - `rhc.navigation-list.item.content.row-gap`
  - `rhc.navigation-list.item.description.color`
  - `rhc.navigation-list.item.description.font-size`
  - `rhc.navigation-list.item.description.line-height`
  - `rhc.navigation-list.item.icon-end.color`
  - `rhc.navigation-list.item.icon-start.background-color`
  - `rhc.navigation-list.item.icon-start.border-radius`
  - `rhc.navigation-list.item.icon-start.color`
  - `rhc.navigation-list.item.icon-start.padding-block`
  - `rhc.navigation-list.item.icon-start.padding-inline`
  - `rhc.navigation-list.item.icon-start.size`
  - `rhc.navigation-list.item.label.color`
  - `rhc.navigation-list.item.label.font-family`
  - `rhc.navigation-list.item.label.font-size`
  - `rhc.navigation-list.item.label.font-weight`
  - `rhc.navigation-list.item.label.line-height`

- 874c315: De volgende tokens zijn toegevoegd voor de Status Badge component:

  - `utrecht.status-badge.background-color`
  - `utrecht.status-badge.border-color`
  - `utrecht.status-badge.border-radius`
  - `utrecht.status-badge.border-width`
  - `utrecht.status-badge.color`
  - `utrecht.status-badge.font-family`
  - `utrecht.status-badge.font-size`
  - `utrecht.status-badge.font-weight`
  - `utrecht.status-badge.line-height`
  - `utrecht.status-badge.letter-spacing`
  - `utrecht.status-badge.min-block-size`
  - `utrecht.status-badge.min-inline-size`
  - `utrecht.status-badge.padding-block`
  - `utrecht.status-badge.padding-inline`
  - `utrecht.status-badge.text-transform`
  - `utrecht.status-badge.active.background-color`
  - `utrecht.status-badge.active.border-color`
  - `utrecht.status-badge.active.color`
  - `utrecht.status-badge.danger.background-color`
  - `utrecht.status-badge.danger.border-color`
  - `utrecht.status-badge.danger.color`
  - `utrecht.status-badge.error.background-color`
  - `utrecht.status-badge.error.border-color`
  - `utrecht.status-badge.error.color`
  - `utrecht.status-badge.inactive.background-color`
  - `utrecht.status-badge.inactive.border-color`
  - `utrecht.status-badge.inactive.color`
  - `utrecht.status-badge.invalid.background-color`
  - `utrecht.status-badge.invalid.border-color`
  - `utrecht.status-badge.invalid.color`
  - `utrecht.status-badge.neutral.background-color`
  - `utrecht.status-badge.neutral.border-color`
  - `utrecht.status-badge.neutral.color`
  - `utrecht.status-badge.safe.background-color`
  - `utrecht.status-badge.safe.border-color`
  - `utrecht.status-badge.safe.color`
  - `utrecht.status-badge.success.background-color`
  - `utrecht.status-badge.success.border-color`
  - `utrecht.status-badge.success.color`
  - `utrecht.status-badge.valid.background-color`
  - `utrecht.status-badge.valid.border-color`
  - `utrecht.status-badge.valid.color`
  - `utrecht.status-badge.warning.background-color`
  - `utrecht.status-badge.warning.border-color`
  - `utrecht.status-badge.warning.color`

## 7.1.0

### Minor Changes

- e01b7f5: Aanvullende design tokens voor de pressed state van de Candidate Button. De volgende design tokens zijn erbij gekomen:

  **Default**

  - `nl.button.default.pressed.active.background-color`
  - `nl.button.default.pressed.active.border-color`
  - `nl.button.default.pressed.active.color`
  - `nl.button.default.pressed.disabled.background-color`
  - `nl.button.default.pressed.disabled.border-color`
  - `nl.button.default.pressed.disabled.color`
  - `nl.button.default.pressed.hover.background-color`
  - `nl.button.default.pressed.hover.border-color`
  - `nl.button.default.pressed.hover.color`

  **Primary**

  - `nl.button.primary.pressed.active.background-color`
  - `nl.button.primary.pressed.active.border-color`
  - `nl.button.primary.pressed.active.color`
  - `nl.button.primary.pressed.disabled.background-color`
  - `nl.button.primary.pressed.disabled.border-color`
  - `nl.button.primary.pressed.disabled.color`
  - `nl.button.primary.pressed.hover.background-color`
  - `nl.button.primary.pressed.hover.border-color`
  - `nl.button.primary.pressed.hover.color`

  **Primary - Negative**

  - `nl.button.primary.negative.pressed.active.background-color`
  - `nl.button.primary.negative.pressed.active.border-color`
  - `nl.button.primary.negative.pressed.active.color`
  - `nl.button.primary.negative.pressed.disabled.background-color`
  - `nl.button.primary.negative.pressed.disabled.border-color`
  - `nl.button.primary.negative.pressed.disabled.color`
  - `nl.button.primary.negative.pressed.hover.background-color`
  - `nl.button.primary.negative.pressed.hover.border-color`
  - `nl.button.primary.negative.pressed.hover.color`

  **Primary - Positive**

  - `nl.button.primary.positive.pressed.active.background-color`
  - `nl.button.primary.positive.pressed.active.border-color`
  - `nl.button.primary.positive.pressed.active.color`
  - `nl.button.primary.positive.pressed.disabled.background-color`
  - `nl.button.primary.positive.pressed.disabled.border-color`
  - `nl.button.primary.positive.pressed.disabled.color`
  - `nl.button.primary.positive.pressed.hover.background-color`
  - `nl.button.primary.positive.pressed.hover.border-color`
  - `nl.button.primary.positive.pressed.hover.color`

  **Secondary**

  - `nl.button.secondary.pressed.active.background-color`
  - `nl.button.secondary.pressed.active.border-color`
  - `nl.button.secondary.pressed.active.color`
  - `nl.button.secondary.pressed.disabled.background-color`
  - `nl.button.secondary.pressed.disabled.border-color`
  - `nl.button.secondary.pressed.disabled.color`
  - `nl.button.secondary.pressed.hover.background-color`
  - `nl.button.secondary.pressed.hover.border-color`
  - `nl.button.secondary.pressed.hover.color`

  **Secondary - Negative**

  - `nl.button.secondary.negative.pressed.active.background-color`
  - `nl.button.secondary.negative.pressed.active.border-color`
  - `nl.button.secondary.negative.pressed.active.color`
  - `nl.button.secondary.negative.pressed.disabled.background-color`
  - `nl.button.secondary.negative.pressed.disabled.border-color`
  - `nl.button.secondary.negative.pressed.disabled.color`
  - `nl.button.secondary.negative.pressed.hover.background-color`
  - `nl.button.secondary.negative.pressed.hover.border-color`
  - `nl.button.secondary.negative.pressed.hover.color`

  **Secondary - Positive**

  - `nl.button.secondary.positive.pressed.active.background-color`
  - `nl.button.secondary.positive.pressed.active.border-color`
  - `nl.button.secondary.positive.pressed.active.color`
  - `nl.button.secondary.positive.pressed.disabled.background-color`
  - `nl.button.secondary.positive.pressed.disabled.border-color`
  - `nl.button.secondary.positive.pressed.disabled.color`
  - `nl.button.secondary.positive.pressed.hover.background-color`
  - `nl.button.secondary.positive.pressed.hover.border-color`
  - `nl.button.secondary.positive.pressed.hover.color`

  **Subtle**

  - `nl.button.subtle.pressed.active.background-color`
  - `nl.button.subtle.pressed.active.border-color`
  - `nl.button.subtle.pressed.active.color`
  - `nl.button.subtle.pressed.disabled.background-color`
  - `nl.button.subtle.pressed.disabled.border-color`
  - `nl.button.subtle.pressed.disabled.color`
  - `nl.button.subtle.pressed.hover.background-color`
  - `nl.button.subtle.pressed.hover.border-color`
  - `nl.button.subtle.pressed.hover.color`

  **Subtle - Negative**

  - `nl.button.subtle.negative.pressed.active.background-color`
  - `nl.button.subtle.negative.pressed.active.border-color`
  - `nl.button.subtle.negative.pressed.active.color`
  - `nl.button.subtle.negative.pressed.disabled.background-color`
  - `nl.button.subtle.negative.pressed.disabled.border-color`
  - `nl.button.subtle.negative.pressed.disabled.color`
  - `nl.button.subtle.negative.pressed.hover.background-color`
  - `nl.button.subtle.negative.pressed.hover.border-color`
  - `nl.button.subtle.negative.pressed.hover.color`

  **Subtle - Positive**

  - `nl.button.subtle.positive.pressed.active.background-color`
  - `nl.button.subtle.positive.pressed.active.border-color`
  - `nl.button.subtle.positive.pressed.active.color`
  - `nl.button.subtle.positive.pressed.disabled.background-color`
  - `nl.button.subtle.positive.pressed.disabled.border-color`
  - `nl.button.subtle.positive.pressed.disabled.color`
  - `nl.button.subtle.positive.pressed.hover.background-color`
  - `nl.button.subtle.positive.pressed.hover.border-color`
  - `nl.button.subtle.positive.pressed.hover.color`

## 7.0.0

### Major Changes

- a999745: De volgende tokens zijn toegevoegd aan Avatar component van Amsterdam:

  - `ams.avatar.aspect-ratio`
  - `ams.avatar.background-color`
  - `ams.avatar.border-color`
  - `ams.avatar.border-style`
  - `ams.avatar.border-width`
  - `ams.avatar.color`
  - `ams.avatar.font-family`
  - `ams.avatar.font-size`
  - `ams.avatar.inline-size`
  - `ams.avatar.line-height`
  - `ams.avatar.padding-block`
  - `ams.avatar.padding-inline`
  - `ams.avatar.has-image.inline-size`

  De volgende tokens zijn verwijderd uit ToDo Avatar component:

  - `todo.avatar.background-color`
  - `todo.avatar.border-color`
  - `todo.avatar.border-radius`
  - `todo.avatar.border-width`
  - `todo.avatar.color`
  - `todo.avatar.size`
  - `todo.avatar.icon.icon-size`
  - `todo.avatar.font-family`
  - `todo.avatar.font-size`
  - `todo.avatar.font-weight`
  - `todo.avatar.line-height`
  - `todo.avatar.text-transform`

- 3c6748d: De volgende tokens zijn toegevoegd aan Case Card component:

  - `todo.case-card.description.color`
  - `todo.case-card.description.font-family`
  - `todo.case-card.description.font-size`
  - `todo.case-card.description.font-weight`
  - `todo.case-card.description.line-height`
  - `todo.case-card.archived.description.color`
  - `todo.case-card.metadata.color`
  - `todo.case-card.metadata.font-family`
  - `todo.case-card.metadata.font-size`
  - `todo.case-card.metadata.font-weight`
  - `todo.case-card.metadata.line-height`
  - `todo.case-card.archived.metadata.color`

  De volgende tokens zijn hernoemd in Case Card component:

  Read-only --> Archived

  - `todo.case-card.heading.read-only.color` naar `todo.case-card.archived.heading.color`
  - `todo.case-card.read-only.background-color` naar `todo.case-card.archived.background-color`
  - `todo.case-card.read-only.color` naar `todo.case-card.archived.color`
  - `todo.case-card.read-only.active.background-color` naar `todo.case-card.archived.active.background-color`
  - `todo.case-card.read-only.hover.background-color` naar `todo.case-card.archived.hover.background-color`
  - `todo.case-card.decoration.folder.read-only.background-color` naar `todo.case-card.archived.decoration.folder.background-color`
  - `todo.case-card.decoration.folder.read-only.active.background-color` naar `todo.case-card.archived.decoration.folder.active.background-color`
  - `todo.case-card.decoration.folder.read-only.hover.background-color` naar `todo.case-card.archived.decoration.folder.hover.background-color`

  Focus-visible naar Focus

  - `todo.case-card.focus-visible.background-color` naar `todo.case-card.focus.background-color`
  - `todo.case-card.focus-visible.color` naar `todo.case-card.focus.color`
  - `todo.case-card.decoration.folder.focus-visible.background-color` naar `todo.case-card.decoration.folder.focus.background-color`

### Minor Changes

- 27fc88f: De volgende tokens zijn toegevoegd aan Figure component van Amsterdam:

  - `ams.figure.gap`
  - `ams.figure.caption.color`
  - `ams.figure.caption.font-family`
  - `ams.figure.caption.font-size`
  - `ams.figure.caption.font-weight`
  - `ams.figure.caption.line-height`
  - `ams.figure.caption.inverse.color`

- ed87dd5: De volgende tokens zijn toegevoegd aan File Input component van Amsterdam:

  - `ams.file-input.background-color`
  - `ams.file-input.border-color`
  - `ams.file-input.border-style`
  - `ams.file-input.border-width`
  - `ams.file-input.color`
  - `ams.file-input.cursor`
  - `ams.file-input.outline-offset`
  - `ams.file-input.disabled.color`
  - `ams.file-input.disabled.cursor`
  - `ams.file-input.font-family`
  - `ams.file-input.font-size`
  - `ams.file-input.font-weight`
  - `ams.file-input.line-height`
  - `ams.file-input.padding-block`
  - `ams.file-input.padding-inline`
  - `ams.file-input.button.background-color`
  - `ams.file-input.button.border-color`
  - `ams.file-input.button.border-style`
  - `ams.file-input.button.border-width`
  - `ams.file-input.button.color`
  - `ams.file-input.button.cursor`
  - `ams.file-input.button.line-height`
  - `ams.file-input.button.margin-inline-end`
  - `ams.file-input.button.padding-block`
  - `ams.file-input.button.padding-inline`
  - `ams.file-input.button.disabled.color`
  - `ams.file-input.button.disabled.cursor`
  - `ams.file-input.button.hover.box-shadow`
  - `ams.file-input.button.hover.color`

- 3e79e61: De volgende tokens zijn toegevoegd aan Dot Badge component van Rijkshuisstijl Community:

  - `rhc.dot-badge.block-size`
  - `rhc.dot-badge.border-radius`
  - `rhc.dot-badge.color`
  - `rhc.dot-badge.inline-size`

- c7ac1d4: De volgende tokens zijn toegevoegd aan Tabs component van Amsterdam:

  - `ams.tabs.gap`
  - `ams.tabs.button.color`
  - `ams.tabs.button.cursor`
  - `ams.tabs.button.font-family`
  - `ams.tabs.button.font-size`
  - `ams.tabs.button.font-weight`
  - `ams.tabs.button.line-height`
  - `ams.tabs.button.outline-offset`
  - `ams.tabs.button.padding-block`
  - `ams.tabs.button.padding-inline`
  - `ams.tabs.button.hover.color`
  - `ams.tabs.button.hover.box-shadow`
  - `ams.tabs.button.disabled.color`
  - `ams.tabs.button.disabled.cursor`
  - `ams.tabs.button.selected.box-shadow`
  - `ams.tabs.button.selected.font-weight`
  - `ams.tabs.list.box-shadow`

  De volgende tokens zijn toegevoegd aan Tabs component van Den Haag:

  - `denhaag.tabs.border-color`
  - `denhaag.tabs.border-width`
  - `denhaag.tabs.border-style`
  - `denhaag.tabs.width`
  - `denhaag.tabs.tab.background-color`
  - `denhaag.tabs.tab.color`
  - `denhaag.tabs.tab.cursor`
  - `denhaag.tabs.tab.font-family`
  - `denhaag.tabs.tab.font-size`
  - `denhaag.tabs.tab.font-weight`
  - `denhaag.tabs.tab.line-height`
  - `denhaag.tabs.tab.padding-block-end`
  - `denhaag.tabs.tab.padding-block-start`
  - `denhaag.tabs.tab.padding-inline-end`
  - `denhaag.tabs.tab.padding-inline-start`
  - `denhaag.tabs.tab.outline`
  - `denhaag.tabs.tab.hover.color`
  - `denhaag.tabs.tab.focus.color`
  - `denhaag.tabs.tab.selected.color`
  - `denhaag.tabs.tab.selected.font-weight`
  - `denhaag.tabs.tab-indicator.border-color`
  - `denhaag.tabs.tab-indicator.border-width`
  - `denhaag.tabs.tab-indicator.bottom`
  - `denhaag.tabs.tab-panel.outline`
  - `denhaag.tabs.tab-panel.padding-block-end`
  - `denhaag.tabs.tab-panel.padding-block-start`
  - `denhaag.tabs.tab-panel.padding-inline-end`
  - `denhaag.tabs.tab-panel.padding-inline-start`

### Patch Changes

- 3937344: - Waarde van token `utrecht.pagination.relative-link.disabled.color` is gewijzigd omdat er 'curly-braces' ontbraken.
  - De waarde was `basis.color.disabled.color-subtle` en wordt `{basis.color.disabled.color-subtle}`.
- 1e5f1e8: - Waarde van token `utrecht.data-badge.padding-block` gewijzigd van `None` naar `0px`.
  - Waarde van token `nl.data-badge.padding-block` gewijzigd van `None` naar `0px`.

## 6.2.1

### Patch Changes

- f41e917: Include correct fonts in package (tokens were updated to use Noto Sans/Serif/Sans Mono instead of Fira/Source Sans)

## 6.2.0

### Minor Changes

- d38c74b: De volgende tokens zijn toegevoegd aan (candidate) Button component:

  - `nl.button.border-radius`
  - `nl.button.column-gap`
  - `nl.button.font-family`
  - `nl.button.min-block-size`
  - `nl.button.min-inline-size`
  - `nl.button.outline-offset`
  - `nl.button.padding-block-end`
  - `nl.button.padding-block-start`
  - `nl.button.padding-inline-end`
  - `nl.button.padding-inline-start`
  - `nl.button.focus.background-color`
  - `nl.button.focus.border-color`
  - `nl.button.focus.color`
  - `nl.button.icon.size`
  - `nl.button.default.background-color`
  - `nl.button.default.border-color`
  - `nl.button.default.border-width`
  - `nl.button.default.color`
  - `nl.button.default.font-size`
  - `nl.button.default.font-weight`
  - `nl.button.default.line-height`
  - `nl.button.default.active.background-color`
  - `nl.button.default.active.border-color`
  - `nl.button.default.active.color`
  - `nl.button.default.disabled.background-color`
  - `nl.button.default.disabled.border-color`
  - `nl.button.default.disabled.color`
  - `nl.button.default.hover.background-color`
  - `nl.button.default.hover.border-color`
  - `nl.button.default.hover.color`
  - `nl.button.default.pressed.background-color`
  - `nl.button.default.pressed.border-color`
  - `nl.button.default.pressed.color`
  - `nl.button.primary.background-color`
  - `nl.button.primary.border-color`
  - `nl.button.primary.border-width`
  - `nl.button.primary.color`
  - `nl.button.primary.font-size`
  - `nl.button.primary.font-weight`
  - `nl.button.primary.line-height`
  - `nl.button.primary.active.background-color`
  - `nl.button.primary.active.border-color`
  - `nl.button.primary.active.color`
  - `nl.button.primary.disabled.background-color`
  - `nl.button.primary.disabled.border-color`
  - `nl.button.primary.disabled.color`
  - `nl.button.primary.hover.background-color`
  - `nl.button.primary.hover.border-color`
  - `nl.button.primary.hover.color`
  - `nl.button.primary.pressed.background-color`
  - `nl.button.primary.pressed.border-color`
  - `nl.button.primary.pressed.color`
  - `nl.button.primary.positive.background-color`
  - `nl.button.primary.positive.border-color`
  - `nl.button.primary.positive.color`
  - `nl.button.primary.positive.active.background-color`
  - `nl.button.primary.positive.active.border-color`
  - `nl.button.primary.positive.active.color`
  - `nl.button.primary.positive.hover.background-color`
  - `nl.button.primary.positive.hover.border-color`
  - `nl.button.primary.positive.hover.color`
  - `nl.button.primary.positive.pressed.background-color`
  - `nl.button.primary.positive.pressed.border-color`
  - `nl.button.primary.positive.pressed.color`
  - `nl.button.primary.negative.background-color`
  - `nl.button.primary.negative.border-color`
  - `nl.button.primary.negative.color`
  - `nl.button.primary.negative.active.background-color`
  - `nl.button.primary.negative.active.border-color`
  - `nl.button.primary.negative.active.color`
  - `nl.button.primary.negative.hover.background-color`
  - `nl.button.primary.negative.hover.border-color`
  - `nl.button.primary.negative.hover.color`
  - `nl.button.primary.negative.pressed.background-color`
  - `nl.button.primary.negative.pressed.border-color`
  - `nl.button.primary.negative.pressed.color`
  - `nl.button.secondary.background-color`
  - `nl.button.secondary.border-color`
  - `nl.button.secondary.border-width`
  - `nl.button.secondary.color`
  - `nl.button.secondary.font-size`
  - `nl.button.secondary.font-weight`
  - `nl.button.secondary.line-height`
  - `nl.button.secondary.active.background-color`
  - `nl.button.secondary.active.border-color`
  - `nl.button.secondary.active.color`
  - `nl.button.secondary.disabled.background-color`
  - `nl.button.secondary.disabled.border-color`
  - `nl.button.secondary.disabled.color`
  - `nl.button.secondary.hover.background-color`
  - `nl.button.secondary.hover.border-color`
  - `nl.button.secondary.hover.color`
  - `nl.button.secondary.pressed.background-color`
  - `nl.button.secondary.pressed.border-color`
  - `nl.button.secondary.pressed.color`
  - `nl.button.secondary.positive.background-color`
  - `nl.button.secondary.positive.border-color`
  - `nl.button.secondary.positive.color`
  - `nl.button.secondary.positive.active.background-color`
  - `nl.button.secondary.positive.active.border-color`
  - `nl.button.secondary.positive.active.color`
  - `nl.button.secondary.positive.hover.background-color`
  - `nl.button.secondary.positive.hover.border-color`
  - `nl.button.secondary.positive.hover.color`
  - `nl.button.secondary.positive.pressed.background-color`
  - `nl.button.secondary.positive.pressed.border-color`
  - `nl.button.secondary.positive.pressed.color`
  - `nl.button.secondary.negative.background-color`
  - `nl.button.secondary.negative.border-color`
  - `nl.button.secondary.negative.color`
  - `nl.button.secondary.negative.active.background-color`
  - `nl.button.secondary.negative.active.border-color`
  - `nl.button.secondary.negative.active.color`
  - `nl.button.secondary.negative.hover.background-color`
  - `nl.button.secondary.negative.hover.border-color`
  - `nl.button.secondary.negative.hover.color`
  - `nl.button.secondary.negative.pressed.background-color`
  - `nl.button.secondary.negative.pressed.border-color`
  - `nl.button.secondary.negative.pressed.color`
  - `nl.button.subtle.background-color`
  - `nl.button.subtle.border-color`
  - `nl.button.subtle.border-width`
  - `nl.button.subtle.color`
  - `nl.button.subtle.font-size`
  - `nl.button.subtle.font-weight`
  - `nl.button.subtle.line-height`
  - `nl.button.subtle.active.background-color`
  - `nl.button.subtle.active.border-color`
  - `nl.button.subtle.active.color`
  - `nl.button.subtle.disabled.background-color`
  - `nl.button.subtle.disabled.border-color`
  - `nl.button.subtle.disabled.color`
  - `nl.button.subtle.hover.background-color`
  - `nl.button.subtle.hover.border-color`
  - `nl.button.subtle.hover.color`
  - `nl.button.subtle.pressed.background-color`
  - `nl.button.subtle.pressed.border-color`
  - `nl.button.subtle.pressed.color`
  - `nl.button.subtle.positive.background-color`
  - `nl.button.subtle.positive.border-color`
  - `nl.button.subtle.positive.color`
  - `nl.button.subtle.positive.active.background-color`
  - `nl.button.subtle.positive.active.border-color`
  - `nl.button.subtle.positive.active.color`
  - `nl.button.subtle.positive.hover.background-color`
  - `nl.button.subtle.positive.hover.border-color`
  - `nl.button.subtle.positive.hover.color`
  - `nl.button.subtle.positive.pressed.background-color`
  - `nl.button.subtle.positive.pressed.border-color`
  - `nl.button.subtle.positive.pressed.color`
  - `nl.button.subtle.negative.background-color`
  - `nl.button.subtle.negative.border-color`
  - `nl.button.subtle.negative.color`
  - `nl.button.subtle.negative.active.background-color`
  - `nl.button.subtle.negative.active.border-color`
  - `nl.button.subtle.negative.active.color`
  - `nl.button.subtle.negative.hover.background-color`
  - `nl.button.subtle.negative.hover.border-color`
  - `nl.button.subtle.negative.hover.color`
  - `nl.button.subtle.negative.pressed.background-color`
  - `nl.button.subtle.negative.pressed.border-color`
  - `nl.button.subtle.negative.pressed.color`

## 6.1.0

### Minor Changes

- e86ddce: De volgende tokens zijn toegevoegd aan Card as Link component:

  - `ams.card.outline-offset`
  - `ams.card.heading.margin-block-end`
  - `ams.card.heading-group.gap`
  - `ams.card.heading-group.margin-block-end`
  - `ams.card.image.margin-block-end`
  - `ams.card.link.color`
  - `ams.card.link.text-decoration-line`
  - `ams.card.link.text-decoration-thickness`
  - `ams.card.link.text-underline-offset`
  - `ams.card.link.hover.color`
  - `ams.card.link.hover.text-decoration-line`

## 6.0.0

### Major Changes

- f7c727c: De volgende tokens zijn hernoemd in Side Navigation component:

  - `denhaag.sidenav.min-width` naar `denhaag.side-navigation.min-width`
  - `denhaag.sidenav.row-gap` naar `denhaag.side-navigation.row-gap`
  - `denhaag.sidenav.item.font-family` naar `denhaag.side-navigation.item.font-family`
  - `denhaag.sidenav.item.font-size` naar `denhaag.side-navigation.item.font-size`
  - `denhaag.sidenav.item.font-weight` naar `denhaag.side-navigation.item.font-weight`
  - `denhaag.sidenav.item.line-height` naar `denhaag.side-navigation.item.line-height`
  - `denhaag.sidenav.item.margin-block-end` naar `denhaag.side-navigation.item.margin-block-end`
  - `denhaag.sidenav.item.margin-block-start` naar `denhaag.side-navigation.item.margin-block-start`
  - `denhaag.sidenav.item.margin-inline-end` naar `denhaag.side-navigation.item.margin-inline-end`
  - `denhaag.sidenav.item.margin-inline-start` naar `denhaag.side-navigation.item.margin-inline-start`
  - `denhaag.sidenav.link.color` naar `denhaag.side-navigation.link.color`
  - `denhaag.sidenav.link.column-gap` naar `denhaag.side-navigation.link.column-gap`
  - `denhaag.sidenav.link.padding-block-end` naar `denhaag.side-navigation.link.padding-block-end`
  - `denhaag.sidenav.link.padding-block-start` naar `denhaag.side-navigation.link.padding-block-start`
  - `denhaag.sidenav.link.active.color` naar `denhaag.side-navigation.link.active.color`
  - `denhaag.sidenav.link.active.font-weight` naar `denhaag.side-navigation.link.active.font-weight`
  - `denhaag.sidenav.link.current.color` naar `denhaag.side-navigation.link.current.color`
  - `denhaag.sidenav.link.current.font-weight` naar `denhaag.side-navigation.link.current.font-weight`
  - `denhaag.sidenav.link.hover.color` naar `denhaag.side-navigation.link.hover.color`
  - `denhaag.sidenav.list.padding-block-end` naar `denhaag.side-navigation.list.padding-block-end`
  - `denhaag.sidenav.list.padding-block-start` naar `denhaag.side-navigation.list.padding-block-start`
  - `denhaag.sidenav.list.padding-inline-start` naar `denhaag.side-navigation.list.padding-inline-start`
  - `todo.sidenav.link.hover.text-decoration` naar `todo.side-navigation.link.hover.text-decoration`
  - `todo.sidenav.link.icon.size` naar `todo.side-navigation.link.icon.size`

### Minor Changes

- 85132d1: De volgende tokens zijn hernoemd in Action Group component:

  - `utrecht.button-group.background-color` naar `utrecht.action-group.background-color`
  - `utrecht.button-group.column-gap` naar `utrecht.action-group.column-gap`
  - `utrecht.button-group.padding-block-end` naar `utrecht.action-group.padding-block-end`
  - `utrecht.button-group.padding-block-start` naar `utrecht.action-group.padding-block-start`
  - `utrecht.button-group.row-gap` naar `utrecht.action-group.row-gap`

- 74e6902: De volgende tokens zijn toegevoegd aan Data Summary component:

  - `denhaag.description-list.border-color`
  - `denhaag.description-list.color`
  - `denhaag.description-list.font-family`
  - `denhaag.description-list.font-size`
  - `denhaag.description-list.font-weight`
  - `denhaag.description-list.line-height`
  - `denhaag.description-list.margin-block-end`
  - `denhaag.description-list.margin-block-start`
  - `denhaag.description-list.padding-inline-end`
  - `denhaag.description-list.padding-inline-start`
  - `denhaag.description-list.caption.color`
  - `denhaag.description-list.caption.line-height`
  - `denhaag.description-list.caption.font-family`
  - `denhaag.description-list.caption.font-size`
  - `denhaag.description-list.caption.font-weight`
  - `denhaag.description-list.caption.margin-block-end`
  - `denhaag.description-list.detail.padding-block-end`
  - `denhaag.description-list.detail.padding-block-start`
  - `denhaag.description-list.title.color`
  - `denhaag.description-list.title.font-weight`
  - `denhaag.description-list.title.padding-block-end`
  - `denhaag.description-list.title.padding-block-start`
  - `denhaag.description-list.lg.padding-inline-end`
  - `denhaag.description-list.lg.padding-inline-start`
  - `denhaag.description-list.lg.detail.padding-block-end`
  - `denhaag.description-list.lg.detail.padding-block-start`
  - `denhaag.description-list.lg.title.padding-block-end`
  - `denhaag.description-list.lg.title.padding-block-start`

- 7a1df20: De description van de volgende tokens zijn gewijzigd:

  - `nl.link.color` description `[code-only]` verwijderd.
  - `nl.link.text-decoration-color` description `[code-only]` toegevoegd.

- 7911fd5: Token `ams.image.aspect-ratio` is toegevoegd aan Image component.
- 02e1d0d: De volgende tokens zijn toegevoegd aan Action Group component:

  - `utrecht.action-group.margin-block-end`
  - `utrecht.action-group.margin-block-start`

  De volgende tokens zijn toegevoegd aan Alert component:

  - `utrecht.alert.margin-block-end`
  - `utrecht.alert.margin-block-start`

  De volgende tokens zijn toegevoegd aan Blockquote component:

  - `utrecht.blockquote.margin-block-end`
  - `utrecht.blockquote.margin-block-start`
  - `utrecht.blockquote.margin-inline-end`
  - `utrecht.blockquote.margin-inline-start`

  De volgende tokens zijn toegevoegd aan Code Block component:

  - `utrecht.code-block.margin-block-end`
  - `utrecht.code-block.margin-block-start`
  - `utrecht.code-block.margin-inline-end`
  - `utrecht.code-block.margin-inline-start`

  De volgende tokens zijn toegevoegd aan Figure component:

  - `utrecht.figure.margin-block-end`
  - `utrecht.figure.margin-block-start`

  De volgende tokens zijn toegevoegd aan Form Field component:

  - `utrecht.form-field.margin-block-end`
  - `utrecht.form-field.margin-block-start`

  De volgende tokens zijn toegevoegd aan Form Field Discription component:

  - `utrecht.form-field-description.margin-block-end`
  - `utrecht.form-field-description.margin-block-start`

  De volgende tokens zijn toegevoegd aan Form Field Error Message component:

  - `utrecht.form-field-error-message.margin-block-end`
  - `utrecht.form-field-error-message.margin-block-start`

  De volgende tokens zijn toegevoegd aan Headings 1 t/m 6:

  - `utrecht.heading-1.margin-block-end`
  - `utrecht.heading-1.margin-block-start`
  - `utrecht.heading-2.margin-block-end`
  - `utrecht.heading-2.margin-block-start`
  - `utrecht.heading-3.margin-block-end`
  - `utrecht.heading-3.margin-block-start`
  - `utrecht.heading-4.margin-block-end`
  - `utrecht.heading-4.margin-block-start`
  - `utrecht.heading-5.margin-block-end`
  - `utrecht.heading-5.margin-block-start`
  - `utrecht.heading-6.margin-block-end`
  - `utrecht.heading-6.margin-block-start`

  De volgende tokens zijn toegevoegd aan Page Number Navigation component:

  - `utrecht.pagination.margin-block-end`
  - `utrecht.pagination.margin-block-start`

  De volgende tokens zijn toegevoegd aan Pre Heading component:

  - `utrecht.pre-heading.margin-block-end`
  - `utrecht.pre-heading.margin-block-start`

  De volgende tokens zijn toegevoegd aan Radio Button component:

  - `utrecht.radio-button.margin-block-end`
  - `utrecht.radio-button.margin-block-start`

  De volgende tokens zijn toegevoegd aan Separator component:

  - `utrecht.separator.margin-block-end`
  - `utrecht.separator.margin-block-start`

  De volgende tokens zijn toegevoegd aan Separator component:

  - `denhaag.sidenav.item.margin-block-end`
  - `denhaag.sidenav.item.margin-block-start`
  - `denhaag.sidenav.item.margin-inline-end`
  - `denhaag.sidenav.item.margin-inline-start`

  De volgende tokens zijn toegevoegd aan Table component:

  - `utrecht.table.margin-block-end`
  - `utrecht.table.margin-block-start`

- b5e113b: De waarde van de volgende tokens zijn gewijzigd:

  - `utrecht.spotlight-section.border-width` naar `0px`.
  - `utrecht.spotlight-section.info.border-width` naar component token `utrecht.spotlight-section.border-width`.
  - `utrecht.spotlight-section.error.border-width` naar component token `utrecht.spotlight-section.border-width`.
  - `utrecht.spotlight-section.ok.border-width` naar component token `utrecht.spotlight-section.border-width`.
  - `utrecht.spotlight-section.warning.border-width` naar component token `utrecht.spotlight-section.border-width`.

## 5.1.0

### Minor Changes

- a453207: De volgende tokens zijn toegevoegd aan Button component:

  - `utrecht.button.pressed.background-color`
  - `utrecht.button.pressed.border-color`
  - `utrecht.button.pressed.color`
  - `utrecht.button.primary-action.pressed.background-color`
  - `utrecht.button.primary-action.pressed.border-color`
  - `utrecht.button.primary-action.pressed.color`
  - `utrecht.button.secondary-action.pressed.background-color`
  - `utrecht.button.secondary-action.pressed.border-color`
  - `utrecht.button.secondary-action.pressed.color`
  - `utrecht.button.subtle.pressed.background-color`
  - `utrecht.button.subtle.pressed.border-color`
  - `utrecht.button.subtle.pressed.color`

- d4003e8: De waarde van de volgende tokens zijn gewijzigd:

  - `basis.focus.outline-color` naar `#0b0c0c`
  - `basis.focus.inverse.outline-color` naar `#ffffff`

- ad7c354: De volgende tokens zijn toegevoegd aan (community) Icon component:

  - `utrecht.icon.color`
  - `utrecht.icon.inset-block-start`
  - `utrecht.icon.baseline.inset-block-start`

- 07ea949: Token `utrecht.link-list.font-weight` is hernoemd naar `utrecht.link-list.link.font-weight` in Link List component.
- bf05284: De volgende tokens zijn toegevoegd aan Page Footer component:

  - `ams.page-footer.spotlight.background-color`
  - `ams.page-footer.menu-link.color`
  - `ams.page-footer.menu-link.hover.color`
  - `ams.page-footer.menu-link.hover.text-decoration-line`
  - `ams.page-footer.menu-link.font-family`
  - `ams.page-footer.menu-link.font-size`
  - `ams.page-footer.menu-link.font-weight`
  - `ams.page-footer.menu-link.line-height`
  - `ams.page-footer.menu-link.outline-offset`
  - `ams.page-footer.menu-link.text-decoration-line`
  - `ams.page-footer.menu-link.text-underline-offset`
  - `ams.page-footer.menu-link.text-decoration-thickness`
  - `ams.page-footer.menu.column-gap`
  - `ams.page-footer.menu.padding-block`
  - `ams.page-footer.menu.padding-inline`
  - `ams.page-footer.menu.row-gap`
  - `ams.page-footer.menu.medium.padding-inline`
  - `ams.page-footer.menu.wide.padding-inline`

- f0c56c9: De volgende tokens zijn toegevoegd aan Page Header component:

  - `ams.page-header.font-family`
  - `ams.page-header.padding-inline`
  - `ams.page-header.padding-block`
  - `ams.page-header.medium.padding-inline`
  - `ams.page-header.wide.padding-inline`
  - `ams.page-header.logo-link.column-gap`
  - `ams.page-header.logo-link.outline-offset`
  - `ams.page-header.brand-name.color`
  - `ams.page-header.brand-name.font-size`
  - `ams.page-header.brand-name.font-weight`
  - `ams.page-header.brand-name.text-wrap`
  - `ams.page-header.navigation.column-gap`
  - `ams.page-header.navigation.row-gap`
  - `ams.page-header.menu.column-gap`
  - `ams.page-header.menu.row-gap`
  - `ams.page-header.menu-item.color`
  - `ams.page-header.menu-item.line-height`
  - `ams.page-header.menu-item.font-size`
  - `ams.page-header.menu-item.font-weight`
  - `ams.page-header.menu-item.outline-offset`
  - `ams.page-header.menu-item.padding-block`
  - `ams.page-header.menu-item.hover.color`
  - `ams.page-header.menu-item.column-gap`
  - `ams.page-header.menu-link.text-decoration-line`
  - `ams.page-header.menu-link.text-underline-offset`
  - `ams.page-header.menu-link.hover.text-decoration-line`
  - `ams.page-header.menu-link.text-decoration-thickness`
  - `ams.page-header.mega-menu-button.cursor`
  - `ams.page-header.mega-menu-button.label.open.font-weight`

## 5.0.1

### Patch Changes

- 35797a7: Verwijder `src/index.scss` in nieuwe stijl themes. Dit bestand was al onbruikbaar gezien het niet-bestaande bestanden importeerde.

## 5.0.0

### Major Changes

- dade32b: De volgende tokens zijn hernoemd in Accordion component:

  - `todo.accordion.section.border-color` is hernoemd naar `utrecht.accordion.section.border-color`
  - `todo.accordion.section.border-width` is hernoemd naar `utrecht.accordion.section.border-width`
  - `todo.accordion.row-gap` is hernoemd naar `utrecht.accordion.row-gap`

  De volgende tokens zijn verwijderd uit Accordion component:

  - `utrecht.accordion.button.focus.background-color`
  - `utrecht.accordion.button.focus.border-color`
  - `utrecht.accordion.button.focus.color`

  De volgende tokens zijn toegevoegd aan Accordion component:

  - `utrecht.accordion.margin-block-end`
  - `utrecht.accordion.margin-block-start`
  - `utrecht.accordion.button.border-radius`
  - `utrecht.accordion.button.focus-visible.background-color`
  - `utrecht.accordion.button.focus-visible.border-color`
  - `utrecht.accordion.button.focus-visible.border-width`
  - `utrecht.accordion.button.focus-visible.color`
  - `utrecht.accordion.section.hover.border-color`
  - `utrecht.accordion.section.margin-block-end`
  - `utrecht.accordion.section.margin-block-start`

### Patch Changes

- b19460e: Tokenset `textarea` is hernoemd naar `text-area` zodat de schrijfwijze van deze tokenset overeenkomt met de gekozen naamgeving voor dit component.

## 4.0.1

### Patch Changes

- 54aa5c3: Tokenset 'side-nav' hernoemd naar 'side-navigation'.

## 4.0.0

### Major Changes

- a96c47d: De volgende tokens zijn verwijderd uit Link component:
  - `nl.link.active.text-decoration-line`
  - `nl.link.active.text-decoration-thickness`
  - `nl.link.focus-visible.background-color`
  - `nl.link.focus-visible.color`
  - `nl.link.focus-visible.text-decoration-line`
  - `nl.link.focus-visible.text-decoration-thickness`

### Patch Changes

- 94743fb: Waarde van token `utrecht.link-list.link.column-gap` is gewijzigd naar brand token `voorbeeld.space.text.beetle`.
- a365ee9: Added the $ to the "type" metadata to align with the W3C DTCG format.
- c1e255d: Waarde van token `todo.task-list.icon.size` is gewijzigd naar common token `{voorbeeld.icon.functional.size}`.
- 64ad6b3: "[code-only]" aan description van margin tokens toegevoegd.

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
