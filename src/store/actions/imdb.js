import axios from "axios";

const fetchSuccess = (randomMovie) => {
  return {
    type: "imdb/fetchSuccess",
    payload: randomMovie,
  };
};

const getRandomMovie = (movieArray) => {
  return (dispatch, getState) => {
    dispatch(
      fetchSuccess(movieArray[Math.floor(Math.random() * movieArray.length)])
    );
  };
};

const failSafe = [
  {
    title: "No Movie Found",
    overview: "Bad luck try youre luck again!",
    id: Math.random() * 989,
  },
];

export const fetchMoviesList = (genre, minRat, page, type) => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/${type}\?api_key\=45fa3d394cb065c5593ec76c8923671f\&language\=en-US\&sort_by\=popularity.desc\&page\=${page}\&vote_average.gte\=${minRat}\&with_genres\=${genre}\&with_watch_monetization_types\=flatrate`
    );
    if (response.data.results.length > 0) {
      dispatch(getRandomMovie(response.data.results));
    } else {
      dispatch(getRandomMovie(failSafe));
    }
  };
};
