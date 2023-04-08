import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Roboto, HelveticaNeue, Arial, sans-serif;
    background-color: ${({ theme }) => theme.body};
  }
  button{
    border: none;
    outline: none;
    background-color: transparent;
  }
`;

export default GlobalStyle;
