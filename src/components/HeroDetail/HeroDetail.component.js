import React, { useEffect } from 'react';

function HeroDetail({ detail, loading, loadDetail }) {

  useEffect(() => loadDetail(), [loadDetail])

  return loading ? <span>{'loading...'}</span> : (
    <pre>
      { JSON.stringify(detail, null, 2)}
    </pre>
  )
}

export default HeroDetail;