import React from 'react';
import {signup, clearErrors, login} from '../../actions/session_actions';
import SessionForm from './session_form';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const mapStateToProps = ({errors}) => {
  return ({
    formType: 'signup',
    errors: errors.session,
    navLink: <Link to="/login" className="navLink" >Log In</Link>
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    processForm: (user) => dispatch(signup(user)),
    guestLogin: () => dispatch(login({email: "guest@gmail.com", password: "starwars"})),
    clearErrors: () => dispatch(clearErrors())
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
