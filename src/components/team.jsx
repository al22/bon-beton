import React from "react";
import {useStaticQuery, graphql} from "gatsby";

import {useTheme} from "@mui/material";

import {
  Box,
  Container,
  Grid,
  Typography,
  Link
} from "@mui/material";

import SectionHeading from "./section-heading";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const data = [
  {
    id: 1,
    name: "Александр Романюк",
    title: "Менеджер по продажам",
    image: "aromanyuk",
    phone: "8 (902) 514-09-27",
    phoneHref: "tel: 8-902-514-09-27",
    email: "info@bon-beton.ru"
  },
  {
    id: 2,
    name: "Дмитрий Заика",
    title: "Инженер по качеству",
    image: "dzaika",
    phone: "8 (950) 104-09-17",
    phoneHref: "tel: 8-950-104-09-17",
    email: "lab@bon-beton.ru"
  },
  {
    id: 3,
    name: "Татьяна Розенцвейг",
    title: "Главный бухгалтер",
    image: "trozencweig",
    phone: "8 (952) 630-09-72",
    phoneHref: "tel: 8-952-630-09-72",
    email: "bon-beton@yandex.ru"
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
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `);
  const images = query.allFile.nodes;

  return (
    <Box sx={{bgcolor: "#EEE"}}>
      <Container maxWidth="xl">
        <Box py={13}>
          <SectionHeading title="Сотрудники компании" />
          <Grid
            container
            columnSpacing={1}
            justifyContent="space-around">
            {data.map(item => (
              <Grid
                item
                key={item.id}
                xs={12}
                md={4}
                sx={{
                  my: 8,
                  textAlign: "center"
                }}>
                <GatsbyImage
                  style={{borderRadius: "50%"}}
                  image={getImage(
                    images.find(
                      img => img.name === item.image
                    )
                  )}
                  alt="Фотография сотрудника"
                />

                <Typography
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    mt: 2
                  }}>
                  {item.name}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: theme.palette.primary.main
                  }}>
                  {item.title}
                </Typography>
                <Link
                  sx={{
                    cursor: "pointer",
                    textDecoration: "none",
                    display: "block",
                    color: "grey.600",
                    mt: 2
                  }}
                  href={item.phoneHref}>
                  {item.phone}
                </Link>

                <Link
                  sx={{
                    cursor: "pointer",
                    textDecoration: "none",
                    display: "block",
                    color: "grey.600"
                  }}
                  href={"mailto:" + item.email}>
                  {item.email}
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Team;
