import axios from 'axios';


export const FETCH_ONE_START = '[Heroes] FETCH_ONE_START';
export const FETCH_ONE_SUCCESS = '[Heroes] FETCH_ONE_SUCCESS';
export const FETCH_ONE_FAILURE = '[Heroes] FETCH_ONE_FAILURE';

export const FETCH_HEROES_START = '[Heroes] FETCH_HEROES';
export const FETCH_HEROES_SUCCESS = '[Heroes] FETCH_SUCCESS';
export const FETCH_HEROES_FAILURE = '[Heroes] FETCH_FAILURE';

export const CLEAR_LIST = '[Heroes] CLEAR_LIST';
export const CHANGE_FILTER = '[Heroes] CHANGE_FILTER';
export const INCREMENT_OFFSET = '[Heroes] INCREMENT_OFFSET';

export const ADD_MANY_DETAILS = '[Heroes] ADD_MANY_DETAILS';

export function addManyDetails(details) {
  return { type: ADD_MANY_DETAILS, payload: { details }}
}

export function fetchOne(id) {
  return (dispatch, getState) => {

    if (getState().details[id]) {
      return; // @NOTE: avoid re-fetching same detail;
    }

    axios.get(`https://gateway.marvel.com/v1/public/characters?id=${id}&apikey=${process.env.REACT_APP_ENV_KEYS_MARVEN}`)
      .then((response) => dispatch(fetchOneSuccess(response.data.data.results[0], id)))
      .catch(error => dispatch(fetchOneFailure(error, id)));
  }
}

export function fetchOneSuccess(data, id) {
  return { type: FETCH_ONE_SUCCESS, payload: {data, id} }
}

export function fetchOneFailure(error, id) {
  return { type: FETCH_ONE_FAILURE, payload: {error, id} }
}

export function fetchHeroes(nameStartsWith = '') {

  return (dispatch, getState) => {
    const state = getState();

    // if (state.loading) {
    //   return;
    // }

    const filterHasChange = state.nameStartsWith !== nameStartsWith;
    console.log('filtar has hcange: ', filterHasChange)
    // if (filterHasChange) {
    //   dispatch(changeSearch(nameStartsWith))
    // } else {
    //   dispatch(incrementOffset())
    // }
    // dispatch(incrementOffset())
    // if (!filterHasChange) {
    //   dispatch(incrementOffset())
    // }

    dispatch(doFetchRequest());
  }
}

export function doFetchRequest() {
  return (dispatch, getState) => {
    const { offset: currentOffset, nameStartsWith, limit, list } = getState();
    
    dispatch(fetchStart(nameStartsWith));
    
    const offset = currentOffset + list.data.length;
    const nameFilter = nameStartsWith ? `&nameStartsWith=${nameStartsWith}` : '';
    const offsetFilter = offset ? `&offset=${offset}` : '';
    const limitFilter = limit ? `&limit=${limit}` : '';
    
    axios.get(`https://gateway.marvel.com/v1/public/characters?apikey=${process.env.REACT_APP_ENV_KEYS_MARVEN}` + nameFilter + offsetFilter + limitFilter) 
      .then((response) => dispatch(fetchSuccess(response.data.data.results)))
      .catch(error => dispatch(fetchFailure(error)));    

  }
}

export function changeFilter(nameStartsWith) {
  return (dispatch) => {
    dispatch(clearList())
    dispatch({ type: CHANGE_FILTER, payload: { nameStartsWith }});
    dispatch(fetchHeroes(nameStartsWith));
  } 
}

export function incrementOffset() {
  return { type: INCREMENT_OFFSET }
}

export function clearList() {
  return { type: CLEAR_LIST }
}
export function fetchStart(nameStartsWith) {
  return { type: FETCH_HEROES_START, payload: { nameStartsWith } }
}

export function fetchSuccess(data) {
  return { type: FETCH_HEROES_SUCCESS, payload: { data } }
}

export function fetchFailure(error) {
  return { type: FETCH_HEROES_FAILURE, payload: { error   } }
}
