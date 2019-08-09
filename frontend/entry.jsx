import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchTasks, createTask } from './actions/task_actions';
import { logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  /**
   * For Testing Purposes
   */
  window.fetchTasks = fetchTasks;
  window.createTask = createTask;
  window.logout = logout;
  window.state = store.getState;
  window.dispatch = store.dispatch;
  /**
   * 
   */


  ReactDOM.render(<Root store={store}/>, root);
});