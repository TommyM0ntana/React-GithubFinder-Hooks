import React, { Component } from "react";
import UserItem from "./UserItem";

//contains all the pops of all users
export class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "TommyM0ntana",
        avatar_url:
          "https://avatars0.githubusercontent.com/u/45366757?s=400&amp;u=fea0a921f4778ce305434f0750d0311bfefbf4f9&amp;v=4",
        html_url: "https://github.com/TommyM0ntana"
      },
      {
        id: "2",
        login: "tomzacchia",
        avatar_url:
          "https://avatars1.githubusercontent.com/u/26035225?s=400&amp;u=c0b829337e61e0893d2c9cffdbc74a1228072590&amp;v=4",
        html_url: "https://github.com/tomzacchia"
      },
      {
        id: "3",
        login: "TommyM0ntana",
        avatar_url:
          "https://avatars0.githubusercontent.com/u/45366757?s=400&amp;u=fea0a921f4778ce305434f0750d0311bfefbf4f9&amp;v=4",
        html_url: "https://github.com/TommyM0ntana"
      },
      {
        id: "4",
        login: "tomzacchia",
        avatar_url:
          "https://avatars1.githubusercontent.com/u/26035225?s=400&amp;u=c0b829337e61e0893d2c9cffdbc74a1228072590&amp;v=4",
        html_url: "https://github.com/tomzacchia"
      }
    ]
  };

  render() {
    return (
      <div className='container' style={userStyle}>
        {this.state.users.map(user => (
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
