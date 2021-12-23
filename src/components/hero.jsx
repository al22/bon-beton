import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { StaticImage } from "gatsby-plugin-image";
import { Grid, Typography, Button, Link } from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Hero = () => {
  const isMediumScreen = useMediaQuery(theme => theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        display: "grid",
        height: isSmallScreen ? "500px" : "100vh"
      }}
    >
      {/* You can use a GatsbyImage component if the image is dynamic */}
      {isMediumScreen ? (
        <StaticImage
          style={{
            gridArea: "1/1",
            // You can set a maximum height for the image, if you wish.
            minHeight: 550
          }}
          layout="fullWidth"
          // You can optionally force an aspect ratio for the generated image
          //aspectRatio={3 / 1}
          // This is a presentational image, so the alt should be an empty string
          alt=""
          // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
          src="../images/hero_md.jpg"
          formats={["auto", "webp", "avif"]}
        />
      ) : (
        <StaticImage
          style={{
            gridArea: "1/1",
            // You can set a maximum height for the image, if you wish.
            minHeight: 675
          }}
          layout="fullWidth"
          // You can optionally force an aspect ratio for the generated image
          //aspectRatio={3 / 1}
          // This is a presentational image, so the alt should be an empty string
          alt=""
          // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
          src="../images/hero.jpg"
          formats={["auto", "webp", "avif"]}
        />
      )}

      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "normal center",
          display: "grid"
        }}
      >
        {/* Any content here will be centered in the component */}
        <Grid
          container
          sx={{
            maxWidth: "800px"
          }}
        >
          <Grid item sx={{ width: "100%" }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                textAlign: "center",
                mt: 2,
                mb: 1,
                color: "grey.200"
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
          </Grid>

          <Grid item sx={{ width: "100%", mt: "auto", mb: { xs: 3, md: 6 } }}>
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
                    },
                    mb: isSmallScreen ? 3 : 0
                  }}
                >
                  Звоните +7 (3953) 27-09-27
                </Button>
              </Grid>
              {!isSmallScreen && (
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
                      }
                    }}
                  >
                    Пишите на info@bon-beton.ru
                  </Button>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Hero;
