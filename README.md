Currently, neither generated rollups nor API report "variants" trim their imports to only those referenced by their "trimmed" exports.
This results in unnecessary file bloat in both cases, and unnecessary noise in the case of API reports (e.g., reports change when _unused_ imports change, even when there are no export changes).

## Repo Structure

This repo contains two packages with the following dependency relationship `package-b` -depends-on-> `package-a`.

`package-a` exports a single interface `Foo`.

`package-b` exports a single interface `Bar`, which extends `Foo` from `package-a`, and is `@alpha`.

`package-b` is configured to generate a `public`-level rollup and API report (note that it has no `@public` exports).

## Repro steps

1. Ensure you have `yarn` installed.
2. Run `yarn` from the root of this repo.
3. Run `yarn build` from the root of this repo.
4. Observe the contents of the following files:
   - `packages/package-b/api-reports/package-b.public.api.md`
   - `packages/package-b/dist/package-b-public.d.ts`

Note that in both of the above files, there should be no import statements.
The package has no `public` exports, so there should be no imports.
Unfortunately, both files contain an unused import of interface `Foo` from `package-a`.

To be correct, the sets of imports should be reduced to only those observed by the trimmed set of exports.
