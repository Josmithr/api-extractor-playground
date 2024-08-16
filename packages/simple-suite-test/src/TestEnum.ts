/**
 * Test Enum
 *
 * @remarks Here are some remarks about the enum
 *
 * @example
 * Some example
 * ```typescript
 * const foo = TestEnum.TestEnumValue1
 * ```
 *
 * @example
 * Another example
 * ```ts
 * const bar = TestEnum.TestEnumValue2
 * ```
 *
 * @public
 */
export enum TestEnum {
	/**
	 * Test enum value 1 (string)
	 *
	 * @remarks Here are some remarks about the enum value
	 */
	TestEnumValue1 = 'test-enum-value-1',

	/**
	 * Test enum value 2 (number)
	 *
	 * @remarks Here are some remarks about the enum value
	 */
	TestEnumValue2 = 3,

	/**
	 * Test enum value 3 (default)
	 *
	 * @remarks Here are some remarks about the enum value
	 */
	TestEnumValue3,
}
