import axios from "axios";
import * as type from "../../Types/weather";

export const dispatchWeather = (data) => {
  return {
    type: type.GET_WEATHER,
    payload: data,
  };
};
export const dispatchWeatherError = (data) => {
  return {
    type: type.GET_WEATHER_FAILED,
    payload: data,
  };
};
export const FetchWeather = async (dispatch, long, lat) => {
  let url = `https://${process.env.REACT_APP_URL}/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${process.env.REACT_APP_CLE}`;
  dispatch({ type: type.WEATHER_LOADING });

  axios
    .get(url)
    .then((reponse) => {
      dispatch({ type: type.GET_LAT, payload: lat });
      dispatch({ type: type.GET_LONG, payload: long });
      dispatch({ type: type.GET_WEATHER, payload: reponse.data });
    })
    .catch((err) => {
      dispatch({ type: type.GET_WEATHER_FAILED, payload: err });
    });
};
