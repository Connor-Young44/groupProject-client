import axios from "axios";
const apiUrl = "http://localhost:4000";

const fetchSuccess = (movesList) => {
  return {
    type: "movies/fetchSuccess",
    payload: movesList,
  };
};
export const addMovieToList = (userId, title) => async (dispatch, getState) => {
  const state = getState();
  if (!state.movies.some((item) => item.title === title)) {
    await axios.post(`${apiUrl}/movies/newMovie`, {
      userId,
      title,
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
    console.log(userId);
    const response = await axios.get(`${apiUrl}/movies/${userId}`);
    console.log(response.data);
    dispatch(fetchSuccess(response.data));
  };
};
