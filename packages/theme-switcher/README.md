# Theme Switcher for NL Design System

[![NPM version](https://img.shields.io/npm/v/@nl-design-system-unstable/theme-switcher.svg)](https://www.npmjs.com/package/@nl-design-system-unstable/theme-switcher)

The NL Design System theme switcher provides convenient way to demonstrate a website or web application with the look and feel of various organisations. You will have a dropdown menu with many of the NL Design System themes, and choosing a theme will start loading the theme and switch the class name on the `<html>` element to the selected theme.

Example usage: put the `script` element in the `<head>` section of your code, and the `<nl-theme-switcher>` web component somewhere convenient:

```html
<!DOCTYPE html>
<html lang="en" class="utrecht-theme utrecht-document">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>NL Design System theme switcher</title>
    <link rel="stylesheet" href="https://unpkg.com/@utrecht/component-library-css/dist/index.css" />
    <script async src="https://unpkg.com/@nl-design-system-unstable/theme-switcher"></script>
  </head>
  <body class="utrecht-html">
    <h1>Example page</h1>
    <nl-theme-switcher></nl-theme-switcher>
  </body>
</html>
```

You can pick a default theme using for example `<html class="utrecht-theme">`, and it will be pre-selected in the theme switcher when the page loads.

## Advanced usage

It is possible to change the theme of only part of the page, by changing the default target from `:root` to a custom CSS selector:

```html
<nl-theme-switcher target="#example > div"></nl-theme-switcher>
```

You can configure your own themes by specifying a JSON array in the `themes` attribute:

```html
<nl-theme-switcher
  themes='[
  {"title":"Light Theme","href":"/light.css","className":"light-theme"},
  {"title":"High-Contrast Theme","href":"/high-contrast.css","className":"high-contrast-theme"},
  {"title":"Dark Theme","href":"/dark.css","className":"dark-theme"}
]'
></nl-theme-switcher>
```

The JSON is a non-indented version of this:

```json
[
  {
    "title": "Light Theme",
    "href": "/light.css",
    "className": "light-theme"
  },
  {
    "title": "High-Contrast Theme",
    "href": "/high-contrast.css",
    "className": "high-contrast-theme"
  }
  {
    "title": "Dark Theme",
    "href": "/dark.css",
    "className": "dark-theme"
  }
]
```
