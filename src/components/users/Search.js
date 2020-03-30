import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Search = ({ showClear, clearUsers, setAlert }) => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please add user", "danger");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          name='text'
          type='text'
          placeholder='search users...'
          value={text}
          onChange={onChange}
        />
        <input
          value='Search'
          className='btn btn-dark btn-block'
          type='submit'
        />
      </form>

      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired
};

export default Search;
