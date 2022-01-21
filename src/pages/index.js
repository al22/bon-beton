import * as React from "react";
import { Helmet } from "react-helmet";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Hero from "../components/hero";
import Quality from "../components/quality";
import CallToAction from "../components/cta";
import Price from "../components/price";

//import Team from "../components/team";
//import GoogleMap from "../components/map";
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
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Бетон и раствор в Братске от надежного производителя"
          />
          <title>Официальный сайт ООО "Бон-Бетон"</title>

          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        </Helmet>
        <Hero />
        <Quality />
        <CallToAction />

        {/* <Team /> */}
        <Price />
        {/* <GoogleMap /> */}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
