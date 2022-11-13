import { ButtonPadding, ButtonSize } from './Button.types';

/**
 * Translates size into padding for buttons.
 * @param size typeof ButtonSize
 * @returns string
 */
export function getButtonPadding(size?: ButtonSize): ButtonPadding {
  if (!size) {
    return ButtonPadding.medium;
  }

  if (!Object.keys(ButtonPadding).includes(size)) {
    console.warn(`[ButtonComponent]: "${size}" is not a valid button size!`);
    return ButtonPadding.medium;
  }

  return ButtonPadding[size];
}
