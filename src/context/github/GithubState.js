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

  //SEARCH USERS

  const searchUsers = async text => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };

  //GET USER
  //GET REPOST
  //CLEAR USERS

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        searchUsers
      }}
    >
      {" "}
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
