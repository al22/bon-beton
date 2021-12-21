import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Container, Grid, Box, Paper, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import SectionHeading from "./section-heading";

const Quality = () => {
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("md"));

  return (
    <Box>
      <Container>
        <SectionHeading
          title="Качество под контролем"
          subtitle='В 2020 году Строительная лаборатория ООО "Бон-Бетон" прошла оценку о состоянии измерений в лаборатории, что значительно повлияло на качество выпускаемой нами продукции.'
        />
        <Grid
          container
          sx={{ px: { xs: 1, sm: 16, md: 6, lg: 8 } }}
          direction={isSmallScreen ? "column-reverse" : "row"}
        >
          <Grid item md={6} xs={12} sx={{}}>
            <Paper elevation={8}>
              <StaticImage src="../images/lab1.jpg" alt="" />
            </Paper>
          </Grid>
          <Grid item md={6} xs={12} sx={{ my: "auto", pl: { md: 6 } }}>
            <Typography variant="h3" color="primary" sx={{ mb: 2 }}>
              Лаборатория
            </Typography>
            <Typography>
              Новое современное оборудование делает измеренения точными.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Quality;
