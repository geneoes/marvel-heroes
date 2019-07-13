import axios from 'axios';

export const FETCH_START = '[Hero detail] FETCH_START';
export const FETCH_SUCCESS = '[Hero detail] FETCH_SUCCESS';
export const FETCH_FAILURE = '[Hero detail] FETCH_FAILURE';


export function fetchHeroDetail(id) {

  return (dispatch) => {
    
    dispatch(fetchStart(id));

    axios.get(`https://gateway.marvel.com/v1/public/characters?id=${id}&apikey=${process.env.REACT_APP_ENV_KEYS_MARVEN}`)
      .then((response) => dispatch(fetchSuccess(response.data.data.results[0])))
      .catch(error => dispatch(fetchFailure(error)));
  }
}

export function fetchStart(id) {
  return { type: FETCH_START, payload: id }
}

export function fetchSuccess(data) {
  return { type: FETCH_SUCCESS, payload: data }
}

export function fetchFailure(error) {
  return { type: FETCH_FAILURE, payload: error }
}
