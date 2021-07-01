import { fetchWatchList, removeWatchList } from "./movies";

import axios from "axios";
const apiUrl = "http://localhost:4000";

const loginSuccess = (userWithToken) => {
  return {
    type: "user/loginSuccess",
    payload: userWithToken,
  };
};

const removeUser = () => ({
  type: "user/remove",
});

export const logOut = () => (dispatch, getState) => {
  dispatch(removeUser());
  dispatch(removeWatchList());
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    console.log(email, password);
    const response = await axios.post(`${apiUrl}/users/login`, {
      email: email,
      password: password,
    });

    dispatch(loginSuccess(response.data));
    dispatch(fetchWatchList(response.data.id));
  };
};

export const signup = (email, password) => {
  return async (dispatch, getState) => {
    const response = await axios.post(`${apiUrl}/users/signup`, {
      email,
      password,
    });
    console.log(response.data);
    dispatch(loginSuccess(response.data));
    dispatch(fetchWatchList(response.data.id));
  };
};
