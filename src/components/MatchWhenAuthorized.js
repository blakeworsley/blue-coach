import React from 'react';
import { Match, Redirect } from 'react-router';
import authenticate from './Authentication';

const MatchWhenAuthorized = ({ component: Component, ...rest }) => (
  <Match {...rest} render={props => (
    authenticate.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default MatchWhenAuthorized;
