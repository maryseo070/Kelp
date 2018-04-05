import React from 'react';
import {logout, fetchReefs} from '../../actions/session_actions';
import Greeting from './greeting';
import {connect} from 'react-redux';

const mapStateToProps = (state) =>{
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) =>{
  return {
    logout: () => dispatch(logout()),
    fetchReefs: () => dispatch(fetchReefs())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
