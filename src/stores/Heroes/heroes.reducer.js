import {
  FETCH_ONE_FAILURE,
  FETCH_ONE_START,
  FETCH_ONE_SUCCESS,
  INCREMENT_OFFSET,
  FETCH_HEROES_START,
  FETCH_HEROES_SUCCESS,
  FETCH_HEROES_FAILURE,
  CHANGE_FILTER,
  CLEAR_LIST
} from './heroes.actions';

import detailsReducer from './details.reducer';
import listReducer from './list.reducer';

const initial = {
  nameStartsWith: '',
  offset: 0,
  limit: 2, // @NOTE: Low limit to test incremental fetch
  list: {
    data: [],
    loading: false,
    error: null,
  },
  details: {
    // heroId129038: {
    //   data: {},
    //   loading: false,
    //   error: false
    // }
  },
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

    case INCREMENT_OFFSET: 
      return {
        ...state,
        offset: state.offset + state.list.data.length,
      }

    case CHANGE_FILTER: 
      return {
        ...state,
        nameStartsWith: payload.nameStartsWith
      }

    
    case CLEAR_LIST: 
      return {
        ...state,
        offset: 0,
        list: listReducer(state.list, action),
      }


    case FETCH_HEROES_START:
      return {
        ...state,
        list: listReducer(state.list, action)
      };


    case FETCH_HEROES_SUCCESS: 
      return {
        ...state,
        details: detailsReducer(state.details, action),
        list: listReducer(state.list, action)
      };
    

    case FETCH_HEROES_FAILURE:
      return {
        ...state,
        list: listReducer(state.list, action),
      };

    default:
      return { ...state };
  }
}

export default heroesReducer;