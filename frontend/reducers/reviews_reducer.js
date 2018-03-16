import { RECEIVE_REEF, RECEIVE_REVIEW} from '../actions/reef_actions.js';
import {merge} from 'lodash';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REEF:
      return action.payload.reviews;
    case RECEIVE_REVIEW:
      return merge({}, state, {[action.review.id]: action.review});
    default:
      return state;
  }
};

export default reviewsReducer;
