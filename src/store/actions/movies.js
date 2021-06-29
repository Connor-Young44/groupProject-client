import axios from "axios";
const apiUrl = "http://localhost:4000";

const fetchSuccess = (movesList) => {
  return {
    type: "movies/fetchSuccess",
    payload: movesList,
  };
};

export const fetchWatchList = (userId) => {
  return async (dispatch, getState) => {
    console.log(userId);
    const response = await axios.get(`${apiUrl}/movies/${userId}`);
    console.log(response.data);
    dispatch(fetchSuccess(response.data));
  };
};
