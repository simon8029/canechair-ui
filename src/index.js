import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import rootReducer from './CCPReducers';
import * as CCPActions from './CCPActions';
import CCPStore from './CCPStore';
import App from './App';
import InitialState from './CCPReducers/CCPInitialState';
// import "purecss";


const store = CCPStore(InitialState);
ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
