import React from "react";
import { useTheme } from "@mui/material";
import { Container, Box, Button, Link, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { StaticImage } from "gatsby-plugin-image";

const CallToAction = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: theme.palette.primary.main, pt: 13, pb: 13 }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <StaticImage
          style={{ borderRadius: "50%" }}
          alt="Фотография менеджера по продажам"
          src="../images/aromanyuk.jpg"
          formats={["auto", "webp", "avif"]}
        />
        <Box my={4} color="#ebcfa6">
          <Typography sx={{ fontSize: "1.2rem" }}>
            Ваш менеджер по продажам,
          </Typography>
          <Typography sx={{ fontSize: "1.2rem" }}>Александр Романюк</Typography>
        </Box>
        <Button
          startIcon={<PhoneIcon />}
          component={Link}
          href="tel: 8-3953-27-09-27"
          variant="contained"
          size="large"
          sx={{
            width: "300px",
            p: 1.2,
            textTransform: "none",
            color: "#200F07",
            bgcolor: "#D3B07A",
            "&:hover": {
              backgroundColor: "#a88653"
            },
            fontSize: "1.2rem"
          }}
        >
          +7 (3953) 27-09-27
        </Button>
      </Container>
    </Box>
  );
};

export default CallToAction;
