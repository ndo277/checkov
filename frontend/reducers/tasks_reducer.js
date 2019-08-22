import { RECEIVE_TASKS, RECEIVE_TASK, REMOVE_TASK } from '../actions/task_actions';

const tasksReducer = (action, state = {}) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TASKS:
      return action.tasks;
    case RECEIVE_TASK:
      const newState = {[action.task.id]: action.task};
      return Object.assign({}, state, newState);
    case REMOVE_TASK:
      let nextState = Object.assign({}, state);
      delete nextState[action.taskId];
      return nextState;
    default:
      return state;
  }
};

export default tasksReducer;