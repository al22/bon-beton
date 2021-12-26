import * as React from "react";
import { styled } from "@mui/system";

import {
  Container,
  Box,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell as TableCellMUI,
  Typography
} from "@mui/material";

import SectionHeading from "./section-heading";

const TableCell = styled(TableCellMUI)(({ theme }) => ({
  textAlign: "right",

  [theme.breakpoints.only("xs")]: {
    fontSize: "0.5rem",
    padding: 2,
    minWidth: 30,
    maxWidth: 100
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "0.8rem",
    padding: 2,
    maxWidth: 100
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
    padding: 8
  },
  [theme.breakpoints.down(321)]: {
    fontSize: "0.5rem",
    padding: 1,
    minWidth: 20,
    maxWidth: 40
  },

  margin: 0,
  borderBottom: `1px solid ${theme.palette.primary.grey}`
}));

const TableCellHead = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  fontWeight: "bold",
  color: "#EEE",
  textAlign: "right",
  lineHeight: "1rem",
  border: "1px solid white"
}));

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

const Price = () => {
  return (
    <Box sx={{ bgcolor: "#EEE", pb: 8 }}>
      <Container maxWidth="md">
        <SectionHeading
          title="Цены на продукцию"
          subtitle="Цены указаны в рублях с учетом НДС (20%) за 1 м3 продукции"
        />
        <Paper sx={{ p: { xs: 1, sm: 2 } }}>
          <Typography
            variant="h3"
            color="primary"
            sx={{ textAlign: "center", mt: 2, mb: 3 }}
          >
            Строительный раствор
          </Typography>

          <Table>
            <TableHead>
              <TableRow>
                <TableCellHead rowSpan={2} sx={{ textAlign: "left" }}>
                  Марка
                </TableCellHead>
                <TableCellHead rowSpan={2} sx={{ width: 0 }}>
                  Без добавки
                </TableCellHead>
                <TableCellHead colSpan={5} sx={{ textAlign: "center" }}>
                  С добавкой до
                </TableCellHead>
              </TableRow>
              <TableRow>
                <TableCellHead>-5 °C</TableCellHead>
                <TableCellHead>-10 °C</TableCellHead>
                <TableCellHead>-15 °C</TableCellHead>
                <TableCellHead>-20 °C</TableCellHead>
                <TableCellHead>-25 °C</TableCellHead>
              </TableRow>
            </TableHead>
            <TableBody>
              {mortyr.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell sx={{ fontWeight: "bold", textAlign: "left" }}>
                    {row.name}
                  </TableCell>
                  <TableCell>{row.price !== 0 ? row.price : "-"}</TableCell>
                  <TableCell>{row.price5 !== 0 ? row.price5 : "-"}</TableCell>
                  <TableCell>{row.price10 !== 0 ? row.price10 : "-"}</TableCell>
                  <TableCell>{row.price15 !== 0 ? row.price15 : "-"}</TableCell>
                  <TableCell>{row.price20 !== 0 ? row.price20 : "-"}</TableCell>
                  <TableCell>{row.price25 !== 0 ? row.price25 : "-"}</TableCell>
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
