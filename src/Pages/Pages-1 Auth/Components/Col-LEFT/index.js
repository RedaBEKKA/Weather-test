import { Box, Button } from "@material-ui/core";
import React from "react";
import useStyles from "./Hooks/Styles";
import Bac from "../../../../Assets/7e3.jpg";
import Hours from "./Components/Hours";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import Close from "@mui/icons-material/Close"
function DayInfo({openForm,ShowForm,closeForm}) {
  const classes = useStyles();
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <Box className={classes.DayInfo}>
      <img src={Bac} style={{ height: "100vh", width: "100vw" }} />
      <Box className={classes.AbsBtn}>
       {!ShowForm && <DashboardCustomizeIcon className={classes.Icon} fontSize="large" onClick={openForm} />}
       {ShowForm && <Close className={classes.Icon} fontSize="large" onClick={closeForm} />}
      </Box>
      <Box className={classes.Abs}>
        <Box className={classes.Heur}>{dateBuilder(new Date())}</Box>
        <Box className={classes.Heur}>
          <Hours />
        </Box>
      </Box>
    </Box>
  );
}

export default DayInfo;
