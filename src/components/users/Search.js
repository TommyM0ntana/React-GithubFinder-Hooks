import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");
  // const { setAlert } = alertContext;

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please add user", "danger");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  const onChange = e => setText(e.target.value);

  //destructuring to not put to users and clearUsers a.githubContext
  //const { users, clearUsers } = githubContext;
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

      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
