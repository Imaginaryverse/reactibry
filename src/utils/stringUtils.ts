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
  return `${prefix}${custom ? ` ${custom}` : ''}`;
};

/**
 * Generates a string starting with a default class name followed by optional class names provided that their condition is truthy.
 * @param defaultClass default class name.
 * @param options optional class names.
 * @returns string
 */
export const withOptionalClass = function withOptionalClass(
  defaultClass: string,
  options: { className: string; condition: boolean }[]
): string {
  const classNames: string[] = [defaultClass];

  for (const option of options) {
    if (!!option.condition) {
      classNames.push(option.className);
    }
  }

  return classNames.join(' ');
};
