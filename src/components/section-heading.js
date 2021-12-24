import React from "react";
import { Box, Typography } from "@mui/material";

const SectionHeading = ({ title, subtitle }) => {
  return (
    <Box
      sx={{
        pt: 8,
        mb: { xs: 12, md: 8 },
        textAlign: "center"
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        color="primary"
        sx={{ textAlign: "center", mb: 2 }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ px: { sx: 0, sm: 8, md: 16, lg: 32 } }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default SectionHeading;