import { combineReducers } from 'redux';
import LocationsReducer from './locations_reducer';
import ReviewsReducer from './reviews_reducer';

const rootReducer = combineReducers({
  locations: LocationsReducer,
  reviews: ReviewsReducer
});


export default rootReducer;
