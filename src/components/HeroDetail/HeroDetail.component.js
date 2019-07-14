import React, { useEffect } from 'react';

function HeroDetail({ data, loading, loadDetail }) {

  useEffect(() => loadDetail(), [loadDetail])

  return loading ? <span>{'loading...'}</span> : (
    <pre>
      { JSON.stringify(data, null, 2)}
    </pre>
  )
}

export default HeroDetail;