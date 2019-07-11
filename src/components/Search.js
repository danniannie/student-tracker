import React, { Component } from "react";

class Search extends Component {
  state = {
    search: ""
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="Search for student"
          value={this.state.search}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Search;
