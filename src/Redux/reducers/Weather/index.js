import * as types from "../../Types/weather";

const initialState = {
  loading: false,
  error: null,
  weather: [],
  isAuth: false,
  lat: null,
  long: null,
  pays: [],
};

export default function weather(state = initialState, action) {
  const { type, payload } = action;

  switch (action.type) {
    case types.GET_WEATHER:
      return {
        ...state,
        error: null,
        loading: false,
        weather: payload,
        isAuth: true,
      };
    case types.GET_WEATHER_POS:
      return {
        ...state,
        error: null,
        loading: false,
        pays: payload,
        isAuth: true,
      };
    case types.GET_WEATHER_POS_FAILED:
      return {
        ...state,
        error: payload,
        loading: false,
        isAuth: true,
      };
    case types.GET_LAT:
      return {
        ...state,
        lat: payload,
      };
    case types.GET_LONG:
      return {
        ...state,
        long: payload,
      };
    case types.GET_WEATHER_FAILED:
      console.log("GET_WEATHER_FAILED", payload);
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case types.WEATHER_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
