import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  }

  body, input, textarea, select, button {
    font: 400 1rem "Inter", sans-serif;
  }

`;