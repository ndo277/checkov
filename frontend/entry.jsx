import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchTasks, createTask, editTask } from './actions/task_actions';
import { fetchSteps, createStep, deleteStep, editStep } from './util/step_api_util';

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
  window.fetchSteps = fetchSteps;
  window.createStep = createStep;
  window.editStep = editStep;
  window.deleteStep = deleteStep;
  window.state = store.getState;
  window.dispatch = store.dispatch;
  /**
   * 
   */


  ReactDOM.render(<Root store={store}/>, root);
});