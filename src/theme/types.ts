/**
 * Available transition speed settings.
 */
export type TransitionSpeedSetting =
  | 'instant'
  | 'faster'
  | 'fast'
  | 'medium'
  | 'slow'
  | 'slower';

/**
 * Transition speed CSS strings.
 */
export enum TransitionSpeed {
  instant = 'none',
  faster = 'all 100ms ease',
  fast = 'all 200ms ease',
  medium = 'all 300ms ease',
  slow = 'all 400ms ease',
  slower = 'all 500ms ease',
}

/**
 * Available corner roundness settings.
 */
export type CornerRoundnessSetting = 'none' | 'large' | 'medium' | 'small';

/**
 * Corner roundness CSS strings.
 */
export enum CornerRoundness {
  none = 'none',
  large = '1rem',
  medium = '0.5rem',
  small = '0.25rem',
}

/**
 * Available box shadow settings.
 */
export type BoxShadowSetting =
  | 'none'
  | 'strong'
  | 'medium'
  | 'weak'
  | 'discrete';

/**
 * Box shadow CSS strings.
 */
export enum BoxShadow {
  none = 'none',
  strong = '3px 3px 0 rgba(0, 0, 0, 0.5)',
  medium = '3px 3px 3px rgba(0, 0, 0, 0.25)',
  weak = '3px 3px 5px rgba(0, 0, 0, 0.12)',
  discrete = '3px 3px 5px rgba(0, 0, 0, 0.07)',
}

/**
 * Available text shadow settings.
 */
export type TextShadowSetting =
  | 'none'
  | 'strong'
  | 'medium'
  | 'weak'
  | 'discrete';

/**
 * Text shadow CSS strings.
 */
export enum TextShadow {
  none = 'none',
  strong = '2px 2px 0 rgba(0, 0, 0, 0.5)',
  medium = '2px 2px 3px rgba(0, 0, 0, 0.25)',
  weak = '2px 2px 5px rgba(0, 0, 0, 0.12)',
  discrete = '2px 2px 5px rgba(0, 0, 0, 0.07)',
}
