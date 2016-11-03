import React, { Component } from 'react';
import { Link } from 'react-router';
import MatchWithSubRoutes from './MatchWithSubRoutes';
import Athlete from './Athlete';


export default class Athletes extends Component {

  render(){
    const {firstName, lastName, email} = this.props;
    const routes = [
      { pattern: `/`,
        component: Athlete }
      { pattern: `/dashboard/:name`,
        component: Athlete }
    ];
    // const destination = `/dashboard/${firstName.toLowerCase()}-${lastName.toLowerCase()}`;
    return (
      <section>
        <Link to={`/dashboard/:name`}><h1>{`${firstName} ${lastName}`}</h1></Link>
        <h2>{email}</h2>

        {routes.map((route, i) => (
          <MatchWithSubRoutes key={i} user={'Adam'} {...route}/>
        ))}
      </section>
    )
  }
}
