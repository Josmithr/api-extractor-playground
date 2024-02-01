/**
 * Does not work.
 *
 * Note: Using one of Foo's flags seems to be important.
 * Using `type Foo = import('../Foo').Foo;` works just fine.
 */
export type Bar = import('../Foo').Foo.A;
