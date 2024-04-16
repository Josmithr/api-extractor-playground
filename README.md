This repo is configured with 2 packages with the following dependency relationship: `package-b` -depends-on-> `package-a`.

Both packages are configured to build with Node16 and ESM module resolution.

`package-a` exports the following nominally typed class:

```typescript
export class Foo {
	protected readonly iAmNominal?: unknown;
}
```

`package-a` is leveraging [package.json exports](https://nodejs.org/api/packages.html#exports) to surface 2 variations of its API:

- public only exports via the package root (`.`)
- internal (untrimmed) exports via `/internal`.

While this pattern works fine for structurally typed exports, it breaks down for nominally typed exports.

Observe that `package-b` consumes nominally typed class `Foo`, but it does so via a mix of the two export paths (this is a contrived example, but it reflects a scenario that occurs easily with more code modules).
`package-b` has the following code:

```typescript
import { Foo as Foo_A } from 'package-a';
import { Foo as Foo_B } from 'package-a/internal';

/**
 * @public
 */
export const foo: Foo_A = new Foo_B();
```

Ideally, this would work fine - both of the rollups being leveraged refer to the same underlying type.
Unfortunately, since API-Extractor generates the rollups via redeclarations, TypeScript deems the 2 nominally typed class declarations as being incompatible.
And, in fact, the above code in `package-b` fails to build.
