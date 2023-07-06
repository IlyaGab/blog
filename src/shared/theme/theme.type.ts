import { FlattenSimpleInterpolation } from "styled-components";

export interface AppTheme {
  colors: {
    primary: string;
    secondary: string;
    backgrounds: {
      primary: string;
      secondary: string;
    };
  };
  fonts: {
    primary: {
      20: FlattenSimpleInterpolation;
      40: FlattenSimpleInterpolation;
      60: FlattenSimpleInterpolation;
    };
  };
}

export enum ThemeType {
  Dark = "DARK",
  Light = "LIGHT",
}
