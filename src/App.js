import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import heroesReducer from './components/HeroList/HeroList.reducer';
import detailReducer from './components/HeroDetail/HeroDetail.reducer';
import AppContent from './components/AppContent/AppContent.component';

const rootReducer = combineReducers({
  heroes: heroesReducer,
  detail: detailReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <AppContent />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
