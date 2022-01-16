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
        <div
          data-sal="fade"
          data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
          data-sal-delay="300" // adds delay to the animation (from 5 to 1000 ms)
          data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
        >
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
        </div>
      </Container>
    </Box>
  );
};

export default CallToAction;
