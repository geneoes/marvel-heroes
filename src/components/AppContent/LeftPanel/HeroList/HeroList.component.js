import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ErrorTryAgain from '../../../ErrorTryAgain/ErrorTryAgain.component';
import HeroCard from './HeroCard/HeroCard.component';
import Loader from '../../../Loader/Loader.component';
import { DebounceInput } from 'react-debounce-input';


function HeroList({ heroes, loadHeroes, changeFilter, loading, error, searchText }) {

  useEffect(() => loadHeroes(), [loadHeroes])

  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '250px',
      marginTop: '72px',
    }, 
    searchbar: {
      position: 'fixed',
      top: '0',
      height: '80px',
      color: 'whitesmoke',
      width: '20%',
      minWidth: '20%',
      backgroundColor: 'black',
      border: 'none',
      padding: '12px 0',
      boxSizing: 'border-box',
      paddingLeft: '12px',
      fontSize: '32px',
      outline: '0',
    },
    link: {
       color: 'inherit', textDecoration: 'inherit'
    },
    button: {
      height: '42px',
    }
  }
  
  return (
    
    <div style={style.container}>
      <DebounceInput
        minLength={1}
        debounceTimeout={400}
        style={style.searchbar}
        value={searchText}
        onChange={(e) => changeFilter(e.target.value)}
        placeholder="Search..."></DebounceInput>

      { heroes && heroes.map(hero => (
          <Link style={style.link} key={hero.id} to={`/hero/${hero.id}`}>
            <HeroCard hero={hero}/>
          </Link>
        ))
      }
      
      { !loading && !error && (
          <button style={style.button} onClick={loadHeroes}>
            FETCH MORE
          </button>
        /* @TODO: Virtualscroll instead of a button */
      )}
      
      <ErrorTryAgain show={error} onTryAgain={loadHeroes}>{error}</ErrorTryAgain>
      <Loader show={loading}/> 
      
    </div>
  )
}

HeroList.propTypes = {
  heroes: PropTypes.array
}

export default HeroList;