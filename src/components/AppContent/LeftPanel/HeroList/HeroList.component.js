import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ErrorTryAgain from '../../../ErrorTryAgain/ErrorTryAgain.component';
import HeroCard from './HeroCard/HeroCard.component';


function HeroList({ heroes, loadHeroes, loading, error }) {

  useEffect(() => loadHeroes(), [loadHeroes])

  if (error) {
    return <ErrorTryAgain onTryAgain={loadHeroes}>{error}</ErrorTryAgain>;
  }

  if (loading) {
    return <span>{'loading...'}</span>;
  }

  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column',
    }, 
    link: {
       color: 'inherit', textDecoration: 'inherit'
    }
  }

  return (
    <div style={style.container}>
      {
        heroes.map(hero => (
          <Link style={style.link} key={hero.id} to={`/hero/${hero.id}`}>
            <HeroCard hero={hero}/>
          </Link>
        ))
      }
    </div>
  )
}

HeroList.propTypes = {
  heroes: PropTypes.array
}

export default HeroList;