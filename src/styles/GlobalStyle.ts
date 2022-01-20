import { createGlobalStyle } from "styled-components";
import { defalutTheme } from "./theme";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${defalutTheme.fonts.family.base};
  }
`;

export default GlobalStyle;
