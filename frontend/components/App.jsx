import React from 'react';
import GreetingContainer from './greeting/greeting_container.jsx';
import { Route } from 'react-router';
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util.jsx';

const App = () => {
  return(
    <div className="app-container">
      <Route exact path="/" component={GreetingContainer}/>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
    </div>
  );
};

export default App;

// <GreetingContainer className="greeting-container"/>
