import {merge} from 'lodash';
import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions.js';

const defaultErrors = [];
const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return action.errors.responseJSON;
    default:
      return defaultErrors;
  }
};

export default sessionErrorsReducer;
