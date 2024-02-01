## The issue

There are cases where tsc decides it's okay to inline `import` calls.
In most cases, API-Extractor seems to handle this okay when generating its rollups, but there are some cases where it fails to do so, potentially hoisting relative file path imports as-is into the rollup.

This repo contains a single package that illustrates one such scenario.
See `packages/package-a/src` for the full illustration.

The issue is that we have 2 modules at different levels of hierarchy in the package, and one imports from the other via an inline relative file path. TSC preserves this inline import, and API-Extractor will hoist it unmodified into the rollup. But the path that it hoists is invalid.

## Repro steps

(This mono repo uses yarn as its package manager, so a yarn installation will be required)

First, run `yarn build` from the root of the repo.

- Observe that `packages/package-a/dist/foo/Foo.d.ts` includes the inlined relative file path import.
- Observe that `packages/package-a/dist/package-a-untrimmed.d.ts` copies the `import('../Bar)` unmodified, despite the file living in a different level of hierarchy.

In theory, either the file path should be updated to reflect the different level at which the rollup file exists, or the inline import should be replaced with a standard import pattern.
