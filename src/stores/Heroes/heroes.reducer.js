import {
  FETCH_ONE_FAILURE,
  FETCH_ONE_START,
  FETCH_ONE_SUCCESS,
  FETCH_MANY_START,
  FETCH_MANY_SUCCESS,
  FETCH_MANY_FAILURE,
  CHANGE_FILTER,
  CLEAR_LIST
} from './heroes.actions';

import detailsReducer from './details.reducer';
import listReducer from './list.reducer';

const initial = {
  nameStartsWith: '',
  limit: 2, // @NOTE: Low limit to test incremental fetch
  list: {
    data: [],
    loading: false,
    error: null,
  },
  details: {},
}

const heroesReducer = (state = initial, action) => {
  const { type, payload } = action;

  switch (type) {

    case FETCH_ONE_FAILURE:
    case FETCH_ONE_START:
    case FETCH_ONE_SUCCESS:
      return {
        ...state, 
        details: detailsReducer(state.details, action),
      }


    case CHANGE_FILTER: 
      return {
        ...state,
        nameStartsWith: payload.nameStartsWith
      }

    
    case CLEAR_LIST: 
      return {
        ...state,
        list: listReducer(state.list, action),
      }


    case FETCH_MANY_START:
      return {
        ...state,
        list: listReducer(state.list, action)
      };


    case FETCH_MANY_SUCCESS: 
      return {
        ...state,
        details: detailsReducer(state.details, action),
        list: listReducer(state.list, action)
      };
    

    case FETCH_MANY_FAILURE:
      return {
        ...state,
        list: listReducer(state.list, action),
      };

    default:
      return { ...state };
  }
}

export default heroesReducer;