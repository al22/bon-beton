import * as React from "react";

import {
  Container,
  Box,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  ListItem
} from "@mui/material";
import SectionHeading from "./section-heading";

function createData(name, price, price5, price10, price15, price20, price25) {
  return { name, price, price5, price10, price15, price20, price25 };
}

const concrete = [
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
      <Container maxWidth="md">
        <SectionHeading
          title="Цены на продукцию"
          subtitle="Цены указаны в рублях с учетом НДС (20%) за 1 м3 продукции"
        />
        <Paper sx={{ p: 1 }}>
          <Typography
            variant="h3"
            color="primary"
            sx={{ textAlign: "center", my: 2 }}
          >
            Товарный бетон
          </Typography>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ minWidth: 100, maxWidth: 100 }}>
                  Марка
                </TableCell>
                <TableCell style={{ minWidth: 50, maxWidth: 50 }}>
                  Без добавки
                </TableCell>
                <TableCell style={{ minWidth: 50, maxWidth: 50 }}>-5</TableCell>
                <TableCell sstyle={{ minWidth: 50, maxWidth: 50 }}>
                  -10
                </TableCell>
                <TableCell style={{ minWidth: 50, maxWidth: 50 }}>
                  -15
                </TableCell>
                <TableCell style={{ minWidth: 50, maxWidth: 50 }}>
                  -20
                </TableCell>
                <TableCell style={{ minWidth: 50, maxWidth: 50 }}>
                  -25
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {concrete.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell style={{ minWidth: 100, maxWidth: 100 }}>
                    {row.name}
                  </TableCell>
                  <TableCell style={{ minWidth: 50, maxWidth: 50 }}>
                    {row.price}
                  </TableCell>
                  <TableCell style={{ minWidth: 50, maxWidth: 50 }}>
                    {row.price5}
                  </TableCell>
                  <TableCell style={{ minWidth: 50, maxWidth: 50 }}>
                    {row.price10}
                  </TableCell>
                  <TableCell style={{ minWidth: 50, maxWidth: 50 }}>
                    {row.price15}
                  </TableCell>
                  <TableCell style={{ minWidth: 50, maxWidth: 50 }}>
                    {row.price20}
                  </TableCell>
                  <TableCell style={{ minWidth: 50, maxWidth: 50 }}>
                    {row.price25}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </Box>
  );
};
export default Price;
