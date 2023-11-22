import { TestMappedType } from './TestType';

/**
 * Test interface
 *
 * @remarks Here are some remarks about the interface
 *
 * @see {@link TestInterface.testInterfaceMethod}
 * @see {@link TestInterface.testInterfaceProperty}
 * @see {@link TestInterface.testOptionalInterfaceProperty}
 * @see {@link TestInterface.testClassEventProperty}
 *
 * @public
 */
export interface TestInterface {
	/**
	 * Test interface method
	 *
	 * @remarks Here are some remarks about the method
	 */
	testInterfaceMethod(): void;

	/**
	 * Test interface property
	 *
	 * @remarks Here are some remarks about the property
	 */
	testInterfaceProperty: number;

	/**
	 * Test optional property
	 *
	 * @defaultValue 0
	 */
	testOptionalInterfaceProperty?: number;

	/**
	 * Test interface event call signature
	 *
	 * @remarks Here are some remarks about the event call signature
	 *
	 * @returns A value
	 *
	 * @eventProperty
	 */
	(event: 'testCallSignature', listener: (input: unknown) => void): any;

	/**
	 * Another example call signature
	 *
	 * @remarks Here are some remarks about the event call signature
	 *
	 * @returns A value
	 *
	 * @eventProperty
	 */
	(
		event: 'anotherTestCallSignature',
		listener: (input: number) => string,
	): number;

	/**
	 * Test interface event property
	 *
	 * @remarks Here are some remarks about the event property
	 *
	 * @eventProperty
	 */
	readonly testClassEventProperty: () => void;

	/**
	 * Test construct signature.
	 */
	new (): TestInterface;
}

/**
 * Test interface with generic type parameter
 *
 * @remarks Here are some remarks about the interface
 *
 * @typeParam T - A type parameter
 *
 * @public
 */
export interface TestInterfaceWithTypeParameter<T> {
	/**
	 * A test interface property using generic type parameter
	 *
	 * @remarks Here are some remarks about the property
	 */
	testProperty: T;
}

/**
 * Test interface that extends other interfaces
 *
 * @remarks Here are some remarks about the interface
 *
 * @see
 * - {@link TestInterface}
 *
 * - {@link TestInterfaceWithTypeParameter}
 *
 * - {@link TestMappedType}
 *
 * @public
 */
export interface TestInterfaceExtendingOtherInterfaces
	extends TestInterface,
		TestMappedType,
		TestInterfaceWithTypeParameter<number> {
	/**
	 * Test interface method accepting a string and returning a number.
	 *
	 * @remarks Here are some remarks about the method
	 *
	 * @param input - A string
	 *
	 * @returns A number
	 */
	testMethod(input: string): number;
}

/**
 * An empty interface
 *
 * @public
 */
export interface TestEmptyInterface {}

/**
 * An interface with an index signature.
 *
 * @public
 */
export interface TestInterfaceWithIndexSignature {
	/**
	 * Test index signature.
	 */
	[foo: number]: { bar: string };
}
