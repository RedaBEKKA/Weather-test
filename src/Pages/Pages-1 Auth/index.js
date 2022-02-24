import React, { useEffect, useState } from "react";

// styles
import useStyles from "./Hooks/Styles";

// externel
import { Box } from "@material-ui/core";
import FormCol from "./Components/Col-RIGHT";
import DayInfo from "./Components/Col-LEFT";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Components/FOOTER";
import { FetchWeather } from "../../Redux/Actions/Weather";

const Auth = () => {
  const dispatch = useDispatch();
  const [Long, setLong] = useState(null);
  const [Lat, setLat] = useState(null);
  const [ShowForm, setShowForm] = useState(false);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let long = position.coords.longitude;
        let lat = position.coords.latitude;
        setLong(long);
        setLat(lat);
      },
      () => {
        alert(
          `Vous avez refusé la géolocalisation, l'application ne peur pas fonctionner, veuillez l'activer.!`
        );
      }
    );
  }

  const openForm = () => {
    setShowForm(true);
  };
  const closeForm = () => {
    setShowForm(false);
  };
  useEffect(() => {
    if (Long && Lat) {
      FetchWeather(dispatch, Long, Lat);
    }
  }, [Long, Lat]);

  const state = useSelector((state) => state.weather);
  const { weather, loading } = state;
  const classes = useStyles();

  return (
    <Box className={classes.Auth}>
      {loading ? (
        <Box className={classes.Auth}>Chargement ...</Box>
      ) : (
        <Box className={classes.Body}>
          <DayInfo
            openForm={openForm}
            ShowForm={ShowForm}
            closeForm={closeForm}
          />
          {ShowForm && <FormCol />}

          {/* lefT information weather */}
          <Footer weather={weather} />
        </Box>
      )}
    </Box>
  );
};

export default Auth;
