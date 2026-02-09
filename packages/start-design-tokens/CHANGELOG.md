# @nl-design-system-unstable/start-design-tokens

## 3.0.0

### Major Changes

- bc7143d: De volgende tokens zijn toegevoegd aan Modal Dialog component:

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

- cbe4c6f: De volgende tokens zijn toegevoegd aan Description List component:

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

## 2.4.1

### Patch Changes

- adb7894: Token `nl.button.outline-offset` is verwijderd uit Button component.

## 2.4.0

### Minor Changes

- e79dc28: De waarde van de volgende tokens zijn gewijzigd:

  - Waarde van token `nl.button.padding-block-end` is gewijzigd van `basis.space.block.lg` naar `basis.space.block.md`.
  - Waarde van token `nl.button.padding-block-start` is gewijzigd van `basis.space.block.lg` naar `basis.space.block.md`.
  - Waarde van token `nl.button.icon-only.padding-block-end` is gewijzigd van `basis.space.block.lg` naar `basis.space.block.md`.
  - Waarde van token `nl.button.icon-only.padding-block-start` is gewijzigd van `basis.space.block.lg` naar `basis.space.block.md`.
  - Waarde van token `nl.button.icon-only.padding-inline-end` is gewijzigd van `basis.space.inline.lg` naar `basis.space.inline.md`.
  - Waarde van token `nl.button.icon-only.padding-inline-start` is gewijzigd van `basis.space.inline.lg` naar `basis.space.inline.md`.

## 2.3.0

### Minor Changes

- 2c084f0: Waarde van token `nl.button.subtle.border-width` is gewijzigd van `{nl.button.default.border-width}` naar `0px`.

## 2.2.0

### Minor Changes

- 597b3b6: De volgende tokens zijn toegevoegd voor de Breadcrumb Navigation component van Amsterdam:

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

- b7f3e31: De volgende tokens zijn toegevoegd aan Button component:

  - `nl.button.icon-only.padding-block-end`
  - `nl.button.icon-only.padding-block-start`
  - `nl.button.icon-only.padding-inline-end`
  - `nl.button.icon-only.padding-inline-start`

- 86bcbf7: De volgende tokens zijn toegevoegd aan Navigation List component:

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

- 1f3a2bf: De volgende tokens zijn toegevoegd voor de Status Badge component:

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

## 2.1.0

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

## 2.0.0

### Major Changes

- e95f8e6: De volgende tokens zijn toegevoegd aan Avatar component van Amsterdam:

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

- 6e0a690: De volgende tokens zijn toegevoegd aan Case Card component...

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

- 3a83ffd: De volgende tokens zijn toegevoegd aan Figure component van Amsterdam:

  - `ams.figure.gap`
  - `ams.figure.caption.color`
  - `ams.figure.caption.font-family`
  - `ams.figure.caption.font-size`
  - `ams.figure.caption.font-weight`
  - `ams.figure.caption.line-height`
  - `ams.figure.caption.inverse.color`

- 1b1f4ff: De volgende tokens zijn toegevoegd aan File Input component van Amsterdam:

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

- 75c731b: De volgende tokens zijn toegevoegd aan Dot Badge component van Rijkshuisstijl Community:

  - `rhc.dot-badge.block-size`
  - `rhc.dot-badge.border-radius`
  - `rhc.dot-badge.color`
  - `rhc.dot-badge.inline-size`

- e093d9e: De volgende tokens zijn toegevoegd aan Tabs component van Amsterdam:

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

- a957530: - Waarde van token `utrecht.pagination.relative-link.disabled.color` is gewijzigd omdat er 'curly-braces' ontbraken.
  - De waarde was `basis.color.disabled.color-subtle` en wordt `{basis.color.disabled.color-subtle}`.
- 75bc007: - Waarde van token `utrecht.data-badge.padding-block` gewijzigd van `None` naar `0px`.
  - Waarde van token `nl.data-badge.padding-block` gewijzigd van `None` naar `0px`.

## 1.2.0

### Minor Changes

- be1c3f7: De volgende tokens zijn toegevoegd aan (candidate) Button component:

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

## 1.1.0

### Minor Changes

- 33932a0: De volgende tokens zijn toegevoegd aan Card as Link component:

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

## 1.0.0

### Major Changes

- 8f2a545: De volgende tokens zijn hernoemd in Side Navigation component:

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

- 8c02f6e: De volgende tokens zijn hernoemd in Action Group component:

  - `utrecht.button-group.background-color` naar `utrecht.action-group.background-color`
  - `utrecht.button-group.column-gap` naar `utrecht.action-group.column-gap`
  - `utrecht.button-group.padding-block-end` naar `utrecht.action-group.padding-block-end`
  - `utrecht.button-group.padding-block-start` naar `utrecht.action-group.padding-block-start`
  - `utrecht.button-group.row-gap` naar `utrecht.action-group.row-gap`

- 7c880eb: De volgende tokens zijn toegevoegd aan Data Summary component:

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

- db44b7e: De description van de volgende tokens zijn gewijzigd:

  - `nl.link.color` description `[code-only]` verwijderd.
  - `nl.link.text-decoration-color` description `[code-only]` toegevoegd.

- 780ea44: Token `ams.image.aspect-ratio` is toegevoegd aan Image component.
- b4fc223: De volgende tokens zijn toegevoegd aan Action Group component:

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

- 1e34883: De waarde van de volgende tokens zijn gewijzigd:

  - `utrecht.spotlight-section.border-width` naar `0px`.
  - `utrecht.spotlight-section.info.border-width` naar component token `utrecht.spotlight-section.border-width`.
  - `utrecht.spotlight-section.error.border-width` naar component token `utrecht.spotlight-section.border-width`.
  - `utrecht.spotlight-section.ok.border-width` naar component token `utrecht.spotlight-section.border-width`.
  - `utrecht.spotlight-section.warning.border-width` naar component token `utrecht.spotlight-section.border-width`.

## 0.1.0

### Minor Changes

- a960913: De waarde van de volgende tokens zijn gewijzigd:

  - `basis.focus.outline-color` naar `#0b0c0c`
  - `basis.focus.inverse.outline-color` naar `#ffffff`

- 325047a: De volgende tokens zijn toegevoegd aan (community) Icon component:

  - `utrecht.icon.color`
  - `utrecht.icon.inset-block-start`
  - `utrecht.icon.baseline.inset-block-start`

- ee13fcf: De volgende tokens zijn toegevoegd aan Page Footer component:

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

- 17a801a: Token `utrecht.link-list.font-weight` is hernoemd naar `utrecht.link-list.link.font-weight` in Link List component.
- a8699bc: De volgende tokens zijn toegevoegd aan Page Header component:

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

- 6665550: De volgende tokens zijn toegevoegd aan Button component:

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
