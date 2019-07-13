import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function HeroList({ heroes, loadHeroes }) {

  useEffect(() => loadHeroes(), [loadHeroes])

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