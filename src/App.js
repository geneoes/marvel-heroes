import React from 'react';
import './App.css';
import Detail from './ components/Detail';
import Welcome from './ components/Welcome';
import List from './ components/List';
import { Switch, Route, Redirect } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <List />

      <Switch>
        <Route path='/' exact component={Welcome} />
        <Route path='/hero/:id' component={Detail} />
        <Redirect from='*' to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
