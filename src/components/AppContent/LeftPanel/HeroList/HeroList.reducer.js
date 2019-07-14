import { FETCH_HEROES_FAILURE, FETCH_HEROES_START, FETCH_HEROES_SUCCESS } from './HeroList.actions';
import { fetchFailure, fetchStart, fetchSuccess } from '../../../Fetch/Fetch.actions';
import fetchReducer from '../../../Fetch/Fetch.reducer';

const initial = {
  data: [],
  loading: false,
  error: null,
}

const heroesReducer = (state = initial, { type, payload }) => {

  switch (type) {

    case FETCH_HEROES_START:
      return {
        ...state,
        ...fetchReducer(state, fetchStart()),
      };

    case FETCH_HEROES_SUCCESS:
      return {
        ...state,
        ...fetchReducer(state, fetchSuccess(payload)),
      };      

    case FETCH_HEROES_FAILURE:
      return {
        ...state,
        ...fetchReducer(state, fetchFailure(payload)),
      };

    default:
      return { ...state };
  }
}

export default heroesReducer;