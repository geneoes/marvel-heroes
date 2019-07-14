

export const FETCH_START = '[Fetch] START';
export const FETCH_SUCCESS = '[Fetch] SUCCESS';
export const FETCH_FAILURE = '[Fetch] FAILURE';


export function fetchStart() {
  return { type: FETCH_START }
}

export function fetchSuccess(data) {
  return { type: FETCH_SUCCESS, payload: data }
}

export function fetchFailure(error) {
  return { type: FETCH_FAILURE, payload: error }
}
