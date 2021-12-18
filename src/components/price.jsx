import * as React from "react";

import { Container, Paper, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

/* const TableCell = styled(TC)`
  font-size: 0.5rem;

  width: 12%;
  padding: 0.2rem;
  border: 1px solid pink;
  white-space: "nowrap";
  overflow: "hidden";
  text-overflow: "ellipsis";
`; */

function createData(name, price, price5, price10, price15, price20, price25) {
  return { name, price, price5, price10, price15, price20, price25 };
}

const mortar = [
  createData("М50", 4440, 4500, 4620, 4740, 5040, 5200),
  createData("М75", 4920, 5100, 5400, 5580, 5880, 6180),
  createData("М100", 5520, 5760, 6000, 6180, 6480, 6780),
  createData("М100 (Линамикс Р)", 5640, 0, 0, 0, 0, 0),
  createData("М150", 5820, 6000, 6180, 6420, 6780, 7080),
  createData("М200", 6480, 6780, 6960, 7260, 7560, 7800),
  createData("М300", 7680, 8100, 8400, 8700, 9000, 9420)
];

const Price = () => {
  return (
    <Container maxWidth="xl" sx={{ bgcolor: "#200F07", p: 2 }}>
      <Paper
        sx={{
          maxWidth: "800px",
          mx: "auto",
          bgcolor: "#D3B07A",
          fontSize: "1rem"
        }}
      >
        <Grid
          container
          justifyContent="space-around"
          sx={{ fontWeight: "bold" }}
        >
          <Grid item xs={1} sx={{ minWidth: "150px" }}>
            Наименование
          </Grid>
          <Grid item xs={1} textAlign="right">
            Без добавок
          </Grid>
          <Grid item xs={1} textAlign="right">
            -5С
          </Grid>
          <Grid item xs={1} textAlign="right">
            -10С
          </Grid>
          <Grid item xs={1} textAlign="right">
            -15С
          </Grid>
          <Grid item xs={1} textAlign="right">
            -20С
          </Grid>
          <Grid item xs={1} textAlign="right">
            -25С
          </Grid>
        </Grid>

        {mortar.map(row => (
          <Grid
            container
            key={row.name}
            justifyContent="space-around"
            sx={{ borderTop: "1px solid #A4A5A5" }}
          >
            <Grid item xs={1} sx={{ minWidth: "150px" }}>
              {row.name}
            </Grid>
            <Grid item xs={1} textAlign="right">
              {row.price}
            </Grid>
            <Grid item xs={1} textAlign="right">
              {row.price5}
            </Grid>
            <Grid item xs={1} textAlign="right">
              {row.price10}
            </Grid>
            <Grid item xs={1} textAlign="right">
              {row.price15}
            </Grid>
            <Grid item xs={1} textAlign="right">
              {row.price20}
            </Grid>
            <Grid item xs={1} textAlign="right">
              {row.price25}
            </Grid>
          </Grid>
        ))}
      </Paper>
    </Container>
  );
};
export default Price;
