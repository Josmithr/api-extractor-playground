import { TestEnum } from './TestEnum';
import { TestMappedType } from './TestType';

/**
 * A test abstract class.
 *
 * @public
 */
export abstract class TestAbstractClass {
	/**
	 * A test private property.
	 */
	private readonly privateProperty: number;

	/**
	 * A test protected property.
	 */
	protected readonly protectedProperty: TestEnum;

	/**
	 * A test abstract getter property.
	 */
	public abstract get abstractPropertyGetter(): TestMappedType;

	/**
	 * This is a constructor.
	 */
	protected constructor(privateProperty: number, protectedProperty: TestEnum) {
		this.privateProperty = privateProperty;
		this.protectedProperty = protectedProperty;
	}

	/**
	 * A test `@virtual` method.
	 *
	 * @returns A number!
	 *
	 * @virtual
	 */
	protected virtualMethod(): number {
		return this.privateProperty;
	}

	/**
	 * A test `@sealed` method.
	 *
	 * @returns A string!
	 *
	 * @sealed
	 */
	protected sealedMethod(): string {
		return 'Hello world!';
	}

	/**
	 * A test public abstract method.
	 */
	public abstract publicAbstractMethod(): void;
}

/**
 * Test class
 *
 * @typeParam TTypeParameterA - A type parameter
 * @typeParam TTypeParameterB - Another type parameter
 *
 * @remarks Here are some remarks about the class
 *
 * @see {@link TestAbstractClass}
 *
 * @public
 */
export class TestClass<
	TTypeParameterA,
	TTypeParameterB,
> extends TestAbstractClass {
	/**
	 * {@inheritDoc TestAbstractClass.abstractPropertyGetter}
	 */
	public get abstractPropertyGetter(): TestMappedType {
		return {
			[TestEnum.TestEnumValue1]: true,
			[TestEnum.TestEnumValue2]: false,
			[TestEnum.TestEnumValue3]: true,
		};
	}

	/**
	 * Test class method
	 *
	 * @remarks Here are some remarks about the method
	 *
	 * @throws Some sort of error in 1 case.
	 * @throws Some other sort of error in another case.
	 * For example, a case where some thing happens.
	 *
	 * @sealed
	 */
	public testClassMethod(input: TTypeParameterA): TTypeParameterA {
		return input;
	}

	/**
	 * Test class static method
	 *
	 * @param foo - Some number
	 *
	 * @returns - Some string
	 */
	public static testClassStaticMethod(foo: number): string {
		return foo.toString();
	}

	/**
	 * Test class property
	 *
	 * @remarks Here are some remarks about the property
	 */
	public readonly testClassProperty: TTypeParameterB;

	/**
	 * Test static class property
	 */
	public static testClassStaticProperty: (foo: number) => string;

	/**
	 * Test class event property
	 *
	 * @remarks Here are some remarks about the property
	 *
	 * @eventProperty
	 */
	public readonly testClassEventProperty: () => void;

	/**
	 * Test class getter-only property
	 *
	 * @remarks Here are some remarks about the getter-only property
	 *
	 * @virtual
	 */
	public get testClassGetterProperty(): number {
		return 42;
	}

	/**
	 * Test class constructor
	 *
	 * @remarks Here are some remarks about the constructor
	 *
	 * @param privateProperty - See {@link TestAbstractClass}'s constructor.
	 * @param protectedProperty - See {@link TestAbstractClass.protectedProperty}.
	 * @param testClassProperty - See {@link TestClass.testClassProperty}.
	 * @param testClassEventProperty - See {@link TestClass.testClassEventProperty}.
	 */
	public constructor(
		privateProperty: number,
		protectedProperty: TestEnum,
		testClassProperty: TTypeParameterB,
		testClassEventProperty: () => void,
	) {
		super(privateProperty, protectedProperty);
		this.testClassProperty = testClassProperty;
		this.testClassEventProperty = testClassEventProperty;
	}

	/**
	 * {@inheritDoc TestAbstractClass.publicAbstractMethod}
	 */
	public publicAbstractMethod(): void {
		// ...
	}

	/**
	 * Overrides {@link TestAbstractClass.virtualMethod}.
	 *
	 * @override
	 */
	protected override virtualMethod(): number {
		return 42;
	}
}
