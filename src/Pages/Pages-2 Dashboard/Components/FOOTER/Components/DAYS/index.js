import { Box } from "@material-ui/core";
import React from "react";
import useStyles from "./Hooks/Styles";

function CurrentDays({ pays }) {
  const classes = useStyles();
  return (
    <Box className={classes.Current}>
      {pays?.list?.map((i,index) => {
        return (
          <Box className={classes.BoxWeaather}>
            <Box className={classes.AbsDay}>
                +3h
            </Box>
            {
              <Box key={i.weather[0].id}>
                  <img
                    style={{ margin: 0 }}
                    src={`https://${process.env.REACT_APP_ICON}/${i?.weather[0].icon}.png`}
                  />
                <Box className={classes.description}>
                  {i?.weather[0].description}
                </Box>
              </Box>
            }
          </Box>
        );
      })}
    </Box>
  );
}

export default CurrentDays;
