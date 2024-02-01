/**
 * Does not work.
 *
 * Note: Using one of Bar's flags seems to be important.
 * Using `type Foo = import('../Bar').Bar;` works just fine.
 */
export type Foo = import('../Bar').Bar.A;
