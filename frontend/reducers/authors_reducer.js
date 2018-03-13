import { RECEIVE_REEF } from '../actions/reef_actions.js';
import {merge} from 'lodash';

const authorsReducer = (state= {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REEF:
      return merge({}, state, action.payload.authors);
    default:
      return state;
  }
};

export default authorsReducer;
