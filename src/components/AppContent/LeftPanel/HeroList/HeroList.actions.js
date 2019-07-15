import axios from 'axios';


export const FETCH_HEROES_START = '[HeroList] FETCH_START';
export const FETCH_HEROES_SUCCESS = '[HeroList] FETCH_SUCCESS';
export const FETCH_HEROES_FAILURE = '[HeroList] FETCH_FAILURE';


export function fetchHeroes() {
  return (dispatch) => {
    dispatch(fetchStart());
    
    axios.get(`https://gateway.marvel.com/v1/public/characters?apikey=${process.env.REACT_APP_ENV_KEYS_MARVEN}`)
      .then((response) => dispatch(fetchSuccess(response.data.data.results)))
      .catch(error => dispatch(fetchFailure(error)));
  }
}

export function fetchStart() {
  return { type: FETCH_HEROES_START }
}

export function fetchSuccess(data) {
  return { type: FETCH_HEROES_SUCCESS, payload: data }
}

export function fetchFailure(error) {
  return { type: FETCH_HEROES_FAILURE, payload: error }
}