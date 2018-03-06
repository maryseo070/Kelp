import React from 'react';
import GreetingContainer from './greeting/greeting_container.jsx';
import { Route } from 'react-router';
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util.jsx';

const App = () => {
  return(
    <div>

      <div className="signup-login-buttons">
      </div>

      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <GreetingContainer className="greeting-container"/>
    </div>
  );
};

export default App;
