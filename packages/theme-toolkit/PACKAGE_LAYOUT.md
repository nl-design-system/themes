<!-- @license CC0-1.0 -->

# Design Tokens npm package

Design tokens are design decisions for a design system, in this case maintained in JSON files, and distributed in various other code languages for easy reuse.

The design tokens in a design token package serve as single source of truth for the look and feel for websites, apps and designs of new products and services.

## Files in this package

Summary:

- The `index.*` files contain a flattend collection of all tokens.
- The `tokens.*` files contain a tree of all tokens.
- The following file formats are supports:
  - `.cjs`
  - `.css`
  - `.d.ts`
  - `.json`
  - `.mjs`
  - `.scss`

### `dist/index.css`

<!--
Amsterdam gebruikt `index.theme.css`
Amsterdam heeft ook nog `compact.css` met minder tokens
-->

Opt-in way to apply all the CSS variables to HTML elements with the `example-theme` class name:

```html
<!DOCTYPE html>
<html class="example-theme">
  <!-- var(--example-button-color) works here...! -->
</html>
```

This method is the preferred way to style the page.

### `dist/root.css`

Automatically applies all the CSS variables to HTML elements to the `:root` element:

```html
<!DOCTYPE html>
<html>
  <!-- var(--example-button-color) works here...! -->
</html>
```

This method should only be used in case there is no control over the HTML template and the `utrecht-theme` class name cannot be included.

### `dist/property.css`

Experimental CSS `@property` definitions for the design tokens that are configurable via CSS custom properties. Including these definitions is not necessarily side-effect free: with `syntax` _invalid values for custom properties will be ignored_, and `inherits` and `initial-value` declarations can influence behavior. Because [not all browsers support the `@property` declaration](https://caniuse.com/mdn-css_at-rules_property), including this file can result in rendering differences between browsers.

```html
<link rel="stylesheet" href="https://unpkg.com/@utrecht/design-tokens/dist/property.css" />
```

This file should only be included when you have visual regression test for both browsers that do and don't support `@property`.

### `dist/index.mjs`

Use the JavaScript module file `dist/index.mjs` from this package in JavaScript projects.

```js
import { utrechtButtonFontSize } from "@utrecht/design-tokens/dist/index.mjs";
```

### `dist/index.cjs`

Use the JavaScript file `dist/index.cjs` in old Node.js projects, where CommonJS imports are used.

```js
const { utrechtButtonFontSize } = require("@utrecht/design-tokens/dist/index.cjs");
```

### `dist/_variables.scss`

<!--
Amsterdam gebruikt `index.scss`
-->

```scss
@import "~@utrecht/design-tokens/dist/variables";

button {
  font-size: $utrecht-button-font-size;
}
```

SCSS variables are not the preferred way to style components, it is better to use CSS variables, because they can be configured differently in a specific context, whereas SCSS variables are given a fixed value at build-time.

However, SCSS variables could be very useful to re-use values where CSS variables cannot be used, like inside CSS media queries:

```scss
@import "~@utrecht/design-tokens/dist/variables";

@media (min-width: $utrecht-viewport-scale-xl-width) {
  --utrecht-heading-1-font-size: 3rem;
}
```

SCSS variables are also useful in the process of incrementally migrating away from your a codebase that currently uses SCSS, such as a website built with [Bootstrap 4 components](https://getbootstrap.com/docs/4.6/getting-started/theming/), by already using the design tokens as single source of truth. For example:

```scss
@import "../node_modules/bootstrap/scss/bootstrap";

$body-bg: $utrecht-document-background-color;
$body-color: $utrecht-document-color;
```
