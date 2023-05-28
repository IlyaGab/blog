import { AppTheme, ThemeType } from "./theme.type";

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

const appTheme = {
  [ThemeType.Light]: {
    colors: {
      primary: "red",
    },
  },
  [ThemeType.Dark]: {
    colors: {
      primary: "blue",
    },
  },
};

export const getTheme = (themeType: ThemeType) => appTheme[themeType];
