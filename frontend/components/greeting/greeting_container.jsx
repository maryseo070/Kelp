import React from 'react';
import {logout} from '../../actions/session_actions';
import Greeting from './greeting';
import {connect} from 'react-redux';

const mapStateToProps = (state) =>{
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) =>{
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
