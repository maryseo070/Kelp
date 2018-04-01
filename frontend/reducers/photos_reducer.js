import {RECEIVE_REEF} from '../actions/reef_actions.js';
import {merge} from 'lodash';

const photosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_REEF:
      return action.payload.photos;
    default:
      return state;
  }
};

export default photosReducer;
