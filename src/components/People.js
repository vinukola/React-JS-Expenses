import React, { Component } from 'react';
import { Button } from 'react';

// const PeopleData = () =>
//     <input type="text" placeholder="Enter Person name" />

class People extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Enter name of the person"
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default People;
