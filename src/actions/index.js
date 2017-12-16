import axios from 'axios';
import _ from 'lodash';

export const AUTO_LOCATION = 'AUTO_LOCATION';
export const NEARBY_SEARCH = 'NEARBY_SEARCH';
export const FETCH_REVIEWS = 'FETCH_REVIEWS';


const API_KEY = 'e39e867a15e4fc74c5ef95cd114002268403cded';
const BASE_URL = `https://front-end-interview.herokuapp.com/candidate`
const ROOT_URL = `${BASE_URL}`;

const NEARBY_PLACES = `${BASE_URL}/nearbysearch/json?radius=500&type=restaurant&location=`

export function fetchReviews(id) {
    const url = `https://cors-anywhere.herokuapp.com/${BASE_URL}/${API_KEY}/locations/${id}/reviews.json`;
    const request = axios.get(url);

    return {
        type: FETCH_REVIEWS,
        payload: request
    }
}

export function fetchLocations(input) {
    const url = `https://cors-anywhere.herokuapp.com/${BASE_URL}/${API_KEY}/locations.json`;
    const request = axios.get(url);

    return {
        type: AUTO_LOCATION,
        payload: request
    }
}