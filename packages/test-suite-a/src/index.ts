/**
 * <b>Test package</b>
 * <p>Contains a suite of test cases for validation API documentation generation.</p>
 *
 * @remarks
 *
 * This remarks block includes a bulleted list!
 *
 * - Bullet 1
 *
 * - Bullet 2
 *
 * And an ordered list for good measure!
 *
 * 1. List item 1
 *
 * 2. List item 2
 *
 * 3. List item 3
 *
 * Also, here is a link test, including a bad link, because we should have some reasonable support if this happens:
 *
 * - Good link (no alias): {@link TestClass}
 *
 * - Good link (with alias): {@link testFunction | function alias text}
 *
 * - Bad link (no alias): {@link InvalidItem}
 *
 * - Bad link (with alias):
 *   {@link InvalidItem | even though I link to an invalid item, I would still like this text to be rendered}
 *
 * @example
 *
 *A test example
 *```typescript
 *const foo = bar;
 *```
 *
 * @packageDocumentation
 */

import * as TestModule from './TestModule.js';

export * from './TestClass.js';
export * from './TestConst.js';
export * from './TestEnum.js';
export * from './TestFunction.js';
export * from './TestInterface.js';
export { TestModule };
export * from './TestNamespace.js';
export * from './TestType.js';
