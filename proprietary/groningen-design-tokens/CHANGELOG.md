# @nl-design-system-unstable/groningen-design-tokens

## 4.0.0

### Major Changes

- ddd62fd: ## Card as link in ToDo bibliotheek toegevoegd conform changelog 17.0.0
  Naam component 'card' van Amsterdam gewijzigd naar 'card-as-link'
  Component en bijbehorende design tokens van 'case-card' verwijderd
  Component 'card-as-link/todo' met bijbehorende tokens, zoals gedefinieerd in changelog 17.0.0, toegevoegd aan tokensset. Hierbij de oude tokens direct vervangen.
  
  ## Afwijkingen standaard tokens zoals gedefinieerd in 17.0.0
  Waarde van '{todo.card-as-link.heading.color}' gewijzigd van {basis.color.default.color-document} naar {basis.color.action-1.color-default}
  Waarde van '{todo.card-as-link.case.border-color}' ,'{todo.card-as-link.case.archived.border-color}', '{todo.card-as-link.plan.border-color}' en '{todo.card-as-link.plan.archived.border-color}' gewijzigd van '{basis.color.transparent}' naar '{{todo.card-as-link.border-color}'
  Waarde van '{todo.card-as-link.plan.border-width}' gewijzigd van '{basis.border-width.lg}' naar '{basis.border-width.md}'
- e48917d: ## Hernoemen van component spotlight naar note, conform changelog 18.0.0.
  Component '{utrecht.spotlight-section}' hernoemd naar '{utrecht.note}'
  Variant 'ok' hernoemd naar 'success'
  
  ## Aanvullende wijzigingen kleuren voor note
  Waarde '{background-color}' voor '{Note}' gewijzigd van '{basis.color.default.bg-default}' naar '{basis.color.accent-1.bg-document}'
  Waarde '{border-color}' voor '{Note}' gewijzigd van '{basis.color.default.border-default}' naar 'transparent'

### Patch Changes

- a00ca8b: ### De values van de tokens voor utrecht page number navigation aangepast.
  Alle wijzigingen zijn hier voor de current page number. Dit omdat de huidige variant een witte cirkel had die niet te zien was op onze doorgaans witte achtergrond.
  
  Property value is gewijzigd van '{basis.color.default.bg-active}' naar '{basis.color.action-2.color-default}' in de background-color van de current state.
  Property value is gewijzigd van '{basis.color.transparent}' naar '{basis.color.action-2.color-default}' in de border-color van de current state.
  Property value is gewijzigd van '{basis.color.default.color-document}' naar '{basis.color.default.bg-document}' in de color van de current state.

## 3.3.1

### Patch Changes

- e0cab1a: Republish package with dist folder (the previous release omitted it due to a change in pnpm behavior)

## 3.3.0

### Minor Changes

- 4fe4561: Extra lettertype toegevoegd als fallback-font.

## 3.2.0

### Minor Changes

- 5018770: - Styling: button color positive
  Automatische kleurwaardes van positive button aangepast
  - Styling: color changes components
    Kleuren van componenten aangepast en tweede heading kleur toegevoegd van
    common tokens
  - Hygiene: link component
    Link was gekoppeld aan groningen cta brand token, niet aan een common
    token. Deze nu dus aangepast aan een bestaande common token.
  - Styling: headings
    Extra tekst font toegevoegd, naam van de bold versie aangepast naar
    medium (nu hebben we default, medium en bold). Kleur aangepast van de
    heading 5 en groottes aangepast conform huisstijl (32-24-20-18-16)
  - Hygiene: brand tokens
    Wat hygiëne toegepast op de brand tokens. We beginnen altijd met donkere kleur eerst, dan achtergrond kleur. Deze qua volgorde aangepast.
    Ook grijswaardes qua volgorde naar boven gebracht. Net als complementaire kleuren aan de blauwe basis. Deze stond eerst helemaal onderaan.

## 3.1.0

### Minor Changes

- ce9920c: Conform NL Design System Figma changelog 14.4.0, zie: https://nldesignsystem.nl/handboek/designer/figma-changelog/#1440

## 3.0.0

### Major Changes

- 57b0358: Conform NL Design System Figma changelog 14.3.0, zie: https://nldesignsystem.nl/handboek/designer/figma-changelog/#1210

## 2.0.0

### Major Changes

- 0cc7b20: Vervangen van design tokens met nieuwe bibliotheek.
  Conform NL Design System Figma changelog 12.1.0, zie: https://nldesignsystem.nl/handboek/designer/figma-changelog/#1210

## 1.0.2

### Patch Changes

- 36e6472: Waardes van focus tokens aangepast.

## 1.0.1

### Patch Changes

- 68180b6: Aanpassingen aan de `color`, `font-size` en `font-weight` van Heading componenten.

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
