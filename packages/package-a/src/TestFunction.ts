import { testConst } from './TestConst.js';
import { TestEnum } from './TestEnum.js';
import {
	TestEmptyInterface,
	TestInterface,
	TestInterfaceWithTypeParameter,
} from './TestInterface.js';

/**
 * Test function
 *
 * @param testParameter - A test parameter
 * @param testParameter - An optional parameter
 * @typeParam TTypeParameter - A test type parameter
 * @returns The provided parameter
 * @throws An Error when something bad happens.
 *
 * @remarks This is a test {@link TestInterface | link} to another API member
 *
 * @alpha
 */
export function testFunction<
	TTypeParameter extends TestInterface = TestInterface,
>(
	testParameter: TTypeParameter,
	testOptionalParameter?: TTypeParameter,
): TTypeParameter {
	return testOptionalParameter === undefined
		? testParameter
		: testOptionalParameter;
}

/**
 * Test function that returns an inline type
 *
 * @returns An inline type
 *
 * @public
 */
export function testFunctionReturningInlineType(): {
	foo: number;
	bar: TestEnum;
} {
	return {
		foo: testConst,
		bar: TestEnum.TestEnumValue2,
	};
}

/**
 * Test function that returns an inline type
 *
 * @returns A union type
 *
 * @public
 */
export function testFunctionReturningUnionType(): string | TestInterface {
	return TestEnum.TestEnumValue1;
}

/**
 * Test function that returns an inline type
 *
 * @returns an intersection type
 *
 * @public
 *
 * @deprecated This is a test deprecation notice. Here is a {@link testFunctionReturningUnionType | link} to something
 * else!
 */
export function testFunctionReturningIntersectionType(): TestEmptyInterface &
	TestInterfaceWithTypeParameter<number> {
	return {
		testProperty: 3,
	};
}

/**
 * Takes a number and returns a string.
 * @param value - A number.
 * @returns A string.
 */
export function functionWithOverloads(value: number): string;

/**
 * Takes a string and returns a boolean.
 * @param value - A string.
 * @returns A boolean.
 */
export function functionWithOverloads(value: string): boolean;

/**
 * Takes a boolean and returns a number.
 * @param value - A boolean.
 * @returns A number.
 */
export function functionWithOverloads(value: boolean): number;
export function functionWithOverloads(
	value: string | number | boolean,
): string | boolean | number {
	if (typeof value === 'number') {
		return 'number';
	} else if (typeof value === 'string') {
		return true;
	} else {
		return 3;
	}
}
