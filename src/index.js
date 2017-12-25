import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import rootReducer from './CCPReducers';
import CCPStore from './CCPStore';
import App from './App';
import InitialState from './CCPReducers/CCPInitialState';
// import "purecss";


const store = CCPStore(InitialState);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
