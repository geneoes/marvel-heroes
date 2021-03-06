import React from 'react';
import HeroDetailContainer from './HeroDetail/HeroDetail.container';
import { Route } from 'react-router-dom';
import Welcome from '../../Welcome';
function RightPanel() {

  const style = {
    width: '80%',
    backgroundColor: 'whitesmoke',
    overflow: 'auto',
    heigth: '100%',
  }

  return (
    <div style={style}>
      <Route path='/' exact component={Welcome} />
      <Route path='/hero/:id' component={HeroDetailContainer} />
    </div>
  );
}

export default RightPanel;
