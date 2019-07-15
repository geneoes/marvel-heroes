import React from 'react';
import ThirdPartyLoader from 'react-loader-spinner'

function Loader({ show = true }) {
  return ( show &&
    <div style={{textAlign: 'center', margin: '20px'}}>
      <ThirdPartyLoader type="Puff" color="#00BFFF" height="100" width="100" />
    </div>  
  )  
}

export default Loader;