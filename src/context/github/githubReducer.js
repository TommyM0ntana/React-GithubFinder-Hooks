import {
  SEARCH_USERS,
  CLEAR_USERS,
  SET_ALERT,
  GET_REPOS,
  GET_USER
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: []
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload
      };
  }
};
