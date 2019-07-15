import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppContent from './components/AppContent/AppContent.component';
import reducers from './stores/Heroes/heroes.reducer';

const store = createStore(reducers, applyMiddleware(thunk));

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
