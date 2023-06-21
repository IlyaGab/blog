import "./App.css";
import { ThemeProvider } from "styled-components";
import { getTheme, ThemeType } from "@shared/theme";
import { store } from "@core/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Header } from "@shared/components/header";
import { Router } from "@shared/components/app-routes";

const theme = getTheme(ThemeType.Light);

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Header />
          <Router />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
