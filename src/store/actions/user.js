import { fetchWatchList, removeWatchList } from "./movies";
import { selectToken } from "../selectors/user";

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

const tokenStillValid = (userWithToken) => ({
  type: "user/fetchFromValidToken",
  payload: userWithToken,
});

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    if (token === null) return;
    try {
      const response = await axios.get(`${apiUrl}/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(tokenStillValid(response.data));
      dispatch(fetchWatchList(response.data.id));
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      dispatch(logOut());
    }
  };
};
