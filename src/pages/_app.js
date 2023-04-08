import { ThemeProvider } from "styled-components";
import GlobalStyle from "../services/theme/GlobalStyle";
import { lightTheme, darkTheme } from "../services/theme/Theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
