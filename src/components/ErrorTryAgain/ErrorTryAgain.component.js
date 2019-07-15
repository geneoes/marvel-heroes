import React from 'react';

function ErrorTryAgain({ children: error, onTryAgain, show = true }) {
  const style = {
    button: {
      padding: '8px',
      fontSize: '12px',
    }
  }
  return show && <div style={{padding: '20px'}}>
    <span>There was an error:</span>
    <p><b>{error.message}</b></p>
    <button style={style.button} onClick={onTryAgain}>Try again</button>
  </div>
}

export default ErrorTryAgain;