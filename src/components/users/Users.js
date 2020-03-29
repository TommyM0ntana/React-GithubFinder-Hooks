import React from "react";
import UserItem from "./UserItem";
import PropTypes from "prop-types";
import Repos from "../repos/Repos";

//contains all the pops of all users
const Users = ({ users }) => {
  return (
    <div className='container' style={userStyle}>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
