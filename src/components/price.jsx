import * as React from "react";

import { Container, Box, Paper, Grid, Typography } from "@mui/material";
import SectionHeading from "./section-heading";

function createData(name, price, price5, price10, price15, price20, price25) {
  return { name, price, price5, price10, price15, price20, price25 };
}

const mortar = [
  createData("М50", 4440, 4500, 4620, 4740, 5040, 5200),
  createData("М75", 4920, 5100, 5400, 5580, 5880, 6180),
  createData("М100", 5520, 5760, 6000, 6180, 6480, 6780),
  createData("М150", 5820, 6000, 6180, 6420, 6780, 7080),
  createData("М200", 6480, 6780, 6960, 7260, 7560, 7800),
  createData("М300", 7680, 8100, 8400, 8700, 9000, 9420)
];

const Price = () => {
  return (
    <Box sx={{ bgcolor: "#EEE" }}>
      <SectionHeading
        title="Цены на продукцию"
        subtitle="Цены указаны в рублях с учетом НДС (20%) за 1 м3 продукции"
      />

      <Container maxWidth="md">
        <Paper sx={{ p: 1 }}>
          <Typography
            variant="h3"
            color="primary"
            sx={{ textAlign: "center", my: 2 }}
          >
            Товарный бетон
          </Typography>
          <Grid
            container
            justifyContent="space-around"
            sx={{ borderTop: "1px solid #A4A5A5", bgcolor: "#EEE" }}
          >
            <Grid item xs={1} sx={{ minWidth: "70px", my: "auto" }}>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                Марка
              </Typography>
            </Grid>
            <Grid item xs={1} textAlign="right" sx={{ my: "auto" }}>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                Без добавок
              </Typography>
            </Grid>

            <Grid item xs={1} textAlign="right" sx={{ my: "auto" }}>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                -5С°
              </Typography>
            </Grid>
            <Grid item xs={1} textAlign="right" sx={{ my: "auto" }}>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                -10С°
              </Typography>
            </Grid>
            <Grid item xs={1} textAlign="right" sx={{ my: "auto" }}>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                -15С°
              </Typography>
            </Grid>
            <Grid item xs={1} textAlign="right" sx={{ my: "auto" }}>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                -20С°
              </Typography>
            </Grid>
            <Grid item xs={1} textAlign="right" sx={{ my: "auto" }}>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                -25С°
              </Typography>
            </Grid>
          </Grid>

          {mortar.map(row => (
            <Grid
              container
              key={row.name}
              justifyContent="space-around"
              sx={{ borderTop: "1px solid #A4A5A5", minHeight: "30px" }}
            >
              <Grid item xs={1} sx={{ minWidth: "70px", my: "auto" }}>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  {row.name}
                </Typography>
              </Grid>
              <Grid item xs={1} textAlign="right" sx={{ my: "auto" }}>
                <Typography variant="body2">{row.price}</Typography>
              </Grid>
              <Grid item xs={1} textAlign="right" sx={{ my: "auto" }}>
                <Typography variant="body2">{row.price5}</Typography>
              </Grid>
              <Grid item xs={1} textAlign="right" sx={{ my: "auto" }}>
                <Typography variant="body2">{row.price10}</Typography>
              </Grid>
              <Grid item xs={1} textAlign="right" sx={{ my: "auto" }}>
                <Typography variant="body2">{row.price15}</Typography>
              </Grid>
              <Grid item xs={1} textAlign="right" sx={{ my: "auto" }}>
                <Typography variant="body2">{row.price20}</Typography>
              </Grid>
              <Grid item xs={1} textAlign="right" sx={{ my: "auto" }}>
                <Typography variant="body2">{row.price25}</Typography>
              </Grid>
            </Grid>
          ))}
        </Paper>
      </Container>
    </Box>
  );
};
export default Price;
