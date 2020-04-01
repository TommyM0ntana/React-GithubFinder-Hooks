import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../layout/App.css";

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-dark'>
      <h2 style={navStyle}>
        <Link to='/' className='titleicon'>
          <i
            style={{
              marginRight: "10px",
              color: "black",
              fontSize: "20px",
              background: "trasparent"
            }}
            className={icon}
          />{" "}
          {""}
          {title}
        </Link>
      </h2>
      <ul>
        <li>
          <Link to='/'> Home</Link>
        </li>
        <li>
          <Link to='/about'>About </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: " Github Finder",
  icon: "fab fa-github "
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

const navStyle = {
  color: "black",
  display: "flex",
  marginLeft: "5px",
  alignItems: "center",
  justifyContent: "center",
  background: "trasparent"
};

export default Navbar;
