import React from "react";
import { useSelector } from "react-redux";
import { Box } from "theme-ui";
import useStyles from "./Hooks/Styles";
import MapContainer from "./Components/MapContainer";
import SliderBox from "./Components/FOOTER";

const Dashboard = () => {
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);
  const { data } = auth;
  const weather = useSelector((state) => state.weather);
  const { lat, long,pays } = weather;
  
  // console.log('pays', pays)
  return (
    <Box className={classes.Dashboard}>
      <Box className={classes.Abs}>
        <MapContainer lat={lat} long={long} />
      </Box>
      <Box className={classes.RightABs}>
        <SliderBox pays={pays} />
      </Box>
    </Box>
  );
};

export default Dashboard;
