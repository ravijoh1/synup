import { FETCH_REVIEWS } from '../actions/index';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_REVIEWS:
            console.log(action.payload.data.reviews);
            return {...state, ...action.payload.data.reviews}
    }
    return state;
}