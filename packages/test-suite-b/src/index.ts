import { TestEnum } from 'test-suite-a';

/**
 * A test package that leverages and re-exports types from `test-suite-a`.
 * @packageDocumentation
 */

/**
 * Bar
 *
 * @public
 */
export interface Foo {
	/**
	 * {@inheritDoc test-suite-a#TestEnum}
	 */
	bar: TestEnum;
}

export { TestEnum };
