# For developers who work in this package

## `package.json`

- `cross-env`: used for Jest. Remove `cross-env` when `jest` is replaced by another testing framework.
- `jest`: doesn't work well with ES Modules. Replace this with an alternative like `vitest`.

## `tsconfig.json`

`tsconfig.json` has the following setting to support lodash in TypeScript:

```json
{ "esModuleInterop": true }
```

## `community-design-tokens.d.ts`

Ideally these CSS custom property type definitions should be provided by the React component library itself. Remove this file when those library publish these types.
