import {} from 'styled-components';
import { Theme } from './src/theme/context/ThemeContext';
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
