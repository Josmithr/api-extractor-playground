import { TestEnum } from './TestEnum';

/**
 * Test Type-Alias
 *
 * @remarks Here are some remarks about the type alias
 *
 * @public
 */
export type TypeAlias = string;

/**
 * Test Mapped Type, using {@link TestEnum}
 *
 * @remarks Here are some remarks about the mapped type
 *
 * @public
 */
export type TestMappedType = {
	/**
	 * Test index signature.
	 */
	[K in TestEnum]: boolean;
};
