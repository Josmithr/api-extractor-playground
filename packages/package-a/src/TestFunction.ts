import { testConst } from './TestConst';
import { TestEnum } from './TestEnum';
import {
	TestEmptyInterface,
	TestInterface,
	TestInterfaceWithTypeParameter,
} from './TestInterface';

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
 * @public
 */
export function testFunction<TTypeParameter>(
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
