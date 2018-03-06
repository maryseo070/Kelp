import React from 'react';
import {login} from '../../actions/session_actions';
import SessionForm from './session_form.jsx';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return ({
    formType: 'login',
    errors: state.errors.session,
    navLink: <Link to="/signup">Sign Up</Link>
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    processForm: (user) => dispatch(login(user))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
