import React from 'react';
import {login, clearErrors} from '../../actions/session_actions';
import SessionForm from './session_form.jsx';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


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
    guestLogin: () => dispatch(login({email: "guest@gmail.com", password: "starwars"})),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
