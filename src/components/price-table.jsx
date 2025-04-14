import React from "react";
import { styled } from "@mui/system";

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell as TableCellMUI,
} from "@mui/material";

const TableCell = styled(TableCellMUI)(({ theme }) => ({
  textAlign: "right",
  [theme.breakpoints.only("xs")]: {
    fontSize: "0.7rem",
    padding: 1,
    minWidth: "40px",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "0.8rem",
    padding: 2,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
    padding: 8,
  },
  [theme.breakpoints.down(321)]: {
    fontSize: "0.5rem",
    padding: 1,
  },
  margin: 0,
  border: "none",
}));

const TableCellHead = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  fontWeight: "bold",
  color: "#EEE",
  textAlign: "right",
  lineHeight: "1rem",
  border: "1px solid white",
}));

const PriceTable = ({ data }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCellHead rowSpan={2} sx={{ textAlign: "left" }}>
            Марка
          </TableCellHead>
          {/*  <TableCellHead rowSpan={2} sx={{ width: 100, textAlign: "center" }}>
            Без добавки
          </TableCellHead> */}

          <TableCellHead rowSpan={1} sx={{ width: 200 }}>
            Цена
          </TableCellHead>
          {/*  <TableCellHead colSpan={5} sx={{ textAlign: "center" }}>
            С добавкой до
          </TableCellHead> */}
        </TableRow>
        {/*    <TableRow>
          <TableCellHead>-5 °C</TableCellHead>
          <TableCellHead>-10 °C</TableCellHead>
          <TableCellHead>-15 °C</TableCellHead>
          <TableCellHead>-20 °C</TableCellHead>
          <TableCellHead>-25 °C</TableCellHead>
        </TableRow> */}
      </TableHead>
      <TableBody>
        {data.map((row, idx) => (
          <TableRow
            key={idx}
            sx={{
              borderBottom: "1px solid lightgrey",
              "&:last-child": {
                borderBottom: "none",
              },
            }}
          >
            <TableCell sx={{ fontWeight: "bold", textAlign: "left" }}>
              {row.name}
            </TableCell>
            <TableCell>{row.price !== 0 ? row.price : "-"}</TableCell>
            {/*      <TableCell>{row.price5 !== 0 ? row.price5 : "-"}</TableCell>
            <TableCell>{row.price10 !== 0 ? row.price10 : "-"}</TableCell>
            <TableCell>{row.price15 !== 0 ? row.price15 : "-"}</TableCell>
            <TableCell>{row.price20 !== 0 ? row.price20 : "-"}</TableCell>
            <TableCell>{row.price25 !== 0 ? row.price25 : "-"}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PriceTable;
