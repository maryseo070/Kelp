import {combineReducers} from 'redux';
import reefsReducer from './reefs_reducer.js';

const entitiesReducer = combineReducers({
  reefs: reefsReducer
});

export default entitiesReducer;
