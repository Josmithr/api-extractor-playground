# Bundled namespace import alias reproduction

This package reproduces an API-Extractor issue where the original name of a bundled API replaces its exported alias in an API report.

The dependency defines an API named `Foo` and exports it as `FooAliased`.
The consumer exports its own API named `Bar`, which references `FooAliased`.
The consumer's API-Extractor configuration includes the dependency in `bundledPackages`.

From the repository root, run:

```shell
yarn install --frozen-lockfile
yarn lerna run build --scope bundled-alias-consumer --include-dependencies
```

Then inspect `packages/bundled-alias-consumer/api-reports/bundled-alias-consumer.api.md`.
The source declaration for `Bar` refers to `FooAliased.Identity<T>`, but the report incorrectly refers to `Foo.Identity<T>`.
It also reports `ae-forgotten-export` because `Foo` is not exported from either package's entry point under that name.
