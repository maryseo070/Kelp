import React from 'react';
import { Route } from 'react-router';
import {SessionFormContainer} from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import ReefShowContainer from './reef_show/reef_show_container';
import ReviewFormContainer from './review/review_form_container';
import ReefIndexContainer from './reef_index/reef_index_container';
import HomePage from './greeting/home_page';
import UploadPhotoContainer from './review/upload_photo_container';


const App = () => {
  return(
    <div className="app-container">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/reefs/:reefId" component={ReefShowContainer} />
      <Route path="/reefs/:reefId/writeReview" component={ReviewFormContainer}/>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <Route exact path="/reefs" component={ReefIndexContainer}/>
      <ProtectedRoute path="/reefs/:reefId/uploadPhoto" component={UploadPhotoContainer} />
    </div>
  );
};

export default App;
