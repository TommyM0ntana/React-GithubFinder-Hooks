import { SEARCH_USERS, CLEAR_USER, SET_ALERT, GET_REPOS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload
      };
  }
};
