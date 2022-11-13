import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';
import { generateTheme } from '../src/theme/context/ThemeContext';

const darkThemeConfig = {
  name: 'dark',
  transitionSpeed: 'instant',
  cornerRoundness: 'small',
  boxShadow: 'discrete',
  textShadow: 'weak',
  colorPalette: {
    body: '#1e2021',
    foreground: '#292c2e',
    text: '#f1f2f3',
    primary: 'hotpink',
    secondary: 'deepskyblue',
  },
};

const lightThemeConfig = {
  name: 'light',
  transitionSpeed: 'instant',
  cornerRoundness: 'small',
  boxShadow: 'discrete',
  textShadow: 'weak',
  colorPalette: {
    body: '#FEFEFE',
    foreground: '#292c2e',
    text: '#1e2021',
    primary: 'hotpink',
    secondary: 'deepskyblue',
  },
};

const darkTheme = generateTheme(darkThemeConfig);
const lightTheme = generateTheme(lightThemeConfig);

export const onThemeSwitch = context => {
  const { theme } = context;
  const background = theme.colorPalette.body;
  const parameters = {
    backgrounds: {
      default: background,
    },
  };

  return {
    parameters,
  };
};

addDecorator(
  withThemes(ThemeProvider, [lightTheme, darkTheme], { onThemeSwitch })
);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
