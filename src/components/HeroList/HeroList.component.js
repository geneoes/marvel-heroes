import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ErrorTryAgain from '../ErrorTryAgain/ErrorTryAgain.component';

function HeroList({ heroes, loadHeroes, loading, error }) {

  useEffect(() => loadHeroes(), [loadHeroes])

  if (error) {
    return <ErrorTryAgain onTryAgain={loadHeroes}>{error}</ErrorTryAgain>;
  }

  if (loading) {
    return <span>{'loading...'}</span>;
  }

  return (
    <ul>
      {
        heroes.map(hero => (
          <li key={hero.id}>
            <Link to={`/hero/${hero.id}`}>{hero.name}</Link>
          </li>
        ))
      }
    </ul>
  )
}

HeroList.propTypes = {
  heroes: PropTypes.array
}

export default HeroList;