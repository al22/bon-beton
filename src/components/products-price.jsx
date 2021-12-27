import React from "react";

import { Container, Box, Typography } from "@mui/material";

import SectionHeading from "./section-heading";
import PriceTable from "./price-table";

function createData(name, price, price5, price10, price15, price20, price25) {
  return { name, price, price5, price10, price15, price20, price25 };
}

const mortyr = [
  createData("М50", 4440, 4500, 4620, 4740, 5040, 5200),
  createData("М75", 4920, 5100, 5400, 5580, 5880, 6180),
  createData("М100", 5520, 5760, 6000, 6180, 6480, 6780),
  createData("М100 (Линамикс Р)", 5520, 0, 0, 0, 0, 0),
  createData("М150", 5820, 6000, 6180, 6420, 6780, 7080),
  createData("М200", 6480, 6780, 6960, 7260, 7560, 7800),
  createData("М300", 7680, 8100, 8400, 8700, 9000, 9420)
];

const concrete = [
  createData("B7.5 (М100)", 5040, 5160, 5400, 5520, 5880, 6120),
  createData("B12.5 (М150)", 5220, 5520, 5700, 5820, 6000, 6300),
  createData("B15 (М200)", 5280, 5580, 5820, 6000, 6180, 6480),
  createData("B20 (М250)", 5700, 5880, 6120, 6300, 6660, 6900),
  createData("B22.5 (М300)", 5880, 6180, 6360, 6600, 6900, 7080),
  createData("B25 (М350)", 6300, 6480, 6780, 6960, 7380, 7560),
  createData("B30 (М400)", 6420, 6720, 6960, 7260, 7560, 7860)
];

const ProductsPrice = () => {
  return (
    <Box sx={{ bgcolor: "#EEE", pb: 8 }}>
      <Container maxWidth="md">
        <SectionHeading
          title="Цены на продукцию"
          subtitle="Цены указаны в рублях с учетом НДС (20%) за 1 м3 продукции"
        />
        <Box my={8}>
          <Typography
            variant="h3"
            color="primary"
            sx={{ textAlign: "center", mb: 2 }}
          >
            Строительный раствор
          </Typography>
          <PriceTable data={mortyr} />
        </Box>
        <Box my={8}>
          <Typography
            variant="h3"
            color="primary"
            sx={{ textAlign: "center", mb: 2 }}
          >
            Товарный бетон
          </Typography>
          <PriceTable data={concrete} />
        </Box>
      </Container>
    </Box>
  );
};
export default ProductsPrice;
