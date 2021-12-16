import React from "react";
import { Container, Box, Grid, Paper, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <Paper
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative"
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
        <StaticImage alt="" src="../images/header.jpg" layout="fullWidth" />
      </Box>

      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Grid
          container
          sx={{
            width: 10.7 / 12,
            height: "100%",
            mx: "auto",
            position: "relative"
          }}
        >
          <Grid item sm={6} md={6} lg={6} xl={6}>
            <Box
              sx={{
                mr: "150px"
              }}
            >
              <Typography variant="h2" color="grey.500" sx={{ my: 2 }}>
                ___
              </Typography>
              <Typography variant="h4" color="grey.300" sx={{ my: 3 }}>
                Производство бетона и раствора в Братске
              </Typography>
              <Typography variant="h6" color="grey.500" sx={{ my: 2 }}>
                - Собственная лаборатория
              </Typography>
              <Typography variant="h6" color="grey.500" sx={{ my: 2 }}>
                - Декларация о соответствии
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            sx={{ textAlign: "right", mt: "530px" }}
            sm={6}
            md={6}
            lg={6}
            xl={6}
          >
            <Typography variant="h5" color="yellow">
              +7 (3953) 27-09-27
            </Typography>
            <Typography variant="h5" color="yellow">
              info@bon-beton.ru
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Hero;
