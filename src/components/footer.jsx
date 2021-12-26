import React from "react";

import { useTheme } from "@mui/material";

import { Container, Grid, Typography, Link, Icon } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const data = [
  {
    id: 1,
    icon: <LocationOnIcon />,
    items: [
      {
        id: 11,
        title: "Адрес",
        text: "665718, Иркутская область, г. Братск, Промплощадка БЛПК",
        href: "https://yandex.ru/maps/-/CCUyYKwL~D"
      }
    ]
  },
  {
    id: 2,
    icon: <PhoneIcon />,
    items: [
      {
        id: 21,
        title: "Отдел продаж",
        text: "+7 (3953) 27-09-27",
        href: "tel: 8-3953-27-09-27"
      }
    ]
  },
  {
    id: 3,
    icon: <EmailIcon />,
    items: [
      {
        id: 31,
        title: "Почта",
        text: "info@bon-beton.ru",
        href: "mailto:info@bon-beton.ru"
      }
    ]
  }
];

const Footer = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="xl"
      sx={{ bgcolor: theme.palette.primary.main, py: 2 }}
    >
      <Grid container columnSpacing={1} justifyContent="space-around">
        {data.map(item => (
          <Grid
            item
            key={item.id}
            xs={12}
            md={3}
            sx={{
              my: 2,
              textAlign: { xs: "center", md: "left" }
            }}
          >
            <Icon sx={{ color: theme.palette.secondary.main }}>
              {item.icon}
            </Icon>
            {item.items.map(item => (
              <div key={item.id}>
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
              </div>
            ))}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Footer;
