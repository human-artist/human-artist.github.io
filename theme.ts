// src/theme.ts
import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#005f73',
    secondary: '#0a9396',
    light: '#e9d8a6',
    dark: '#001219',
  }
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      light: string;
      dark: string;
    }
  }
}
