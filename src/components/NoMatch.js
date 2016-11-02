import React, { Component } from 'react';
import { Link } from 'react-router';


class NoMatch extends Component {
  render() {
    return (
      <section>
        <h2>Error</h2>
        <p>Whoops try going home or back</p>
        <Link to={"/"}><button>Home</button></Link>
      </section>
    );
  }
}

export default NoMatch;
