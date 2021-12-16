import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Hero from "../components/hero";

const theme = createTheme();

/* theme.typography.h1 = {
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem"
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem"
  }
}; */

const IndexPage = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Hero />
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
