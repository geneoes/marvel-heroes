import React from 'react';
import HeroListContainer from './HeroList/HeroList.container';

function LeftPanel() {

  const style = {
    width: '20%',
    minWidth: '20%',
    backgroundColor: 'lightblue',
    overflow: 'auto',
    height: '100%',
  }

  return (
    <div style={style}>
      <HeroListContainer />
    </div>
  )
}

export default LeftPanel;
