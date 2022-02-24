import { Box } from "@material-ui/core";
import React from "react";
import useStyles from "./Hooks/Styles";
import tabJoursEnOrdre from "../../hooks/caluclJour";

function CurrentDays({ weather }) {
  const classes = useStyles();
  return (
    <Box className={classes.Current}>
      <Box className={classes.JoursLeft}>
        {tabJoursEnOrdre.map((i) => {
          return <Box className={classes.TempBox2}>{i}</Box>;
        })}
      </Box>
      <Box className={classes.JoursRight}>
        {weather?.daily?.map((i, index) => {
          return (
            <Box className={classes.TempBox} key={index}>
              {/* <Box className={classes.Status}>Day {index + 1} :</Box> */}
              <Box className={classes.itemTempText}>
                {i.weather[0].description}
              </Box>
              <Box className={classes.icon}>
                {weather && (
                  <img
                    className={classes.img}
                    src={`https://${process.env.REACT_APP_ICON}/${i.weather[0]?.icon}.png`}
                  />
                )}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default CurrentDays;
