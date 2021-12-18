import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Hero from "../components/hero";
import Price from "../components/price";
import Footer from "../components/footer";

const theme = createTheme({
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
    tonalOffset: 0.2
  }
});

const IndexPage = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Hero />
        <Price />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
