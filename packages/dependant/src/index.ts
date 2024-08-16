import { TestEnum } from 'simple-suite-test';

/**
 * A test package that leverages and re-exports types from `simple-suite-test`.
 * @packageDocumentation
 */

/**
 * Bar
 *
 * @public
 */
export interface Foo {
	/**
	 * {@inheritDoc simple-suite-test#TestEnum}
	 */
	bar: TestEnum;
}

export { TestEnum };
