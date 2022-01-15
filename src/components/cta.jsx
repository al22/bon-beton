import React from "react";
import { useTheme } from "@mui/material";
import SectionHeading from "./section-heading";
import { Container, Box, Button, Link } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

const CallToAction = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: theme.palette.primary.main, pb: 8 }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <SectionHeading
          light={true}
          title="Заказывайте бетон и раствор за один звонок"
          subtitle="Cообщите марку и место куда надо доставить, оплатите при получении."
        />

        <Button
          startIcon={<PhoneIcon />}
          component={Link}
          href="tel: 8-3953-27-09-27"
          variant="contained"
          size="large"
          sx={{
            width: "300px",
            textTransform: "none",
            color: "#200F07",
            bgcolor: "#D3B07A",
            "&:hover": {
              backgroundColor: "#fff"
            }
          }}
        >
          +7 (3953) 27-09-27
        </Button>
      </Container>
    </Box>
  );
};

export default CallToAction;
