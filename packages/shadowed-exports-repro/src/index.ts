
/**
 * Shadows of built-ins get aliased during rollup, which has resulted in tags being ignored when determining correct
 * output for report variants.
 * @internal
 */
export const performance: Performance = globalThis.performance;
