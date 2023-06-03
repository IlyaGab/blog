import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { UsersPage } from "@pages/users";
import { getTheme, ThemeType } from "@shared/theme";
import { store } from "@core/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "@shared/components/Header/header.component";
import Body from "@shared/components/Body/body.component";



const theme = getTheme(ThemeType.Light);

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Header />
          <Body />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
