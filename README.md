# NL Design System Themes repository

This repository contains publicly available themes for organisations working with [NL Design System](https://www.nldesignsystem.nl/). Each organisations' theme can be found in [/proprietary](./proprietary/) and is viewable with Storybook.

## Getting started

> Prerequisites: to install and run the dependencies it is recommended to first install [pnpm](https://pnpm.io/).

Run the following command to install this project's dependencies:

```sh
pnpm install
```

### Running storybook

After the dependencies have been installed, run these commands to start this project's [Storybook](https://storybook.js.org/):

```sh
pnpm run build
pnpm run watch:storybook
```

Storybook should now automatically start and open in your default browser on [localhost:6006](http://localhost:6006/).

## Modifying a theme

Themes are JSON files that contain and define design tokens. To modify a theme and see the result in Storybook first open the JSON file in an editor. Then, to make sure that changes to this file are detected and result in a rebuild of the theme run the following command in the directory of that theme:

```sh
pnpm run watch
```

While this command is running Storybook should automatically reload after every saved change to the JSON file. This will briefly result in an error being shown while the theme is rebuilding.

## Adding a new theme

Instructions (in Dutch) to add a new theme can be found in [proprietary/example-design-tokens/README.md](proprietary/example-design-tokens/README.md). If you have Storybook running, you can also read this file on [http://localhost:6006/?path=/docs/example-organisation-readme--docs](http://localhost:6006/?path=/docs/example-organisation-readme--docs).

## Code of Conduct

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community. Read [our Code of Conduct](CODE_OF_CONDUCT.md) if you haven't already.

## License

This project is free and open-source software licensed under the [European Union Public License (EUPL) v1.2](LICENSE.md).
