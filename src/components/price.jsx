import React from "react";

import { Container, Box, Typography, Tabs, Tab, Button } from "@mui/material";

import SectionHeading from "./section-heading";
import PriceTable from "./price-table";
import DeliveryPrice from "./delivery-price";

function createData(name, price, price5, price10, price15, price20, price25) {
  return {
    name,
    price,
    price5,
    price10,
    price15,
    price20,
    price25,
  };
}

/* const mortyr = [
  createData("М50", 5280, 6000, 6300, 6480, 6780, 6960),
  createData("М75", 6000, 6480, 6900, 7080, 7380, 7680),
  createData("М100", 6600, 7260, 7560, 7680, 8100, 8580),
  createData("М100 (Линамикс Р)", 6660, 0, 0, 0, 0, 0),
  createData("М150", 7080, 7800, 7980, 8280, 8580, 9060),
  createData("М200", 7860, 8760, 9000, 9300, 9600, 10080),
  createData(
    "М300",
    9060,
    10200,
    10380,
    10800,
    11000,
    11500
  )
]; */

const mortyr = [
  createData("М75", 6360),
  createData("М100", 6960),
  createData("М100 (Линамикс Р)", 7080),
  createData("М150", 7320),
  createData("М200", 8340),
  createData("М250", 9060),
  createData("М300", 9780),
];

/* const concrete = [
  createData(
    "B7.5 (М100)",
    6060,
    6660,
    6900,
    7080,
    7500,
    7680
  ),
  createData(
    "B12.5 (М150)",
    6300,
    6900,
    7080,
    7260,
    7680,
    7860
  ),
  createData(
    "B15 (М200)",
    6600,
    7200,
    7380,
    7560,
    7980,
    8160
  ),
  createData(
    "B20 (М250)",
    6960,
    7560,
    7800,
    8160,
    8400,
    8700
  ),
  createData(
    "B22.5 (М300)",
    7380,
    7980,
    8280,
    8700,
    9000,
    9600
  ),
  createData(
    "B25 (М350)",
    7800,
    8400,
    8760,
    9180,
    9480,
    9960
  ),
  createData(
    "B30 (М400)",
    8160,
    8880,
    9480,
    9660,
    9960,
    10500
  )
]; */

const concrete = [
  createData("B7.5 (М100)", 6480),
  createData("B12.5 (М150)", 6660),
  createData("B15 (М200)", 6960),
  createData("B20 (М250)", 7380),
  createData("B22.5 (М300)", 7800),
  createData("B25 (М350)", 8220),
  createData("B30 (М400)", 8640),
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
      "aria-controls": `simple-tabpanel-${index}`,
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
        <Box textAlign="center" my={8}>
          <Button
            variant="outlined"
            sx={{
              px: 20,
              color: "#200F07",
              bgcolor: "#D3B07A",
            }}
            onClick={() => window.open("../prices.pdf")}
          >
            Скачать прайс
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
export default ProductsPrice;
