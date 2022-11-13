import React, { createContext, FC, useContext } from 'react';
import {
  getBoxShadow,
  getCornerRoundness,
  getTextShadow,
  getTransitionSpeed,
} from '../../utils/themeUtils';
import {
  BoxShadowSetting,
  CornerRoundnessSetting,
  TextShadowSetting,
  TransitionSpeedSetting,
} from '../types';

export type ColorPalette = {
  body: string; // background
  foreground: string; // foreground elements such as nav, section, card, aside, article
  text: string; // paragraphs, labels
  primary: string; // CTA buttons
  secondary: string; // headings, links
};

export interface ThemeConfiguration {
  name: string;
  transitionSpeed?: TransitionSpeedSetting;
  cornerRoundness?: CornerRoundnessSetting;
  boxShadow?: BoxShadowSetting;
  textShadow?: TextShadowSetting;
  colorPalette: ColorPalette;
}

const BaseThemeConfiguration: ThemeConfiguration = {
  name: 'base',
  transitionSpeed: 'instant',
  cornerRoundness: 'none',
  boxShadow: 'none',
  textShadow: 'none',
  colorPalette: {
    body: '#1e2021',
    foreground: '#292c2e',
    text: '#f1f2f3',
    primary: '#c44391',
    secondary: '#4384c4',
  },
};

export interface Theme {
  name: string;
  transitionSpeed: string;
  cornerRoundness: string;
  boxShadow: string;
  textShadow: string;
  colorPalette: ColorPalette;
}

export function generateTheme(config: ThemeConfiguration): Theme {
  const theme: Theme = {
    name: config.name,
    transitionSpeed: getTransitionSpeed(config.transitionSpeed),
    cornerRoundness: getCornerRoundness(config.cornerRoundness),
    boxShadow: getBoxShadow(config.boxShadow),
    textShadow: getTextShadow(config.textShadow),
    colorPalette: config.colorPalette,
  };

  return theme;
}

const BaseTheme: Theme = generateTheme(BaseThemeConfiguration);

export type ThemeContextProps = {
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextProps>({
  theme: BaseTheme,
});

type ThemeProviderProps = {
  children?: React.ReactNode | React.ReactNode[];
  theme: Theme;
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme }) => {
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
