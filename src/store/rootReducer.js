import { combineReducers } from "redux";
import user from "./reducers/user";
import movies from "./reducers/movies";
import imdb from "./reducers/imdb";

export default combineReducers({
  user,
  movies,
  imdb,
});
