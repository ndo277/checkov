import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {signup, login, logout} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store = configureStore();

  /**
   * For Testing Purposes
   */
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.state = store.getState;
  window.dispatch = store.dispatch;
  /**
   * 
   */


  ReactDOM.render(<Root store={store}/>, root);
});