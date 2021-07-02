import axios from "axios";
const apiUrl = "https://random-entertain.herokuapp.com";

const fetchSuccess = (movesList) => {
  return {
    type: "movies/fetchSuccess",
    payload: movesList,
  };
};
export const addMovieToList =
  (userId, title, tmdbId, type) => async (dispatch, getState) => {
    const state = getState();
    if (!state.movies.some((item) => item.title === title)) {
      await axios.post(`${apiUrl}/movies/newMovie`, {
        userId,
        title,
        tmdbId,
        type,
      });
      dispatch(fetchWatchList(userId));
    }
  };

export const removeWatchList = () => ({
  type: "remove/watchList",
});
export const toggleWatched = (id) => async (dispatch, getState) => {
  const state = getState();
  await axios.patch(`${apiUrl}/movies/${id}`);
  dispatch(fetchWatchList(state.user.id));
};

export const fetchWatchList = (userId) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/movies/${userId}`);
    dispatch(fetchSuccess(response.data));
  };
};
//delete movie
export const deleteMovie = (id) => async (dispatch, getState) => {
  const state = getState();
  await axios.delete(`${apiUrl}/movies/deleteMovie/${id}`);
  dispatch(fetchWatchList(state.user.id));
};
