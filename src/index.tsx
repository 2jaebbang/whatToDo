import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
