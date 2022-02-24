import { combineReducers } from "redux";
import weather from "./Weather/index"
import auth from "./Auth/Auth"
const rootReducer = combineReducers({
  weather,
  auth

  
});

export default rootReducer;
