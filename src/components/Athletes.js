import React, { Component } from 'react';

export default class Athletes extends Component {

  render(){
    const {firstName, lastName, email} = this.props;
    return (
      <section>
        <h1>{`${firstName} ${lastName}`}</h1>
        <h2>{email}</h2>
      </section>
    )
  }
}
