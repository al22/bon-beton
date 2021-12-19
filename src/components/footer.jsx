import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";

import { Container, Grid, Typography, Link, Icon } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const data = [
  {
    id: 1,
    title: "Адрес",
    text: "665718, Иркутская область, г. Братск, Промплощадка БЛПК",
    href: "https://yandex.ru/maps/-/CCUyYKwL~D",
    icon: <LocationOnIcon />
  },
  {
    id: 2,
    title: "Отдел продаж",
    text: "+7 (3953) 27-09-27",
    href: "tel: 8-3953-27-09-27",
    icon: <PhoneIcon />
  },
  {
    id: 3,
    title: "Почта",
    text: "info@bon-beton.ru",
    href: "mailto:info@bon-beton.ru",
    icon: <EmailIcon />
  }
];

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("md"));

  return (
    <Container
      maxWidth="xl"
      sx={{ bgcolor: theme.palette.primary.main, py: 2 }}
    >
      <Grid
        container
        columnSpacing={1}
        justifyContent="space-around"
        //alignItems="center"
      >
        {data.map(item => (
          <Grid
            item
            key={item.id}
            xs={12}
            md={3}
            sx={{
              my: 2,
              textAlign: isSmallScreen ? "center" : "left"
            }}
          >
            <Icon sx={{ color: theme.palette.secondary.main }}>
              {item.icon}
            </Icon>
            <Typography
              variant="h6"
              sx={{ color: theme.palette.secondary.main }}
            >
              {item.title}
            </Typography>

            <Link
              sx={{
                display: "block",
                color: "#A4A5A5",
                cursor: "pointer",
                textDecoration: "none"
              }}
              href={item.href}
            >
              {item.text}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Footer;
