import React, { useEffect } from 'react';
import ErrorTryAgain from '../../../ErrorTryAgain/ErrorTryAgain.component';
import Loader from '../../../Loader/Loader.component';


function LinksList({urls}) {

  const style = {
    container: {
      textDecoration: 'none',
    },
    links: {
      textDecoration: 'none',
      color: '#525251'
    }
  }
  return urls && (
    <ul>
      {
        urls.map((item, index) => (
          <li key={index}>
            <a style={style.links}target='_blank' rel="noopener noreferrer" href={item.url}>{item.type}</a>
          </li>
        ))
      }
    </ul>    
  )
}


function HeroDetail({ data, error, loading, loadDetail }) {

  useEffect(() => loadDetail(), [loadDetail])

  if (error) {
    return <ErrorTryAgain onTryAgain={loadDetail}>{error}</ErrorTryAgain>;
  }

  if (loading) {
    return <Loader />;
  }

  const style = {
    information: {
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
      maxWidth: '30%',
      display: 'block',
      margin: '16px auto',
    },
  }

  return data && (
    <div style={style.container}>
      <div style={style.header}>{data.name}</div>
      <img style={style.photo} alt={`Cover of ${data.name}`} src={`${data.thumbnail.path}.${data.thumbnail.extension}`} />
        <p style={style.information}>{data.description || '< No description found >'}</p>
        <LinksList urls={data.urls} />
    </div>
  )
}

export default HeroDetail;