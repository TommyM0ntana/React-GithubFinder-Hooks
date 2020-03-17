import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";

class App extends Component {
  //Store all the data
  componentDidMount() {
    axios.get("https://api.github.com/users");
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <Users />
      </div>
    );
  }
}
export default App;
