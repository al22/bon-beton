import React from "react";

import {
  Container,
  Box,
  Typography,
  Tabs,
  Tab,
  Button
} from "@mui/material";

import SectionHeading from "./section-heading";
import PriceTable from "./price-table";
import DeliveryPrice from "./delivery-price";

function createData(
  name,
  price,
  price5,
  price10,
  price15,
  price20,
  price25
) {
  return {
    name,
    price,
    price5,
    price10,
    price15,
    price20,
    price25
  };
}

/* const mortyr = [
  createData("М50", 4980, 5100, 5400, 5700, 5880, 6180),
  createData("М75", 5580, 5760, 6120, 6300, 6600, 6900),
  createData("М100", 6000, 6360, 6660, 6900, 7200, 7500),
  createData("М100 (Линамикс Р)", 6180, 0, 0, 0, 0, 0),
  createData("М150", 6480, 6660, 6900, 7080, 7500, 7800),
  createData("М200", 7200, 7500, 7680, 7980, 8280, 8460),
  createData("М300", 8400, 8760, 9120, 9360, 9660, 9960)
]; */

const mortyr = [
  createData("М50", 5160),
  createData("М75", 5780),
  createData("М100", 6480),
  createData("М100 (Линамикс Р)", 6600),
  createData("М150", 6900),
  createData("М200", 7680),
  createData("М300", 9000)
];

/* const concrete = [
  createData("B7.5 (М100)", 5580, 5760, 6000, 6180, 6480, 6660),
  createData("B12.5 (М150)", 5880, 6180, 6360, 6480, 6660, 6960),
  createData("B15 (М200)", 6000, 6300, 6480, 6660, 6900, 7200),
  createData("B20 (М250)", 6360, 6660, 6900, 7080, 7380, 7560),
  createData("B22.5 (М300)", 6660, 6960, 7200, 7380, 7680, 7860),
  createData("B25 (М350)", 6960, 7260, 7500, 7680, 8100, 8280),
  createData("B30 (М400)", 7200, 7500, 7680, 8100, 8400, 8700)
]; */

const concrete = [
  createData("B7.5 (М100)", 6000),
  createData("B12.5 (М150)", 6180),
  createData("B15 (М200)", 6360),
  createData("B20 (М250)", 6780),
  createData("B22.5 (М300)", 7200),
  createData("B25 (М350)", 7560),
  createData("B30 (М400)", 7860)
];

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
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
            centered>
            <Tab
              label="Бетон"
              {...a11yProps(0)}
              sx={{fontSize: "1.2rem"}}
            />
            <Tab
              label="Раствор"
              {...a11yProps(1)}
              sx={{fontSize: "1.2rem"}}
            />
            <Tab
              label="Доставка"
              {...a11yProps(2)}
              sx={{fontSize: "1.2rem"}}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Typography sx={{textAlign: "center", my: 4}}>
            За 1 м<sup>3</sup> бетона в рублях с учетом НДС
          </Typography>
          <PriceTable data={concrete} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography sx={{textAlign: "center", my: 4}}>
            За 1 м<sup>3</sup> раствора в рублях с учетом
            НДС
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
              bgcolor: "#D3B07A"
            }}
            onClick={() => window.open("../prices.pdf")}>
            Скачать прайс
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
export default ProductsPrice;
