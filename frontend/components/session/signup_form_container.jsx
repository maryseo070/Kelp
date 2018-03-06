import React from 'react';
import {signup} from '../../actions/session_actions';
import SessionForm from './session_form';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return ({
    formType: 'signup',
    errors: state.errors.session,
    navLink: <Link to="/login">Log In</Link>
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    processForm: (user) => dispatch(signup(user))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
