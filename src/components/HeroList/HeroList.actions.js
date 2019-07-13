import axios from 'axios';





export const FETCH_HEROES = 'FETCH_HEROES';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';


export function fetchHeroes() {
  return (dispatch) => {
    // axios.get(query) // @TODO query
    //   .then((response) => dispatch(fetchSuccess(response.data.data.results)))
    //   .catch(error => dispatch(fetchFailure(error)));
  }
}

export function fetchSuccess(data) {
  return { type: FETCH_SUCCESS, payload: data }
}

export function fetchFailure(error) {
  return { type: FETCH_FAILURE, payload: error }
}
