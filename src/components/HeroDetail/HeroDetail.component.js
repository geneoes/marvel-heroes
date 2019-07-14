import React, { useEffect } from 'react';
import ErrorTryAgain from '../ErrorTryAgain/ErrorTryAgain.component';

function HeroDetail({ data, error, loading, loadDetail }) {

  useEffect(() => loadDetail(), [loadDetail])

  if (error) {
    return <ErrorTryAgain onTryAgain={loadDetail}>{error}</ErrorTryAgain>;
  }

  if (loading) {
    return <span>{'loading...'}</span>;
  }

  return (
    <pre>
      { JSON.stringify(data, null, 2)}
    </pre>
  )
}

export default HeroDetail;