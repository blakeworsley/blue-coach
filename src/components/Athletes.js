import React, { Component } from 'react';
import { Link } from 'react-router';
import Athlete from './Athlete';


export default class Athletes extends Component {

  render(){
    const {firstName, lastName, email} = this.props;
    const routes = [
      { pattern: `/`,
        component: Athlete }
    ];
    return (
      <section>
        <Link to={`/dashboard/:name`}><h1>{`${firstName} ${lastName}`}</h1></Link>
        <h2>{email}</h2>
      </section>
    )
  }
}
