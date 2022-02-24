// import ACTIONS from './index'
import axios from "axios";
import * as type from "../../Types/weather";

export const dispatchLogin = () => {
  return {
    type: type.GET_WEATHER,
  };
};

export const dispatchLoginWeatherPos = async (dispatch, values,navigate) => {
  let url = `https://${process.env.REACT_APP_URL}/forecast?q=${values.Pays}&appid=${process.env.REACT_APP_CLE}`;

  dispatch({ type: type.WEATHER_LOADING });

  axios
    .get(url)
    .then((reponse) => {
      dispatch({ type: type.GET_WEATHER_POS, payload: reponse.data });
      navigate("/dashboard")
    })
    .catch((err) => {
      dispatch({ type: type.GET_WEATHER_POS_FAILED, payload: err });
      console.log("err", err);
    });
};
