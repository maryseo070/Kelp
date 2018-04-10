import {RECEIVE_REEFS, RECEIVE_REEF, RECEIVE_REVIEW, RECEIVE_REEF_RESULTS, RECEIVE_THREE_REEFS} from '../actions/reef_actions.js';
import {merge} from 'lodash';

const reefsReducer = (state = {}, action) => {

  Object.freeze(state);
  switch(action.type){
    case RECEIVE_REEFS:
      return action.reefs.reefs;
    case RECEIVE_REEF:
      return {[action.payload.reef.id]: action.payload.reef};
    case RECEIVE_THREE_REEFS:
      return action.payload.threeReefs;
    default:
      return state;
  }
};

export default reefsReducer;
