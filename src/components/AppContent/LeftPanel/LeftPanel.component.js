import React from 'react';
import HeroListContainer from '../../HeroList/HeroList.container';

function LeftPanel() {

  const style = {
    width: '30%',
    minWidth: '30%',
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
