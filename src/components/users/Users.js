import React from "react";
import UserItem from "./UserItem";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/githubContext";
import { useContext } from "react";
import "../layout/App.css";

//contains all the pops of all users
const Users = ({ users }) => {
  const githubContext = useContext(GithubContext);

  //const { users } = githubContext is the same if we don't asign users as prop in Users

  return (
    <div className='userstyle'>
      {githubContext.users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

// const userStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(3, 1fr)",
//   gridGap: "1.5rem",
//   padding: "0px 20px"
// };

export default Users;
