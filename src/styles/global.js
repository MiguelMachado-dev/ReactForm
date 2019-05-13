import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Source Sans Pro', sans-serif;
    background-color: #f2f2f2;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  ::selection {
  color: #fff;
  background: #ee7005;
}
`;

export default GlobalStyle;
