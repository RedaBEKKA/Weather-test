import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import useStyles from "./Styles";
import { Box } from "@material-ui/core";

function MapContainer({ lat, long }) {
  let initialCenter = {
    lat: lat || 36.80026552776095,
    lng: long || 3.047021931640641,
  };
  let zoom = 14;
const classes = useStyles();
  return (
    <Box className={classes.MapContainer}>
      <Map
        google={window.google}
        zoom={14}
        style={{ height: "100vh", width: "70vw" }}
        initialCenter={{
          lat: lat || 36.80026552776095,
          lng: long || 3.047021931640641,
        }}
      />
    </Box>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDrRGsyCv8mQTl6SH8buqevAPUv7bJHilA",
})(MapContainer);
