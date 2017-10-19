import "whatwg-fetch";
import "regenerator-runtime/runtime";
import React from 'react';
import { hydrate } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';
import reducer from './reducer';

const composeEnhanced = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = window.___DATA___;

const store = createStore(reducer, initialState, composeEnhanced(applyMiddleware(thunk)));

hydrate(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);