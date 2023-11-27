import { Foo } from 'package-a';

/**
 * Bar
 *
 * @public
 */
export interface Bar extends Foo {}

// export { Foo } from 'package-a'; // Uncomment to make `ae-incompatible-release-tags` trigger as expected
