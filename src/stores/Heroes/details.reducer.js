import { 
  FETCH_ONE_START,
  FETCH_ONE_SUCCESS,
  FETCH_ONE_FAILURE,
  FETCH_HEROES_SUCCESS,
 } from './heroes.actions';
import { fetchFailure, fetchStart, fetchSuccess } from '../Fetch/Fetch.actions';
import fetchReducer from '../Fetch/Fetch.reducer';

const initial = {
  // @NOTE: example of state
  // 1009144: { 
  //   data: {},
  //   loading: false,
  //   error: false
  // }
}

const detailsReducer = (state = initial, action) => {
  const { type, payload } = action;

  switch (type) {

    case FETCH_ONE_START: 
      return {
        ...state,
        [payload.id]: fetchReducer(
          state[payload.id],
          fetchStart()
        )
      }

    case FETCH_ONE_SUCCESS: 
    // debugger
      return {
        ...state,
        [payload.id]: fetchReducer(
          state[payload.id],
          fetchSuccess({...payload.data})
        )
      };

    case FETCH_ONE_FAILURE:
      return {
        ...state,
        [payload.id]: fetchReducer(
          state[payload.id],
          fetchFailure({...payload.error})
        )
      };

    case FETCH_HEROES_SUCCESS: {
      const newDetails = {};
      payload.data.forEach(hero => {
        newDetails[hero.id] = fetchReducer(undefined, fetchSuccess({...hero}))
      })
      return {
        ...state,
        ...newDetails
      };
    }


    default:
      return { ...state };
  }
}

export default detailsReducer;