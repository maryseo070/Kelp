import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import {login, signup} from './actions/session_actions.js';
import {fetchReef} from './actions/reef_actions.js';


document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // store = configureStore();
  window.fetchReef = fetchReef;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
