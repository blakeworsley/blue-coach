import React from 'react';
import { Match } from 'react-router';


const MatchWithSubRoutes = (route) => (
  <Match {...route} render={(props) => (
    <route.component {...props} routes={route.routes}/>
  )}/>
)

export default MatchWithSubRoutes;
