import { css } from "styled-components";
import { ThemeType } from "./theme.type";

// const appTheme = new Map<ThemeType, AppTheme>();

// appTheme.set(ThemeType.Dark, {
//   colors: {
//     primary: "red",
//   },
// });

// appTheme.set(ThemeType.Light, {
//   colors: {
//     primary: "blue",
//   },
// });

// export const getTheme = (themeType: ThemeType) => {
//   return appTheme.get(themeType) as AppTheme;
// };

export const appTheme = {
  [ThemeType.Light]: {
    colors: {
      primary: "#000000",
    },
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
    backgrounds: {
      primary: "#F7F6FE",
    },
  },
  [ThemeType.Dark]: {
    colors: {
      primary: "ffffff",
    },
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
    backgrounds: {
      primary: "#26264F",
    },
  },
};

export const getTheme = (theme: ThemeType) => appTheme[theme];
