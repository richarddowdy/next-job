import { ADD_USER, LOGOUT_USER } from "../actions/userActions";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...action.user };
    case LOGOUT_USER:
      return {};
    default:
      return { ...state };
  }
};

export default userReducer;
