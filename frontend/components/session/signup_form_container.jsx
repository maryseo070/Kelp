import React from 'react';
import {signup} from '../../actions/session_actions';
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
    guestLogin: () => dispatch(login({email: "guest@gmail.com", password: "starwars"}))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
