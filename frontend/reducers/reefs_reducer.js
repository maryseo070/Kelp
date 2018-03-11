import {RECEIVE_REEFS, RECEIVE_REEF, RECEIVE_REVIEW} from '../actions/reef_actions.js';
import {merge} from 'lodash';

const reefsReducer = (state = {}, action) => {

  Object.freeze(state);
  switch(action.type){
    case RECEIVE_REEFS:
      return merge({}, state, action.reefs);
    case RECEIVE_REEF:
      return {[action.payload.reef.id]: action.payload.reef};
    default:
      return state;
  }
};

export default reefsReducer;
