import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: ""
  };
  //
  onSubmit = e => e.preventDefault();

  //SET THE STA FROM THE INPUT TO THE VALUE
  onChange = e => this.setState({ text: e.target.value });

  //whit multiple items we can do {[e.target.name]}
  //
  render() {
    return (
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
    );
  }
}

export default Search;
