import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import tasksReducer from './tasks_reducer';
import stepsReducer from './steps_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  tasks: tasksReducer,
  steps: stepsReducer
});

export default entitiesReducer;