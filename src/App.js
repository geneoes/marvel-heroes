import React from 'react';
import './App.css';
import Detail from './components/Detail';
import Welcome from './components/Welcome';
import HeroListContainer from './components/HeroList/HeroList.container';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import heroesReducer from './components/HeroList/HeroList.reducer';

const rootReducer = combineReducers({
  heroes: heroesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HeroListContainer />

        <Switch>
          <Route path='/' exact component={Welcome} />
          <Route path='/hero/:id' component={Detail} />
          <Redirect from='*' to='/' />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
