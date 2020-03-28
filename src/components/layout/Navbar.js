import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-dark'>
      <h2 style={navStyle}>
        <i className={icon} /> {""} {title}
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
  title: "Github Finder ",
  icon: "fab fa-github"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

const navStyle = {
  color: "#fff",
  display: "flex",
  marginLeft: "40px",
  alignItems: "center"
};

export default Navbar;
