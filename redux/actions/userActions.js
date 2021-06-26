import axios from "axios";

// Action Types
export const ADD_USER = "ADD_USER";
export const LOGOUT_USER = "LOGOUT_USER";

let BASE_API_URL;
process.env.NODE_ENV == "productions"
  ? (BASE_API_URL = `widnow.location.origin/api`)
  : (BASE_API_URL = "http://localhost:3000/api");
export { BASE_API_URL };

// Action Creators

export const loginUser = (data) => async (dispatch) => {
  try {
    const { username, password } = data;
    const response = await axios.post(`${BASE_API_URL}/login`, { username, password });
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
