import { combineReducers } from "redux";
import user from "./reducers/user";
import movies from "./reducers/movies";
import imdb from "./reducers/imdb";
import filters from "./reducers/filters";

export default combineReducers({
  user,
  filters,
  movies,
  imdb,
});
