import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import { SEARCH_USERS, CLEAR_USER, SET_ALERT, GET_REPOS } from "../types";

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: []
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //GET USER
  //SEARCH USERS
  //GET REPOST
  //CLEAR USERS

  return (
    <GithubContext.Provider
      value={{ users: state.users, user: state.user, repos: state.repos }}
    >
      {" "}
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
