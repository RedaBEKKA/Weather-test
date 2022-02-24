import { Box } from "@material-ui/core";
import React from "react";
import useStyles from "./hooks/Styles";

// components
import Current from "./Components/CURRENT";
import CurrentDays from "./Components/DAYS";
import CurrentDetails from "./Components/CURRENT-Details";

function SliderBox({ pays }) {
  const classes = useStyles();

  return (
    <Box className={classes.Footer}>
      {/* Info for city weather */}
      <Current pays={pays} />
      <CurrentDetails pays={pays} />
      <CurrentDays pays={pays} />
    </Box>
  );
}

export default SliderBox;
