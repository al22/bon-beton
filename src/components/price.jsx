import React from "react";

import { Container, Box, Typography, Tabs, Tab } from "@mui/material";

import SectionHeading from "./section-heading";
import PriceTable from "./price-table";
import DeliveryPrice from "./delivery-price";

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      sx={{ mb: 8 }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

const ProductsPrice = () => {
  const [value, setValue] = React.useState(0);
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
    };
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Container maxWidth="md">
        <SectionHeading title="Цены" />
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Закладки с ценами на продукцию и доставку"
            centered
          >
            <Tab label="Бетон" {...a11yProps(0)} sx={{ fontSize: "1.2rem" }} />
            <Tab
              label="Раствор"
              {...a11yProps(1)}
              sx={{ fontSize: "1.2rem" }}
            />
            <Tab
              label="Доставка"
              {...a11yProps(2)}
              sx={{ fontSize: "1.2rem" }}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Typography sx={{ textAlign: "center", my: 4 }}>
            Цены указаны в рублях с учетом НДС (20%) за 1 м3 продукции
          </Typography>
          <PriceTable data={concrete} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography sx={{ textAlign: "center", my: 4 }}>
            Цены указаны в рублях с учетом НДС (20%) за 1 м3 продукции
          </Typography>

          <PriceTable data={mortyr} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <DeliveryPrice />
        </TabPanel>
      </Container>
    </Box>
  );
};
export default ProductsPrice;
