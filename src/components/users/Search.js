import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    cleanUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please add user", "danger");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };

  //SET THE STA FROM THE INPUT TO THE VALUE
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { clearUsers, showClear } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            name='text'
            type='text'
            placeholder='search users'
            value={this.state.text}
            onChange={this.onChange}
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
  }
}

export default Search;
