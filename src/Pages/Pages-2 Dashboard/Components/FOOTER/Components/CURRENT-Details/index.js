import { Box } from "@material-ui/core";
import React from "react";
import useStyles from "./Hooks/Styles";
import AirIcon from "@mui/icons-material/Air";
import CompressIcon from '@mui/icons-material/Compress';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import VisibilityIcon from '@mui/icons-material/Visibility';
function CurrentDetails({pays}) {
  const classes = useStyles();
  return (
    <Box className={classes.Current}>
      <Box className={classes.Row}>
        <Box className={classes.TempBox}>
          <Box className={classes.Status}>grnd Status</Box>
          <Box className={classes.itemTempText}>{pays?.list[0].main?.grnd_level} m</Box>
          <Box className={classes.icon}>
            <AirIcon />
          </Box>
        </Box>
        <Box className={classes.TempBox}>
          <Box className={classes.Status}>Air pressure</Box>
          <Box className={classes.itemTempText}>{pays?.list[0].main?.pressure} mb</Box>
          <Box className={classes.icon}>
            <CompressIcon />
          </Box>
        </Box>
      </Box>
      <Box className={classes.Row}>
        <Box className={classes.TempBox}>
          <Box className={classes.Status}>Humidity Status</Box>
          <Box className={classes.itemTempText}>{pays?.list[0].main?.humidity}  %</Box>
          <Box className={classes.icon}>
            <BloodtypeIcon />
          </Box>
        </Box>
        <Box className={classes.TempBox}>
          <Box className={classes.Status}>visibility Status</Box>
          <Box className={classes.itemTempText}>{pays?.list[0].main?.temp}° F</Box>
          <Box className={classes.icon}>
            <VisibilityIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CurrentDetails;
