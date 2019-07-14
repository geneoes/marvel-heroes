import React, { useEffect } from 'react';
import ErrorTryAgain from '../../../ErrorTryAgain/ErrorTryAgain.component';

function HeroDetail({ data, error, loading, loadDetail }) {

  useEffect(() => loadDetail(), [loadDetail])

  if (error) {
    return <ErrorTryAgain onTryAgain={loadDetail}>{error}</ErrorTryAgain>;
  }

  if (loading) {
    return <span>{'loading...'}</span>;
  }

  const style = {
    description: {
      padding: '20px',
      margin: '10px auto',
      fontSize: '22px',
      textAlign: 'center',
    },
    header: {
      backgroundColor: 'black',
      color: 'whitesmoke',
      textAlign: 'center',
      fontSize: '42px',
      padding: '8px 0',
    },
    photo: {
      border: '2px solid black',
      maxWidth: '40%',
      display: 'block',
      margin: '16px auto',
    },
  }

  return data && (
    <div style={style.container}>
      <div style={style.header}>{data.name}</div>
      <img style={style.photo} alt={`Cover of ${data.name}`} src={`${data.thumbnail.path}.${data.thumbnail.extension}`} />
      <p style={style.description}>{data.description || '< No description found >'}</p>
    </div>
  )
}

export default HeroDetail;