import {
  TransitionSpeedSetting,
  TransitionSpeed,
  CornerRoundnessSetting,
  CornerRoundness,
  BoxShadowSetting,
  BoxShadow,
  TextShadowSetting,
  TextShadow,
} from '../theme/types';

/**
 * Translates a transition speed setting into a CSS transition value string.
 * @param setting typeof TransitionSpeedSetting
 * @returns string
 */
export function getTransitionSpeed(
  setting?: TransitionSpeedSetting
): TransitionSpeed {
  if (!setting) {
    return TransitionSpeed.instant;
  }

  if (!Object.keys(TransitionSpeed).includes(setting)) {
    console.warn(
      `[ThemeProvider]: "${setting}" is not a valid transition speed setting!`
    );
    console.log(`[ThemeProvider]: visit [LINK TO DOCS] for more information.`);
    return TransitionSpeed.instant;
  }

  return TransitionSpeed[setting];
}

/**
 * Translates a corner roundness setting into a CSS border-radius value string.
 * @param setting typeof CornerRoundnessSetting
 * @returns string
 */
export function getCornerRoundness(
  setting?: CornerRoundnessSetting
): CornerRoundness {
  if (!setting) {
    return CornerRoundness.none;
  }

  if (!Object.keys(CornerRoundness).includes(setting)) {
    console.warn(
      `[ThemeProvider]: "${setting}" is not a valid corner roundness setting!`
    );
    console.log(`[ThemeProvider]: visit [LINK TO DOCS] for more information.`);
    return CornerRoundness.none;
  }

  return CornerRoundness[setting];
}

/**
 * Translates a box shadow setting into a CSS box-shadow value string.
 * @param setting typeof BoxShadowSetting
 * @returns string
 */
export function getBoxShadow(setting?: BoxShadowSetting): BoxShadow {
  if (!setting) {
    return BoxShadow.none;
  }

  if (!Object.keys(BoxShadow).includes(setting)) {
    console.warn(
      `[ThemeProvider]: "${setting}" is not a valid box shadow setting!`
    );
    console.log(`[ThemeProvider]: visit [LINK TO DOCS] for more information.`);
    return BoxShadow.none;
  }

  return BoxShadow[setting];
}

/**
 * Translates a box shadow setting into a CSS text-shadow value string.
 * @param setting typeof TextShadowSetting
 * @returns string
 */
export function getTextShadow(setting?: TextShadowSetting): TextShadow {
  if (!setting) {
    return TextShadow.none;
  }

  if (!Object.keys(TextShadow).includes(setting)) {
    console.warn(
      `[ThemeProvider]: "${setting}" is not a valid text shadow setting!`
    );
    console.log(`[ThemeProvider]: visit [LINK TO DOCS] for more information.`);
    return TextShadow.none;
  }

  return TextShadow[setting];
}
