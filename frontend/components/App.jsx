import React from 'react';
import GreetingContainer from './greeting/greeting_container.jsx';
import { Route } from 'react-router';
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import ReefShowContainer from './reef_show/reef_show_container';
import ReviewFormContainer from './review/review_form_container';
import SearchContainer from './search/search_container.jsx';
import ReefIndexContainer from './reef_index/reef_index_container';

const App = () => {
  return(
    <div className="app-container">
      <Route exact path="/reefs/:reefId" component={ReefShowContainer} />
      <ProtectedRoute path="/reefs/:reefId/writeReview" component={ReviewFormContainer}/>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={GreetingContainer}/>
      <Route exact path="/reefs" component={ReefIndexContainer}/>
      <Route path="/map" component={SearchContainer} />
    </div>
  );
};

export default App;
