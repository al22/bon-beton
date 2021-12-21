import React from "react";
import { Box, Typography } from "@mui/material";

const SectionHeading = ({ title, subtitle }) => {
  return (
    <Box sx={{ maxWidth: "600px", pt: 8, mb: { xs: 16, md: 8 }, mx: "auto" }}>
      <Typography
        variant="h2"
        component="h2"
        color="primary"
        sx={{ textAlign: "center", mb: 2 }}
      >
        {title}
      </Typography>
      <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default SectionHeading;
