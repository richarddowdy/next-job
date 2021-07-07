import axios from "axios";
import { BASE_API_URL } from "../../API";
// Action Types
export const ADD_USER = "ADD_USER";
export const LOGOUT_USER = "LOGOUT_USER";

// Action Creators

export const loginUser = (data) => async (dispatch) => {
  try {
    const { username, password } = data;
    const response = await axios.post(`${BASE_API_URL}/auth/login`, { username, password });
    return dispatch(addUser(response.data));
  } catch (e) {
    console.error(e);
  }
};

export const addUser = (user) => ({
  type: ADD_USER,
  user,
});

export const logoutCurrentUser = () => (dispatch) => {
  try {
    return dispatch(logoutUser());
  } catch (e) {
    console.log(e);
  }
};

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
