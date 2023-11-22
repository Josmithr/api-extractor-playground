This sample mono repo is set up with 2 packages: `package-a` and `package-b` where `package-b` depends on `package-a`.

`package-a` exports a single member `interface Foo` tagged as `@internal`.
`package-b` exports a single member `class Bar` which implements `Foo` and is marked as `@public`.

Both packages packages are configured to create `public` and `untrimmed` rollups, but for the sake of this example we only really care about what `package-b`'s rollup results.

Prerequisites:

1. This repo uses `yarn`, so you'll need to have that installed.

Repro steps (from the repo root):

1. Run `yarn`
2. Run `yarn build`

Observe the output under `packages/package-b/dist/package-b-public.d.ts`
You should see something like the following:

```typescript
/**
 * Bar
 *
 * @public
 */
export declare class Bar implements Foo {
	/**
	 * {@inheritDoc package-a#Foo.x}
	 */
	x: string;
}

/* Excluded from this release type: Foo */

export {};
```

Note that the d.ts does not include the necessary import of `Foo` from `package-a`, presumably because `Foo` is marked as `@internal`.

If we compare to the contents of `packages/package-b/dist/package-b-untrimmed.d.ts`, you can see that the needed import of `Foo` does occur as expected.
