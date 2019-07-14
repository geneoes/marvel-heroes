import axios from 'axios';

export const FETCH_HERO_START = '[Hero detail] FETCH_START';
export const FETCH_HERO_SUCCESS = '[Hero detail] FETCH_SUCCESS';
export const FETCH_HERO_FAILURE = '[Hero detail] FETCH_FAILURE';


export function fetchHeroDetail(id) {

  return (dispatch, getState) => {
    
    if (getState().detail[id]) {
      return; // @NOTE: avoid re-fetching same detail
    }

    dispatch(fetchStart(id));

    setTimeout(() => {
      axios.get(`https://gateway.marvel.com/v1/public/characters?id=${id}&apikey=${process.env.REACT_APP_ENV_KEYS_MARVEN}`)
        .then((response) => dispatch(fetchSuccess(response.data.data.results[0], id)))
        .catch(error => dispatch(fetchFailure(error, id)));
    }, 1500) // @NOTE: emulating slower request
  }
}

export function fetchStart(id) {
  return { type: FETCH_HERO_START, payload: {id} }
}

export function fetchSuccess(data, id) {
  return { type: FETCH_HERO_SUCCESS, payload: {data, id} }
}

export function fetchFailure(error, id) {
  return { type: FETCH_HERO_FAILURE, payload: {error, id} }
}
