import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { useTheme } from "@mui/material";

import { Box, Container, Grid, Typography, Link, Icon } from "@mui/material";

import SectionHeading from "./section-heading";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const data = [
  {
    id: 1,
    name: "Александр Романюк",
    title: "Ваш менеджер по продажам",
    image: "aromanyuk",
    phone: "8 (902) 514-09-27",
    phoneHref: "tel: 8-902-514-09-27",
    email: "aromanyuk@bon-beton.ru",
    text: "Проведу переговоры, согласую условия и подготовлю договор."
  },
  {
    id: 2,
    name: "Дмитрий Зайка",
    title: "Ваш инженер по качеству",
    image: "dzaika",
    phone: "8 (950) 104-09-17",
    phoneHref: "tel: 8-950-104-09-17",
    email: "dzaika@bon-beton.ru",
    text: "Отвечу на вопросы по качеству. Предоставлю документацию контроля качества. Обеспецу качкество вашей продукции."
  },
  {
    id: 3,
    name: "Татьяна Розенцвейг",
    title: "Ваш бухгалтер",
    image: "trozenscweig",
    phone: "8 (952) 630-09-72",
    phoneHref: "tel: 8-952-630-09-72",
    email: "trozenscweig@bon-beton.ru",
    text: "Подготовлю первичные документы, акт сверки."
  }
];

const Team = () => {
  const theme = useTheme();

  const query = useStaticQuery(graphql`
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
  const images = query.allFile.nodes;

  return (
    <Box sx={{ bgcolor: "#EEE" }}>
      <Container maxWidth="xl">
        <SectionHeading title="Наша команда" />
        <Grid container columnSpacing={1} justifyContent="space-around">
          {data.map(item => (
            <Grid
              item
              key={item.id}
              xs={12}
              md={4}
              sx={{
                my: 2,
                textAlign: "center",
                pb: 8
              }}
            >
              <GatsbyImage
                image={getImage(images.find(img => img.name === item.image))}
                alt={item.alt}
              />

              <Typography sx={{ my: 1, color: theme.palette.primary.main }}>
                {item.name}
              </Typography>
              <Box sx={{ maxWidth: "300px", mx: "auto" }}>
                <Typography
                  sx={{
                    my: 1,

                    color: theme.palette.primary.main
                  }}
                >
                  {'"' + item.text + '"'}
                </Typography>
              </Box>
              <Link
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "block",
                  color: "grey.600"
                }}
                href={item.phoneHref}
              >
                {item.phone}
              </Link>

              <Link
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "block",
                  color: "grey.600"
                }}
                href={"mailto:" + item.email}
              >
                {item.email}
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Team;
