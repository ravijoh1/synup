import { AUTO_LOCATION, FETCH_REVIEWS } from '../actions/index';

export default function(state = {}, action) {
    switch(action.type) {
        case AUTO_LOCATION:
            return {...state, ...action.payload.data.locations}
        case FETCH_REVIEWS:
            return {...state, ...action.payload.data.reviews}
        default:
            return state;
    }
}