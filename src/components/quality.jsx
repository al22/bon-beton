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
      text: "Провереям качество каждой партии исходных материалов.",
      image: "quality1",
      alt: "Щебень."
    },
    {
      title: "Контроль прочности",
      text: "Заливаем кубики по каждой партии бетона. Ломаем на 7-ой и 20-ый день.",
      image: "quality2",
      alt: "Кубик бетона в прессе."
    },
    {
      title: "Контроль подвижности бетона",
      text: "Измеряем расплыв конуса каждой партии бетона.",
      image: "quality3",
      alt: "Измерение конуса."
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
      <Container sx={{ maxWidth: { sm: "500px", md: "1000px" } }}>
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
              sx={{
                mb: 16,
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
                  data-sal-duration="1000"
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
          );
        })}
      </Container>
    </Box>
  );
};

export default Quality;
