import { RECEIVE_REEF, RECEIVE_REVIEW, RECEIVE_POST } from '../actions/reef_actions.js';
import {merge} from 'lodash';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REEF:
      return action.payload.reviews;
    case RECEIVE_REVIEW:
      return action.review;
    case RECEIVE_POST:
      return action.post;
    default:
      return state;
  }
};

export default reviewsReducer;
