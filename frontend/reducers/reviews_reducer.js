import {RECEIVE_REVIEWS, RECEIVE_REVIEW} from '../actions/review_actions.js';
import {merge} from 'lodash';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REVIEWS:
      return merge({}, state, action.reviews);
    // case RECEIVE_REVIEW:
    //   return merge({}, state, action.review);
    default:
      return state;
  }
}

export default reviewsReducer;
