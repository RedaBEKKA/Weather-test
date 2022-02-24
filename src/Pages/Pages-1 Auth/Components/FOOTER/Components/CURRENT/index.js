import { Box } from "@material-ui/core";
import React from "react";
import useStyles from "./Hooks/Styles";

function Current({ weather }) {
  const classes = useStyles();
  return (
    <Box className={classes.Current}>
      <Box className={classes.TextZone}>{weather.timezone}</Box>
      <Box className={classes.Row}>
        <Box className={classes.TempBox}>
          <Box className={classes.itemTemp}>{weather?.current?.temp}° C </Box>
        </Box>
        <Box className={classes.itemTempImage}>
          <img
            className={classes.img}
            src={`https://${process.env.REACT_APP_ICON}/${weather?.current?.weather[0]?.icon}.png`}
          />
          <Box className={classes.Text}>
            {weather?.current?.weather[0]?.description}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Current;
