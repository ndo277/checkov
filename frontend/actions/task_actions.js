import * as TaskApiUtil from '../util/task_api_util';

export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';


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

const removeTask = (taskId) => {
  return {
    type: REMOVE_TASK,
    taskId
  };
};

export const updateTasks = (tasks) => (dispatch => {
  // normalize state
  let taskObj = {};
  tasks.forEach(task => {
    taskObj[task.id] = task;
  });

  dispatch(receiveTasks(taskObj));
});

export const fetchTasks = () => (dispatch) => {
  return TaskApiUtil.fetchTasks().then(
    tasks => dispatch(receiveTasks(tasks)));
};

export const fetchTask = (id) => (dispatch) => {
  return TaskApiUtil.fetchTasks(id).then(
    task => dispatch(receiveTask(task)));
};

export const createTask = (data) => (dispatch) => {
  return TaskApiUtil.createTask(data).then(
    task => dispatch(receiveTask(task)));
};

export const deleteTask = (id) => (dispatch => {
  return TaskApiUtil.deleteTask(id).then(
    task => dispatch(removeTask(id)));
});

export const editTask = (task) => (dispatch => {
  return TaskApiUtil.editTask(task).then(
    task => dispatch(receiveTask(task)));
});