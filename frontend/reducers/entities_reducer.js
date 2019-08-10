import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import tasksReducer from './tasks_reducer';
import StepsReducer from './steps_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  tasks: tasksReducer,
  steps: StepsReducer
});

export default entitiesReducer;