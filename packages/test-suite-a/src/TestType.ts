import { TestEnum } from './TestEnum.js';

/**
 * Test Type-Alias
 *
 * @remarks Here are some remarks about the type alias
 *
 * @public
 */
export type TypeAlias = string;

/**
 * A test type with properties.
 */
export type TypeWithProperties = {
	/**
	 * Foo
	 */
	foo: string;
	/**
	 * Bar
	 * @sealed
	 */
	readonly bar: number;
	/**
	 * Baz
	 * @virtual
	 * @optional
	 */
	readonly baz?: boolean;
};

/**
 * A test type with a construct signature.
 */
export type TypeWithConstructSignature = {
	/**
	 * Construct signature
	 * @param input - A string input
	 */
	new (input: string): TypeWithConstructSignature;
};

/**
 * A union type combining {@link TypeWithProperties} and {@link TypeWithConstructSignature}.
 */
export type UnionType = TypeWithProperties | TypeWithConstructSignature;

/**
 * An intersection type combining {@link TypeWithProperties} and {@link TypeWithConstructSignature}.
 */
export type IntersectionType = TypeWithProperties & TypeWithConstructSignature;

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
