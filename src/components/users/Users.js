import React, { Component } from "react";
import UserItem from "./UserItem";

//contains all the pops of all users
export class Users extends Component {
  render() {
    return (
      <div className='container' style={userStyle}>
        {this.props.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
