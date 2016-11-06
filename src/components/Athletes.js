import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../actions/athlete';

class Athletes extends Component {
  render(){
    const {firstName, lastName, email, teamName, selectedAthlete } = this.props;
    // const destination = `/dashboard/${firstName.toLowerCase()}-${lastName.toLowerCase()}`
    return (
      <section>
        {/* <Link to={destination}> */}
          <h1 onClick={() => selectedAthlete(firstName, lastName, teamName)}>
            {`${firstName} ${lastName}`}
          </h1>
        {/* </Link> */}
      </section>
    )
  }
}

const mapStateToProps = (state) => state.athlete;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Athletes);
