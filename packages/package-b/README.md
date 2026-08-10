# Bundled namespace import alias reproduction

This package reproduces an API-Extractor issue where the original name of a bundled API replaces its exported alias in an API report.

The dependency defines a type named `FooInternal` and exports it as `FooExternal`.
The consumer exports a type named `Baz`, whose definition references `FooExternal`.
The consumer's API-Extractor configuration includes the dependency in `bundledPackages`.

From the repository root, run:

```shell
yarn install --frozen-lockfile
yarn lerna run build --scope package-b --include-dependencies
```

Then inspect `packages/package-b/api-reports/package-b.api.md`.
The source declaration defines `Baz` as `FooExternal`, but the report incorrectly defines it as `FooInternal`.
It also reports `ae-forgotten-export` because `FooInternal` is not exported from either package's entry point under that name.

Source definition for Baz:

```ts
export type Baz = FooExternal;
```

Expected report contents:

```ts
export type Baz = FooExternal;
```

Actual report contents:

```ts
export type Baz = FooInternal;
```
