Per the TSDoc spec, `@example` comment blocks are intended to treat the first line (the text on the same line as the tag) as the example's "title".

Unfortunately, the formatting information required to differentiate this line from other block contents are not preserved by API-Extractor.

Repro steps:

1. Ensure you have `yarn` installed.
2. Run `yarn` from the root of this repo.
3. Run `yarn build` from the root of this repo.
4. Observe the contents of `/packages/package-a/api-extractor-temp/package-a.api.json`.

Note that both example blocks under `docComment` for `foo` contain leading newline characters between the `@example` tag and the contents.
The example block with the title _should not_ have newlines between the tag and the title.
This formatting seems to be getting injected by API-Extractor when it should not be.

Expected:

```json
"docComment": "/**\n * Here is a comment.\n *\n * @example Example Title\n *\n * An example with a title.\n *\n * @example\n *\n * An example without a title.\n */\n",
```

Got:

```json
"docComment": "/**\n * Here is a comment.\n *\n * @example\n *\n * Example Title\n *\n * An example with a title.\n *\n * @example\n *\n * An example without a title.\n */\n",
```
