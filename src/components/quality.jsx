import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useStaticQuery, graphql } from "gatsby";

import { Container, Grid, Box, Paper, Typography } from "@mui/material";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SectionHeading from "./section-heading";

const Quality = () => {
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("md"));

  const items = [
    {
      title: "Лаборатория",
      text: "Новое современное оборудование делает измеренения точными.",
      image: "quality1"
    },
    {
      title: "Лаборатория",
      text: "Новое современное оборудование делает измеренения точными.",
      image: "quality2"
    },
    {
      title: "Лаборатория",
      text: "Новое современное оборудование делает измеренения точными.",
      image: "quality3"
    }
  ];

  const data = useStaticQuery(graphql`
    {
      allFile {
        nodes {
          name
          id
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  `);
  const images = data.allFile.nodes;

  return (
    <Box>
      <Container>
        <SectionHeading
          title="Качество под контролем"
          subtitle='В 2020 году Строительная лаборатория ООО "Бон-Бетон" прошла оценку о состоянии измерений в лаборатории, что значительно повлияло на качество выпускаемой нами продукции.'
        />
        {items.map(item => {
          const image = getImage(images.find(img => img.name === item.image));

          return (
            <Grid
              key={item.image}
              container
              spacing={isSmallScreen ? 2 : 16}
              sx={{ mb: 16, px: { xs: 1, sm: 12, md: 6, lg: 8 } }}
              direction={
                isSmallScreen
                  ? "column-reverse"
                  : items.indexOf(item) % 2 === 0
                  ? "row"
                  : "row-reverse"
              }
            >
              <Grid item md={6} xs={12}>
                <Paper elevation={8}>
                  <GatsbyImage image={image} alt="" />
                </Paper>
              </Grid>
              <Grid item md={6} xs={12} sx={{ my: "auto", pl: { md: 6 } }}>
                <Typography variant="h3" color="primary">
                  {item.title}
                </Typography>
                <Typography sx={{ mb: 2 }}>{item.text}</Typography>
              </Grid>
            </Grid>
          );
        })}
      </Container>
    </Box>
  );
};

export default Quality;