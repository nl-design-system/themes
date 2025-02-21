<!-- @license EUPL-1.2 -->

# Design Tokens definition data

This package contains metadata about white label design tokens that are available in the NL Design System community.

There are several use cases for this data, for example:

- validate design token values
- generate design token user interfaces
- generate documentation

## Files

Currently the following files are available.

### `dist/tokens.json`

Design Tokens JSON file, without `$value` properties. Most design tokens have a `$extensions` property with metadata.

### `dist/list.json`

Array of design tokens without `$value` property.

Design tokens also have a `path` property, which can be used to create design token references.
