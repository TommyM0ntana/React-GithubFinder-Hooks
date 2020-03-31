import React from "react";
import UserItem from "./UserItem";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/githubContext";
import { useContext } from "react";

//contains all the pops of all users
const Users = ({ users }) => {
  const githubContext = useContext(GithubContext);

  //const { users } = githubContext is the same if we don't asign users as prop in Users

  return (
    <div className='container' style={userStyle}>
      {githubContext.users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
