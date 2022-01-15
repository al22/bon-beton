import React from "react";

import { Box } from "@mui/material";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const GoogleMap = () => {
  return (
    <Box sx={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyAAIfqjowe0AkexONH80pVPcug6obEe7OU"
        }}
        center={{ lat: 56.135, lng: 101.59253162851473 }}
        zoom={13}
        options={{
          //scrollwheel: false,
          fullscreenControl: false,
          zoomControl: false
        }}
      >
        <LocationOnIcon
          sx={{ fontSize: "3rem" }}
          lat={56.12739568286675}
          lng={101.59253162851473}
        />
      </GoogleMapReact>
    </Box>
  );
};
export default GoogleMap;
