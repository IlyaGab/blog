import { css } from "styled-components";
import { ThemeType } from "./theme.type";

/*
palette: {
  pink:{
    50: "#1231231"
  }
  blue: {
    50: "#123123"
  }
  primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
}


*/

const commonStyles = {
  fonts: {
    primary: {
      20: css`
        font-family: "Montserrat";
        font-weight: 400;
        font-size: 1rem;
      `,
      40: css`
        font-family: "Montserrat";
        font-weight: 500;
        font-size: 1.2rem;
      `,
      60: css`
        font-family: "Montserrat";
        font-weight: 700;
        font-size: 1.4rem;
      `,
    },
  },
  animation: {
    transition: "250ms",
  },
};

export const appTheme = {
  [ThemeType.Light]: {
    colors: {
      primary: "#000000",
      secondary: "red",
      backgrounds: {
        primary: "#f5f5f5",
        secondary: "#F7F6FE",
      },
    },
    ...commonStyles,
  },
  [ThemeType.Dark]: {
    colors: {
      primary: "ffffff",
      secondary: "red",
      backgrounds: {
        primary: "#141414",
        secondary: "blue",
      },
    },
    // fonts: commonStyles.fonts,
    // animation: commonStyles.animation,
    ...commonStyles,
  },
};

export const getTheme = (theme: ThemeType) => appTheme[theme];
