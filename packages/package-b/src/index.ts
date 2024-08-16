import { TestEnum } from 'package-a';

/**
 * A test package that leverages and re-exports types from `package-a`.
 * @packageDocumentation
 */

/**
 * Bar
 *
 * @public
 */
export interface Foo {
	/**
	 * {@inheritDoc package-a#TestEnum}
	 */
	bar: TestEnum;
}

export { TestEnum };
