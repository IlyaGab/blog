
import {ColorsType} from "./theme.type";

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
  [ColorsType.Light]: {
    colors: {
      primary: "red",
    },
  },
  [ColorsType.Dark]: {
    colors: {
      primary: "blue",
    },
  },
};



export const getTheme = (themeType: ColorsType) => appTheme[themeType];