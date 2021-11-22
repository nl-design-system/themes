# Theme Logo for NL Design System

[![NPM version](https://img.shields.io/npm/v/@nl-design-system-unstable/theme-logo.svg)](https://www.npmjs.com/package/@nl-design-system-unstable/theme-logo)

This is an experimental package for developers that want to showcase the theme switcher in their app. The `<nl-theme-logo>` custom element can be used to automatically switch to another logo when the theme has changed.

```html
<!DOCTYPE html>
<html lang="en" class="utrecht-theme utrecht-document">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>NL Design System theme logo</title>
    <link rel="stylesheet" href="https://unpkg.com/@utrecht/component-library-css/dist/index.css" />
    <script async src="https://unpkg.com/@nl-design-system-unstable/theme-switcher"></script>
    <style>
      :root {
        --utrecht-logo-max-width: 200px;
        --utrecht-logo-max-height: 200px;
        --utrecht-logo-min-width: 100px;
        --utrecht-logo-min-height: 100px;
      }
    </style>
  </head>
  <body class="utrecht-html">
    <h1>Example page</h1>
    <nl-theme-logo></nl-theme-logo>
  </body>
</html>
```

The logo configuration can be customized, and you will almost certainly want to do this. Configure the URL of where the logo images are hosted in your project, by specifying a JSON array in the `themes` attribute:

```html
<nl-theme-logo themes="[]"></nl-theme-logo>
```

The JSON should have the following format. You have to option to either use an image or a web component. The advantage of a web component could be that is has built-in dark mode or responsive versions, but not every logo is available as web component of course.

```json
[
  {
    "className": "utrecht-theme",
    "customElement": "utrecht-logo"
  },
  {
    "className": "denhaag-theme",
    "src": "/img/denhaag-logo.svg"
  }
]
```
