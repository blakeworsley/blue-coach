import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Athletes extends Component {

  render(){
    const {firstName, lastName, email} = this.props;
    const destination = `/dashboard/${firstName.toLowerCase()}-${lastName.toLowerCase()}`
    return (
      <section>
        <Link to={destination}><h1>{`${firstName} ${lastName}`}</h1></Link>
        <h2>{email}</h2>
      </section>
    )
  }
}
