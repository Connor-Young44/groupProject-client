import axios from "axios";

const fetchSuccess = (randomMovie) => {
  return {
    type: "imdb/fetchSuccess",
    payload: randomMovie,
  };
};

const getRandomMovie = (movieArray) => {
  return (dispatch, getState) => {
    dispatch(fetchSuccess(movieArray[Math.floor(Math.random() * 20)]));
  };
};

export const fetchMoviesList = (genre, minRat, page) => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie\?api_key\=45fa3d394cb065c5593ec76c8923671f\&language\=en-US\&sort_by\=popularity.desc\&include_adult\=false\&include_video\=false\&page\=${page}\&vote_average.gte\=${minRat}\&with_genres\=${genre}\&with_watch_monetization_types\=flatrate`
    );
    dispatch(getRandomMovie(response.data.results));
  };
};
