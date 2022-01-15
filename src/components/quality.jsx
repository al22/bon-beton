import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Container, Grid, Box, Paper, Typography } from "@mui/material";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SectionHeading from "./section-heading";

const Quality = () => {
  const items = [
    {
      title: "Входной контроль",
      text: "Провереям качество каждой партии исходных материалов.",
      image: "quality1"
    },
    {
      title: "Контроль прочности",
      text: "Заливаем кубики по каждой партии бетона. Ломаем на 7-ой и 20-ый день.",
      image: "quality2"
    },
    {
      title: "Контроль подвижности бетона",
      text: "Измеряем расплыв конуса каждой партии бетона.",
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
      <Container sx={{ maxWidth: { sm: "500px", md: "900px" } }}>
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
                <Typography variant="h3" color="primary">
                  {item.title}
                </Typography>
                <Typography sx={{ mb: 2 }}>{item.text}</Typography>
              </Grid>
              <Grid item md={6} xs={12}>
                <Paper elevation={8}>
                  <GatsbyImage image={image} alt="" />
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
