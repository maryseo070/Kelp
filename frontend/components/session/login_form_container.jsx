import React from 'react';
import {login, clearErrors} from '../../actions/session_actions';
import SessionForm from './session_form.jsx';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import LogInModal from './login_modal.jsx'

const mapStateToProps = ({errors}) => {
  return ({
    formType: 'login',
    errors: errors.session,
    navLink: <Link to="/signup" className="navLink" >Sign Up</Link>
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    guestLogin: () => dispatch(login({email: "guest@gmail.com", password: "starwars"}))
  });
};

export const SessionFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);
export const LogInModalContainer = connect(mapStateToProps, mapDispatchToProps)(LogInModal);
