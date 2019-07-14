import React from 'react';
import HeroFlag from './HeroFlag/HeroFlag.component';

function HeroCard({ hero }) {

  const style = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: '20px',
      flexDirection: 'column',
      height: '300px',
      width: '100%',
      backgroundSize: 'cover',
      backgroundImage: `url(${hero.thumbnail.path}.${hero.thumbnail.extension})`,
      textAlign: 'center',
      cursor: 'pointer',
    },
    
    flags: {
      display: 'flex',
      justifyContent: 'space-around',
      paddingTop: '20px'

    },
    name: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: 'whitesmoke',
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: '10px'

    }
  }


  return (
    <div style={style.container}>

      <div style={style.flags}>
        <HeroFlag checked={hero.series.available > 0}>SE</HeroFlag>
        <HeroFlag checked={hero.comics.available > 0}>CO</HeroFlag>
        <HeroFlag checked={hero.stories.available > 0}>ST</HeroFlag>
        <HeroFlag checked={hero.events.available > 0}>EV</HeroFlag>
      </div>

      <span style={style.name}>{ hero.name }</span>

    </div>
  );
}

export default HeroCard;