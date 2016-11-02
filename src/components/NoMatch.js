import React, { Component } from 'react';

class NoMatch extends Component {
  render() {
    return (
      <section>
        <h2>Error</h2>
        <p>Whoops try going home or back</p>
        <button onClick={() => console.log('need to hook up this button')}>Home</button>
      </section>
    );
  }
}

export default NoMatch;
