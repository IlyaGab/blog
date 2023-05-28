import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { UsersPage } from "@pages/users";
import { getTheme, ThemeType } from "@theme/index";
import { store } from "@store/index";
import { Provider } from "react-redux";

const theme = getTheme(ThemeType.Light);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <UsersPage />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
