import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {merge} from 'lodash';

const sessionReducer =  (state = { currentUser: null }, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.user};
    default:
      return state;
  }
};

export default sessionReducer;
