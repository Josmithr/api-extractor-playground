import { TestInterfaceWithTypeParameter } from './TestInterface';

/**
 * Test Namespace
 *
 * @remarks Here are some remarks about the namespace
 *
 * @example Example 1
 * ```typescript
 * const foo = bar;
 * ```
 *
 * @example Example 2
 * ```javascript
 * const bar = foo
 * ```
 *
 * @public
 */
export namespace TestNamespace {
	/**
	 * Test Type-Alias
	 *
	 * @public
	 */
	export type TestTypeAlias = boolean;

	/**
	 * Test Constant
	 *
	 * @public
	 */
	export const TestConst = 'Hello world!';

	/**
	 * Test interface
	 *
	 * @public
	 */
	export interface TestInterface
		extends TestInterfaceWithTypeParameter<TestEnum> {
		/**
		 * Test interface method
		 */
		testInterfaceMethod(): void;

		/**
		 * Test interface property
		 */
		testInterfaceProperty: boolean;
	}

	/**
	 * Test class
	 *
	 * @public
	 */
	export class TestClass {
		/**
		 * Test class method
		 *
		 * @param testParameter - A string
		 * @returns A Promise
		 * @throws An Error when something happens for which an error should be thrown.
		 * Except in the cases where another kind of error is thrown.
		 * We don't throw this error in those cases.
		 * @throws A different kind of error when a thing happens, but not when the first kind of error is thrown
		 * instead.
		 *
		 * 😁
		 */
		public async testClassMethod(testParameter: string): Promise<string> {
			return testParameter;
		}

		/**
		 * Test interface property
		 */
		public readonly testClassProperty: string;

		/**
		 * Test class constructor
		 * @param testClassProperty - See {@link TestClass.testClassProperty}
		 */
		public constructor(testClassProperty: string) {
			this.testClassProperty = testClassProperty;
		}
	}

	/**
	 * Test sub-namespace
	 *
	 * @public
	 */
	export namespace TestSubNamespace {}

	/**
	 * Test Enum
	 *
	 * @public
	 */
	export enum TestEnum {
		/**
		 * Test enum value 1
		 */
		TestEnumValue1,

		/**
		 * Test enum value 2
		 */
		TestEnumValue2,
	}

	/**
	 * Test function
	 *
	 * @param Foo - A number
	 * @returns A number
	 * @throws An Error
	 *
	 * @public
	 */
	export function testFunction(testParameter: number): number {
		return testParameter;
	}
}
