import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions/athlete';

class Athletes extends Component {
  render(){
    const {firstName, lastName, email, teamName, selectedAthlete } = this.props;
    return (
      <li className="athletes-name" 
        onClick={() => selectedAthlete(firstName, lastName, teamName, email)}>
        {`${firstName} ${lastName}`}
      </li>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(null, mapDispatchToProps)(Athletes);
