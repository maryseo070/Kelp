import {combineReducers} from 'redux';
import reefsReducer from './reefs_reducer.js';
import reviewsReducer from './reviews_reducer';


const entitiesReducer = combineReducers({
  reefs: reefsReducer,
  reviews: reviewsReducer
});

export default entitiesReducer;
