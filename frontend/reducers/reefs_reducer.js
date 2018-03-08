import { RECEIVE_REEFS, RECEIVE_REEF } from '../actions/reef_actions.js';

const reefsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_REEFS:
      return merge({}, state, action.benches);
    case RECEIVE_REEF:
      const newReef = { [action.reef.id]: action.reef };
      return merge({}, state, newReef);
    default:
      return state;
  }
};

export default reefsReducer;
