import axios from 'axios';


export const FETCH_HEROES = 'FETCH_HEROES';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';


export function fetchHeroes() {
  return (dispatch) => {
    axios.get(`https://gateway.marvel.com/v1/public/characters?apikey=${process.env.REACT_APP_ENV_KEYS_MARVEN}`)
      .then((response) => dispatch(fetchSuccess(response.data.data.results)))
      .catch(error => dispatch(fetchFailure(error)));
  }
}

export function fetchSuccess(data) {
  return { type: FETCH_SUCCESS, payload: data }
}

export function fetchFailure(error) {
  return { type: FETCH_FAILURE, payload: error }
}
