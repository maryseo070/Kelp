import React from 'react';
import GreetingContainer from './greeting/greeting_container.jsx';
import { Route } from 'react-router';
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util.jsx';
import ReefShowContainer from './reef_show/reef_show_container';

const App = () => {
  return(
    <div className="app-container">
      <Route path="/reefs/:reefId" component={ReefShowContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={GreetingContainer}/>
    </div>
  );
};

export default App;

// <Route path='/reefs/:reefId' component={ReefShowContainer} />
