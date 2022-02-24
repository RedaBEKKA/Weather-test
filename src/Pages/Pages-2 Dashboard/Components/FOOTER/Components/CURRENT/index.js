import { Box } from "@material-ui/core";
import React from "react";
import useStyles from "./Hooks/Styles";

function Current({ pays }) {
  const classes = useStyles();
  return (
    <Box className={classes.Current}>
      <Box className={classes.TextZone}> {pays?.city?.country}</Box>
      <Box className={classes.Row}>
        <Box className={classes.TempBox}>
          <Box className={classes.itemTemp}> {pays?.city?.name} </Box>
        </Box>
        <Box className={classes.itemTempImage}>
          <img
            className={classes.img}
            src={`https://${process.env.REACT_APP_ICON}/${pays?.list[0]?.weather[0]?.icon}.png`}
          />
          <Box className={classes.Text}>
            {pays?.list[0]?.weather[0]?.description}{" "}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Current;
