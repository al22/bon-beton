import React from "react";
import { Box, Typography } from "@mui/material";

const SectionHeading = ({ title, subtitle, light }) => {
  return (
    <Box
      sx={{
        textAlign: "center"
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        color={light ? "white" : "primary"}
        sx={{
          textAlign: "center",
          mb: 2
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ color: light ? "grey.500" : "primary" }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default SectionHeading;
