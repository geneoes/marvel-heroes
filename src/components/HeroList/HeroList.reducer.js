import { FETCH_FAILURE, FETCH_START, FETCH_SUCCESS } from './HeroList.actions';

const initial = {
  items: [],
  loading: false,
  error: null,
}

const heroesReducer = (state = initial, action) => {

  switch (action.type) {

    case FETCH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        items: action.payload,
      };

    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        items: null,
      };

    default:
      return { ...state };
  }
}

export default heroesReducer;