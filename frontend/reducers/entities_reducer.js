import {combineReducers} from 'redux';
import reefsReducer from './reefs_reducer.js';
import reviewsReducer from './reviews_reducer';
import authorsReducer from './authors_reducer.js';
import photosReducer from './photos_reducer.js';

const entitiesReducer = combineReducers({
  reefs: reefsReducer,
  reviews: reviewsReducer,
  authors: authorsReducer,
  photos: photosReducer
});

export default entitiesReducer;
