import { Box } from "@material-ui/core";
import React from "react";
import useStyles from "./hooks/Styles";

// components
import Current from "./Components/CURRENT";
import CurrentDays from "./Components/DAYS";
import CurrentDetails from "./Components/CURRENT-Details";

function Footer({ weather }) {
  const classes = useStyles();

  return (
    <Box className={classes.Footer}>
      {/* current weather */}
      <Current weather={weather} />
      <CurrentDetails weather={weather} />
      <CurrentDays weather={weather} />
    </Box>
  );
}

export default Footer;
