import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fonts.family.base};
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
