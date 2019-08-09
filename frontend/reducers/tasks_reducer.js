import { RECEIVE_TASKS, RECEIVE_TASK } from '../actions/task_actions';

const tasksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TASKS:
      return action.tasks;
    case RECEIVE_TASK:
      const newState = {[action.task.id]: action.task};
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};

export default tasksReducer;