/**
 * Generates a string with a class name prefix representing a component variant and an optional custom class name.
 * The latter enables developers to override the default styling of the component.
 * @param prefix static class name prefix, i.e variant name.
 * @param custom optional custom class name for style overrides.
 * @returns `${prefix} ${custom ?? ''}`
 */
export const createClassName = function createClassName(
  prefix: string,
  custom?: string
): string {
  return `${prefix} ${custom ?? ''}`;
};
