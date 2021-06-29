import { combineReducers } from "redux";
import user from "./reducers/user";
import movies from "./reducers/movies";

export default combineReducers({
  user,
  movies,
});
