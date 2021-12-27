import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Grid, Typography, Button, Link } from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Hero = () => {
  const isMediumScreen = useMediaQuery(theme => theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "grid",
        minHeight: { lg: "100vh" },
        maxHeight: { lg: "100vh" }
      }}
    >
      {/* You can use a GatsbyImage component if the image is dynamic */}
      {isMediumScreen ? (
        <StaticImage
          style={{
            gridArea: "1/1"
            // You can set a maximum height for the image, if you wish.
            //maxHeight: "90vh"
          }}
          //layout="fullWidth"
          // You can optionally force an aspect ratio for the generated image
          //aspectRatio={1 / 1}
          // This is a presentational image, so the alt should be an empty string
          alt=""
          // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
          src="../images/hero_md.jpg"
          formats={["auto", "webp", "avif"]}
        />
      ) : (
        <StaticImage
          style={{
            gridArea: "1/1"
            // You can set a maximum height for the image, if you wish.
            //minHeight: 675
          }}
          //layout="fullWidth"
          // You can optionally force an aspect ratio for the generated image
          //aspectRatio={3 / 1}
          // This is a presentational image, so the alt should be an empty string
          alt=""
          // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
          src="../images/hero.jpg"
          formats={["auto", "webp", "avif"]}
        />
      )}

      <Box
        sx={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "normal center",
          display: "grid"
        }}
      >
        {/* Any content here will be centered in the component */}

        <Box>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              textAlign: "center",
              color: "grey.200",
              pt: { xs: 1, sm: 2, md: 3 }
            }}
          >
            Бетон и раствор
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ textAlign: "center", color: "grey.400" }}
          >
            От надежного производителя в г. Братске
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "1rem", sm: "2rem", md: "3rem" }
          }}
        >
          <Grid container justifyContent="space-around" spacing={3}>
            <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
              <Button
                startIcon={<PhoneIcon />}
                component={Link}
                href="tel: 8-3953-27-09-27"
                variant="contained"
                size="large"
                sx={{
                  width: "300px",
                  textTransform: "none",
                  color: "#200F07",
                  bgcolor: "#D3B07A",
                  "&:hover": {
                    backgroundColor: "#fff"
                  }
                }}
              >
                Звоните +7 (3953) 27-09-27
              </Button>
            </Grid>
            <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
              <Button
                startIcon={<EmailIcon />}
                component={Link}
                href="mailto:info@bon-beton.ru"
                variant="contained"
                size="large"
                sx={{
                  width: "300px",
                  textTransform: "none",
                  color: "#200F07",
                  bgcolor: "#D3B07A",
                  "&:hover": {
                    backgroundColor: "#fff"
                  },
                  display: { xs: "none", md: "flex" }
                }}
              >
                Пишите на info@bon-beton.ru
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
