import * as TaskApiUtil from '../util/task_api_util';

export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';

const receiveTasks = (tasks) => {
  return {
    type: RECEIVE_TASKS,
    tasks
  };
};

const receiveTask = (task) => {
  return {
    type: RECEIVE_TASK,
    task
  };
};

export const fetchTasks = () => (dispatch) => {
  return TaskApiUtil.fetchTasks().then(
    tasks => dispatch(receiveTasks(tasks)));
};

export const createTask = (data) => (dispatch) => {
  return TaskApiUtil.createTask(data).then(
    task => dispatch(receiveTask(task)));
};