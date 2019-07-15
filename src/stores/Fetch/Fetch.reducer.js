import { FETCH_FAILURE, FETCH_START, FETCH_SUCCESS } from './Fetch.actions';

const initial = {
  data: null,
  loading: false,
  error: null,
}

const fetchReducer = (state = initial, action) => {

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
        data: action.payload,
      };

    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return { ...state };
  }
}

export default fetchReducer;