/** @public */
class Foo {
	public constructor(public readonly value: number) {}
}

/** @public */
class Bar {
	public constructor(public readonly value: number) {}
}

export {
	Foo,
	// Only type-export Bar
	type Bar,
};
