import React from "react";

import { Container, Box, Typography, Tabs, Tab } from "@mui/material";

import SectionHeading from "./section-heading";
import PriceTable from "./price-table";
import DeliveryPrice from "./delivery-price";

function createData(name, price, price5, price10, price15, price20, price25) {
  return { name, price, price5, price10, price15, price20, price25 };
}

const mortyr = [
  createData("М50", 4800, 4860, 5040, 5160, 5400, 5580),
  createData("М75", 5340, 5580, 5880, 6060, 6360, 6600),
  createData("М100", 5820, 6300, 6480, 6660, 6960, 7260),
  createData("М100 (Линамикс Р)", 6000, 0, 0, 0, 0, 0),
  createData("М150", 6300, 6480, 6660, 6900, 7260, 7560),
  createData("М200", 6960, 7260, 7500, 7800, 8100, 8280),
  createData("М300", 8160, 8580, 8880, 9180, 9480, 9780)
];

const concrete = [
  createData("B7.5 (М100)", 5400, 5580, 5760, 6000, 6300, 6480),
  createData("B12.5 (М150)", 5700, 6000, 6180, 6300, 6480, 6780),
  createData("B15 (М200)", 5760, 6060, 6300, 6480, 6660, 6960),
  createData("B20 (М250)", 6180, 6480, 6660, 6900, 7200, 7380),
  createData("B22.5 (М300)", 6360, 6660, 6900, 7080, 7380, 7560),
  createData("B25 (М350)", 6780, 7080, 7260, 7500, 7860, 8100),
  createData("B30 (М400)", 6900, 7200, 7380, 7800, 8100, 8400)
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
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
    <Box pt={13} pb={15}>
      <Container maxWidth="md">
        <Box mb={8}>
          <SectionHeading title="Цены" />
        </Box>
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
            За 1 м<sup>3</sup> бетона в рублях с учетом НДС
          </Typography>
          <PriceTable data={concrete} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography sx={{ textAlign: "center", my: 4 }}>
            За 1 м<sup>3</sup> раствора в рублях с учетом НДС
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
