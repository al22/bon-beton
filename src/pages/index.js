import * as React from "react";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Hero from "../components/hero";
import Quality from "../components/quality";
import Price from "../components/price";
import Team from "../components/team";
import Footer from "../components/footer";


let theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#200F07"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#C08D5C",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00"
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    text: {
      primary: "#6b7177"
    }
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol"
    ].join(","),

    h1: { fontSize: "5rem", fontWeight: 400 },
    h2: { fontSize: "3rem", fontWeight: 400 },
    h3: { fontSize: "2rem" },
    subtitle1: { fontSize: "1.1rem", fontWeight: 500, lineHeight: 1.5 }
  }
});

theme = responsiveFontSizes(theme);

const IndexPage = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />



        <Hero />
        <Quality />

        <Team />
        <Price />


        <Footer />
      </ThemeProvider>
    </>
  );
};

export default IndexPage;


export const Head = () =>
(
  <>
    <title>Бетон и раствор в Братске от завода "Бон-Бетон"</title>
    <meta name="description" content='Производим и доставляем качественный бетон и растворв городе Братске. Собственная аккредитированная лаборатория качества!' />
  </>
)