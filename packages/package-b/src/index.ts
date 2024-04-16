import { Foo as Foo_A } from 'package-a';
import { Foo as Foo_B } from 'package-a/internal';

/**
 * @public
 */
export const foo: Foo_A = new Foo_B();
