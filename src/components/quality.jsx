import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Container, Grid, Box, Paper, Typography } from "@mui/material";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SectionHeading from "./section-heading";

const Quality = () => {
  const isMediumScreen = useMediaQuery(theme => theme.breakpoints.down("md"));

  const items = [
    {
      title: "Входной контроль",
      text: "Провереям качество каждой партии цемента, песка и щебня.",
      image: "quality1",
      alt: "Щебень."
    },
    {
      title: "Контроль подвижности бетона",
      text: "Измеряем осадку конуса каждой партии бетона.",
      image: "quality3",
      alt: "Измерение конуса."
    },
    {
      title: "Контроль прочности",
      text: "Отбираем пробу от каждой партии бетона. Затем проверяем прочность на 7-ые и 28-ые сутки.",
      image: "quality2",
      alt: "Кубик бетона в прессе."
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
      <Container
        sx={{ pt: 13, pb: 16, maxWidth: { sm: "500px", md: "1000px" } }}
      >
        <Box mb={8}>
          <SectionHeading
            title="Качество под контролем"
            subtitle='В 2020 году Строительная лаборатория ООО "Бон-Бетон" прошла оценку о состоянии измерений в лаборатории, что значительно повлияло на качество выпускаемой нами продукции.'
          />
        </Box>

        {items.map(item => {
          const image = getImage(images.find(img => img.name === item.image));

          return (
            <Box>
              <Grid
                key={item.image}
                container
                sx={{
                  mt: 12,
                  flexDirection:
                    items.indexOf(item) % 2 === 0 ? "row-reverse" : "row"
                }}
              >
                <Grid item md={6} xs={12} sx={{ my: "auto", pl: { md: 6 } }}>
                  <Box
                    data-sal={
                      !isMediumScreen
                        ? items.indexOf(item) % 2 === 0
                          ? "slide-left"
                          : "slide-right"
                        : "fade"
                    }
                    data-sal-duration="2000"
                  >
                    <Typography variant="h3" color="primary">
                      {item.title}
                    </Typography>
                    <Typography sx={{ mb: 2 }}>{item.text}</Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                  sx={{
                    pr: { md: items.indexOf(item) % 2 === 0 ? 6 : 0 },
                    pl: { md: items.indexOf(item) % 2 !== 0 ? 6 : 0 }
                  }}
                >
                  <Paper elevation={8} sx={{ p: 1 }}>
                    <GatsbyImage image={image} alt={item.alt} />
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
};

export default Quality;
