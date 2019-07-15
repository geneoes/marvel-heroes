import { FETCH_MANY_START, FETCH_MANY_SUCCESS, FETCH_MANY_FAILURE, CLEAR_LIST } from './heroes.actions';
import { fetchFailure, fetchStart, fetchSuccess } from '../Fetch/Fetch.actions';
import fetchReducer from '../Fetch/Fetch.reducer';
import _union from 'lodash/union'

const initial = {
  data: [],
  loading: false,
  error: null,
}

const listReducer = (state = initial, { type, payload }) => {

  switch (type) {

    case CLEAR_LIST: 
      return initial;

    case FETCH_MANY_START:
      return fetchReducer(state, fetchStart());

    case FETCH_MANY_SUCCESS: {
      const newIds = payload.data.map(hero => hero.id);
      const sum = _union([...state.data], newIds);

      return fetchReducer(state, fetchSuccess(sum));
    } 

    case FETCH_MANY_FAILURE:
      return fetchReducer(state, fetchFailure({...payload.error}));

    default:
      return { ...state };
  }
}

export default listReducer;