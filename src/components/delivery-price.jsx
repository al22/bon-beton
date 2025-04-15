import React from "react";

import { Box, Grid, Typography } from "@mui/material";

import Mixer from "../images/mixer.svg";

const data = [
  {
    id: 1,
    title: "2 м3",
    price: 1800,
    height: "70px",
  },
  {
    id: 2,
    title: "5 м3",
    price: 2760,

    height: "100px",
  },
  {
    id: 3,
    title: "6 м3",
    price: 3000,

    height: "110px",
  },
  {
    id: 4,
    title: "7 м3",
    price: 3180,
    height: "120px",
  },
];

const DeliveryPrice = () => {
  return (
    <Box>
      <Typography sx={{ textAlign: "center", my: 4 }}>
        За 1 час работы автобетоносмесителя в рублях с учетом НДС
      </Typography>

      <Grid container justifyContent="space-around">
        {data.map((item) => (
          <Grid
            item
            key={item.id}
            xs={12}
            md={3}
            sx={{
              textAlign: "center",
            }}
          >
            <Box
              width="100%"
              position="relative"
              sx={{
                height: { xs: item.height, md: "180px" },
                mb: 2,
              }}
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
              sx={{
                mb: 3,
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >{`${item.price} руб/час`}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DeliveryPrice;
