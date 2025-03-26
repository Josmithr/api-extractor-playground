# The Issue

Since API-Extractor does not include `@internal` API exports when generating its doc model, it is impossible for `{@link}` or `{@inheritDoc}` references from non-internal API exports to internal API exports to ever be resolved correctly.

API-Extractor has logic that checks for invalid references and reports them via the `ae-unresolved-link` and `ae-unresolved-inheritdoc-reference` settings, but the above situation does not trigger these rules.
Given that API-Extractor unconditionally excludes `@internal` API exports, this situation should ideally be caught.

# Repro

This repo contains a single package with 2 exports: `foo` and `bar`.
`foo` is `@public`, and `bar` is `@internal`.
`foo`'s documentation contains `{@link bar}`.

The package has API-Extractor configured with both `ae-unresolved-link`.

Note that building the package / repo does not result in the `ae-unresolved-link` being triggered, despite the link from `foo` to `bar` being inherently invalid (given API-Extractor's current behavior of unconditionally stripping `@internal` API exports).

Additionally, note that the doc model generated under `packages/test-suite-a/api-extractor-temp/test-suite-a.api.json` contains an entry for `foo` with the `{@link bar}` comment, but no definition for `bar`.
