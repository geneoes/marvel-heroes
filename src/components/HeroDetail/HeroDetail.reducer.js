import { FETCH_FAILURE, FETCH_START, FETCH_SUCCESS } from './HeroDetail.actions';

const initial = {}

const detailReducer = (state = initial, action) => {

  switch (action.type) {

    case FETCH_START:
      return {
        ...state,
        [action.payload]: {
          loading: true,
          error: null,
        }        
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.id]: {
          loading: false,
          error: null,
          detail: action.payload,
        }
      };

    case FETCH_FAILURE:
      return {
        ...state,
        [action.payload.id]: {
          loading: false,
          error: action.payload,
          detail: null,
        }
      };

    default:
      return { ...state };
  }
}

export default detailReducer;