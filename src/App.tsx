import "./App.css";
import { ThemeProvider } from "styled-components";
import { getTheme, ColorsType } from "@shared/theme";
import { store } from "@core/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Header } from "@shared/components/zalupa";
import { Router } from "@shared/components/app-routes";

const theme = getTheme(ColorsType.Light);

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
