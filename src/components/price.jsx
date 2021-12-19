import * as React from "react";

import { Container, Box, Paper, Grid, Typography } from "@mui/material";

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
    <Box sx={{ bgcolor: "#A4A5A5" }}>
      <Container sx={{ py: 3 }}>
        <Container maxWidth="md" sx={{ textAlign: "center", mt: 8, mb: 8 }}>
          <Typography variant="h2" color="primary" sx={{ mt: 8, mb: 1 }}>
            Цены на продукцию
          </Typography>
        </Container>

        <Container maxWidth="md">
          <Paper sx={{ p: 1, mb: 8 }}>
            <Typography
              variant="h3"
              color="primary"
              sx={{ my: 3, textAlign: "center" }}
            >
              Товарный бетон
            </Typography>
            <Grid container justifyContent="space-around">
              <Grid item xs={1} sx={{ minWidth: "70px" }}>
                <Typography variant="body2">Марка</Typography>
              </Grid>
              <Grid item xs={1} textAlign="right">
                <Typography variant="body2">Без добавок</Typography>
              </Grid>
              <Grid item xs={1} textAlign="right">
                <Typography variant="body2">-5С</Typography>
              </Grid>
              <Grid item xs={1} textAlign="right">
                <Typography variant="body2">-10С</Typography>
              </Grid>
              <Grid item xs={1} textAlign="right">
                <Typography variant="body2"> -15С</Typography>
              </Grid>
              <Grid item xs={1} textAlign="right">
                <Typography variant="body2">-20С</Typography>
              </Grid>
              <Grid item xs={1} textAlign="right">
                <Typography variant="body2">-25С</Typography>
              </Grid>
            </Grid>

            {mortar.map(row => (
              <Grid
                container
                key={row.name}
                justifyContent="space-around"
                sx={{ borderTop: "1px solid #A4A5A5" }}
              >
                <Grid item xs={1} sx={{ minWidth: "70px" }}>
                  <Typography variant="body2">{row.name}</Typography>
                </Grid>
                <Grid item xs={1} textAlign="right">
                  <Typography variant="body2">{row.price}</Typography>
                </Grid>
                <Grid item xs={1} textAlign="right">
                  <Typography variant="body2">{row.price5}</Typography>
                </Grid>
                <Grid item xs={1} textAlign="right">
                  <Typography variant="body2">{row.price10}</Typography>
                </Grid>
                <Grid item xs={1} textAlign="right">
                  <Typography variant="body2">{row.price15}</Typography>
                </Grid>
                <Grid item xs={1} textAlign="right">
                  <Typography variant="body2">{row.price20}</Typography>
                </Grid>
                <Grid item xs={1} textAlign="right">
                  <Typography variant="body2">{row.price25}</Typography>
                </Grid>
              </Grid>
            ))}
          </Paper>
        </Container>
      </Container>
    </Box>
  );
};
export default Price;
