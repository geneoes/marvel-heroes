import { FETCH_HERO_START, FETCH_HERO_SUCCESS, FETCH_HERO_FAILURE } from './HeroDetail.actions';
import { fetchFailure, fetchStart, fetchSuccess } from '../../../Fetch/Fetch.actions';
import fetchReducer from '../../../Fetch/Fetch.reducer';

const initial = {}

const detailReducer = (state = initial, { type, payload }) => {

  switch (type) {

    case FETCH_HERO_START:
      return {
        ...state,
        [payload.id]: fetchReducer(
          state[payload.id],
          fetchStart()
        )
      };

    case FETCH_HERO_SUCCESS:
      return {
        ...state,
        [payload.id]: fetchReducer(
          state[payload.id],
          fetchSuccess({...payload.data})
        )
      };

    case FETCH_HERO_FAILURE:
      return {
        ...state,
        [payload.id]: fetchReducer(
          state[payload.id],
          fetchFailure({...payload.error})
        )
      };

    default:
      return { ...state };
  }
}

export default detailReducer;