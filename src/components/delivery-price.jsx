import React from "react";

import { Container, Box, Grid, Typography } from "@mui/material";

import SectionHeading from "./section-heading";
import Mixer from "../images/mixer.svg";

const data = [
  {
    id: 1,
    title: "2 м3",
    price: 2000,
    height: "120px"
  },
  {
    id: 2,
    title: "5-6 м3",
    price: 1980,

    height: "160px"
  },
  {
    id: 3,
    title: "7 м3",
    price: 2280,
    height: "180px"
  }
];

const DeliveryPrice = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <SectionHeading title="Доставка" />
        <Grid container justifyContent="space-around">
          {data.map(item => (
            <Grid
              item
              key={item.id}
              xs={12}
              md={4}
              sx={{
                textAlign: "center",
                mb: 8
              }}
            >
              <Box
                width="100%"
                position="relative"
                sx={{ height: { xs: item.height, md: "180px" }, mb: 2 }}
              >
                <Box
                  position="absolute"
                  bottom={0}
                  width="100%"
                  textAlign="center"
                >
                  <Mixer height={item.height} />
                </Box>
              </Box>
              <Typography>{`Объем ${item.title}`}</Typography>
              <Typography
                sx={{ mb: 3, fontSize: "1.2rem", fontWeight: "bold" }}
              >{`${item.price} руб/час`}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DeliveryPrice;
