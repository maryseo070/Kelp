import { RECEIVE_REVIEW, RECEIVE_REVIEW_ERRORS, CLEAR_ERRORS } from '../actions/reef_actions.js';

const reviewErrorsReducer = (state = [], action) => {
  const defaultErrors = [];
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors.responseJSON;
    case CLEAR_ERRORS:
      return [];
    default:
      return defaultErrors;
  }
}


export default reviewErrorsReducer;
