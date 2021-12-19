import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Container, Grid, Paper, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";

const Quality = () => {
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("md"));

  return (
    <Container>
      <Container
        maxWidth="md"
        sx={{ textAlign: "center", mt: 8, mb: isSmallScreen ? 16 : 8 }}
      >
        <Typography variant="h2" color="primary" sx={{ mt: 8, mb: 1 }}>
          Качество под контролем
        </Typography>
        <Typography variant="subtitle1">
          В 2020 году Строительная лаборатория ООО "Бон-Бетон" прошла оценку о
          состоянии измерений в лаборатории, что значительно повлияло на
          качество выпускаемой нами продукции.
        </Typography>
      </Container>
      <Grid
        container
        sx={{ mb: 8 }}
        direction={isSmallScreen ? "column-reverse" : "row"}
      >
        <Grid item md={6} xs={12} sx={{ px: isSmallScreen ? 8 : 3 }}>
          <Paper sx={{ p: 2 }}>
            <StaticImage src="../images/lab1.jpg" alt="" />
          </Paper>
        </Grid>
        <Grid item md={6} xs={12} sx={{ my: "auto", px: 8 }}>
          <Typography variant="h3" color="primary" sx={{ mb: 2 }}>
            Лаборатория
          </Typography>
          <Typography sx={{ mb: 4 }}>
            Новое современное оборудование делает измеренения точными.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Quality;
