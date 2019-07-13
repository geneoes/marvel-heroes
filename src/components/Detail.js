import React from 'react';

function Detail({ match: { params: { id }}}) {
  return (
    <div>Hero detail for id {id}</div>
  )
}

export default Detail;