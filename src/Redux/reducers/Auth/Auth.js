import * as types from "../../Types/Auth";

const initialState = {
  isAuth: false,
  loading: false,
  error: null,
  data:[],
};

export default function auth(state = initialState, action) {
  const { type, payload }=action;
  
  switch (action.type) {
    case types.LOGOUT:
      return {
        ...state,
        isAuth: false,
        loading: false,
        error: null,
      };
    case types.LOGIN:
      // console.log("login payload",payload.customer);
      return {
        ...state,
        isAuth: true,
        error: null,
        loading: false,
        data:payload
      };
    case types.LOGIN_FAILED:
      console.log("LOGIN_FAILED", payload);
      return {
        ...state,
        error:payload,
        loading: false,
      };
    case types.AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };


    default:
      return state;
  }
}