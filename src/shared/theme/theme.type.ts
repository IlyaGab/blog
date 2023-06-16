import { DefaultTheme, ThemedCssFunction } from "styled-components";

export interface AppThemeType {
  colors: {
    primary: string;
  };
  fonts: {
    primary: {
      80: ThemedCssFunction<DefaultTheme>;
    };
  };
  backgrounds: {
    primary: string;
  };
}

export enum ThemeType {
  Dark = "DARK",
  Light = "LIGHT",
}
