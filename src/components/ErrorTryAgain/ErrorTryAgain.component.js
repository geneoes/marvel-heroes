import React from 'react';

function ErrorTryAgain({ children, onTryAgain, show = true }) {

  return show && <>
    <span>There was an error, please try again</span>
    <pre>{ JSON.stringify(children, null, 2) }</pre>
    <button onClick={onTryAgain}>Try again</button>
  </>
}

export default ErrorTryAgain;