import { Foo } from 'package-a';

/**
 * Bar
 *
 * @public
 */
export class Bar {
	public constructor(private readonly foo: Foo) {}

	public toString(): string {
		return this.foo.bar;
	}
}
