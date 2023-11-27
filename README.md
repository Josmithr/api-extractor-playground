## The issue

This sample contains 2 packages: `package-a` and `package-b`, where `package-b` depends on `package-a`.

`package-a`

```typescript
/**
 * @alpha
 */
export interface Foo {...}
```

`package-b` (depends on `package-a`)

```typescript
import { Foo } from "package-a";

/**
 * @public
 */
export interface Bar extends Foo {...}
```

`package-b`'s api-extractor config contains:

```json
"bundledPackages": ["package-a"],
```

and

```json
"ae-forgotten-export": {
	"logLevel": "error",
	"addToApiReportFile": false
}
```

The expected outcome in this situation is that running api-extractor in `package-b` should trigger the `ae-incompatible-release-tags` error, but it doesn't.

Note that if `Foo` is re-exported by `package-b`, the error is triggered as expected. But since `package-b` specifies `package-a` in `bundledPackages`, the error should occur in either case.

## Repro steps

(This mono repo uses yarn as its package manager, so a yarn installation will be required)

First, run `yarn build` from the root of the repo. Observe that no errors are reported by api-extractor.

Second, uncomment the re-export of `Foo` in `packages/package-a/src/index.ts` and re-run `yarn build`. Observe that the `ae-incompatible-release-tags` error is triggered as expected.
